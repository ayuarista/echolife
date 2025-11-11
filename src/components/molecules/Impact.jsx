import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Impact = (props) => {
  const {
    path,
    image,
    title,
    desc,
    aspect = "16/9",
    className = "",
  } = props;

  const Wrapper = path ? Link : "div";
  const wrapperProps = path ? { to: path, "aria-label": title } : {};

  return (
    <article
      className={[
        "group relative h-full overflow-hidden rounded-2xl",
        "border border-slate-200/70 dark:border-slate-800",
        "bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm",
        "shadow-sm hover:shadow-xl transition-all duration-300",
        "focus-within:ring-2 focus-within:ring-green-400/60 dark:focus-within:ring-green-300/40",
        className,
      ].join(" ")}
    >
      {/* Media */}
      <figure className="relative overflow-hidden">
        <div className={`aspect-[${aspect}] w-full`}>
          {image ? (
            <img
              src={image}
              alt={title ? `${title} image` : "Impact image"}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full animate-pulse bg-slate-200 dark:bg-slate-800" />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>

      {/* Content */}
      <div className="p-5 md:p-6 flex h-full flex-col">
        <h2 className="font-semibold text-base sm:text-[19px] tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h2>

        <p className="mt-2 text-sm md:text-[14px] text-justify leading-relaxed text-slate-500 dark:text-slate-300 line-clamp-4">
          {desc}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs md:text-sm font-medium text-primary dark:text-heto group-hover:underline underline-offset-4">
            Discover more
          </span>

          <Wrapper
            {...wrapperProps}
            className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 dark:focus-visible:ring-green-300/40"
          >
            <span className="absolute inset-0 scale-0 rounded-full bg-green-100 dark:bg-green-900/40 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <MdOutlineArrowOutward className="relative z-10 text-[1.25rem] text-slate-800 dark:text-slate-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Wrapper>
        </div>
      </div>

      {path && <Link to={path} className="absolute inset-0" aria-hidden tabIndex={-1} />}
    </article>
  );
};

export default Impact;
