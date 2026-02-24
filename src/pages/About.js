import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import MetricCard from "../components/MetricCard";
import StatsRow from "../components/StatsRow";
const categories = [
    {
        title: "Frontend",
        items: ["React JS", "Angular", "TypeScript", "JavaScript"],
    },
    {
        title: "Backend",
        items: ["Express JS", "Node JS", "Supabase", "MongoDB", "SQL"],
    },
    {
        title: "Automation",
        items: ["n8n", "Make.com", "Zapier", "Workflows"],
    },
    {
        title: "Vibe Coding",
        items: ["V0", "Replit", "Base44", "Cursor", "Lovable"],
    },
    {
        title: "Git",
        items: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
];
const iconMap = {
    "React JS": { type: "devicon", name: "devicon-react-original" },
    Angular: { type: "devicon", name: "devicon-angular-plain" },
    TypeScript: { type: "devicon", name: "devicon-typescript-plain" },
    JavaScript: { type: "devicon", name: "devicon-javascript-plain" },
    "Express JS": { type: "devicon", name: "devicon-express-original" },
    "Node JS": { type: "devicon", name: "devicon-nodejs-plain" },
    Supabase: { type: "devicon", name: "devicon-supabase-plain" },
    MongoDB: { type: "devicon", name: "devicon-mongodb-plain" },
    SQL: { type: "material", name: "database" },
    n8n: { type: "material", name: "device_hub" },
    "Make.com": { type: "material", name: "auto_mode" },
    Zapier: { type: "material", name: "bolt" },
    Workflows: { type: "material", name: "hub" },
    V0: { type: "material", name: "auto_awesome" },
    Replit: { type: "devicon", name: "devicon-replit-original" },
    Base44: { type: "material", name: "dns" },
    Cursor: { type: "material", name: "keyboard" },
    Lovable: { type: "material", name: "favorite" },
    Git: { type: "devicon", name: "devicon-git-plain" },
    GitHub: { type: "devicon", name: "devicon-github-original" },
    GitLab: { type: "devicon", name: "devicon-gitlab-plain" },
    Bitbucket: { type: "devicon", name: "devicon-bitbucket-original" },
};
export default function About() {
    return (_jsxs("div", { className: "relative min-h-screen", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none bg-grid-pattern" }), _jsx(Navbar, {}), _jsx("main", { className: "relative min-h-screen pt-32 pb-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1.6fr_1.4fr] gap-8", children: [_jsxs("section", { children: [_jsxs("div", { className: "mb-8", children: [_jsx("div", { className: "text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-3", children: "Who I Am" }), _jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight text-white", children: ["Crafting digital", " ", _jsx("span", { className: "text-sky-400", children: "experiences" }), " that matter."] })] }), _jsxs(BentoCard, { className: "p-6 mb-6", children: [_jsxs("p", { className: "text-slate-300 text-sm leading-relaxed", children: ["I\u2019m a passionate", " ", _jsx("span", { className: "font-bold text-white", children: "Frontend Developer" }), " ", "with strong expertise in React, Angular, and TypeScript, focused on building scalable, high-performance, and user-centric web applications. I enjoy transforming complex requirements into clean, maintainable, and elegant interfaces."] }), _jsxs("p", { className: "text-slate-400 text-sm leading-relaxed mt-4", children: ["With hands-on experience in", " ", _jsx("span", { className: "font-bold text-white", children: "Express.js" }), " and REST API integration, I bridge the gap between frontend and backend systems, ensuring seamless communication and optimized application performance."] }), _jsxs("p", { className: "text-slate-400 text-sm leading-relaxed mt-4", children: ["Beyond traditional development, I specialize in workflow automation using platforms like", " ", _jsx("span", { className: "font-bold text-white", children: "n8n" }), ",", " ", _jsx("span", { className: "font-bold text-white", children: "Make.com" }), ", and", " ", _jsx("span", { className: "font-bold text-white", children: "Zapier" }), ", designing smart systems that reduce manual work, improve efficiency, and connect multiple services effortlessly."] }), _jsxs("p", { className: "text-slate-400 text-sm leading-relaxed mt-4", children: ["I also embrace", " ", _jsx("span", { className: "font-bold text-white", children: "vibe coding" }), " \u2014 blending creativity with clean architecture, performance optimization, and modern UI/UX principles to craft products that don\u2019t just work, but feel intuitive and polished."] }), _jsxs("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3", children: [_jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-md border border-slate-800 bg-slate-900/50 text-slate-300", children: [_jsx("span", { className: "material-symbols-outlined text-base text-sky-400", children: "location_on" }), _jsx("span", { className: "text-xs", children: "Sargodha, Pakistan" })] }), _jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-md border border-slate-800 bg-slate-900/50 text-slate-300", children: [_jsx("span", { className: "material-symbols-outlined text-base text-sky-400", children: "verified" }), _jsx("span", { className: "text-xs", children: "Available for hire" })] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(MetricCard, { value: "5+", label: "Years of Experience" }), _jsx(MetricCard, { value: "50+", label: "Projects Completed" })] })] }), _jsxs("section", { children: [_jsx("div", { className: "text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-3", children: "My Arsenal" }), _jsx("h2", { className: "text-xl font-bold text-white mb-6", children: "Technologies & Tools" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: categories.map((cat) => (_jsxs(BentoCard, { className: "p-5", children: [_jsxs("div", { className: "mb-3 flex items-center gap-2", children: [_jsx("span", { className: "material-symbols-outlined text-base text-sky-400", children: "layers" }), _jsx("div", { className: "text-sm font-bold text-white", children: cat.title })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: cat.items.map((item) => (_jsxs("span", { className: "px-2 py-1 text-[10px] font-mono rounded border border-slate-800 bg-slate-900/50 text-slate-300 inline-flex items-center gap-1", children: [iconMap[item]?.type === "devicon" ? (_jsx("i", { className: `${iconMap[item].name} text-xs text-slate-300` })) : (_jsx("span", { className: "material-symbols-outlined text-xs text-slate-300", children: iconMap[item]?.name ?? "layers" })), _jsx("span", { children: item })] }, item))) })] }, cat.title))) })] })] }), _jsx(StatsRow, {})] }) })] }));
}
