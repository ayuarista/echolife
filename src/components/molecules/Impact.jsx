import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Impact = (props) => {
  return (
    <div className="mt-12">
      <Link to={props.path}>
        <div className="w-[19.5rem] md:w-[21.5rem] lg:w-[22rem] xl:w-96 min-h-[27.5rem] lg:h-[26.5rem] rounded-lg text-black dark:text-white bg-green-50 dark:bg-base-300 p-2 cursor-pointer">
          <img
            src={props.image}
            alt=""
            className="w-full object-cover h-44 rounded-lg"
          />
          <div className="p-5">
            <h1 className="font-bold text-md text-third dark:text-hero text-[19px] lg:text-xl">
              {props.title}
            </h1>
            <p className="text-black dark:text-white text-[13px] md:text-base lg:text-sm mt-3 text-justify">
              {props.desc}
            </p>
            <span className="mt-3 border-b border-gray-300"></span>
            <div className="flex justify-end items-center gap-5 mt-4">
              <p className="text-start text-xs text-medium">Discover More</p>
              <span className="p-3 rounded-full border border-black dark:border-white dark:text-white hover:bg-primary hover:dark:bg-hero transform transition-all duration-300 cursor-pointer">
                <MdOutlineArrowOutward className="text-black dark:text-white hover:text-black" /> 
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Impact;
