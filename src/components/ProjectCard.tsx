import { useState } from "react";
import type { JSX } from "react";
import BentoCard from "./BentoCard";
import Modal from "./Modal";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  aspectClass: string;
  description: string;
  tags: readonly string[];
  href?: string;
  fullImageUrl?: string;
};

export default function ProjectCard({
  title,
  imageUrl,
  aspectClass,
  description,
  tags,
  href,
  fullImageUrl,
}: ProjectCardProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const openLink = () => {
    if (href) window.open(href, "_blank", "noopener,noreferrer");
    else setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <div className="masonry-item group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />
      <article
        className="relative flex flex-col h-full bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-sky-500/10 cursor-pointer"
        onClick={openLink}
        aria-label={href ? `Open ${title}` : `Preview ${title}`}
      >
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-slate-900`}
        >
          <img
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            src={imageUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-shimmer -translate-x-full shimmer-effect pointer-events-none" />
          {href ? (
            <a
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_outward
              </span>
            </a>
          ) : (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="material-symbols-outlined text-[20px]">
                arrow_outward
              </span>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => (
              <span
                key={t}
                className={`px-2 py-1 text-xs font-mono ${
                  t === "React" ||
                  t === "Storybook" ||
                  t === "Python" ||
                  t === "Three.js"
                    ? "text-sky-400 bg-sky-500/10 border border-sky-500/20"
                    : "text-slate-400 bg-white/5 border border-white/10"
                } rounded`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
      <Modal open={open} onClose={closeModal}>
        <img
          alt={title}
          src={fullImageUrl || imageUrl}
          className="w-full h-auto object-contain"
        />
      </Modal>
    </div>
  );
}
