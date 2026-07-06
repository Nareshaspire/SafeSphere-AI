export interface OperationalBriefing {
  situation: string;
  risk: string;
  impacts: string[];
  recommendations: string[];
  priority: string;
  confidence: string;
}

export interface GeminiState {
  briefing: OperationalBriefing | null;
  loading: boolean;
  error: string | null;
}