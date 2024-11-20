import React from "react";
import { Link } from "react-router-dom";
const CardHero = (props) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-14">
        <span className="bg-hero dark:bg-primary rounded-lg px-2 py-2 text-black dark:text-white text-xl">
          {props.icons}
        </span>
        <h1 className="font-bold text-2xl md:text-[26px] lg:text-[25px] text-secondary dark:text-hero font-Poppins">
          {props.title}
        </h1>
      </div>
      <p className="text-black text-[14px] dark:text-gray-200 max-w-72 mt-3 font-Poppins text-justify">
        {props.desc}
      </p>
      <div className="mt-3 relative group overflow-hidden rounded-lg ">
        <Link to="/3R">
          <img
            src={props.image}
            alt=""
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-125 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default CardHero;
