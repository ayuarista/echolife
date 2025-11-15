import React, { useMemo, useRef, useState, useEffect } from "react";
import { FaPlus, FaMinus, FaInfoCircle } from "react-icons/fa";
import { Chart } from "chart.js/auto";
import AOS from "aos";
import "aos/dist/aos.css";


const ITEMS = [
  { key: "value1", label: "Plastic Bottles", color: "#58b12f", multiplier: 480 }, // primary
  { key: "value2", label: "Plastic Bags", color: "#A3E635", multiplier: 220 }, // hero
  { key: "value3", label: "Straws", color: "#207033", multiplier: 93 }, // secondary
  { key: "value4", label: "Food Packaging", color: "#0D4019", multiplier: 150 }, // third
];

const KNOWLEDGE = {
  "Plastic Bottles": {
    summary: "Widely recyclable when clean and dry (PET #1).",
    tips: ["Rinse, dry, and squash.", "Keep caps on if local rules allow."],
    impact: "If littered, fragments into microplastics in waterways.",
  },
  "Plastic Bags": {
    summary: "Thin film is often low-value and easily contaminated.",
    tips: ["Carry a reusable tote.", "Reuse bags for dry waste only."],
    impact: "Can clog drains and harm wildlife if escaped.",
  },
  "Straws": {
    summary: "Small & lightweight; often missed in collection.",
    tips: ["Skip unless needed.", "Use a reusable straw."],
    impact: "Risk of ingestion by marine animals.",
  },
  "Food Packaging": {
    summary: "Grease/food residue reduces recyclability.",
    tips: ["Use reusables when possible.", "If oily → dispose as residual."],
    impact: "Cross-contamination causes more waste landfilled.",
  },
};

