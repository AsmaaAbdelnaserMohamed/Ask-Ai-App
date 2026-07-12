import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});


export default async function askLLM(message) {
    // return "callin Ai Service...."
    const response = await ai.models.generateContent({

        model: process.env.GEMINI_MODEL || "gemini-3.5-flash",
        contents: [{
            role: "user",
            parts: [{ text: message }]
        }]
    });

    return response.text || "No response from AI"
        ;
}
// const models = await ai.models.list();

// console.log(models);