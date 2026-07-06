import {
    Brain,
    Cloud,
    Database,
    MapPinned,
} from "lucide-react";

export default function AIStatus() {

  const services = [
    {
      icon: Brain,
      title: "Gemini AI",
      status: "Online",
    },
    {
      icon: Cloud,
      title: "Weather API",
      status: "Connected",
    },
    {
      icon: MapPinned,
      title: "Google Maps",
      status: "Live",
    },
    {
      icon: Database,
      title: "Firestore",
      status: "Ready",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-[#101827] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        System Health
      </h2>

      <div className="space-y-5">

        {services.map((service) => (

          <div
            key={service.title}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <service.icon
                className="text-sky-400"
                size={20}
              />

              <span className="text-slate-300">
                {service.title}
              </span>

            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
              {service.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}