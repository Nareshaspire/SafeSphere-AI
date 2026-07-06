export default function MapLegend() {
  return (
    <div className="absolute bottom-5 left-5 z-10 rounded-2xl bg-white p-4 shadow-xl">

      <h3 className="mb-3 font-bold">
        Legend
      </h3>

      <div className="space-y-2 text-sm">

        <p>🔵 Hospital</p>

        <p>🔴 Fire</p>

        <p>🟢 EMS</p>

        <p>🟠 Warming</p>

        <p>🔷 Police</p>

      </div>

    </div>
  );
}