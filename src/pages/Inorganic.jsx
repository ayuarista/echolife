import React from "react";
import komputer from "../assets/Inorganic/sampah.png";
import ImageSliderOrganic from "../components/molecules/DataImageSliderInorganik";
import CardTypesWaste from "../components/molecules/CardTypesWaste";
import DataOrgaganik from "../data/DataAnorganik";
const PageB3 = () => {
  return (
    <div className="pt-16">
      <div
        className="w-full md:min-h-[50vh] min-h-[55vh] lg:min-h-[68vh] xl:min-h-[59vh] bg-cover bg-center text-black bg-blend-multiply bg-black/55 flex justify-center items-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="text-white text-left p-12 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mt-0">
            Inorganic Waste
          </h1>
        </div>
      </div>
      <div className="mx-10">
        <div className="mt-10">
          <div className="flex justify-center items-center gap-10 flex-col lg:flex-row">
            <div className="md:w-80 w-64 mr-7">
              <img src={komputer} alt="" />
            </div>
            <div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary dark:text-primary mb-5 lg:mb-10">
            What is meant by <span className="text-primary dark:text-hero">Inorganic Waste?</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm lg:text-base max-w-xl text-justify leading-relaxed font-medium mt-1 lg:mt-3">
            Inorganic waste is a type of waste that comes from non-biological materials, meaning it does not come from living things. This waste generally comes from non-renewable natural resources and the results of technological processes for processing mining materials and industry. 
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
            How to Manage
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-hero">
          Inorganic Waste?
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
