import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl bg-slate-800 px-4 py-2">

      <p className="text-xs text-slate-400">
        Local Time
      </p>

      <p className="text-lg font-bold text-white">
        {time.toLocaleTimeString()}
      </p>

    </div>
  );
}