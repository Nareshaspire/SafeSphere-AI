import HazardMap from "../../map/components/HazardMap";

export default function MapPanel() {
  return (
    <div className="glass-panel p-6 flex flex-col h-[600px]">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Live Emergency Operations Map
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Google Maps • Emergency Resources • AI Monitoring
          </p>
        </div>

        <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-400 tracking-wider">
              LIVE
            </span>
          </div>
        </div>

      </div>

      <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 relative shadow-inner">
        <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-10" />
        <HazardMap />
      </div>

    </div>
  );
}