import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DataDetailsImpact from "../data/DataDetailsImpact";
import { ChevronLeft, Share2, Image as ImageIcon } from "lucide-react";

const slugify = (s = "") =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export default function DetailsImpact() {
  const { id: param } = useParams();
  const navigate = useNavigate();

  const asNumber = Number(param);
  const impact =
    DataDetailsImpact.find((it) => it.id === asNumber) ||
    DataDetailsImpact.find(
      (it) =>
        it.path?.endsWith(`/${param}`) ||
        slugify(it.title) === String(param).toLowerCase()
    );

  if (!impact) {
    return (
      <section className="min-h-[80vh] pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500/15 to-amber-500/15 text-rose-500 mb-4">
            <span className="text-3xl">🧭</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-rose-600 dark:text-rose-400">404</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Impact not found <span className="font-mono">{param}</span>
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 backdrop-blur transition"
            >
              <div className="inline-flex items-center gap-2"><ChevronLeft size={18}/>Back</div>
            </button>
            <Link
              to="/article"
              className="px-4 py-2 rounded-xl bg-[color:var(--color-primary)] text-white hover:brightness-95 dark:bg-[color:var(--color-hero)]"
            >
              View Article
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const heroImg = impact.image?.url || impact.image;
  const gallery = [impact.gallery1, impact.gallery2, impact.gallery3, impact.gallery4].filter(Boolean);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = impact.title;
    try {
      if (navigator.share) {
        await navigator.share({ title: text, text, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link copied!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-14">
      {/* HERO */}
      <header className="relative w-full h-[40vh] md:h-[55vh] lg:h-[70vh]">
        <img
          src={heroImg}
          alt={impact.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end px-5 md:px-8">
          <div className="mb-24 text-white">
            <nav className="text-xs uppercase tracking-wider mb-3 opacity-90">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-semibold text-primary dark:text-hero">Impact Detail</span>
            </nav>
            <h1 className="text-3xl md:text-4xl text-white font-bold leading-tight drop-shadow-xl">
              {impact.title}
            </h1>
            {impact.subtitle ? (
              <p className="mt-2 text-sm md:text-base text-white/90 max-w-2xl">
                {impact.subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-5 md:px-8 -mt-10 md:-mt-16 relative z-20" data-aos="fade-up" data-aos-duration="800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: Article */}
          <article className="lg:col-span-7 xl:col-span-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="rounded-2xl bg-white dark:bg-base-300 border border-slate-200/60 dark:border-white/10 shadow-lg p-5 md:p-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="prose dark:prose-invert prose-slate max-w-none">
                <p className="text-xs font-semibold tracking-widest text-primary dark:text-hero">IMPACT</p>
                <h2 className="!mt-1 text-black dark:text-white text-2xl md:text-3xl font-semibold">{impact.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 text-justify">
                  {impact.text || "Not found."}
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-6 md:mt-8" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div className="rounded-2xl bg-white/8 dark:bg-base-300 border border-slate-200/60 dark:border-white/10 shadow-lg backdrop-blur p-5 md:p-8">
                <header className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">Frequently Asked Questions</h3>
                  {impact.descQuestion && (
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">{impact.descQuestion}</p>
                  )}
                </header>

                <div className="join join-vertical w-full">
                  <details className="collapse collapse-arrow bg-hero/5 dark:bg-base-200 join-item group transition-all duration-300">
                    <summary className="text-secondary dark:text-slate-200 collapse-title text-base md:text-lg font-medium">{impact.questions1}</summary>
                    <div className="collapse-content transition-all duration-500 ease-in-out group-open:max-h-96 max-h-0 overflow-hidden group-open:opacity-100 opacity-0 group-open:translate-y-0 -translate-y-2">
                      <p className="text-sm leading-relaxed text-justify">{impact.answers1}</p>
                    </div>
                  </details>

                  <details className="collapse collapse-arrow bg-hero/5 dark:bg-base-200 join-item group transition-all duration-300">
                    <summary className="text-secondary dark:text-slate-200 collapse-title text-base md:text-lg font-medium">{impact.questions2}</summary>
                    <div className="collapse-content transition-all duration-500 ease-in-out group-open:max-h-96 max-h-0 overflow-hidden group-open:opacity-100 opacity-0 group-open:translate-y-0 -translate-y-2">
                      <p className="text-sm leading-relaxed text-justify">{impact.answers2}</p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
          </article>

          {/* Right: Gallery / meta */}
          <aside className="lg:col-span-5 xl:col-span-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <div className="sticky top-20 space-y-6">
              {/* Gallery Card */}
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-base-300 border border-slate-200/60 dark:border-white/10 shadow-lg" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                <div className="flex items-center gap-2 px-5 pt-4">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Im0zIDE2bDQuNDctNC40N2ExLjgxIDEuODEgMCAwIDEgMi41NiAwTDE0IDE1LjVtMS41IDEuNUwxNCAxNS41bTcgLjVsLTIuNDctMi40N2ExLjgxIDEuODEgMCAwIDAtMi41NiAwTDE0IDE1LjVNMTUuNSA4YS41LjUgMCAwIDAgMC0xbTAgMWEuNS41IDAgMCAxIDAtMW0wIDFWNyIvPjxwYXRoIGQ9Ik0zLjY5OCAxOS43NDdDMi41IDE4LjM0NSAyLjUgMTYuMjMgMi41IDEyczAtNi4zNDUgMS4xOTgtNy43NDdxLjI1Ni0uMy41NTUtLjU1NUM1LjY1NSAyLjUgNy43NyAyLjUgMTIgMi41czYuMzQ1IDAgNy43NDcgMS4xOThxLjMuMjU2LjU1NS41NTVDMjEuNSA1LjY1NSAyMS41IDcuNzcgMjEuNSAxMnMwIDYuMzQ1LTEuMTk4IDcuNzQ3cS0uMjU2LjMtLjU1NS41NTVDMTguMzQ1IDIxLjUgMTYuMjMgMjEuNSAxMiAyMS41cy02LjM0NSAwLTcuNzQ3LTEuMTk4cS0uMy0uMjU2LS41NTUtLjU1NSIvPjwvZz48L3N2Zz4="
                    alt="Gallery Icon"
                    className="opacity-70 w-5 h-5"
                  />
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Gallery</h4>
                </div>

                {gallery.length > 0 ? (
                  <div className="p-4">
                    <div className="relative group">
                      <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-x-auto snap-x snap-mandatory flex gap-3 scrollbar-hide rounded-xl" aria-label="galeri">
                        {gallery.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`${impact.title} ${i + 1}`}
                            className="snap-center flex-shrink-0 w-full h-full object-cover rounded-xl"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Thumbs */}
                    {gallery.length > 1 && (
                      <div className="mt-3 grid grid-cols-4 gap-2">
                        {gallery.map((src, i) => (
                          <a key={i} href={`#item${i + 1}`} className="block">
                            <img src={src} alt={`thumb ${i + 1}`} className="h-16 w-full object-cover rounded-lg border border-slate-200/60 dark:border-white/10" loading="lazy" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-500">
                    Not found image
                  </div>
                )}
              </div>

            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}