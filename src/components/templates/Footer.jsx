// src/components/templates/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { TiTree } from "react-icons/ti";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: plug your submit logic here
  }

  const linkBase =
    "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition";

  return (
    <footer className="mt-16 bg-slate-50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100">

      {/* Main footer grid */}
      <div className="mt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand + about */}
            <div>
              <Link to="/" className="inline-flex items-center">
                <span className="text-2xl font-bold font-syne">EchoL</span>
                <span className="-mx-1 text-3xl text-emerald-600 dark:text-emerald-400">
                  <TiTree />
                </span>
                <span className="text-2xl font-bold font-syne">fe</span>
              </Link>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                Echolife is a collaborative community to learn, discuss, and
                showcase sustainability projects—free, respectful, and
                beginner-friendly.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="h-10 w-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com"
                  aria-label="GitHub"
                  className="h-10 w-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://discord.com"
                  aria-label="Discord"
                  className="h-10 w-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>

            {/* What's Echolife */}
            <div>
              <h3 className="text-lg font-semibold">What’s Echolife</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/article" className={linkBase}>
                    Forum & QnA
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className={linkBase}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/free-courses" className={linkBase}>
                    Free Courses
                  </Link>
                </li>
                <li>
                  <Link to="/guidelines" className={linkBase}>
                    Community Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold">Contact us</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="mailto:hello@echolife.dev" className={linkBase}>
                    hello@echolife.dev
                  </a>
                </li>
                <li>
                  <Link to="/help" className={linkBase}>
                    Help &amp; FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/report" className={linkBase}>
                    Report an issue
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stay in the loop */}
            <div>
              <h3 className="text-lg font-semibold">Stay in the loop</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Tips, write-ups, and challenge updates—no spam.
              </p>
              <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 font-semibold hover:opacity-90 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* bottom line */}
          <hr className="mt-10 mb-6 border-slate-200 dark:border-slate-800" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>© {new Date().getFullYear()} Echolife. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link to="/imprint" className={linkBase}>
                Imprint
              </Link>
              <Link to="/privacy" className={linkBase}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={linkBase}>
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;