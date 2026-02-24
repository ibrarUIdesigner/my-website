import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BentoCard from "./BentoCard";
export default function SocialCard() {
    return (_jsxs(BentoCard, { className: "p-6 flex flex-col justify-center items-center gap-4", children: [_jsx("div", { className: "flex gap-4 w-full justify-center", children: [
                    {
                        icon: "devicon-github-original",
                        href: "https://github.com/ibrarUIdesigner",
                    },
                    { icon: "devicon-twitter-original", href: "#" },
                    {
                        icon: "devicon-linkedin-plain",
                        href: "https://www.linkedin.com/in/muhammad-ibrar-ui/",
                    },
                ].map(({ icon, href }) => (_jsx("a", { className: "w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-all", href: href, children: _jsx("i", { className: `${icon} text-lg` }) }, icon))) }), _jsx("div", { className: "w-full h-[1px] bg-slate-800/50" }), _jsx("a", { className: "text-[10px] uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors", href: "mailto:ibrarUIdesigner@gmail.com", children: "ibrarUIdesigner@gmail.com" })] }));
}
