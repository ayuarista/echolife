import React from "react";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import hero from "../assets/Home/home.jpg";
import home from "../assets/Home/hero.png";
import head from "../assets/Home/3.jpg";
import { IoLeafOutline } from "react-icons/io5";
import ScrollingText from "../components/molecules/ScrollingText";
import { PiStarFour } from "react-icons/pi";
import GetStarted from "../components/molecules/GetStarted";
import BuildingTheFuture from "../components/organisms/BuildingTheFuture";
import ImageSlider from "../components/molecules/ImageSlider";
import leaves from "../assets/Home/bg-leaves.png";
import mission from "../assets/Home/mission.jpg";
import { FaRecycle } from "react-icons/fa6";
import CardHero from "../components/molecules/CardHero";
import Impact from "../components/molecules/Impact";
import DataImpact from "../data/DataImpact";
import DataHero from "../data/DataHero";
import Articles from "../components/molecules/Articles";
import DataArticle from "../data/DataArticle";
import TextContent from "../components/molecules/TextContent";
import { Link } from "react-router-dom";
const Home = () => {
  const currentData = DataImpact;
  const current = DataHero;
  const article = DataArticle;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="pt-16">
      <div
        className="w-full md:min-h-[82vh] min-h-[76.5vh] lg:min-h-[79vh] xl:min-h-[84vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/45"
        style={{
          backgroundImage: `url(${head})`,
        }}
      >
        <div className="text-center font-syne">
          <h1 className="text-6xl lg:text-6xl md:text-7xl xl:text-7xl">
            <PiStarFour className="animate-spin -rotate-90 justify-start items-start flex mt-4 ml-3 text-white" />
          </h1>
          <h1 className="font-bold lg:text-6xl md:text-7xl text-[2.7rem] leading-tight">
            Building{" "}
            <p className="bg-primary dark:bg-third text-white rotate-2  p-1 lg:p-2 mt-1 mb-1">
              Eco-Friendly{" "}
            </p>
            Digital Futures
            <h1 className="justify-end items-end flex mt-1">
              <PiStarFour className="animate-spin rotate-90 mt-3 text-hero dark:text-white text-6xl md:text-7xl" />
            </h1>
          </h1>
          <a href="#hero">
            <div className="mt-8 lg:mt-0 xl:mt-5">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`relative lg:w-96 w-[18rem] h-12 rounded-full flex items-center justify-between px-6 mx-auto cursor-pointer shadow-lg overflow-hidden transition-all duration-500 ${
                  isHovered
                    ? "bg-primary dark:bg-third"
                    : "bg-white dark:bg-base-100"
                }`}
              >
                <h1
                  className={`text-lg font-semibold transition-all duration-500 ${
                    isHovered ? "text-white" : "text-black dark:text-white"
                  }`}
                >
                  Get Started
                </h1>
                <span
                  className={`p-2 rounded-full transition-all duration-500 ${
                    isHovered ? "bg-black" : "bg-primary dark:bg-third"
                  }`}
                >
                  <GoArrowRight
                    className={`transition-all duration-500 ${
                      isHovered ? "text-white" : "text-white dark:text-white"
                    }`}
                  />
                </span>
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-primary dark:bg-third transition-all duration-1000 ease-in-out ${
                    isHovered ? "translate-x-52" : "-translate-x-full"
                  }`}
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="w-full md:min-h-[87vh] min-h-[15vh] lg:min-h-[79vh] xl:min-h-[89vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${leaves})`,
        }}
      >
        <div className="flex items-center justify-center">
          <ScrollingText />
        </div>
        <section id="hero">
          <div className="mx-8 lg:mx-12 mt-8 sm:mt-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
              <div className="bg-cover object-cover w-64 sm:w-72 md:w-80 border-dotted border-primary dark:text-hero border-[6px] p-3 rounded-lg">
                <img src={mission} alt="mission" className="w-full" />
              </div>
              <FaRecycle className="text-secondary dark:text-primary animate-slow-rotate text-6xl sm:text-5xl lg:text-6xl md:text-6xl" />
              <div className="text-white text-center lg:text-left">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl font-Poppins text-secondary dark:text-hero">
                  Our Mission
                </h1>
                <p className="font-Poppins text-sm lg:text-lg md:text-lg mt-2 max-w-md text-justify leading-relaxed text-black dark:text-white">
                  Let's realize a green future through{" "}
                  <span className="text-[17px] md:text-xl lg:text-[20px] text-primary dark:text-hero font-bold">
                    Reuse, Reduce, and Recycle.{" "}
                  </span>
                  Every small action contributes greatly to the preservation of
                  the earth. Together, we reduce plastic waste and save natural
                  resources. Make recycling a lifestyle, for a healthier earth
                  for our children and grandchildren.
                </p>
                <div className="py-2 px-2 sm:py-3 sm:px-3 rounded-lg bg-[#d9f99d] mt-3">
                  <div className="py-2 px-2 bg-hero rounded-lg flex items-center gap-3 justify-center">
                    <IoLeafOutline className="text-lg sm:text-xl text-black" />
                    <p className="text-black text-sm sm:text-md font-semibold">
                      Are You Ready To Save Our Earth?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-14 lg:mx-12 mx-8">
          <p className="text-uppercase text-hero dark:text-white text-[15px] leading-tracking-widest mb-2 font-Poppins">
            CHANGE THE WORLD
          </p>
          <h1 className="text-secondary text-3xl dark:text-hero lg:text-4xl font-bold font-Poppins">
            Building the Future Through 3R
          </h1>
          <p className="font-Poppins text-sm text-black dark:text-gray-200 mt-3 max-w-[35rem] text-justify leading-relaxed ">
            Let’s build a sustainable future through Reuse, Reduce, and Recycle.
            Every small effort counts in safeguarding our planet. Make conscious
            choices part of your daily routine, creating a cleaner, greener
            world for our future generations.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:mx-12 lg:mx-0 place-items-center">
              {current.map((DataHero, index) => (
                <CardHero
                  key={index}
                  image={DataHero.image}
                  title={DataHero.title}
                  icons={DataHero.icons}
                  desc={DataHero.desc}
                />
              ))}
            </div>
          </div>
          <div className="mt-16">
            <p className="text-hero tracking-widest text-[15px] dark:text-white">
              IMPACT
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-secondary dark:text-hero mt-2">
              What If We Don't Care?
            </h1>
            <p className="font-Poppins text-sm text-black dark:text-gray-200 mt-4 max-w-[35rem] text-justify leading-relaxed ">
              If we choose to ignore the importance of reducing, reusing, and
              recycling, the environmental consequences will be severe and
              long-lasting. Landfills will overflow with waste, leading to
              increased pollution in our air, soil, and water.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-8 lg:mx-0 place-items-center">
              {currentData.map((DataImpact, index) => (
                <Impact
                  key={index}
                  image={DataImpact.image}
                  title={DataImpact.title}
                  desc={DataImpact.desc}
                  path={DataImpact.path}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-0">
          <TextContent />
        </div>
        <div className="mt-16 mx-8 lg:mx-12">
          <p className="text-hero tracking-widest text-sm dark:text-white">
            ARTICLES
          </p>
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-bold text-secondary mt-2 dark:text-hero">
              Latest Article
            </h1>
            <Link to="/Article">
              <button className="px-6 py-3 lg:px-7 lg:py-3 border-2 border-primary dark:border-hero dark:text-white dark:hover:bg-hero hover:bg-primary hover:text-white text-black rounded-full font-medium text-[14px] ml-auto mt-4 mr-4 whitespace-nowrap">
                Read More
              </button>
            </Link>
          </div>
          <p className="font-Poppins text-sm text-black dark:text-gray-200 mt-4 max-w-[35rem] text-justify leading-relaxed">
            If we choose to ignore the importance of reducing, reusing, and
            recycling, the environmental consequences will be severe and
            long-lasting. Landfills will overflow with waste, leading to
            increased pollution in our air, soil, and water.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 place-items-center">
            {article.map((DataArticle, index) => (
              <Articles
                key={index}
                image={DataArticle.image}
                title={DataArticle.title}
                penulis={DataArticle.penulis}
                link={DataArticle.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
