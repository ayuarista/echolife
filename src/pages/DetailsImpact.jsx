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

  // dukung id (angka) atau slug (string)
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
            Impact tidak ditemukan untuk <span className="font-mono">{param}</span>
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 backdrop-blur transition"
            >
              <div className="inline-flex items-center gap-2"><ChevronLeft size={18}/>Kembali</div>
            </button>
            <Link
              to="/article"
              className="px-4 py-2 rounded-xl bg-[color:var(--color-primary)] text-white hover:brightness-95 dark:bg-[color:var(--color-hero)]"
            >
              Lihat Artikel
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
        alert("Link disalin ke clipboard");
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end px-5 md:px-8">
          <div className="mb-8 text-white">
            <nav className="text-xs uppercase tracking-wider mb-3 opacity-90">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/article" className="hover:underline">Impact</Link>
              <span className="mx-2">/</span>
              <span className="opacity-80">Detail</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
              {impact.title}
            </h1>
            {impact.subtitle ? (
              <p className="mt-2 text-sm md:text-base text-white/90 max-w-2xl">
                {impact.subtitle}
              </p>
            ) : null}
            <div className="mt-4 inline-flex items-center gap-3">
              <span className="text-[10px] md:text-xs px-2 py-1 rounded-full bg-emerald-500/90 text-white tracking-wider">
                IMPACT
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 backdrop-blur border border-white/20 transition"
              >
                <Share2 size={16}/> Bagikan
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-5 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: Article */}
          <article className="lg:col-span-7 xl:col-span-8">
            <div className="rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/10 shadow-lg backdrop-blur p-5 md:p-8">
              <div className="prose dark:prose-invert prose-slate max-w-none">
                <p className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400">IMPACT</p>
                <h2 className="!mt-1 text-2xl md:text-3xl font-semibold">{impact.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 text-justify">
                  {impact.text || "Not found."}
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-6 md:mt-8">
              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/10 shadow-lg backdrop-blur p-5 md:p-8">
                <header className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Frequently Asked Questions</h3>
                  {impact.descQuestion && (
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">{impact.descQuestion}</p>
                  )}
                </header>

                <div className="join join-vertical w-full">
                  <details className="collapse collapse-arrow bg-base-200 join-item">
                    <summary className="collapse-title text-base md:text-lg font-medium">{impact.questions1}</summary>
                    <div className="collapse-content">
                      <p className="text-sm leading-relaxed text-justify">{impact.answers1}</p>
                    </div>
                  </details>

                  <details className="collapse collapse-arrow bg-base-200 join-item">
                    <summary className="collapse-title text-base md:text-lg font-medium">{impact.questions2}</summary>
                    <div className="collapse-content">
                      <p className="text-sm leading-relaxed text-justify">{impact.answers2}</p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
          </article>

          {/* Right: Gallery / meta */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-20 space-y-6">
              {/* Gallery Card */}
              <div className="rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/10 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 px-5 pt-4">
                  <ImageIcon size={18} className="opacity-70"/>
                  <h4 className="font-semibold">Galeri</h4>
                </div>

                {gallery.length > 0 ? (
                  <div className="p-4">
                    <div className="relative group">
                      {/* Scroll-snap carousel (no lib) */}
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
                    Tidak ada gambar galeri
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