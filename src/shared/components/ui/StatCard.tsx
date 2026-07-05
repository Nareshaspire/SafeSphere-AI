import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "text-blue-400",
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-[#101827] p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-slate-400">
            {subtitle}
          </p>

        </div>

        <div
          className={`rounded-2xl bg-slate-900 p-4 ${color}`}
        >
          <Icon size={34} />
        </div>

      </div>

    </div>
  );
}