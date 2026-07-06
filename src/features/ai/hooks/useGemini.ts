import { useEffect, useState } from "react";

import { buildOperationalPrompt } from "../prompts/operationalPrompt";
import { generateOperationalBriefing } from "../services/geminiService";

import type { GeminiState } from "../types/ai";

interface UseGeminiProps {
  temperature: string;
  condition: string;
  wind: string;
  risk: string;
  alerts: number;
  resources: number;
}

export function useGemini(data: UseGeminiProps) {
  const [state, setState] = useState<GeminiState>({
    briefing: null,
    loading: true,
    error: null,
  });

  async function generate() {
    try {
      setState((prev) => ({
        ...prev,
        loading: true,
        error: null,
      }));

      const prompt = buildOperationalPrompt(data);

      const briefing = await generateOperationalBriefing(prompt);

      setState({
        briefing,
        loading: false,
        error: null,
      });

    } catch (error) {
      console.error(error);

      setState({
        briefing: null,
        loading: false,
        error: "Unable to generate briefing.",
      });
    }
  }

  useEffect(() => {
    generate();
  }, [
    data.temperature,
    data.condition,
    data.wind,
    data.risk,
    data.alerts,
    data.resources,
  ]);

  return {
    ...state,
    refresh: generate,
  };
}