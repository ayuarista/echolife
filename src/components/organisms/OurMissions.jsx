import React from "react";
import mission from "../../assets/Home/mission.jpg";
import { FaRecycle } from "react-icons/fa6";
const OurMissions = () => {
  return (
    <section id="hero">
      <div className="mt-28">
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-8 lg:gap-16">
          <div className="bg-cover object-cover w-60 sm:w-72 md:w-80 relative">
            <img src={mission} alt="mission" className="w-full rounded-lg" />
            <div className="absolute -z-10 -rotate-12 h-full w-full -top-8 md:-top-6 -left-6 md:-left-12 bg-primary dark:bg-hero p-2 rounded-lg"></div>
          </div>
          <FaRecycle className="text-secondary dark:text-primary animate-slow-rotate text-6xl sm:text-5xl lg:text-6xl md:text-6xl" />
          <div className="text-white text-center lg:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl font-Poppins text-secondary dark:text-hero">
              Our <span className="text-primary">Mission</span>
            </h1>
            <div className="font-Poppins text-sm lg:text-[15px] md:text-[15px] mt-2 max-w-md text-justify leading-relaxed text-black dark:text-white">
              Let's realize a green future through{" "}
              <span className="text-[17px] md:text-xl lg:text-[18px] text-primary dark:text-hero font-bold">
                Reuse, Reduce, and Recycle.{" "}
              </span>
              Every small action contributes greatly to the preservation of the
              earth. Together, we reduce plastic waste and save natural
              resources. Make recycling a lifestyle, for a healthier earth for
              our children and grandchildren.
            </div>
            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold dark:text-white text-stone-800">
                    Recycling Rate
                  </span>
                  <span className="dark:text-white text-stone-600">63%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-stone-200">
                  <div
                    className="h-2 rounded-full bg-lime-400"
                    style={{ width: "63%" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold dark:text-white text-stone-800">
                  Waste Reduction
                  </span>
                  <span className="dark:text-white text-stone-600">72%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-stone-200">
                  <div
                    className="h-2 rounded-full bg-lime-400"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold dark:text-white text-stone-800">
                  Environmental Awareness
                  </span>
                  <span className="dark:text-white text-stone-600">85%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-stone-200">
                  <div
                    className="h-2 rounded-full bg-lime-400"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissions;
