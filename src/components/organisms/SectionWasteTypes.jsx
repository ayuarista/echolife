import React from "react";
import WasteTypesCards from "../molecules/WasteTypeCard";

const SectionWasteTypes = () => {
  return (
    <div className="mt-20">
      <div>
        <p className="text-hero tracking-widest text-[15px] dark:text-white">
          WASTE TYPES
        </p>
        <h1 className="text-3xl lg:text-[32px] font-bold text-secondary dark:text-hero mt-2">
          Different Types of Waste
        </h1>
        <p className="font-Poppins text-sm text-gray-500 dark:text-gray-200 mt-4 max-w-[35rem] text-justify leading-relaxed ">
          Understanding the different types of waste is crucial for effective
          waste management and environmental conservation. Each type has its own
          impact on the environment and requires specific disposal methods to
          minimize harm and promote sustainability.
        </p>
      </div>
      <WasteTypesCards/>
    </div>
  );
};

export default SectionWasteTypes;
