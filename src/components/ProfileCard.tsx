import type { JSX } from "react";

import BentoCard from "./BentoCard";
import profileImgUrl from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function ProfileCard(): JSX.Element {
  return (
    <BentoCard className="p-6 md:col-span-2 lg:col-span-1 flex flex-col justify-between group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-700 relative">
          <img
            alt="Profile"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src={profileImgUrl}
          />
          <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay" />
        </div>
        <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-sky-500 group-hover:text-sky-400 transition-colors">
          <span className="material-symbols-outlined text-xl">fingerprint</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1 font-satoshi">
          Muhammad Ibrar
        </h3>
        <p className="text-slate-500 text-xs font-mono-nums mb-4">
          Senior Frontend Engineer • Automation
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-800 pl-3">
          Senior Frontend Engineer with a strong automation layer. I specialize
          in React/Angular/TypeScript applications built for scale — clean
          component architecture, performance optimization (profiling, caching,
          code-splitting), and robust REST API integration. Where I add extra
          leverage: workflow automation via n8n, Make.com, and Zapier — turning
          repetitive business processes into hands-free pipelines. Comfortable
          with Node.js/Express.js for backend integration work when the project
          demands it.
        </p>
      </div>
      <Link
        to="/about"
        className="flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors uppercase tracking-wider"
      >
        <span>Read Bio</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </BentoCard>
  );
}
