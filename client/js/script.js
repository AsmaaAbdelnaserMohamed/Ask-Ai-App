const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("message");
const loader = document.getElementById("loader");
const emptyState = document.getElementById("emptyState");
const sendBtn = document.getElementById("sendBtn");

function hideEmptyState() {
  if (emptyState) emptyState.classList.add("hidden");
}

// بيحدد اتجاه النص حسب لغته: عربي = rtl (يمين)، غير كده = ltr (شمال)
function detectDir(text) {
  return /[\u0600-\u06FF]/.test(text) ? "rtl" : "ltr";
}

function addMessage(text, sender) {
  hideEmptyState();

  const div = document.createElement("div");
  const dir = detectDir(text);
  div.dir = dir;
  div.style.textAlign = dir === "rtl" ? "right" : "left";

  if (sender === "admin") {
    // رسالة اليوزر: نص عادي (أأمن، ومفيش داعي لتنسيق)
    div.textContent = text;
    div.classList = "message user-message";
  } else {
    // رسالة الـ AI: نحولها من Markdown لـ HTML منسق، ونعقّمها قبل العرض
    const html = window.marked ? marked.parse(text) : text;
    div.innerHTML = window.DOMPurify ? DOMPurify.sanitize(html) : html;
    div.classList = "message ai-message";
  }

  chatBox.appendChild(div);
}

// تفعيل/تعطيل زرار الإرسال حسب وجود نص
function updateSendState() {
  sendBtn.disabled = messageInput.value.trim() === "";
}

// تكبير صندوق الكتابة تلقائيًا مع النص، لحد ارتفاع أقصى محدد في الـ CSS
function autoResize() {
  messageInput.style.height = "auto";
  messageInput.style.height = messageInput.scrollHeight + "px";
}

messageInput.addEventListener("input", () => {
  updateSendState();
  autoResize();
});

// Enter يبعت الرسالة، Shift+Enter يعمل سطر جديد
messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    chatForm.requestSubmit();
  }
});

updateSendState();
autoResize();

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (!message) {
    return;
  }
  addMessage(message, "admin");
  messageInput.value = "";
  autoResize();
  updateSendState();

  // نضمن إن اللودر يفضل آخر عنصر في الشات، مش لازم فوق
  loader.classList.remove("hidden");
  chatBox.appendChild(loader);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    loader.classList.add("hidden");
    addMessage(data.message, "ai");
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (error) {
    loader.classList.add("hidden");
    console.error("Error:", error.message);
    addMessage(error.message, "ai");

  }
});