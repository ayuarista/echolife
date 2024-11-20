import React from "react";
import DataDetailsImpact from "../data/DataDetailsImpact";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaGoogle, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { PiMoney } from "react-icons/pi";

const DetailsImpact = () => {
  const { id } = useParams();
  const impactId = parseInt(id, 10);
  const impact = DataDetailsImpact.find((impact) => impact.id === impactId);
  return (
    <div className="pt-14">
      <div
        className="w-full md:min-h-[35vh] min-h-[28vh] lg:min-h-[72vh] xl:min-h-[77vh] bg-cover bg-center flex justify-center items-center text-white"
        style={{
          backgroundImage: `url(${impact.image})`,
        }}
      ></div>
      <div className="mx-6 lg:mx-10 mt-3 mb-2 text-black dark:text-white">
        <p className="text-primary dark:text-hero text-[15px] lg:text-[17px] xl:text-lg mb-2 mt-1">IMPACT</p>
        <h1 className="text-[22px] lg:text-[26px] text-pretty font-semibold xl:text-[25px]">
          {impact.title}
        </h1>
        <p className="border-primary dark:border-hero border-[1.2px] mt-3 rounded-full"></p>
        <p className="text-justify mt-5 text-[15px] leading-relaxed">
         {impact.text}
        </p>
      </div>
      <div className="mx-5 lg:mx-10 mt-8">
        <h1 className="text-2xl text-black dark:text-white font-semibold mt-3">Impact of <span className="text-primary dark:text-hero">{impact.title}</span></h1>
        <p className="text-gray-400 text-xs md:text-sm lg:text-base xl:text-lg mt-2 leading-relaxed">{impact.descPicture}</p>
        <div className="carousel w-full rounded-box mt-5">
          <div id="item1" className="carousel-item w-full">
            <img
              src={impact.gallery1}
              className="w-full h-60 sm:h-80 md:h-[50vh] lg:h-[68vh] object-cover rounded-box"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src={impact.gallery2}
              className="w-full h-60 sm:h-80 md:h-[50vh] lg:h-[68vh] object-cover"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src={impact.gallery3}
              className="w-full h-60 sm:h-80 md:h-[50vh] lg:h-[68vh] object-cover"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src={impact.gallery4}
              className="w-full h-60 sm:h-80 md:h-[50vh] lg:h-[68vh] object-cover"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
        <div className="lg:mt-8 mt-10 text-black dark:text-white mb-8">
          <div className="mb-3">
            <p className="font-semibold text-2xl text-left">Frequently Asked Questions</p>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed">{impact.descQuestion}</p>
          </div>
          <div className="mt-8 w-full lg:w-auto">
            <div className="collapse collapse-arrow bg-base-200 mb-4">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-[17px] lg:text-xl font-medium">
                {impact.questions1}
              </div>
              <div className="collapse-content">
                <p className="text-sm text-justify leading-relaxed">{impact.answers1}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl text-[17px] font-medium">
                {impact.questions2}
              </div>
              <div className="collapse-content">
                <p className="text-sm text-justify leading-relaxed">{impact.answers2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsImpact;
