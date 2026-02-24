import { useEffect, useRef } from "react";
import type { JSX } from "react";

type WysiwygProps = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export default function Wysiwyg({ value, onChange, placeholder }: WysiwygProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
    }
  }, [value]);

  const exec = (cmd: string, arg?: string) => {
    document.execCommand(cmd, false, arg);
    if (ref.current) onChange(ref.current.innerHTML);
  };

  return (
    <div className="border border-slate-800 rounded-md overflow-hidden wysiwyg">
      <div className="flex items-center gap-2 px-2 py-2 bg-slate-900/50 border-b border-slate-800">
        <button type="button" className="text-xs text-slate-300 hover:text-white px-2 py-1" onClick={() => exec("bold")}>Bold</button>
        <button type="button" className="text-xs text-slate-300 hover:text-white px-2 py-1" onClick={() => exec("italic")}>Italic</button>
        <button type="button" className="text-xs text-slate-300 hover:text-white px-2 py-1" onClick={() => exec("underline")}>Underline</button>
        <button type="button" className="text-xs text-slate-300 hover:text-white px-2 py-1" onClick={() => exec("insertUnorderedList")}>• List</button>
        <button type="button" className="text-xs text-slate-300 hover:text-white px-2 py-1" onClick={() => exec("insertOrderedList")}>1. List</button>
        <button
          type="button"
          className="text-xs text-slate-300 hover:text-white px-2 py-1"
          onClick={() => {
            const url = prompt("Enter URL");
            if (url) exec("createLink", url);
          }}
        >
          Link
        </button>
        <button type="button" className="ml-auto text-xs text-slate-400 px-2 py-1" onClick={() => exec("removeFormat")}>Clear</button>
      </div>
      <div
        ref={ref}
        className="min-h-[200px] px-3 py-2 bg-slate-900/40 text-slate-200"
        contentEditable={true}
        suppressContentEditableWarning={true}
        tabIndex={0}
        role="textbox"
        aria-multiline="true"
        onInput={() => {
          if (ref.current) onChange(ref.current.innerHTML);
        }}
        onKeyUp={() => {
          if (ref.current) onChange(ref.current.innerHTML);
        }}
        data-placeholder={placeholder}
      />
    </div>
  );
}
