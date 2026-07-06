import { Clock3 } from "lucide-react";

const events = [
  {
    time: "09:18",
    text: "Winter Storm Warning",
  },
  {
    time: "09:42",
    text: "EMS dispatched",
  },
  {
    time: "10:03",
    text: "Road accident detected",
  },
  {
    time: "10:18",
    text: "AI generated action plan",
  },
];

export default function IncidentTimeline() {

  return (

    <div className="rounded-3xl border border-slate-700 bg-[#101827] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Incident Timeline
      </h2>

      {events.map((event) => (

        <div
          key={event.time}
          className="mb-5 flex gap-4"
        >

          <Clock3
            className="text-sky-400"
            size={18}
          />

          <div>

            <p className="font-semibold text-white">
              {event.time}
            </p>

            <p className="text-slate-400">
              {event.text}
            </p>

          </div>

        </div>

      ))}

    </div>

  );

}