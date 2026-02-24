import { useEffect, useState } from "react";
import type { JSX } from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKS = ["Home", "Projects", "About", "Insights"] as const;

export default function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030610]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-sky-500/20 blur-md group-hover:bg-sky-500/30 transition-all" />
            <span className="material-symbols-outlined text-sky-400 text-lg relative z-10">
              code
            </span>
          </div>
          <span className="text-sm font-bold tracking-wider text-slate-200 font-mono-nums uppercase">
            IBRAR • Senior Frontend & Automation
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((item) => (
            <Link
              key={item}
              className="text-xs font-medium tracking-wide text-slate-400 hover:text-sky-400 transition-colors uppercase"
              to={
                item === "Projects"
                  ? "/projects"
                  : item === "About"
                  ? "/about"
                  : item === "Insights"
                  ? "/blogs"
                  : "/"
              }
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-md border border-slate-800 bg-slate-900/60 text-slate-300 flex items-center justify-center hover:text-white hover:border-sky-500/40 transition"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            <span className="material-symbols-outlined text-base">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <Link
            className="px-5 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300 active:scale-95 hidden md:inline-flex"
            to="/contact"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden w-9 h-9 rounded-md border border-slate-800 bg-slate-900/60 text-slate-300 flex items-center justify-center hover:text-white hover:border-sky-500/40 transition"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-base">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden border-t border-white/5 bg-[#030610]/90 backdrop-blur-xl transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 max-h-[calc(100vh-4rem)]"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        } overflow-hidden`}
        aria-hidden={!open}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-2 overflow-y-auto">
          {LINKS.map((item) => (
            <Link
              key={item}
              className="text-xs font-medium tracking-wide text-slate-300 hover:text-sky-400 transition-colors uppercase py-1"
              to={
                item === "Projects"
                  ? "/projects"
                  : item === "About"
                  ? "/about"
                  : item === "Insights"
                  ? "/blogs"
                  : "/"
              }
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            className="text-xs font-medium tracking-wide text-slate-300 hover:text-sky-400 transition-colors uppercase py-1"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
