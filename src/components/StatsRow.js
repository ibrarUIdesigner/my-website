import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const stats = [
    { value: "100%", label: "System Uptime" },
    { value: "18", label: "Open Source" },
    { value: "12k", label: "Commits" },
    { value: "24/7", label: "Deployment" },
];
export default function StatsRow() {
    return (_jsx("div", { className: "mt-20 pt-10 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s) => (_jsxs("div", { className: "text-center group cursor-default", children: [_jsx("div", { className: "text-2xl font-bold text-slate-200 mb-1 font-mono-nums group-hover:text-sky-400 transition-colors", children: s.value }), _jsx("div", { className: "text-[10px] uppercase tracking-widest text-slate-600 font-medium", children: s.label })] }, s.label))) }));
}
