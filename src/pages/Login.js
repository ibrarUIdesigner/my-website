import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../lib/FirebaseConfig";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const auth = getAuth(app);
    const from = location.state?.from?.pathname || "/admin";
    const submit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email.trim(), password);
            navigate(from, { replace: true });
        }
        catch {
            setError("Invalid credentials");
        }
        finally {
            setLoading(false);
        }
    };
    if (user) {
        navigate("/admin", { replace: true });
        return _jsx("div", { className: "p-6 text-slate-400", children: "Redirecting\u2026" });
    }
    return (_jsxs("div", { className: "relative min-h-screen", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none bg-grid-pattern" }), _jsx(Navbar, {}), _jsx("main", { className: "relative min-h-screen pt-32 pb-20 px-6", children: _jsx("div", { className: "max-w-md mx-auto relative z-10", children: _jsxs(BentoCard, { className: "p-6", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h1", { className: "text-2xl font-bold text-white", children: "Admin Login" }), _jsx("p", { className: "text-slate-400 text-sm", children: "Sign in to manage content" })] }), _jsxs("form", { onSubmit: submit, className: "space-y-4", children: [_jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "Email" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50", placeholder: "you@example.com", required: true })] }), _jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "Password" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50", placeholder: "********", required: true })] }), error && _jsx("div", { className: "text-xs text-red-400", children: error }), _jsx("button", { type: "submit", className: "w-full px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300 disabled:opacity-50", disabled: loading, children: loading ? "Signing in…" : "Sign In" })] }), _jsx("div", { className: "mt-4 text-xs text-slate-500", children: _jsx(Link, { to: "/", children: "\u2190 Back to site" }) })] }) }) })] }));
}
