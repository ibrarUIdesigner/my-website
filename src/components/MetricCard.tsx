import type { JSX } from "react";
import BentoCard from "./BentoCard";

type MetricCardProps = {
  value: string;
  label: string;
  hint?: string;
  icon?: string;
  delta?: string;
  trend?: "up" | "down";
  badge?: string;
  actionable?: boolean;
  loading?: boolean;
  className?: string;
};

export default function MetricCard(props: MetricCardProps): JSX.Element {
  const {
    value,
    label,
    hint,
    icon,
    delta,
    trend,
    badge,
    actionable,
    loading,
    className,
  } = props;

  const trendClasses =
    trend === "down"
      ? "text-red-400 bg-red-500/10 border border-red-500/20"
      : "text-sky-400 bg-sky-500/10 border border-sky-500/20";
  const trendIcon = trend === "down" ? "trending_down" : "trending_up";

  if (loading) {
    return (
      <BentoCard
        className={`p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden ${
          className ?? ""
        }`}
      >
        <div className="absolute inset-0 bg-sky-500/5 opacity-100 animate-pulse" />
        <div className="w-20 h-8 rounded-md bg-slate-800/60 mb-3" />
        <div className="w-28 h-3 rounded-md bg-slate-800/60" />
      </BentoCard>
    );
  }

  return (
    <BentoCard
      className={`p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden ${
        className ?? ""
      }`}
    >
      <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {(badge || actionable) && (
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="px-2 py-1 bg-sky-500/10 border border-sky-500/20 rounded text-[10px] font-bold uppercase tracking-wider text-sky-400">
            {badge}
          </div>
          {actionable && (
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-sky-500/50 transition-all">
              <span className="material-symbols-outlined text-lg">
                arrow_outward
              </span>
            </div>
          )}
        </div>
      )}

      {icon && (
        <div className="mb-3 w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/60 flex items-center justify-center">
          <i className={`${icon} text-lg text-slate-300`} />
        </div>
      )}

      <div className="text-5xl font-bold text-white mb-2 font-mono-nums tracking-tighter group-hover:text-sky-400 transition-colors">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
        {label}
      </div>

      {hint && <div className="mt-2 text-[11px] text-slate-500">{hint}</div>}

      {delta && (
        <div
          className={`mt-3 inline-flex items-center gap-1 px-2 py-1 rounded ${trendClasses}`}
        >
          <span className="material-symbols-outlined text-[14px]">
            {trendIcon}
          </span>
          <span className="text-[11px] font-mono-nums">{delta}</span>
        </div>
      )}
    </BentoCard>
  );
}
