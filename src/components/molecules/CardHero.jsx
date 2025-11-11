import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CardHero = (props) => {
  return (
    <div className="group relative mt-10">
      <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        
        <Link to="/3R" className="block relative overflow-hidden h-72 sm:h-80">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          
          <div className="absolute top-4 right-4 z-20 bg-hero dark:bg-primary rounded-xl p-3 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <span className="text-white text-2xl">
              {props.icons}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 z-20 bg-primary dark:bg-hero p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <FaArrowRight className="text-white text-lg" />
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-gradient-to-r from-hero to-primary dark:from-primary dark:to-hero rounded-full"></div>
              <h2 className="font-bold text-xl sm:text-2xl text-secondary dark:text-hero font-Poppins group-hover:text-primary dark:group-hover:text-hero transition-colors duration-300">
                {props.title}
              </h2>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-[15px] xl:text-xl leading-relaxed font-Poppins line-clamp-3">
            {props.desc}
          </p>

          <Link 
            to="/3R"
            className="inline-flex items-center gap-2 text-primary dark:text-hero font-semibold text-sm group/link hover:gap-3 transition-all duration-300"
          >
            <span>Learn More</span>
            <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-hero/20 dark:border-primary/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/20 dark:border-hero/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-hero/10 to-primary/10 dark:from-primary/10 dark:to-hero/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default CardHero;