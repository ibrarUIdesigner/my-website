import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export default function Wysiwyg({ value, onChange, placeholder }) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current && ref.current.innerHTML !== value) {
            ref.current.innerHTML = value || "";
        }
    }, [value]);
    const exec = (cmd, arg) => {
        document.execCommand(cmd, false, arg);
        if (ref.current)
            onChange(ref.current.innerHTML);
    };
    return (_jsxs("div", { className: "border border-slate-800 rounded-md overflow-hidden wysiwyg", children: [_jsxs("div", { className: "flex items-center gap-2 px-2 py-2 bg-slate-900/50 border-b border-slate-800", children: [_jsx("button", { type: "button", className: "text-xs text-slate-300 hover:text-white px-2 py-1", onClick: () => exec("bold"), children: "Bold" }), _jsx("button", { type: "button", className: "text-xs text-slate-300 hover:text-white px-2 py-1", onClick: () => exec("italic"), children: "Italic" }), _jsx("button", { type: "button", className: "text-xs text-slate-300 hover:text-white px-2 py-1", onClick: () => exec("underline"), children: "Underline" }), _jsx("button", { type: "button", className: "text-xs text-slate-300 hover:text-white px-2 py-1", onClick: () => exec("insertUnorderedList"), children: "\u2022 List" }), _jsx("button", { type: "button", className: "text-xs text-slate-300 hover:text-white px-2 py-1", onClick: () => exec("insertOrderedList"), children: "1. List" }), _jsx("button", { type: "button", className: "text-xs text-slate-300 hover:text-white px-2 py-1", onClick: () => {
                            const url = prompt("Enter URL");
                            if (url)
                                exec("createLink", url);
                        }, children: "Link" }), _jsx("button", { type: "button", className: "ml-auto text-xs text-slate-400 px-2 py-1", onClick: () => exec("removeFormat"), children: "Clear" })] }), _jsx("div", { ref: ref, className: "min-h-[200px] px-3 py-2 bg-slate-900/40 text-slate-200", contentEditable: true, suppressContentEditableWarning: true, tabIndex: 0, role: "textbox", "aria-multiline": "true", onInput: () => {
                    if (ref.current)
                        onChange(ref.current.innerHTML);
                }, onKeyUp: () => {
                    if (ref.current)
                        onChange(ref.current.innerHTML);
                }, "data-placeholder": placeholder })] }));
}
