# 🤖 Ask AI Application

A modern AI-powered web application built with **Vanilla JavaScript** and **Google Gemini API**. The application allows users to ask questions and receive intelligent responses in real time through a clean, responsive, and user-friendly interface.

This project was built as part of practicing and applying advanced JavaScript concepts in a real-world application.

---

## ✨ Features

* 🤖 AI-powered question answering with Google Gemini API
* 💬 Interactive chat interface
* ⚡ Real-time AI responses
* ⏳ Loading state while generating responses
* ❌ User-friendly error handling
* 📱 Responsive design
* 🎨 Clean and modern UI
* 🔒 Secure API key management using environment variables

---

## 🚀 Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API (`@google/genai`)

### Development Tools

* Nodemon
* Dotenv
* CORS
* Git
* GitHub

---

## 📚 JavaScript Concepts Applied

This project focuses on applying modern JavaScript features, including:

* ES Modules
* Async / Await
* Promises
* Fetch API
* Event Handling
* DOM Manipulation
* Error Handling with Try...Catch
* Arrow Functions
* Template Literals
* Destructuring
* Environment Variables
* API Integration
* Modular Code Organization

---

## 📂 Project Structure

```text
ask_ai_application/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
└── README.md
```

> Update the structure above if your folders are different.

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/ask_ai_application.git
```

### Navigate to the project

```bash
cd ask_ai_application
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

### Run the application

```bash
npm run dev
```

---

## 📦 Dependencies

| Package       | Purpose                          |
| ------------- | -------------------------------- |
| @google/genai | Google Gemini AI SDK             |
| express       | Backend server                   |
| cors          | Cross-Origin Resource Sharing    |
| dotenv        | Environment variables management |
| nodemon       | Development server auto-restart  |

---

## 🧠 How It Works

1. The user enters a question.
2. The frontend sends the request to the Express backend.
3. The backend securely communicates with Google Gemini API.
4. The AI generates a response.
5. The response is returned and displayed to the user in real time.

---
## 🎯 Future Improvements

* Conversation history
* Markdown rendering
* Code syntax highlighting
* Copy response button
* Dark mode
* Voice input
* Streaming AI responses
* Multiple AI model selection

---

## 👩‍💻 Author

**Asmaa Abdelnaser**

Full Stack Developer

**Tech Stack**

* JavaScript (ES6+)
* Node.js
* Express.js
* React.js
* PostgreSQL

---

## ⭐ Show Your Support

If you found this project helpful or interesting, consider giving it a ⭐ on GitHub.