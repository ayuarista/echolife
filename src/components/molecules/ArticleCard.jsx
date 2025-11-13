import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({
  image,
  title,
  link = "#",
  penulis,
  tag,         
  date,        
  readTime,    
  excerpt,     
}) {
  return (
    <article className="group relative flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-base-200">
      <Link
        to={link}
        className="relative block h-48 sm:h-56 overflow-hidden"
        aria-label={title}
      >
        <img
          src={image}
          alt={title || "Article image"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-white">
            {tag}
          </span>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent dark:from-black/30" />
      </Link>

      <div className="p-4 sm:p-5">
        {penulis && (
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-neutral-900 dark:text-slate-300">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[color:var(--color-gradient,#E4FDEB)] text-[10px] text-[color:var(--color-third,#0D4019)] dark:bg-neutral-800 dark:text-hero">
              {String(penulis).charAt(0).toUpperCase()}
            </span>
            {penulis}
          </div>
        )}

        <h3 className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[color:var(--color-primary,#58b12f)] dark:text-white">
          <Link to={link}>{title}</Link>
        </h3>

        {excerpt && (
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {excerpt}
          </p>
        )}

        {(date || readTime) && (
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            {date && <time>{date}</time>}
            {date && readTime && <span aria-hidden>•</span>}
            {readTime && <span>{readTime} read</span>}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg px-1 py-0.5"
          >
            Read article
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}