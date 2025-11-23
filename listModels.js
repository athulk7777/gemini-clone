import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBHQfI9mALtDLBDOmnXPfDTYU6s7BN-7FY";      // <-- put key directly here

async function listModels() {
  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    const result = await genAI.listModels();
    console.log("Available Models:");
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

listModels();
