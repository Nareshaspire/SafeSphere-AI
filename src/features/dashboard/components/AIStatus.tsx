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
      statusColor: "text-emerald-400",
      statusBg: "bg-emerald-500/20 border-emerald-500/30",
    },
    {
      icon: Cloud,
      title: "Weather API",
      status: "Connected",
      statusColor: "text-sky-400",
      statusBg: "bg-sky-500/20 border-sky-500/30",
    },
    {
      icon: MapPinned,
      title: "Google Maps",
      status: "Live",
      statusColor: "text-emerald-400",
      statusBg: "bg-emerald-500/20 border-emerald-500/30",
    },
    {
      icon: Database,
      title: "Firestore",
      status: "Ready",
      statusColor: "text-sky-400",
      statusBg: "bg-sky-500/20 border-sky-500/30",
    },
  ];

  return (
    <div className="glass-panel p-5 flex flex-col justify-between">

      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[13px] font-semibold text-slate-300 tracking-wide">
          System Health
        </h3>
      </div>

      <div className="space-y-2 mt-1">

        {services.map((service) => (

          <div
            key={service.title}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-2">
              <service.icon
                className="text-slate-500"
                size={14}
              />
              <span className="text-slate-300 text-[12px] font-medium tracking-wide">
                {service.title}
              </span>
            </div>

            <span className={`text-[9px] font-bold uppercase tracking-widest ${service.statusColor}`}>
              {service.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}