import React from "react";
import komputer from "../assets/B3/komputer.png";
import ImageSliderOrganic from "../components/molecules/ImageSliderB3";
import CardTypesWaste from "../components/molecules/CardTypesWaste";
import DataOrgaganik from "../data/DataB3";
const PageB3 = () => {
  return (
    <div className="pt-16">
      <div
        className="w-full md:min-h-[50vh] min-h-[55vh] lg:min-h-[68vh] xl:min-h-[59vh] bg-cover bg-center text-black bg-blend-multiply bg-black/55 flex justify-center items-center"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664304009330-cfeff6f115f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="text-white text-left p-12 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mt-0">
            B3 Waste
          </h1>
        </div>
      </div>
      <div className="mx-10">
        <div className="mt-10">
          <div className="flex justify-center items-center gap-10 flex-col lg:flex-row">
            <div className="md:w-80 w-72 mr-5">
              <img src={komputer} alt="" />
            </div>
            <div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary dark:text-primary mb-5 lg:mb-10">
            What do you know about <span className="text-primary dark:text-hero">B3 Waste?</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm max-w-xl text-justify leading-relaxed font-medium mt-1 lg:mt-3">
            B3 waste is an abbreviation of Hazardous and Toxic Materials. It is the residue of an activity or process that contains substances or components that due to their nature, concentration, and/or quantity.
            </p>
            </div>
          </div>
        </div>
        <div>
          <ImageSliderOrganic />
        </div>
        <div className="mt-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary dark:text-primary">
          Several Ways to Manage <span className="text-3xl md:text-5xl font-bold text-primary dark:text-hero">
          3B Waste </span> Correctly
          </h1>
          </div>
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

export default PageB3;
