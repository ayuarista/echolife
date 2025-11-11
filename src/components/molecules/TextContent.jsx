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
          <p className="text-xs lg:text-sm xl:text-base md:text-sm text-white max-w-[20rem] lg:max-w-[30rem]  xl:max-w-[33rem] md:max-w-[25rem] mt-5 lg:mt-1 xl:mt-2 mx-auto">
          Every small step you take in reducing, reusing, and recycling waste makes a big difference. Let’s make waste management a part of our daily lives and inspire others to follow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
