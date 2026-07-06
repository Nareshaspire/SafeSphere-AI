import HazardMap from "../../map/components/HazardMap";

export default function MapPanel() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-[#101827] p-6 shadow-2xl">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            🌍 Live Emergency Operations Map
          </h2>

          <p className="text-slate-400">
            Google Maps • Emergency Resources • AI Monitoring
          </p>
        </div>

        <div className="rounded-xl bg-green-500/20 px-4 py-2">
          <span className="text-sm font-semibold text-green-400">
            LIVE
          </span>
        </div>

      </div>

      <HazardMap />

    </div>
  );
}