export default function Tracker() {
  const [values, setValues] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });
  const [error, setError] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);


  const toNum = (s) => {
    const n = parseInt(s, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  };

  const totalCount = useMemo(
    () => ITEMS.reduce((acc, it) => acc + toNum(values[it.key]), 0),
    [values]
  );

  const weighted = useMemo(() => {
    return ITEMS.map((it) => {
      const qty = toNum(values[it.key]);
      return { label: it.label, color: it.color, pcs: qty, score: qty * it.multiplier };
    });
  }, [values]);

  const percentData = useMemo(() => {
    const sum = weighted.reduce((a, b) => a + b.score, 0);
    return weighted.map((w) => (sum > 0 ? (w.score / sum) * 100 : 0));
  }, [weighted]);

  const sorted = useMemo(
    () =>
      weighted
        .map((w, i) => ({ ...w, percent: +percentData[i].toFixed(2) }))
        .sort((a, b) => b.percent - a.percent),
    [weighted, percentData]
  );

  const handleChange = (key, raw) => {
    const v = raw.replace(/[^\d]/g, ""); // digits only
    setValues((p) => ({ ...p, [key]: v })); // allow ""
  };
  const inc = (key) => setValues((p) => ({ ...p, [key]: String(toNum(p[key]) + 1) }));
  const dec = (key) => setValues((p) => ({ ...p, [key]: String(Math.max(toNum(p[key]) - 1, 0)) }));

  const buildChart = () => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;
    if (chartInstance.current) chartInstance.current.destroy();

    const rows = sorted.filter((r) => r.pcs > 0);
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: rows.map((r) => r.label),
        datasets: [
          {
            data: rows.map((r) => r.percent),
            backgroundColor: rows.map((r) => r.color),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "58%",
        plugins: {
          legend: {
            position: "bottom",
            labels: ["dark:#E5E7EB", "#0F172A"], // slate-200 / slate-900
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.raw.toFixed(1)}%`,
            },
          },
        },
      },
    });
  };

  const onTrack = () => {
    if (totalCount === 0) {
      setError("Please add at least one item.");
      setShowPanel(false);
      return;
    }
    setError("");
    setShowPanel(true);
    setTimeout(() => {
      buildChart();
      // Scroll ke chart card dengan smooth animation
      const chartCard = document.querySelector('.chart-card');
      if (chartCard) {
        chartCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };


  return (
    <div className="pt-24 min-h-screen w-full bg-white text-slate-900 dark:bg-base dark:text-slate-100">

      <section className="tracker-title-section mx-auto max-w-6xl px-4 pt-8 md:pt-12">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 bg-gradient-to-br from-slate-50 to-white dark:from-base-300 dark:to-base-300" data-aos="fade-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Track your plastic usage, get smart tips.
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">
                Enter today’s counts. See your share breakdown and actionable recycling advice.
              </p>
            </div>
            {/* <div className="text-xs text-slate-500 dark:text-slate-400">
              Processed on-device. Nothing is uploaded.
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {ITEMS.map((it, idx) => {
          const val = values[it.key];
          const num = toNum(val);
          const pct = totalCount > 0 ? Math.min(100, (num / totalCount) * 100) : 0;

          return (
            <article
              key={it.key}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-base-300"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold tracking-tight text-secondary dark:text-white">{it.label}</h3>
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: it.color }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => dec(it.key)}
                  className="p-2 rounded-xl border border-hero/50 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-400 dark:text-white transition-colors"
                  aria-label={`Decrease ${it.label}`}
                >
                  <FaMinus />
                </button>

                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="0"
                  value={val}
                  onChange={(e) => handleChange(it.key, e.target.value)}
                  onFocus={(e) => {
                    if (e.target.value === "0") handleChange(it.key, "");
                  }}
                  className="w-24 text-center text-xl font-semibold text-secondary dark:text-white bg-transparent outline-none border-b-2 border-primary dark:border-hero py-1"
                />

                <button
                  onClick={() => inc(it.key)}
                  className="p-2 rounded-xl border border-hero/50 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-400 dark:text-white transition-colors"
                  aria-label={`Increase ${it.label}`}
                >
                  <FaPlus />
                </button>
              </div>

              {/* subtle progress */}
              <div className="mt-4 h-2 rounded-full bg-hero/10 dark:bg-green-900/40 overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${pct.toFixed(0)}%`,
                    backgroundColor: it.color,
                    transition: "width .25s ease",
                  }}
                />
              </div>

              <p className="mt-3 text-xs text-gray-500 dark:text-white">
                Count for today/this week.
              </p>
            </article>
          );
        })}
      </section>

      {/* Action Row */}
      <section className="mx-auto max-w-6xl px-4 pb-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-base-300">
            <p className="text-sm text-gray-500 dark:text-white">
              Total items: <span className="font-semibold text-hero">{totalCount}</span>
            </p>
            {error && <p className="text-sm text-rose-600 mt-1">{error}</p>}
          </div>

          <button
            onClick={onTrack}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white dark:bg-hero dark:text-base-300 hover:opacity-90 transition font-semibold"
          >
            Track Waste
          </button>
        </div>
      </section>

      {/* Results Panel */}
      {showPanel && (
        <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Card */}
          <div className="chart-card rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-base-300 lg:col-span-2" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <FaInfoCircle className="text-primary dark:text-hero opacity-70" />
              <h4 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">Your Breakdown</h4>
            </div>
            <div className="relative h-80">
              <canvas ref={chartRef} />
            </div>


            {/* Breakdown List */}
            <div className="mt-12 space-y-2">
              {sorted
                .filter((s) => s.pcs > 0)
                .map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-sm" data-aos="fade-up" data-aos-delay={i * 50}>
                    <div className="flex items-center gap-3 flex-1">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="text-gray-700 dark:text-gray-300">{s.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full flex-1" style={{ width: "120px" }}>
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${s.percent}%`,
                            backgroundColor: s.color,
                          }}
                        />
                      </div>
                      <span className="font-semibold text-secondary dark:text-primary w-12 text-right">{s.percent}%</span>
                    </div>
                  </div>
                ))}
              {sorted.every((s) => s.pcs === 0) && (
                <div className="text-center py-4 text-slate-500 dark:text-slate-400">No data yet.</div>
              )}
            </div>
            <p className="text-xs text-secondary dark:text-primary mt-20 text-center">
              Share of each item (estimated yearly impact weighting).
            </p>
          </div>

          {/* Knowledge (Modern, concise) */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-base-300" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-base font-semibold dark:text-white">Quick Actions</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Short, high-impact steps tailored to your top items.
            </p>

            <div className="mt-4 space-y-3">
              {sorted
                .filter((s) => s.pcs > 0)
                .slice(0, 3)
                .map((s, i) => {
                  const k = KNOWLEDGE[s.label];
                  return (
                    <article
                      key={i}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 p-4"
                      data-aos="fade-up"
                      data-aos-delay={i * 50}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-secondary dark:text-primary">{s.label}</div>
                        <div className="text-xs text-secondary dark:text-primary font-semibold">
                          {s.percent}% share
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {k?.summary ?? "Keep it clean and separate properly."}
                      </p>
                      <ul className="mt-2 list-disc pl-4 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                        {(k?.tips ?? ["Rinse & dry.", "Follow local rules."]).slice(0, 2).map((t, idx) => (
                          <li key={idx}>{t}</li>
                        ))}
                      </ul>
                      <details className="mt-2">
                        <summary className="text-xs text-primary dark:text-hero cursor-pointer font-semibold">
                          Why it matters
                        </summary>
                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                          {k?.impact ?? "Better sorting increases actual recycling rates."}
                        </p>
                      </details>
                    </article>
                  );
                })}
              {sorted.every((s) => s.pcs === 0) && (
                <div className="text-secondary dark:text-primary text-sm font-semibold">No data yet.</div>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => {
                  setValues({ value1: "", value2: "", value3: "", value4: "" });
                  setShowPanel(false);
                  // Scroll ke section title dengan delay
                  setTimeout(() => {
                    const titleSection = document.querySelector('.tracker-title-section');
                    if (titleSection) {
                      titleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="px-4 py-2 rounded-xl border border-primary dark:border-hero text-primary dark:text-hero hover:bg-green-50/40 dark:hover:bg-green-950/20 font-semibold transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 rounded-xl bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold hover:opacity-90 transition"
              >
                Edit Inputs
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}



