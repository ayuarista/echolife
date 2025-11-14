import React, { useState, useEffect, useRef } from "react";
import hero from "../assets/3R/hero.jpg";
import reuses from "../assets/3R/reuse.png";
import reduce from "../assets/3R/reduce.png";
import recycle from "../assets/3R/recycle.png";
import shoes from "../assets/3R/shoes.png";
import kelapa from "../assets/3R/kelapa.png";
import bunga from "../assets/3R/bunga.png";
import kardus from "../assets/3R/kardus.png";
import pakaian from "../assets/3R/pakaian.png";
import tanaman from "../assets/3R/tanaman.png";
import { IoLeafOutline } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import ImageSlider from "../components/molecules/ImageSlider";
import Card3R from "../components/molecules/Card3R";
import DataReuse from "../data/DataReuse";
import DataReduce from "../data/DataReduce";
import DataRecycle from "../data/DataRecycle";
import AOS from "aos";
import "aos/dist/aos.css";

const Page3R = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [selectedReuse, setSelectedReuse] = useState(null);
  const [selectedReduce, setSelectedReduce] = useState(null);
  const [selectedRecycle, setSelectedRecycle] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatIndex, setWhatIndex] = useState(0);
  const [whatHovered, setWhatHovered] = useState(false);
  const [activeHero, setActiveHero] = useState(null);

  const whatIsRef = useRef(null);
  const typesRef = useRef(null);
  const manageRef = useRef(null);
  const reuseHeaderRef = useRef(null);
  const reduceHeaderRef = useRef(null);
  const recycleHeaderRef = useRef(null);
  const recyclingRelevanceRef = useRef(null);
  const whatIsReuseRef = useRef(null);
  const whatIsReduceRef = useRef(null);
  const whatIsRecycleRef = useRef(null);
  const joinMovementRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const whatImages = [
    "https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    "https://plus.unsplash.com/premium_photo-1723300629422-1c985bedc940?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1065",
    "https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
  ];

  // Carousel animation
  useEffect(() => {
    if (whatHovered) return;
    const timer = setTimeout(() => {
      setWhatIndex((s) => (s + 1) % whatImages.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [whatHovered, whatIndex, whatImages.length]);

  // Back to Top visibility
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const infoSections = [
    {
      id: "benefits",
      title: "Benefits of 3R?",
      content:
        "Implementing 3R helps reduce waste generation, save natural resources, and cut pollution. It encourages people to live sustainably while protecting the planet for future generations. 🌍",
    },
    {
      id: "purpose",
      title: "Purpose of Practicing 3R?",
      content:
        "The main goal of 3R is to minimize waste from its source. By reducing, reusing, and recycling, we lessen the burden on landfills and conserve Earth's limited resources. 🌿",
    },
    {
      id: "impact",
      title: "Environmental Impact of 3R?",
      content:
        "Applying 3R significantly reduces greenhouse gas emissions and plastic pollution. It keeps ecosystems healthy and lowers the negative impact of human activities on the environment. 🌏",
    },
    {
      id: "examples",
      title: "Examples of 3R in Daily Life?",
      content:
        "Reduce: Bring your own bottle, avoid single-use plastic.\nReuse: Turn jars or clothes into something new.\nRecycle: Sort waste before disposal to make it easier to process again. ♻️",
    },
  ];

  return (
    <div className="font-[Poppins] bg-white dark:bg-base-100 overflow-x-hidden overflow-y-hidden">
      {/* Enhanced Hero Section */}
      <div className="pt-20 lg:pt-32 pb-0 overflow-hidden dark:bg-base-100 relative">
        <div className="flex justify-center items-center">
          <div className="px-8 lg:px-12 text-center max-w-4xl">
            <h1
              className="text-3xl lg:text-5xl font-bold mb-6 leading-loose text-secondary dark:text-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Where Change Begins for a{" "}
              <span className="text-primary dark:text-hero">
                Cleaner Planet
              </span>
            </h1>
            <p
              className="text-sm lg:text-[15px] text-center text-gray-500 dark:text-gray-300 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore how the 3R principle — Reduce, Reuse, and Recycle — helps
              us create a sustainable lifestyle. Every small action counts! By
              managing waste wisely, we can protect nature, save energy, and
              build a cleaner tomorrow. 🌱
            </p>
            <div
              className="flex flex-wrap justify-center gap-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                onClick={() => {
                  setActiveHero("learn");
                  whatIsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  activeHero === "learn"
                    ? "bg-green-600 text-white shadow-md"
                    : "border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white"
                }`}
              >
                Learn About 3R <span>→</span>
              </button>
              <button
                onClick={() => {
                  setActiveHero("types");
                  joinMovementRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeHero === "types"
                    ? "bg-green-600 text-white shadow-md"
                    : "border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white"
                }`}
              >
                Start 3R Journey →
              </button>
              {/* <button
                onClick={() => {
                  setActiveHero("manage");
                  manageRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === "manage"
                  ? "bg-green-600 text-white shadow-md"
                  : "border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white"
                  }`}
              >
                Everyday Tips <span>→</span>
              </button> */}
              <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white transition-all">
                Green Innovation →
              </button>
            </div>
          </div>

          {/* Decorative stars */}
          <div
            className="absolute right-4 sm:right-8 md:right-12 lg:right-32 top-32 lg:top-20 z-40 pointer-events-none"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <PiStarFour className="animate-spin rotate-90 text-hero dark:text-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <div
            className="absolute right-8 sm:right-16 md:right-24 lg:right-36 bottom-16 sm:bottom-20 lg:bottom-24 z-30 pointer-events-none"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <PiStarFour className="animate-spin rotate-90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-hero dark:text-white" />
          </div>
        </div>

        {/* 3R Icons Display */}
        <div
          className="flex justify-center gap-4 sm:gap-8 lg:gap-16 mt-16 mb-32 px-4 sm:px-8 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              whatIsReuseRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div className="w-32 h-32 bg-gray-100 dark:bg-base-300 rounded-3xl mb-3 overflow-hidden flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-50/40">
              <div className="w-24 h-24 bg-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={reuses}
                  alt="Reuse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-secondary dark:text-primary">
              Reuse
            </h3>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              whatIsReduceRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div className="w-32 h-32 bg-gray-100 dark:bg-base-300 rounded-3xl mb-3 overflow-hidden flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-50/40">
              <div className="w-24 h-24 bg-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={reduce}
                  alt="Reduce"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-secondary dark:text-primary">
              Reduce
            </h3>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              whatIsRecycleRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div className="w-32 h-32 bg-gray-100 dark:bg-base-300 rounded-3xl mb-3 overflow-hidden flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-50/40">
              <div className="w-24 h-24 bg-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={recycle}
                  alt="Recycle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-secondary dark:text-primary">
              Recycle
            </h3>
          </div>
        </div>
      </div>
      {/* What Is 3R Section with Carousel */}
      <div
        ref={whatIsRef}
        className="py-12 lg:py-16 lg:mt-12 bg-green-50/40 dark:bg-base-200"
      >
        <div className="flex flex-col-reverse lg:flex-row mx-4 sm:mx-8 lg:mx-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Right - Text Content */}
          <div className="flex-1 w-full lg:w-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
              data-aos="fade-right"
            >
              What Is <span className="text-primary dark:text-hero">3R?</span>
            </h2>
            <p
              className="text-sm lg:text-[15px] text-justify text-gray-500 dark:text-gray-400 mb-4 lg:mb-6 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              The 3R principle — Reduce, Reuse, and Recycle — teaches us to cut
              waste by using less, reusing items, and recycling materials into
              new ones. This simple habit protects our planet and supports
              sustainability. 🌍
            </p>
            <p
              className="text-sm lg:text-[15px] text-justify text-gray-500 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              By properly practicing 3R, we reduce landfill waste, conserve
              natural resources, and lower pollution levels. It's a simple yet
              powerful way to make a positive impact on the environment.
            </p>

            <div
              className="space-y-1 mb-8 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {infoSections.map((section) => {
                const isOpen = selectedInfo === section.id;
                return (
                  <div
                    key={section.id}
                    className="border-b border-gray-200 dark:border-gray-600"
                  >
                    <button
                      onClick={() =>
                        setSelectedInfo(isOpen ? null : section.id)
                      }
                      className="w-full px-3 sm:px-4 py-4 sm:py-5 flex items-center rounded-md justify-between hover:bg-gray-50 dark:hover:bg-base-100 transition-all duration-300"
                    >
                      <span
                        className={`text-left transition-all duration-300 ${
                          isOpen
                            ? "text-green-700 dark:text-primary font-bold text-lg sm:text-xl lg:text-2xl"
                            : "text-primary dark:text-hero font-normal text-xs sm:text-sm lg:text-base"
                        }`}
                      >
                        {section.title}
                      </span>

                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "bg-green-700 dark:bg-primary border-primary"
                            : "bg-white dark:bg-base-100 border-primary hover:border-primary hover:bg-green-50/40"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 ${
                            isOpen
                              ? "-rotate-90 text-white"
                              : "rotate-90 text-primary"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-3 sm:px-4 pb-4 sm:pb-5 animate-slideDown">
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Left - Carousel */}
          <div
            className="flex-1 w-full flex items-center justify-center pb-6 sm:pb-8 lg:pb-10 h-64 sm:h-80 lg:h-auto"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="relative h-80 sm:h-96 lg:h-[700px] w-full flex items-center justify-center"
              style={{ overflow: "visible" }}
              onMouseEnter={() => setWhatHovered(true)}
              onMouseLeave={() => setWhatHovered(false)}
              onTouchStart={() => setWhatHovered(true)}
              onTouchEnd={() => setWhatHovered(false)}
            >
              {whatImages.map((src, i) => {
                const n = whatImages.length;
                let raw = i - whatIndex;

                if (raw > Math.floor(n / 2)) raw -= n;
                if (raw < -Math.floor(n / 2)) raw += n;

                if (Math.abs(raw) > 1) return null;

                const translateY = raw * 140;
                const distance = Math.abs(raw);
                const scale = raw === 0 ? 1 : 0.88;
                const opacity = raw === 0 ? 1 : 0.6;
                const blur = distance === 0 ? "blur(0px)" : "blur(3px)";
                const zIndex = 10 - distance;

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 rounded-3xl overflow-hidden bg-green-50/40 dark:bg-base-100 shadow-2xl"
                    style={{
                      width: raw === 0 ? "82%" : "72%",
                      height: raw === 0 ? "52%" : "45%",
                      top: `calc(50% + ${translateY}px)`,
                      transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
                      opacity,
                      filter: blur,
                      zIndex,
                      willChange: "transform, opacity, filter, top",
                      transition:
                        "top 1000ms cubic-bezier(0.22,1,0.36,1), transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms linear, filter 1000ms linear",
                    }}
                  >
                    <img
                      src={src}
                      alt={`slide-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>{" "}
      {/* How to Manage Section */}
      {/* Reuse Benefits */}
      <div className="mt-20">
        <div className="flex items-center gap-10 flex-wrap px-0">
          <div
            className="w-[22rem] lg:w-[32rem] md:w-[25rem] md:h-[27vh] h-[43vh] lg:h-[60vh] xl:h-[50vh] bg-third rounded-e-badge p-6 lg:p-8"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1
              className="font-bold text-white text-2xl lg:text-4xl"
              ref={joinMovementRef}
            >
              Join the 3R <br /> Movement! 🌿
            </h1>
            <p className=" text-gray-500 dark:text-gray-400 font-medium text-[13px] lg:text-[15px] xl:text-base max-w-[10.8rem] lg:max-w-[20.5rem] text-justify mt-5 lg:mt-7">
              Reduce, Reuse, and Recycle help us cut waste, save resources, and
              protect the balance of nature. Because the Earth needs action, not
              just words.
            </p>

            <div className="relative lg:-mt-6 flex justify-end mx-18 lg:-mx-28 -mt-7">
              <div className="w-[7rem] lg:w-[12rem] h-[9rem] lg:h-[13rem] absolute bottom-[-0.5rem] -rotate-[3deg] z-0 bg-gray-200/30 p-1 lg:p-2 rounded-lg">
                <img
                  src="https://images.pexels.com/photos/7190613/pexels-photo-7190613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Reuse example"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[7.5rem] lg:w-[10rem] h-[8rem] lg:h-[11rem] absolute rotate-[15deg] z-10 bg-gray-200/30 p-1 lg:p-2 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1604631698209-c105c7874ea8?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Reuse example 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* <p className="border-white border-b-2 flex mt-24 lg:mt-20 xl:mt-28 z-0"></p> */}
          </div>
          <div className="flex flex-col text-black text-4xl lg:text-[53px] justify-end text-center mx-auto mb-12 lg:mb-0 leading-relaxed">
            <h1
              className="font-bold text-secondary dark:text-hero"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              LET'S DO 3R GUYS!
            </h1>
            <h1
              className="font-bold text-transparent custom-outline text-secondary"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              LET'S DO 3R GUYS!
            </h1>
            <h1
              className="font-bold text-secondary dark:text-hero"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              LET'S DO 3R GUYS!
            </h1>
            <h1
              className="font-bold text-transparent custom-outline text-primary"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              LET'S DO 3R GUYS!
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gradient dark:bg-gradient-to-tl dark:to-[#249E52] dark:from-[#0D381D] dark:rounded-r-full to-white h-[12rem] md:h-[10rem] lg:h-[13rem] w-full mt-20">
        <div className="flex items-center justify-between lg:mt-20">
          <div className="p-4 lg:pl-14 lg:pb-16">
            <h1
              className="text-secondary dark:text-hero text-3xl lg:text-5xl font-bold"
              ref={whatIsReuseRef}
              data-aos="fade-right"
              data-aos-delay="150"
            >
              What Is Reuse?
            </h1>
            <p
              className="text-gray-500 lg:max-w-[35rem] dark:text-white md:text-[15px] mt-3  mb-6 text-base lg:text-base text-justify leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Reuse means using items more than once instead of throwing them
              away. 🌿 It’s about finding new purposes for what we have — to
              reduce waste, save money, and protect the environment.
            </p>
          </div>
          <div className="pr-12" data-aos="fade-zoom-in" data-aos-delay="300">
            <img
              src={kelapa}
              alt="Reuse tips"
              className="hidden lg:block md:block md:w-[25rem] lg:w-[23rem]"
            />
          </div>
        </div>
      </div>
      <div className="p-10" data-aos="fade-up" data-aos-delay="300">
        <ImageSlider />
      </div>
      <div
        ref={manageRef}
        className="py-12 lg:pt-32 pb-2 dark:bg-base-200 relative mx-10"
      >
        {/* Decorative stars */}
        <div
          className="absolute right-[30rem] top-12 z-10 pointer-events-none"
          data-aos="zoom-in"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/70 dark:text-white text-3xl lg:mt-12 sm:text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div
          className="absolute right-[26rem] top-20 z-10 pointer-events-none"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/50 dark:text-hero text-2xl sm:text-3xl md:text-3xl lg:text-4xl" />
        </div>

        <h2
          ref={reuseHeaderRef}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          Give Things a{" "}
          <span className="text-primary dark:text-hero">Second Life 🌿</span>
        </h2>
        <p
          className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Reusing is about finding new ways to use what we already have. With a
          little creativity, old materials can serve new purposes — reducing
          waste, saving money, and inspiring more sustainable daily habits.
        </p>

        <div
          className="flex flex-wrap gap-3 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["Save Nature, Save Us 🍃"].map((method) => (
            <button
              onClick={() => {
                setActiveHero("reuse");
                reuseHeaderRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              key={method}
              aria-pressed={activeHero === "reuse"}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium ${
                activeHero === "reuse"
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white"
              }`}
            >
              {method}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Reuse Section */}
      <section id="reuse">
        <div className="mt-10 mx-2 sm:mx-4 dark:bg-base-200 p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
            <img
              src={shoes}
              alt="Reuse shoes"
              className="w-80 md:w-64 lg:w-[30rem] mb-0 lg:mb-10"
              data-aos="fade-right"
              data-aos-delay="100"
            />

            <div className="flex flex-col items-start justify-center gap-4 max-w-lg text-left">
              {/* Today’s Relevance */}
              <div className="flex items-start gap-3 mb-12 lg:-ml-32 -ml-0">
                <span
                  className="bg-hero p-2 rounded-lg text-black flex-shrink-0 mt-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <IoLeafOutline size={20} />
                </span>
                <div>
                  <h2
                    className="text-lg mb-4 md:text-3xl font-bold text-secondary dark:text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Today’s Relevance
                  </h2>
                  <p
                    className="text-[14px] lg:text-base text-gray-600 dark:text-gray-100 leading-relaxed text-justify mt-1"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    In a world full of fast production and overconsumption,
                    “reduce” teaches us to live more mindfully — valuing what we
                    already have and making sustainable choices daily. 🌍
                  </p>
                </div>
              </div>

              {/* Benefits of Reuse */}
              <div className="flex items-start gap-3 mb-12 -ml-0 lg:-ml-10">
                <span
                  className="bg-hero p-2 rounded-lg text-black flex-shrink-0 mt-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <IoLeafOutline size={20} />
                </span>
                <div>
                  <h2
                    className="text-lg md:text-3xl font-bold mb-4 text-secondary dark:text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Benefits of Reuse
                  </h2>
                  <ul
                    className="space-y-0.5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {[
                      "Extends product lifespan and reduces landfill waste.",
                      "Saves money by choosing quality over quantity.",
                      "Lowers production demand and reduces pollution.",
                      "Encourages creativity and sustainable habits. ♻️",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-base text-justify"
                      >
                        <span className="text-hero mt-0.5 inline-flex flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 512 512"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="30"
                            className="text-hero"
                          >
                            <path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58" />
                            <path d="M173 253c86 81 175 129 292 147" />
                          </svg>
                        </span>
                        <span className="text-gray-700 dark:text-gray-200">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How to Reuse Section */}
        <div className="py-12 lg:pt-20 lg:py-16 mx-4 sm:mx-8 lg:mx-12">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-secondary dark:text-primary flex items-center justify-center gap-2"
              data-aos="fade-up"
            >
              <span>
                How to{" "}
                <span className="text-primary dark:text-hero">Reuse?</span>
              </span>
            </h2>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Reuse means giving new purpose to items still usable. By
              repurposing or donating them, we can reduce waste and make life
              more sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {[
              {
                id: "eco-bags",
                title: "Eco-Friendly Bags",
                description:
                  "Switch to reusable bags made from cloth or bamboo to reduce plastic waste.",
                image:
                  "https://images.unsplash.com/photo-1732963947955-858ad7d5e540?auto=format&fit=crop&q=80&w=627",
              },
              {
                id: "crafts",
                title: "Creative Crafts",
                description:
                  "Turn old items like bottles or jars into creative crafts or simple decorations.",
                image:
                  "https://images.unsplash.com/photo-1653906719431-60ecb8e86e95?auto=format&fit=crop&q=80&w=1170",
              },
              {
                id: "bottles",
                title: "Reusable Containers",
                description:
                  "Reuse bottles or jars for storage, watering plants, or DIY projects.",
                image:
                  "https://images.unsplash.com/photo-1533629046790-addefc28951e?auto=format&fit=crop&q=80&w=1170",
              },
            ].map((item, idx) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group cursor-pointer"
                onClick={() => setSelectedReuse(item.id)}
              >
                {/* Card */}
                <div
                  className="
        relative overflow-hidden rounded-xl
        bg-white dark:bg-base-200
        border border-gray-200/60 dark:border-gray-700/50
        hover:border-gray-300 dark:hover:border-gray-600
        transition-all duration-300
      "
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-base-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="
            text-base lg:text-[17px] font-semibold 
            text-gray-900 dark:text-white 
            mb-2
            group-hover:text-primary dark:group-hover:text-hero
            transition-colors duration-300
          "
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="
          absolute bottom-3 right-5
          w-8 h-8 rounded-full
          bg-primary
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transform translate-x-2 group-hover:translate-x-0
          transition-all duration-300
        "
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reuse Detail Modal */}
        {selectedReuse &&
          ["eco-bags", "crafts", "bottles"].includes(selectedReuse) && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedReuse(null)}
            >
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {[
                  {
                    id: "eco-bags",
                    title: "Eco-Friendly Bags",
                    detail:
                      "Switch to reusable bags made from cloth or bamboo to reduce plastic waste. It's a small step that saves energy and keeps our environment cleaner. By bringing your own bag, you help protect nature and build a simple habit for a greener planet.",
                    image:
                      "https://images.unsplash.com/photo-1732963947955-858ad7d5e540?auto=format&fit=crop&q=80&w=627",
                    icon: "🌿",
                  },
                  {
                    id: "crafts",
                    title: "Creative Crafts",
                    detail:
                      "Turn old items like bottles or jars into creative crafts or simple decorations. Reusing them reduces waste and inspires sustainable creativity. Small creative acts can make your space more meaningful while helping the planet.",
                    image:
                      "https://images.unsplash.com/photo-1653906719431-60ecb8e86e95?auto=format&fit=crop&q=80&w=1170",
                    icon: "🎨",
                  },
                  {
                    id: "bottles",
                    title: "Reusable Containers",
                    detail:
                      "Reuse bottles or jars for storage, watering plants, or DIY projects. It saves resources and reduces single-use waste. Simple reuse habits can make a lasting impact on the environment.",
                    image:
                      "https://images.unsplash.com/photo-1533629046790-addefc28951e?auto=format&fit=crop&q=80&w=1170",
                    icon: "🌎",
                  },
                ]
                  .filter((item) => item.id === selectedReuse)
                  .map((item) => (
                    <div key={item.id}>
                      {/* Header with Image */}
                      <div className="relative">
                        {/* Close Button */}
                        <button
                          onClick={() => setSelectedReuse(null)}
                          className="
                            absolute top-4 right-4 z-10
                            w-10 h-10 rounded-full
                            bg-white/90 dark:bg-gray-900/90
                            backdrop-blur-sm
                            flex items-center justify-center
                            hover:bg-white dark:hover:bg-gray-900
                            transition-all duration-200
                            shadow-lg
                          "
                        >
                          <svg
                            className="w-5 h-5 text-gray-700 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>

                        {/* Image */}
                        <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                          {/* Icon Badge */}
                          <div className="absolute bottom-4 left-6">
                            <div className="w-14 h-14 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
      </section>
      {/* How to Reuse */}
      <div className="bg-gradient-to-r from-gradient dark:bg-gradient-to-tl dark:to-[#249E52] dark:from-[#0D381D] dark:rounded-r-full to-white h-[12rem] md:h-[10rem] lg:h-[13rem] w-full mt-20">
        <div className="flex items-center justify-between lg:mt-20">
          <div className="p-4 lg:pl-14 lg:pb-16">
            <h1
              className="text-secondary dark:text-hero text-3xl lg:text-5xl font-bold"
              ref={whatIsReduceRef}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              What Is Reduce?
            </h1>
            <p
              className="text-gray-500 lg:max-w-[35rem] dark:text-white md:text-[15px] mt-3 text-base lg:text-base text-justify leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Reduce means using fewer materials and energy by avoiding
              unnecessary consumption. It inspires us to buy wisely, choose
              durable products, and protect our planet. 🌍
            </p>
          </div>
          <div className="pr-12">
            <img
              src={kelapa}
              alt="Reuse tips"
              className="hidden lg:block md:block md:w-[25rem] lg:w-[23rem]"
              data-aos="fade-zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
      <div className="p-10" data-aos="fade-up" data-aos-delay="300">
        <ImageSlider />
      </div>
      {/* Reuse Cards */}
      {/* <div className="mt-12 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {DataReuse.map((card) => (
          <Card3R
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div> */}
      <div
        ref={manageRef}
        className="py-12 lg:pt-32 pb-2 dark:bg-base-200 relative mx-10"
      >
        {/* Decorative stars */}
        <div
          className="absolute right-[30rem] top-12 z-10 pointer-events-none"
          data-aos="zoom-in"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/70 dark:text-white text-3xl lg:mt-12 sm:text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div
          className="absolute right-[26rem] top-20 z-10 pointer-events-none"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/50 dark:text-hero text-2xl sm:text-3xl md:text-3xl lg:text-4xl" />
        </div>

        <h2
          ref={reduceHeaderRef}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          Live Simply,{" "}
          <span className="text-primary dark:text-hero">Waste Less 🌍</span>
        </h2>
        <p
          className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Reducing means choosing only what we truly need and avoiding
          unnecessary consumption. By living mindfully and valuing quality over
          quantity, we save energy, cut pollution, and protect the planet for
          generations to come.
        </p>

        <div
          className="flex flex-wrap gap-3 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["Together for a Greener World 🌱"].map((method) => (
            <button
              onClick={() => {
                setActiveHero("reduce");
                reduceHeaderRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              key={method}
              aria-pressed={activeHero === "reduce"}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium ${
                activeHero === "reduce"
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white"
              }`}
            >
              {method}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Why Reduce Matters Section */}
      <div className="py-12 lg:py-16 mx-4 sm:mx-8 lg:mx-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div
            className="bg-gray-200 dark:bg-gray-700 rounded-3xl h-80 lg:h-96 flex items-center justify-center overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="https://images.unsplash.com/photo-1538993134100-27305b66a47c?q=80&w=1470&auto=format&fit=crop"
              alt="Reduce"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content Column */}
          <div data-aos="fade-left">
            {/* Today’s Relevance */}
            <div className="flex items-start gap-3 mb-16">
              <span className="bg-hero p-2 rounded-lg text-black flex-shrink-0 mt-1 ">
                <IoLeafOutline size={20} />
              </span>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4 text-secondary dark:text-primary">
                  Today’s Relevance
                </h2>
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-200 leading-relaxed">
                  In a fast-paced world, “reduce” reminds us to slow down, live
                  simply, and value what we already have. It’s the first and
                  most impactful step toward sustainability.
                </p>
              </div>
            </div>

            {/* Benefits of Reducing */}
            <div className="flex items-start gap-3">
              <span className="bg-hero p-2 rounded-lg text-black flex-shrink-0 mt-1">
                <IoLeafOutline size={20} />
              </span>
              <div>
                <h3 className="text-xl lg:text-3xl font-bold mb-4 text-secondary dark:text-primary">
                  Benefits of Reducing
                </h3>
                <ul className="space-y-2">
                  {[
                    "Reduces demand for new materials and resources.",
                    "Saves energy and lowers pollution from manufacturing.",
                    "Prevents overconsumption and unnecessary waste.",
                    "Encourages mindful and sustainable living habits. 🌱",
                  ].map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-base text-justify"
                    >
                      <span className="text-hero mt-0.5 inline-flex flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="30"
                          className="text-hero"
                        >
                          <path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58" />
                          <path d="M173 253c86 81 175 129 292 147" />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-200">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How to Reduce Section */}
      <div className="py-12 lg:py-16 mx-4 sm:mx-8 lg:mx-12 dark:bg-base-200 rounded-3xl mt-8">
        <div className="text-center mb-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-secondary dark:text-primary"
            data-aos="fade-up"
          >
            How to <span className="text-primary dark:text-hero">Reduce?</span>
          </h2>
          <p
            className="text-sm lg:text-base text-gray-600 dark:text-gray-200 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Reducing means using less and avoiding waste. By choosing what we
            truly need and eco-friendly products, we help create a greener
            future.
          </p>
        </div>

        {/* Reduce Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              id: "buy-need",
              title: "Buy Only What You Need",
              description: "Avoid overbuying and focus on what truly matters.",
              image:
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1470&auto=format&fit=crop",
            },
            {
              id: "minimal-packaging",
              title: "Choose Minimal Packaging",
              description:
                "Pick products with simple, recyclable, or minimal packaging.",
              image:
                "https://images.unsplash.com/photo-1571440069434-66bfb04c5e5d?q=80&w=1470&auto=format&fit=crop",
            },
            {
              id: "go-digital",
              title: "Go Digital When Possible",
              description:
                "Switch from paper to digital alternatives like e-bills or e-books.",
              image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group cursor-pointer"
              onClick={() => setSelectedReuse(item.id)}
            >
              <div
                className="
          relative overflow-hidden rounded-xl
          bg-white dark:bg-base-200
          border border-gray-200/60 dark:border-gray-700/50
          hover:border-gray-300 dark:hover:border-gray-600
          transition-all duration-300
        "
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-base-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="
              text-base lg:text-[17px] font-semibold 
              text-gray-900 dark:text-white 
              mb-2
              group-hover:text-primary dark:group-hover:text-hero
              transition-colors duration-300
            "
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div
                  className="
            absolute bottom-3 right-5
            w-8 h-8 rounded-full
            bg-primary
            flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transform translate-x-2 group-hover:translate-x-0
            transition-all duration-300
          "
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Reduce Detail Modal */}
      {selectedReuse &&
        ["buy-need", "minimal-packaging", "go-digital"].includes(
          selectedReuse
        ) && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedReuse(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {[
                {
                  id: "buy-need",
                  title: "Buy Only What You Need",
                  detail:
                    "Avoid overbuying and focus on what truly matters. Purchasing only what you need helps minimize waste, saves money, and supports a sustainable lifestyle. 💰",
                  image:
                    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1470&auto=format&fit=crop",
                },
                {
                  id: "minimal-packaging",
                  title: "Choose Minimal Packaging",
                  detail:
                    "Pick products with simple, recyclable, or minimal packaging. Every small choice to avoid excess plastic or wrapping helps reduce waste at the source.",
                  image:
                    "https://images.unsplash.com/photo-1571440069434-66bfb04c5e5d?q=80&w=1470&auto=format&fit=crop",
                },
                {
                  id: "go-digital",
                  title: "Go Digital When Possible",
                  detail:
                    "Switch from paper to digital alternatives—like e-bills, e-books, or digital notes. Reducing paper use saves trees and cuts energy in production. 📱",
                  image:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
                },
              ]
                .filter((item) => item.id === selectedReuse)
                .map((item) => (
                  <div key={item.id}>
                    {/* Image Header */}
                    <div className="relative">
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedReuse(null)}
                        className="
                    absolute top-4 right-4 z-10
                    w-10 h-10 rounded-full
                    bg-white/90 dark:bg-gray-900/90
                    backdrop-blur-sm
                    flex items-center justify-center
                    hover:bg-white dark:hover:bg-gray-900
                    transition-all duration-200
                    shadow-lg
                  "
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      {/* Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      {/* Reduce Benefits */}
      <div className="bg-gradient-to-r from-gradient dark:bg-gradient-to-tl dark:to-[#249E52] dark:from-[#0D381D] dark:rounded-r-full to-white h-[12rem] md:h-[10rem] lg:h-[13rem] w-full mt-20">
        <div className="flex items-center justify-between lg:mt-20">
          <div className="p-4 lg:pl-14 lg:pb-16">
            <h1
              className="text-secondary dark:text-hero text-3xl lg:text-5xl font-bold"
              ref={whatIsRecycleRef}
              data-aos="fade-right"
              data-aos-delay="150"
            >
              What Is Recycle?
            </h1>
            <p
              className="text-gray-500 lg:max-w-[35rem] dark:text-white md:text-[15px] mt-3 text-base mb-6 lg:text-base leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Recycle means turning used materials into new, useful products. It
              helps reduce landfill waste, save resources, and lower pollution —
              giving old items new purpose while protecting the planet. ♻️
            </p>
          </div>
          <div className="pr-12">
            <img
              src={kelapa}
              alt="Reuse tips"
              className="hidden lg:block md:block md:w-[25rem] lg:w-[23rem]"
              data-aos="fade-zoom-in"
              data-aos-delay="150"
            />
          </div>
        </div>
      </div>
      {/* <div className="mt-20 mx-0">
        <div className="flex justify-end items-end bg-third rounded-s-full lg:rounded-l-full lg:ml-auto lg:mr-0 lg:max-w-[45rem] md:ml-auto md:mr-0 md:max-w-[31rem]">
          <div className="w-[18rem] md:w-[23rem] lg:w-[28rem] h-[26vh] md:h-[26vh] lg:h-[45vh] xl:h-[37vh] pl-16 lg:pl-0">
            <h1 className="text-base md:text-3xl lg:text-3xl font-bold text-white mt-3 lg:mt-6">
              What Is Recycle?
            </h1>

            <p className="text-[12px] lg:text-sm md:text-[15px] text-white max-w-80 text-justify mt-1 lg:mt-4 pr-2">
              Recycle means turning waste materials into new, useful products that can be used again. It helps reduce landfill waste, saves natural resources, and lowers pollution — giving old items a new purpose while protecting the environment. 🌍
            </p> */}
      {/* <div className="relative lg:-mt-6 flex justify-start mx-18 lg:mx-0 -mt-7">
              <div className="w-[8rem] lg:w-[11.9rem] h-[8rem] lg:h-[12rem] absolute bottom-[2.5rem] mr-16 -mb-5 right-full z-0 bg-black/30 dark:bg-gray-200/30 p-2 lg:p-2 rounded-full">
                <img src={bunga} alt="Bunga" className="w-full h-full object-cover" />
              </div>
              <div
                className="w-[6.9rem] lg:w-[9.9rem] mr-48 h-[7rem] lg:h-[10rem] -mr-0 
  absolute -top-6 lg:-top-10 mb-10 right-full z-0 
  bg-black/30 dark:bg-gray-200/30 p-2 lg:p-2 rounded-full"
              >
                <img src={kardus} alt="Kardus" className="w-full h-full object-cover" />
              </div>

            </div> */}
      {/* </div>
        </div>
      </div> */}
      <div className="p-10" data-aos="fade-up" data-aos-delay="100">
        <ImageSlider />
      </div>
      <div
        ref={manageRef}
        className="py-12 lg:pt-32 pb-2 dark:bg-base-200 relative mx-10"
      >
        {/* Decorative stars */}
        <div
          className="absolute right-[30rem] top-12 z-10 pointer-events-none"
          data-aos="zoom-in"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/70 dark:text-white text-3xl lg:mt-12 sm:text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div
          className="absolute right-[26rem] top-20 z-10 pointer-events-none"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/50 dark:text-hero text-2xl sm:text-3xl md:text-3xl lg:text-4xl" />
        </div>

        <h2
          ref={recycleHeaderRef}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          Transform Waste{" "}
          <span className="text-primary dark:text-hero">into Worth ♻️</span>
        </h2>
        <p
          className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Recycling means transforming used materials into useful products
          again. It helps conserve resources, lower pollution, and support a
          circular economy where nothing goes to waste and everything finds new
          life.
        </p>

        <div
          className="flex flex-wrap gap-3 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["Love Earth, Live Green 🌿"].map((method) => (
            <button
              onClick={() => {
                setActiveHero("recycle");
                recycleHeaderRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              key={method}
              aria-pressed={activeHero === "recycle"}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium ${
                activeHero === "recycle"
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white"
              }`}
            >
              {method}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        ref={recyclingRelevanceRef}
        className="py-16 lg:py-16 bg-white dark:bg-base-200 relative px-4 sm:px-8 lg:px-16"
      >
        {/* Section 1 - Today's Relevance (Image | Text) */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10"
          data-aos="fade-up"
        >
          {/* Left Image */}
          <div className="w-72 h-52 sm:w-80 sm:h-56 lg:w-[22rem] lg:h-[16rem] bg-gray-100 dark:bg-base-100 rounded-3xl shadow-inner overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552224496-6e72a82b9f6e?q=80&w=1470&auto=format&fit=crop"
              alt="Today's Relevance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="max-w-xl lg:pr-6">
            <div className="flex items-start gap-3 mb-4">
              <span
                className="bg-hero p-2 rounded-lg text-black flex-shrink-0 mt-1"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <IoLeafOutline size={22} />
              </span>
              <h2
                className="text-3xl sm:text-3xl font-bold text-secondary dark:text-primary"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                Today’s Relevance
              </h2>
            </div>
            <p
              className="text-gray-600 dark:text-gray-300 text-base sm:text-base text-justify"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              In a time when waste generation keeps rising, recycling reminds us
              that even small actions can make a global difference. It’s a
              practical way to reduce landfill waste and protect our planet’s
              limited resources.
            </p>
          </div>
        </div>

        {/* Section 2 - Benefits of Recycling (Text | Image) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="max-w-xl lg:pl-6">
            <div className="flex items-start gap-3 mb-4">
              <span
                className="bg-hero p-2 rounded-lg text-black flex-shrink-0 mt-1"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <IoLeafOutline size={22} />
              </span>
              <h2
                className="text-3xl sm:text-3xl font-bold text-secondary dark:text-primary"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                Benefits of Recycling
              </h2>
            </div>
            <ul
              className="space-y-2 text-base"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              {[
                "Reduces waste sent to landfills and incinerators.",
                "Saves energy and conserves natural resources.",
                "Decreases greenhouse gas emissions and pollution.",
                "Creates jobs and supports eco-friendly industries.",
              ].map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-base text-justify"
                >
                  <span className="text-hero mt-0.5 inline-flex flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 512 512"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="30"
                      className="text-hero"
                    >
                      <path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58" />
                      <path d="M173 253c86 81 175 129 292 147" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-72 h-52 sm:w-80 sm:h-56 lg:w-[22rem] lg:h-[16rem] bg-gray-100 dark:bg-base-100 rounded-3xl shadow-inner overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop"
              alt="Benefits of Recycling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* How to Recycle Section */}
      <div className="py-12 lg:py-16 mx-4 sm:mx-8 lg:mx-12">
        <div className="text-center mb-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-secondary dark:text-primary"
            data-aos="fade-up"
          >
            How to <span className="text-primary dark:text-hero">Recycle?</span>
          </h2>
          <p
            className="text-sm lg:text-base text-gray-600 dark:text-gray-200 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Recycling means turning used materials into new products. It saves
            resources, reduces waste, and protects our planet. ♻️
          </p>
        </div>

        {/* Recycle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              id: "sort-waste",
              title: "Sort Your Waste Properly",
              description:
                "Separate recyclables like paper, plastic, glass, and metal from other trash.",
              image:
                "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop",
            },
            {
              id: "support-recycled",
              title: "Support Recycled Products",
              description:
                "Choose items made from recycled materials—such as paper, packaging, or fabrics.",
              image:
                "https://images.unsplash.com/photo-1603912294521-6ed1ab40ac67?q=80&w=1470&auto=format&fit=crop",
            },
            {
              id: "recycle-electronics",
              title: "Recycle Electronics Responsibly",
              description:
                "Dispose of old gadgets at certified e-waste centers.",
              image:
                "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1470&auto=format&fit=crop",
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group cursor-pointer"
              onClick={() => setSelectedRecycle(item.id)}
            >
              <div
                className="
          relative overflow-hidden rounded-xl
          bg-white dark:bg-base-200
          border border-gray-200/60 dark:border-gray-700/50
          hover:border-gray-300 dark:hover:border-gray-600
          transition-all duration-300
        "
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-base-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base lg:text-[17px] font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-hero transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div
                  className="
            absolute bottom-3 right-5
            w-8 h-8 rounded-full
            bg-primary
            flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transform translate-x-2 group-hover:translate-x-0
            transition-all duration-300
          "
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recycle Detail Modal */}
      {selectedRecycle &&
        ["sort-waste", "support-recycled", "recycle-electronics"].includes(
          selectedRecycle
        ) && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedRecycle(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {[
                {
                  id: "sort-waste",
                  title: "Sort Your Waste Properly",
                  detail:
                    "Proper sorting ensures materials can be processed and reused efficiently. 🗑️ Small daily habits make recycling easier and more effective. 🌍",
                  image:
                    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop",
                },
                {
                  id: "support-recycled",
                  title: "Support Recycled Products",
                  detail:
                    "Supporting recycled products helps close the recycling loop and reduces the need for new materials. 🌱 Every purchase brings us closer to sustainability. ♻️",
                  image:
                    "https://images.unsplash.com/photo-1603912294521-6ed1ab40ac67?q=80&w=1470&auto=format&fit=crop",
                },
                {
                  id: "recycle-electronics",
                  title: "Recycle Electronics Responsibly",
                  detail:
                    "Electronics contain valuable reusable parts and hazardous materials. Proper e-waste recycling protects both the environment and human health. 🌍",
                  image:
                    "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1470&auto=format&fit=crop",
                },
              ]
                .filter((item) => item.id === selectedRecycle)
                .map((item) => (
                  <div key={item.id}>
                    {/* Header Image */}
                    <div className="relative">
                      {/* Close */}
                      <button
                        onClick={() => setSelectedRecycle(null)}
                        className="
                    absolute top-4 right-4 z-10
                    w-10 h-10 rounded-full
                    bg-white/90 dark:bg-gray-900/90
                    backdrop-blur-sm
                    flex items-center justify-center
                    hover:bg-white dark:hover:bg-gray-900
                    transition-all duration-200
                    shadow-lg
                  "
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      {/* Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 bottom-6 z-50 rounded-full p-3 bg-green-600 text-white shadow-lg transition-transform duration-200 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </div>
  );
};

export default Page3R;
