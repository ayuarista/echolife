import React from "react";
import { TiTree } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="bg-white dark:bg-base-200 mt-16">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
            <Link to="/">
              <div className="flex items-center dark:text-white">
                <a className="btn btn-ghost text-2xl md:text-3xl font-bold font-syne text-center mx-0 md:mx-auto">
                  EchoL
                  <span className="-mx-[0.35rem] text-[23px] md:text-3xl text-primary dark:text-hero">
                    <TiTree />
                  </span>
                  fe
                </a>
              </div>
              </Link>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link to="/" class="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/3R" class="hover:underline">
                      3R
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/Organic" class="hover:underline">
                      Organic
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/Inorganic" class="hover:underline">
                      Inorganic
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/Tracker" class="hover:underline">
                      Tracker
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/Quiz" class="hover:underline">
                      Quiz
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/Article" class="hover:underline">
                      Article
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Features
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <Link to="/Calculator" class="hover:underline">
                      Calculator
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/Quiz" class="hover:underline">
                      Quiz
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Our Team
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">

                    <a href="https://www.instagram.com/aayuaristaa/" class="hover:underline">
                      Ayu Arista
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yudhisattria/" class="hover:underline">
                      Yudhi Satria
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
                Echolife™
              . All Rights Reserved.
            </span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
