import React from "react";
import { Link } from "react-router-dom";
const Articles = (props) => {
  return (
    <div className="items-center lg:max-w-[25rem] w-80 lg:w-[24rem] xl:w-[30rem] min-h-[25rem] mt-10 dark:bg-base-300 bg-gray-100 p-[0.85rem] rounded-lg">
      <div className="w-full h-52 lg:h-56">
        <img
          src={props.image}
          alt={props.image}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-left text-black dark:text-hero text-sm lg:text-[15px] xl:text-base border-hero border-l-4 p-2 leading-tracking-widest text-uppercase font-Poppins mt-3">
          {props.penulis}
        </p>
        {/* <p className="border-secondary dark:border-hero border-[1px] mt-4"></p> */}
        <h1 className="text-left text-black dark:text-white font-semibold lg:text-xl text-[19px] mt-4">
        <Link to={props.link} className="hover:underline">
          {props.title}
        </Link>
      </h1>
    </div>
  );
};

export default Articles;
