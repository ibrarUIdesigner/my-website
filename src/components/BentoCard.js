import { jsx as _jsx } from "react/jsx-runtime";
export default function BentoCard({ className, children, }) {
    return (_jsx("div", { className: `glass-card rounded-2xl ${className ?? ""}`.trim(), children: children }));
}
