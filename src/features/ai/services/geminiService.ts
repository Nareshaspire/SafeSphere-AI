import { GoogleGenAI } from "@google/genai";
import type { OperationalBriefing } from "../types/ai";

let ai: GoogleGenAI | null = null;

function getAI() {
  if (!ai) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("VITE_GEMINI_API_KEY is missing from environment variables.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export async function generateOperationalBriefing(
  prompt: string
): Promise<OperationalBriefing> {
  const instance = getAI();

  const response = await instance.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "{}";

  try {
    const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error(error);
    throw new Error("Gemini returned invalid JSON");
  }
}