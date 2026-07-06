import { useGemini } from "../hooks/useGemini";
import AIStatus from "./AIStatus";
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
  const {
    briefing,
    loading,
    error,
    refresh,
  } = useGemini(props);

  return (
    <div className="rounded-3xl border border-violet-500/20 bg-[#101827] p-6 shadow-2xl">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            🤖 AI Operational Intelligence
          </h2>

          <p className="text-slate-400">
            Real-time analysis powered by Gemini 2.5 flash
          </p>

        </div>

        <div className="text-sm">
          <AIStatus loading={loading} error={error} />
        </div>

      </div>

      {loading && <LoadingSkeleton />}

      {error && (
        <div className="rounded-xl bg-red-900/30 p-5 text-red-300">
          {error}
        </div>
      )}

      {briefing && (

        <div className="space-y-6">

          {/* Situation */}

          <section className="rounded-xl bg-slate-800 p-5">

            <h3 className="mb-2 text-lg font-semibold text-sky-400">
              Situation
            </h3>

            <p className="text-slate-200">
              {briefing.situation}
            </p>

          </section>

          {/* Risk */}

          <section className="rounded-xl bg-red-950/30 p-5">

            <h3 className="mb-2 text-lg font-semibold text-red-400">
              Risk Assessment
            </h3>

            <p className="text-xl font-bold text-white">
              {briefing.risk}
            </p>

          </section>

          {/* Impacts */}

          <section className="rounded-xl bg-slate-800 p-5">

            <h3 className="mb-3 text-lg font-semibold text-amber-400">
              Predicted Impacts
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              {briefing.impacts.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ul>

          </section>

          {/* Recommendations */}

          <section className="rounded-xl bg-slate-800 p-5">

            <h3 className="mb-3 text-lg font-semibold text-emerald-400">
              Recommended Actions
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              {briefing.recommendations.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>

          </section>

          {/* Footer */}

          <div className="flex items-center justify-between border-t border-slate-700 pt-5">

            <div>

              <p className="text-sm text-slate-400">
                Operational Priority
              </p>

              <p className="font-semibold text-white">
                {briefing.priority}
              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">
                Confidence
              </p>

              <p className="font-semibold text-green-400">
                {briefing.confidence}
              </p>

            </div>

            <button
              onClick={refresh}
              className="rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-500"
            >
              Refresh Analysis
            </button>

          </div>

        </div>

      )}

    </div>
  );
}