import { GoogleGenAI } from "@google/genai";
import type { OperationalBriefing } from "../types/ai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateOperationalBriefing(
  prompt: string
): Promise<OperationalBriefing> {

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "{}";

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error(error);

    throw new Error("Gemini returned invalid JSON");
  }
}