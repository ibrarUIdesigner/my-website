import { createPortal } from "react-dom";
import type { JSX, ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps): JSX.Element | null {
  if (!open) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative max-w-[90vw] max-h-[90vh] w-full my-10" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 max-h-full overflow-auto modal-scroll">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
