import React from "react";
import { Link } from "react-router-dom";
import { TiTree } from "react-icons/ti";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const linkBase =
    "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition";

  return (
    <footer className="mt-16 bg-slate-50 dark:bg-base-200 text-slate-800 dark:text-slate-100">

      <div className="mt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Link to="/" className="inline-flex gap-1 items-center">
                <span className="text-2xl font-bold font-syne">EchoL</span>
                <span className="-mx-1 text-3xl text-primary dark:text-hero">
                  <TiTree />
                </span>
                <span className="text-2xl font-bold font-syne">fe</span>
              </Link>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
              Build Eco-Friendly Digital Habits
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
                  href="https://youtube.com"
                  aria-label="youtube"
                  className="h-10 w-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="instagram"
                  className="h-10 w-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* What's Echolife */}
            <div>
              <h3 className="text-lg font-semibold">What’s Echolife</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/" className={linkBase}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/3r" className={linkBase}>
                    3R
                  </Link>
                </li>
                <li>
                  <Link to="/waste-types/organic" className={linkBase}>
                    Organic
                  </Link>
                </li>
                <li>
                  <Link to="/waste-types/inorganic" className={linkBase}>
                    Inorganic 
                  </Link>
                </li>
                <li>
                  <Link to="/waste-types/hazardous" className={linkBase}>
                    Hazardous 
                  </Link>
                </li>
                <li>
                  <Link to="/tracker" className={linkBase}>
                    Track Waste 
                  </Link>
                </li>
                <li>
                  <Link to="/quiz" className={linkBase}>
                    Quiz 
                  </Link>
                </li>
                <li>
                  <Link to="/article" className={linkBase}>
                    Article 
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold">Contact us</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/" className={linkBase}>
                    hello@echolife.dev
                  </a>
                </li>
                <li>
                  <Link to="/" className={linkBase}>
                    Help &amp; FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/" className={linkBase}>
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
                  className="flex-1 text-[15px] rounded-xl border border-slate-300 dark:border-base bg-white dark:bg-base-300 px-4 py-2 outline-none focus:ring-2 focus:ring-hero/40"
                />
                <button
                  type="submit"
                  className="rounded-xl text-[15px] bg-primary dark:bg-hero text-white dark:text-slate-900 px-5 py-2 font-medium hover:opacity-90 transition"
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
              <Link to="/" className={linkBase}>
                Imprint
              </Link>
              <Link to="/" className={linkBase}>
                Privacy Policy
              </Link>
              <Link to="/" className={linkBase}>
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