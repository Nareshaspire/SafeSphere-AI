import { useEffect, useState } from "react";
import { buildOperationalPrompt } from "../prompts/operationalPrompt";
import { generateOperationalBriefing } from "../services/geminiService";
import type { OperationalBriefing } from "../types/ai";

export default function GeminiTest() {
  const [response, setResponse] = useState<OperationalBriefing | null>(null);

  useEffect(() => {
    async function test() {
      const prompt = buildOperationalPrompt({
        temperature: "-8°C",
        condition: "Heavy Snow",
        wind: "35 km/h",
        risk: "87% (High)",
        alerts: 3,
        resources: 12,
      });

      const result = await generateOperationalBriefing(prompt);
      setResponse(result);
    }

    test();
  }, []);

  return (
    <div className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="mb-4 text-xl font-bold">🤖 Gemini Test</h2>

      <pre className="whitespace-pre-wrap text-white">
  {JSON.stringify(response, null, 2)}
</pre>
    </div>
  );
}