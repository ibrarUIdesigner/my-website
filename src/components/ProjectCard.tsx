import { useState } from "react";
import type { JSX } from "react";
import Modal from "./Modal";

type ProjectCardProps = {
  title: string;
  role?: string;
  imageUrl: string;
  aspectClass: string;
  description: string;
  tags: readonly string[];
  href?: string;
  fullImageUrl?: string;
};

export default function ProjectCard({
  title,
  role,
  imageUrl,
  aspectClass,
  description,
  tags,
  href,
  fullImageUrl,
}: ProjectCardProps): JSX.Element {
  const [open, setOpen] = useState(false);

  const openLink = () => {
    if (href) window.open(href, "_blank", "noopener,noreferrer");
    else setOpen(true);
  };

  return (
    <div className="group relative mb-5">
      {/* glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

      <article
        onClick={openLink}
        className="relative flex flex-col h-full bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-sky-500/10 cursor-pointer"
      >
        {/* IMAGE */}
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-slate-900`}
        >
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-transparent opacity-60" />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
              {title}
            </h3>

            {role && (
              <p className="text-xs uppercase tracking-wide text-sky-400/80 mt-1">
                {role}
              </p>
            )}
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs font-mono text-slate-300 bg-white/5 border border-white/10 rounded hover:border-sky-400/40 hover:text-sky-400 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <img
          src={fullImageUrl || imageUrl}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </Modal>
    </div>
  );
}
