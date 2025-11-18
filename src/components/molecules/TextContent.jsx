import React from "react";
import hero from "../../assets/Home/2.jpg";

const TextContent = () => {
  return (
    <div className="mt-12">
      <div
        className="w-full md:min-h-[90vh] min-h-[90vh] lg:min-h-[89vh] xl:min-h-[89vh] bg-cover bg-center mx-auto text-white bg-blend-multiply bg-black/60 flex justify-center items-center"
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1681965613403-74099abe49d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="text-center">
          <h1
            className="text-6xl md:text-7xl text-white font-bold mt-0 font-syne"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            From Zero to Hero.
          </h1>
          <p
            className="mt-6 text-sm md:text-[16px] xl:text-[17px] leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Every small action counts. Start your eco-friendly journey today
            and make a lasting impact on our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
