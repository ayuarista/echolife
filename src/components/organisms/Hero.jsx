import React from "react";
import { Link } from "react-router-dom";
import { TiTree } from "react-icons/ti";
import { TbLeaf } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";

export default function Hero() {
  return (
    <section className="pt-8 px-4">
      <div
        className="
          mx-auto max-w-8xl
          grid gap-2
          grid-cols-4 md:grid-cols-6
          auto-rows-[140px] md:auto-rows-[160px]
        "
      >
        <div className="col-span-4 md:col-span-4 row-span-2 relative overflow-hidden bg-secondary text-white rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          <div className="absolute -left-20 -top-16 h-56 w-56 rounded-full bg-hero/25 blur-2xl" />
          <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-hero/25 blur-2xl" />
          <div className="relative h-full px-8 flex flex-col justify-center">
            <div className="w-fit inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur">
              <TiTree className="text-hero" /> Echolife - Sustain together
            </div>
            <h1 className="mt-3 font-Poppins font-bold leading-tight text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem]">
              Build <span className="text-hero">Eco-Friendly</span> {" "}
              Digital Habits
            </h1>
            <p className="mt-2 max-w-xl text-[15px] text-neutral-200">
              Track your waste, learn recycling basics, and join community
              actions to give materials a second life.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/tracker"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-95"
              >
                Track Waste
                <GoArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/organic"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
              >
                Explore Waste Types
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 row-span-3 relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="relative h-full w-full">
            <div className="w-full h-full overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1589122827461-0ab8d74458f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Green landscape"
                className="block w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl col-span-2 row-span-1 bg-white/90 dark:bg-base-200 border border-slate-200 dark:border-slate-800 backdrop-blur p-4">
          <div>
            <p className="text-sm font-semibold text-third dark:text-white mb-3">
              Quick Actions
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-2">
              <Link
                to="/tracker"
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-[color:var(--color-gradient)]/70 dark:bg-base-300 px-3 py-2 text-center text-sm font-semibold text-third dark:text-hero hover:brightness-95 transition"
              >
                Log Waste
              </Link>
              <Link
                to="/quiz"
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-base-300 px-3 py-2 text-center text-sm font-semibold text-third dark:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition"
              >
                Start Quiz
              </Link>
              <Link
                to="/article"
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-base-300 px-3 py-2 text-center text-sm font-semibold text-third dark:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition"
              >
                Browse Tips
              </Link>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <TbLeaf className="text-hero" />
              Track progress & build better habits every day.
            </div>
          </div>
        </div>

        <div className="rounded-3xl col-span-2 row-span-1 bg-white dark:bg-base-200 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="h-full w-full flex items-stretch">
            <div className="relative w-28 sm:w-32 md:w-36 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1669384537216-24740a56a2d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334"
                alt="Challenge"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-full bg-primary/90 text-white px-2 py-0.5 text-[10px] font-semibold">
                Challenge
              </span>
            </div>

            <div className="flex-1 p-3 sm:p-4">
              <p className="text-sm font-semibold text-third dark:text-white">
                Eco Challenge: 7-Day Plastic-Lite
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Swap disposables with reusables & log your wins in Echolife.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[color:var(--color-gradient)]/80 px-2.5 py-0.5 text-[10px] text-third dark:bg-slate-800 dark:text-hero">
                  #BringYourBottle
                </span>
                <span className="rounded-full bg-[color:var(--color-gradient)]/80 px-2.5 py-0.5 text-[10px] text-third dark:bg-slate-800 dark:text-hero">
                  #RefusePlasticBag
                </span>

                <Link
                  to="/article"
                  className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-white hover:brightness-95"
                >
                  Learn <GoArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/tracker"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300 dark:border-slate-700 px-2.5 py-1 text-[11px] font-semibold text-third dark:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
                >
                  Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
