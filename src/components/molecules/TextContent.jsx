import React from "react";
import hero from "../../assets/Home/2.jpg";

const TextContent = () => {
  return (
    <div className="mt-12">
      <div
        className="w-full md:min-h-[90vh] min-h-[90vh] lg:min-h-[89vh] xl:min-h-[89vh] bg-cover bg-center mx-auto text-white bg-blend-multiply bg-black/60 flex justify-center items-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-7xl lg:text-[70px] md:text-8xl xl:text-8xl text-white font-bold mt-0 font-syne">
          From Zero to Hero.
          </h1>
          <p className="mt-6 text-sm md:text-[16px] xl:text-[17px] leading-relaxed max-w-3xl mx-auto">
            Every small action counts. Start your eco-friendly journey today
            and make a lasting impact on our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
