import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function RequireAuth({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading)
        return _jsx("div", { className: "p-6 text-slate-400", children: "Loading\u2026" });
    if (!user)
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    return _jsx(_Fragment, { children: children });
}
