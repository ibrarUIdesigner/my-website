import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BentoCard from "./BentoCard";
const items = [
    { type: "devicon", name: "devicon-react-original" },
    { type: "devicon", name: "devicon-angular-plain" },
    { type: "devicon", name: "devicon-express-original" },
    { type: "devicon", name: "devicon-typescript-plain" },
    { type: "material", name: "hub" }, // n8n
    { type: "devicon", name: "devicon-supabase-plain" },
];
export default function TechStackCard() {
    return (_jsxs(BentoCard, { className: "p-6 flex flex-col justify-between", children: [_jsxs("div", { className: "flex justify-between items-start mb-6", children: [_jsx("h3", { className: "text-lg font-bold text-white font-satoshi", children: "Tech Stack" }), _jsx("div", { className: "w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-slate-300", children: _jsx("span", { className: "material-symbols-outlined text-base", children: "settings" }) })] }), _jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-3", children: items.map((item) => (_jsx("div", { className: "aspect-square rounded-lg bg-slate-900/50 border border-slate-800/60 flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all group cursor-default", children: item.type === "devicon" ? (_jsx("i", { className: `${item.name} text-2xl text-slate-400 group-hover:text-white transition-colors grayscale group-hover:grayscale-0` })) : (_jsx("span", { className: "material-symbols-outlined text-xl text-slate-400 group-hover:text-white transition-colors", children: item.name })) }, item.name))) })] }));
}
