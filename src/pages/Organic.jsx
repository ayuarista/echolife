import React from "react";
import buah from "../assets/Organic/buah.png";
import ImageSliderOrganic from "../components/molecules/ImageSliderOrganic";
import CardTypesWaste from "../components/molecules/CardTypesWaste";
import DataOrgaganik from "../data/DataOrganik";
const Organic = () => {
  return (
    <div className="pt-16">
      <div
        className="w-full md:min-h-[50vh] min-h-[55vh] lg:min-h-[68vh] xl:min-h-[59vh] bg-cover bg-center text-black bg-blend-multiply bg-black/55 flex justify-center items-center"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="text-white text-left p-12 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mt-0">
            Organic Waste
          </h1>
        </div>
      </div>
      <div className="mx-10">
        <div className="mt-10">
          <div className="flex justify-center items-center gap-10 flex-col lg:flex-row">
            <div className="md:w-80 w-72 mr-14">
              <img src={buah} alt="" />
            </div>
            <div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary dark:text-primary mb-5 lg:mb-10">
              What Is <span className="text-primary dark:text-hero">Organic Waste?</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm max-w-xl xl:text-base text-justify leading-relaxed font-medium mt-1 lg:mt-3">
              Organic waste is waste that comes from living things and can
              decompose naturally, such as food scraps, leaves, twigs, and
              animal waste. This type of waste can be processed into compost,
              which is useful for improving soil quality and providing nutrients
              for plants.
            </p>
            </div>
          </div>
        </div>
        <div>
          <ImageSliderOrganic />
        </div>
        <div className="mt-20">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary dark:text-primary">
            How to Manage
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-hero">
            Organic Waste?
          </h1>
          <p className="text-gray-500 dark:text-gray-300 font-medium text-sm mt-5 max-w-[25rem] leading-relaxed">
            Managing organic waste can be done in several ways. Let's take a
            look together.
          </p>
          <div className="">
            <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
              {DataOrgaganik.map((card) => (
                <CardTypesWaste
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  title={card.title}
                  desc={card.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organic;
