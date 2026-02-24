import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LINKS = ["Home", "Projects", "About", "Insights"];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark")
            return saved;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    });
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (_jsxs("nav", { className: "fixed top-0 w-full z-50 border-b border-white/5 bg-[#030610]/80 backdrop-blur-xl", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden group", children: [_jsx("div", { className: "absolute inset-0 bg-sky-500/20 blur-md group-hover:bg-sky-500/30 transition-all" }), _jsx("span", { className: "material-symbols-outlined text-sky-400 text-lg relative z-10", children: "code" })] }), _jsx("span", { className: "text-sm font-bold tracking-wider text-slate-200 font-mono-nums uppercase", children: "Dev.Portfolio_v2" })] }), _jsx("div", { className: "hidden md:flex items-center gap-8", children: LINKS.map((item) => (_jsx(Link, { className: "text-xs font-medium tracking-wide text-slate-400 hover:text-sky-400 transition-colors uppercase", to: item === "Projects" ? "/projects" : item === "About" ? "/about" : item === "Insights" ? "/blogs" : "/", children: item }, item))) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { type: "button", "aria-label": "Toggle theme", className: "w-9 h-9 rounded-md border border-slate-800 bg-slate-900/60 text-slate-300 flex items-center justify-center hover:text-white hover:border-sky-500/40 transition", onClick: () => setTheme((t) => (t === "dark" ? "light" : "dark")), title: theme === "dark" ? "Switch to light" : "Switch to dark", children: _jsx("span", { className: "material-symbols-outlined text-base", children: theme === "dark" ? "light_mode" : "dark_mode" }) }), _jsx(Link, { className: "px-5 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300 active:scale-95", to: "/contact", children: "Contact" }), _jsx("button", { type: "button", "aria-label": "Open menu", "aria-expanded": open, className: "md:hidden w-9 h-9 rounded-md border border-slate-800 bg-slate-900/60 text-slate-300 flex items-center justify-center hover:text-white hover:border-sky-500/40 transition", onClick: () => setOpen((v) => !v), children: _jsx("span", { className: "material-symbols-outlined text-base", children: open ? "close" : "menu" }) })] })] }), open && (_jsx("div", { className: "md:hidden border-t border-white/5 bg-[#030610]/90 backdrop-blur-xl", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 py-3 flex flex-col gap-2", children: [LINKS.map((item) => (_jsx(Link, { className: "text-xs font-medium tracking-wide text-slate-300 hover:text-sky-400 transition-colors uppercase py-1", to: item === "Projects" ? "/projects" : item === "About" ? "/about" : item === "Insights" ? "/blogs" : "/", onClick: () => setOpen(false), children: item }, item))), _jsx("div", { className: "pt-2", children: _jsx(Link, { className: "w-full inline-flex justify-center px-5 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300 active:scale-95", to: "/contact", onClick: () => setOpen(false), children: "Contact" }) })] }) }))] }));
}
