import React from "react";
import CardHero from "../../components/molecules/CardHero";
import DataHero from "../../data/DataHero";

const Section3R = () => {
  const current = DataHero;

  return (
    <div className="mt-16">
      <div data-aos="fade-down" data-aos-duration="1000">
        <p className="text-uppercase text-hero dark:text-white text-[15px] leading-tracking-widest mb-2 font-Poppins">
          CHANGE THE WORLD
        </p>
        <h1 className="text-secondary text-3xl dark:text-hero lg:text-[32px] font-bold font-Poppins">
          Building the Future Through 3R
        </h1>
        <p className="font-Poppins text-sm text-gray-500 dark:text-gray-200 mt-3 max-w-[35rem] text-justify leading-relaxed ">
          Let’s build a sustainable future through Reuse, Reduce, and Recycle.
          Every small effort counts in safeguarding our planet. Make conscious
          choices part of your daily routine, creating a cleaner, greener world
          for our future generations.
        </p>
      </div>
      <div>
        <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:mx-12 lg:mx-0 place-items-center">
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
    </div>
  );
};

export default Section3R;
