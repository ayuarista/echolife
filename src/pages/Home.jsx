import React from "react";
import leaves from "../assets/Home/bg-leaves.png";
import TextContent from "../components/molecules/TextContent";
import Hero from "../components/organisms/Hero";
import OurMissions from "../components/organisms/OurMissions";
import Section3R from "../components/organisms/Section3R";
import SectionImpact from "../components/organisms/SectionImpact";
import SectionArticle from "../components/organisms/SectionArticle";
import BacktoTop from "../components/atoms/BacktoTop";

const Home = () => {
  return (
    <div className="pt-12">
      <Hero />
      <div
        className="w-full md:min-h-[87vh] min-h-[15vh] lg:min-h-[79vh] xl:min-h-[89vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${leaves})`,
        }}
      >
        <div className="mt-14 lg:mx-12 mx-8">
          <OurMissions />
          <Section3R />
          <SectionImpact />
        </div>
        <div className="mx-0">
          <TextContent />
        </div>
        <SectionArticle />
      </div>
      <BacktoTop/>
    </div>
  );
};

export default Home;
