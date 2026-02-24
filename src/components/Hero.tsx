import type { JSX } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Hero(): JSX.Element {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 mb-8 backdrop-blur-sm">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
        </span>
        <span className="text-[10px] font-mono-nums tracking-widest uppercase text-sky-400">
          System Online
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl mx-auto">
        <TypeAnimation
          sequence={[
            "Senior Frontend Engineer",
            2000,
            "Automation Engineer",
            2000,
            "TypeScript Specialist",
            2000,
            "UI Performance Expert",
            2000,
          ]}
          wrapper="span"
          speed={60}
          deletionSpeed={40}
          repeat={Infinity}
        />
      </h1>
      <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
        I design and ship production-grade frontends using{" "}
        <span className="text-white font-bold">
          React, Angular, and TypeScript
        </span>{" "}
        — with a relentless focus on performance, clean architecture, and
        maintainability. On top of that, I build automation systems{" "}
        <span className="text-white font-bold">(n8n, Make.com, Zapier)</span>{" "}
        that eliminate manual bottlenecks and let teams move faster without
        adding headcount. Backend? I speak it fluently enough to own end-to-end
        delivery —{" "}
        <span className="text-white font-bold">Node.js/Express.js</span> for
        APIs and integrations when needed.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          className="w-full sm:w-auto px-8 py-3 bg-slate-100 text-slate-950 rounded-md font-bold text-sm hover:bg-white transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          to="/projects"
        >
          View Projects
          <span className="material-symbols-outlined text-sm">
            arrow_outward
          </span>
        </Link>
        <a
          className="w-full sm:w-auto px-8 py-3 border border-slate-800 text-slate-400 rounded-md font-medium text-sm hover:border-slate-600 hover:text-slate-200 transition-all flex items-center justify-center gap-2 bg-slate-900/50"
          href="/MuhammadIbrarResume_Frontend_Angular_Developer_4YR_EXP.pdf"
          download="MuhammadIbrarResume_Frontend_Angular_Developer_4YR_EXP.pdf"
        >
          Download_CV
          <span className="material-symbols-outlined text-sm">terminal</span>
        </a>
      </div>
    </div>
  );
}
