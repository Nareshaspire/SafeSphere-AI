import { Bot } from "lucide-react";
import { useGemini } from "../hooks/useGemini";
import LoadingSkeleton from "./LoadingSkeleton";

interface Props {
  temperature: string;
  condition: string;
  wind: string;
  risk: string;
  alerts: number;
  resources: number;
}

export default function AIBriefing(props: Props) {
  const { briefing, loading, error, refresh } = useGemini(props);

  return (
    <div className="glass-panel p-6 flex flex-col h-full relative overflow-hidden">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[14px] font-bold text-white tracking-wide uppercase">
          AI Analysis & Sidelining
        </h2>
        <Bot size={16} className="text-violet-500" />
      </div>

      {loading && <LoadingSkeleton />}

      {error && (
        <div className="rounded bg-red-500/10 border border-red-500/20 p-4 text-xs text-red-400">
          {error}
        </div>
      )}

      {briefing && (
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>{briefing.situation}</p>

          <div>
            <span className="font-semibold text-white">Risk Profile: </span>
            {briefing.risk}
          </div>

          <div>
            <span className="font-semibold text-white">Impacts: </span>
            {briefing.impacts.join("; ")}
          </div>

          <div>
            <span className="font-semibold text-white">Directives: </span>
            {briefing.recommendations.join("; ")}
          </div>
        </div>
      )}

      {briefing && (
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
            Confidence: <span className="text-violet-400">{briefing.confidence}</span>
          </div>
          <button
            onClick={refresh}
            className="text-[10px] uppercase font-bold text-violet-400 hover:text-violet-300 transition-colors tracking-wider"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}