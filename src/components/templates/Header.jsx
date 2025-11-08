import React from "react";
import ThemeToggle from "../atoms/ThemeToggle.jsx";
import { TiTree } from "react-icons/ti";
import SearchNav from "../molecules/SearchNav.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="fixed w-full font-medium z-50 text-black dark:text-white">
      <div className="navbar bg-base-100">
        <div className="navbar-start lg:mx-12">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/3R">
                <li>
                  <a>3R</a>
                </li>
              </Link>
              <li>
                <a>Waste Types</a>
                <ul className="p-2">
                  <Link to="/Organic">
                    <li>
                      <a>Organic</a>
                    </li>
                  </Link>
                  <Link to="/Inorganic">
                    <li>
                      <a>Inorganic</a>
                    </li>
                  </Link>
                  <Link to="/B3">
                    <li>
                      <a>Hazardous</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <Link to="/Tracker">
                <li>
                  <a>Tracker</a>
                </li>
              </Link>
              <Link to="/Quiz">
                <li>
                  <a>Quiz</a>
                </li>
              </Link>
              <Link to="/Article">
                <li>
                  <a>Articles</a>
                </li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center dark:text-white">
              <a className="btn btn-ghost text-xl font-bold font-syne text-center mx-auto">
                EchoL
                <span className="-mx-[0.35rem] text-[23px] text-primary dark:text-hero">
                  <TiTree />
                </span>
                fe
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/3R">
              <li>
                <a>3R</a>
              </li>
            </Link>
            <li>
              <details>
                <summary>Waste Types</summary>
                <ul className="p-2">
                  <Link to="/Organic">
                    <li>
                      <a>Organic</a>
                    </li>
                  </Link>
                  <Link to="/Inorganic">
                    <li>
                      <a>Inorganic</a>
                    </li>
                  </Link>
                  <Link to="/B3">
                    <li>
                      <a>Hazardous</a>
                    </li>
                  </Link>
                </ul>
              </details>
            </li>
            <Link to="/Tracker">
              <li>
                <a>Tracker</a>
              </li>
            </Link>
            <Link to="/Quiz">
              <li>
                <a>Quiz</a>
              </li>
            </Link>
            <Link to="/Article">
              <li>
                <a>Articles</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end lg:mx-8">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
