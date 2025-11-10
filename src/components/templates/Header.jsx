import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { TiTree } from "react-icons/ti";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import ThemeToggle from "../atoms/ThemeToggle.jsx";
// (opsional) tampilkan SearchNav di desktop:
// import SearchNav from "../molecules/SearchNav.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);           // mobile menu
  const [dropOpen, setDropOpen] = useState(false);   // dropdown Waste Types
  const dropRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const linkBase =
    "inline-flex items-center px-3 py-1.5 text-sm font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-hero after:transition-all after:duration-300 hover:after:w-full";
  const linkActive =
    "font-bold text-primary dark:text-hero";
  const linkInactive =
    "text-slate-700 dark:text-slate-200";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-base/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 text-slate-900 dark:text-white">
            <span className="text-xl font-bold font-syne tracking-tight">
              EchoL
            </span>
            <span className="text-2xl -mx-1 text-primary dark:text-hero">
              <TiTree />
            </span>
            <span className="text-xl font-bold font-syne tracking-tight">fe</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/3r"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              3R
            </NavLink>

            {/* Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                type="button"
                onClick={() => setDropOpen((v) => !v)}
                className={`${linkBase} ${linkInactive} gap-1`}
                aria-haspopup="menu"
                aria-expanded={dropOpen}
              >
                Waste Types <FiChevronDown aria-hidden />
              </button>

              {dropOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-44 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-base shadow-lg p-1"
                >
                  <NavLink
                    to="/organic"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        isActive ? "font-semibold text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200"
                      }`
                    }
                    role="menuitem"
                    onClick={() => setDropOpen(false)}
                  >
                    Organic
                  </NavLink>
                  <NavLink
                    to="/inorganic"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        isActive ? "font-semibold text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200"
                      }`
                    }
                    role="menuitem"
                    onClick={() => setDropOpen(false)}
                  >
                    Inorganic
                  </NavLink>
                  <NavLink
                    to="/b3"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        isActive ? "font-semibold text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200"
                      }`
                    }
                    role="menuitem"
                    onClick={() => setDropOpen(false)}
                  >
                    B3
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/tracker"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Track&nbsp;Waste
            </NavLink>

            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Quiz
            </NavLink>

            <NavLink
              to="/article"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Articles
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Hamburger */}
            <button
              className="inline-flex lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <nav className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/3r"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
              }
            >
              3R
            </NavLink>

            {/* Mobile dropdown: render sebagai grup link biasa */}
            <div className="pt-2">
              <div className="px-3 pb-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Waste Types
              </div>
              <div className="grid">
                <NavLink
                  to="/organic"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
                  }
                >
                  Organic
                </NavLink>
                <NavLink
                  to="/inorganic"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
                  }
                >
                  Inorganic
                </NavLink>
                <NavLink
                  to="/b3"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
                  }
                >
                  B3
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/tracker"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
              }
            >
              Track Waste
            </NavLink>
            <NavLink
              to="/quiz"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
              }
            >
              Quiz
            </NavLink>
            <NavLink
              to="/article"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${isActive ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-hero" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`
              }
            >
              Articles
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
