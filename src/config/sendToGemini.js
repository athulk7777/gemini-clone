

import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = "models/gemini-2.0-flash"; 
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export default async function sendToGemini(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text())
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with Gemini API.";
  }
}
