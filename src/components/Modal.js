import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
export default function Modal({ open, onClose, children }) {
    if (!open)
        return null;
    return createPortal(_jsx("div", { className: "fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-6", onClick: onClose, "aria-modal": "true", role: "dialog", children: _jsxs("div", { className: "relative max-w-[90vw] max-h-[90vh] w-full my-10", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { type: "button", className: "absolute -top-4 -right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center", onClick: onClose, "aria-label": "Close", children: _jsx("span", { className: "material-symbols-outlined", children: "close" }) }), _jsx("div", { className: "rounded-xl overflow-hidden border border-white/10 bg-slate-900 max-h-full overflow-auto modal-scroll", children: children })] }) }), document.body);
}
