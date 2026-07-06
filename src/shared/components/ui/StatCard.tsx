import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  icon: LucideIcon;
  color?: string;
  suffix?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "text-sky-500",
  suffix = "",
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-700 bg-[#101827] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {typeof value === "number"
              ? `${value}${suffix}`
              : value}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        <div className={`rounded-2xl bg-slate-800 p-4 ${color}`}>
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
}