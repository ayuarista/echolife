import React from "react";
import leaves from "../assets/Home/bg-leaves.png";
import mission from "../assets/Home/mission.jpg";
import { FaRecycle } from "react-icons/fa6";
import CardHero from "../components/molecules/CardHero";
import Impact from "../components/molecules/Impact";
import DataImpact from "../data/DataImpact";
import DataHero from "../data/DataHero";
import Articles from "../components/molecules/ArticleCard";
import DataArticle from "../data/DataArticle";
import TextContent from "../components/molecules/TextContent";
import { Link } from "react-router-dom";
import Hero from "../components/organisms/Hero";

const Home = () => {
  const currentData = DataImpact;
  const current = DataHero;
  const article = DataArticle;

  return (
    <div className="pt-12">
      <Hero />
      <div
        className="w-full md:min-h-[87vh] min-h-[15vh] lg:min-h-[79vh] xl:min-h-[89vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${leaves})`,
        }}
      >
        <section id="hero">
          <div className="mt-8 md:mt-28">
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-8 lg:gap-16">
              <div className="bg-cover object-cover w-64 sm:w-72 md:w-80 relative">
                <img
                  src={mission}
                  alt="mission"
                  className="w-full rounded-lg"
                />
                <div className="absolute -z-10 -rotate-12 h-full w-full -top-6 -left-16 bg-primary dark:bg-hero p-2 rounded-lg"></div>
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
                  Every small action contributes greatly to the preservation of
                  the earth. Together, we reduce plastic waste and save natural
                  resources. Make recycling a lifestyle, for a healthier earth
                  for our children and grandchildren.
                </div>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-stone-800">
                        Save Water
                      </span>
                      <span className="text-stone-600">59%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-stone-200">
                      <div
                        className="h-2 rounded-full bg-lime-400"
                        style={{ width: "59%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-stone-800">
                        Education
                      </span>
                      <span className="text-stone-600">88%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-stone-200">
                      <div
                        className="h-2 rounded-full bg-lime-400"
                        style={{ width: "88%" }}
                      />
                    </div>
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
          <h1 className="text-secondary text-3xl dark:text-hero lg:text-[32px] font-bold font-Poppins">
            Building the Future Through 3R
          </h1>
          <p className="font-Poppins text-sm text-gray-500 dark:text-gray-200 mt-3 max-w-[35rem] text-justify leading-relaxed ">
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
            <h1 className="text-3xl lg:text-[32px] font-bold text-secondary dark:text-hero mt-2">
              What If We Don't Care?
            </h1>
            <p className="font-Poppins text-sm text-gray-500 dark:text-gray-200 mt-4 max-w-[35rem] text-justify leading-relaxed ">
              If we choose to ignore the importance of reducing, reusing, and
              recycling, the environmental consequences will be severe and
              long-lasting. Landfills will overflow with waste, leading to
              increased pollution in our air, soil, and water.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-8 lg:mx-0 place-items-center">
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
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-hero tracking-widest text-sm dark:text-white">
                ARTICLES
              </p>
              <h1 className="text-3xl font-bold text-secondary mt-1 dark:text-hero">
                Latest Article
              </h1>
            </div>
            <Link to="/article">
              <button className="px-6 py-3 lg:px-7 lg:py-3 border-2 border-primary dark:border-hero dark:text-white dark:hover:bg-hero hover:bg-primary hover:text-white text-black rounded-full font-medium text-[14px] ml-auto mt-4 mr-4 whitespace-nowrap">
                Read More
              </button>
            </Link>
          </div>
          <p className="mt-1 font-Poppins text-sm text-gray-500 dark:text-gray-200 max-w-[35rem] text-justify leading-relaxed">
            If we choose to ignore the importance of reducing, reusing, and
            recycling, the environmental consequences will be severe and
            long-lasting. Landfills will overflow with waste, leading to
            increased pollution in our air, soil, and water.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 place-items-center">
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
