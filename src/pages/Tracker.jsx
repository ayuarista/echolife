import React, { useMemo, useRef, useState } from "react";
import { FaPlus, FaMinus, FaInfoCircle } from "react-icons/fa";
import { Chart } from "chart.js/auto";


const ITEMS = [
  { key: "value1", label: "Plastic Bottles", color: "#6366F1", multiplier: 480 }, // indigo-500
  { key: "value2", label: "Plastic Bags", color: "#F59E0B", multiplier: 220 }, // amber-500
  { key: "value3", label: "Straws", color: "#10B981", multiplier: 93 }, // emerald-500
  { key: "value4", label: "Food Packaging", color: "#F43F5E", multiplier: 150 }, // rose-500
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
    setTimeout(buildChart, 0);
  };


  return (
    <div className="pt-24 min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">

      <section className="mx-auto max-w-6xl px-4 pt-8 md:pt-12">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-950">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Track your plastic usage, get smart tips.
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">
                Enter today’s counts. See your share breakdown and actionable recycling advice.
              </p>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Processed on-device. Nothing is uploaded.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {ITEMS.map((it) => {
          const val = values[it.key];
          const num = toNum(val);
          const pct = totalCount > 0 ? Math.min(100, (num / totalCount) * 100) : 0;

          return (
            <article
              key={it.key}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-950"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold tracking-tight">{it.label}</h3>
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: it.color }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => dec(it.key)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
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
                  className="w-24 text-center text-xl font-semibold bg-transparent outline-none border-b border-slate-200 dark:border-slate-700 py-1"
                />

                <button
                  onClick={() => inc(it.key)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                  aria-label={`Increase ${it.label}`}
                >
                  <FaPlus />
                </button>
              </div>

              {/* subtle progress */}
              <div className="mt-4 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${pct.toFixed(0)}%`,
                    backgroundColor: it.color,
                    transition: "width .25s ease",
                  }}
                />
              </div>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Count for today/this week. You choose.
              </p>
            </article>
          );
        })}
      </section>

      {/* Action Row */}
      <section className="mx-auto max-w-6xl px-4 pb-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-950">
            <p className="text-sm">
              Total items: <span className="font-semibold">{totalCount}</span>
            </p>
            {error && <p className="text-sm text-rose-600 mt-1">{error}</p>}
          </div>

          <button
            onClick={onTrack}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:opacity-90 transition"
          >
            Track Waste
          </button>
        </div>
      </section>

      {/* Results Panel */}
      {showPanel && (
        <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-950 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FaInfoCircle className="opacity-70" />
              <h4 className="text-lg font-semibold tracking-tight">Your Breakdown</h4>
            </div>
            <div className="relative h-80">
              <canvas ref={chartRef} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
              Share of each item (estimated yearly impact weighting).
            </p>
          </div>

          {/* Knowledge (Modern, concise) */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-950">
            <h4 className="text-base font-semibold">Quick Actions</h4>
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
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {s.percent}% share
                        </div>
                      </div>
                      <p className="mt-1 text-sm">
                        {k?.summary ?? "Keep it clean and separate properly."}
                      </p>
                      <ul className="mt-2 list-disc pl-4 text-sm space-y-1">
                        {(k?.tips ?? ["Rinse & dry.", "Follow local rules."]).slice(0, 2).map((t, idx) => (
                          <li key={idx}>{t}</li>
                        ))}
                      </ul>
                      <details className="mt-2">
                        <summary className="text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                          Why it matters
                        </summary>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {k?.impact ?? "Better sorting increases actual recycling rates."}
                        </p>
                      </details>
                    </article>
                  );
                })}
              {sorted.every((s) => s.pcs === 0) && (
                <div className="text-slate-500 text-sm">No data yet.</div>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => {
                  setValues({ value1: "", value2: "", value3: "", value4: "" });
                  setShowPanel(false);
                }}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                Reset
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
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
