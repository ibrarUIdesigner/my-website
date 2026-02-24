import { useContext } from "react";
import type { JSX } from "react";
import { LoadingContext } from "../context/LoadingContext";

export default function LoadingOverlay(): JSX.Element | null {
  const { active } = useContext(LoadingContext);
  if (!active) return null;
  return (
    <div className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-sky-500/40 border-t-sky-400 animate-spin" />
        <div className="text-xs font-mono-nums tracking-widest text-slate-300">
          LOADING
        </div>
      </div>
    </div>
  );
}
