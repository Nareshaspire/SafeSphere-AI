interface PromptData {
  temperature: string;
  condition: string;
  wind: string;
  risk: string;
  alerts: number;
  resources: number;
}

export function buildOperationalPrompt(data: PromptData) {
  return `
You are an Emergency Operations AI used by municipalities.

Analyze the current emergency situation.

Current Conditions

Location:
Greater Sudbury

Temperature:
${data.temperature}

Weather:
${data.condition}

Wind:
${data.wind}

Community Risk:
${data.risk}

Active Alerts:
${data.alerts}

Emergency Resources Available:
${data.resources}

Return ONLY valid JSON.

{
"situation":"",
"risk":"",
"impacts":[""],
"recommendations":[""],
"priority":"",
"confidence":""
}

Rules

- No markdown
- No explanations
- No extra text
- Valid JSON only
- Maximum 3 impacts
- Maximum 4 recommendations
- Confidence should be a percentage
`;
}