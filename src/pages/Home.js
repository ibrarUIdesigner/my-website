import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import MetricCard from "../components/MetricCard";
import TechStackCard from "../components/TechStackCard";
import SocialCard from "../components/SocialCard";
import StatsRow from "../components/StatsRow";
export default function Home() {
    return (_jsxs("div", { className: "relative min-h-screen", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none bg-grid-pattern" }), _jsx(Navbar, {}), _jsxs("main", { className: "relative min-h-screen pt-32 pb-20 px-6", children: [_jsx("div", { className: "absolute top-20 left-1/2 -translate-x-1/2 w-full  md:w-[800px] h-full md:h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" }), _jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [_jsx(Hero, {}), _jsxs("div", { className: "bento-grid", children: [_jsx(ProfileCard, {}), _jsx(FeaturedProjectCard, {}), _jsx(MetricCard, { value: "05", label: "Years Exp.", badge: "Experience", hint: "Since 2019", delta: "+1y", trend: "up", actionable: true })] }), _jsxs("div", { className: "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-5", children: [_jsx(TechStackCard, {}), _jsx(MetricCard, { value: "50+", label: "Projects", badge: "Portfolio", hint: "Latest updates", delta: "+3", trend: "up", actionable: true }), _jsx(SocialCard, {})] }), _jsx(StatsRow, {})] })] })] }));
}
