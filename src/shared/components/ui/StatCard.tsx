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
  color = "text-blue-600",
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className={`rounded-xl bg-slate-100 p-3 ${color}`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}