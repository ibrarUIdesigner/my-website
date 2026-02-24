import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import BentoCard from "../../components/BentoCard";
import MetricCard from "../../components/MetricCard";
import StatsRow from "../../components/StatsRow";
import { getCounts } from "../../lib/firebase";
export default function AdminDashboard() {
    const [counts, setCounts] = useState({ projects: 0, blogs: 0 });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getCounts()
            .then(setCounts)
            .finally(() => setLoading(false));
    }, []);
    return (_jsx(AdminLayout, { title: "Dashboard", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: loading ? (_jsxs(_Fragment, { children: [_jsx(BentoCard, { className: "h-28 animate-pulse" }), _jsx(BentoCard, { className: "h-28 animate-pulse" }), _jsx(BentoCard, { className: "h-28 animate-pulse" })] })) : (_jsxs(_Fragment, { children: [_jsx(MetricCard, { value: String(counts.projects), label: "Projects", badge: "Admin" }), _jsx(MetricCard, { value: String(counts.blogs), label: "Blogs", badge: "Admin" }), _jsx(MetricCard, { value: "OK", label: "Status", badge: "System" })] })) }), _jsx(StatsRow, {})] }) }));
}
