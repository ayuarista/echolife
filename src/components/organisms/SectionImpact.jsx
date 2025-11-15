import React from 'react'
import Impact from "../../components/molecules/Impact";
import DataImpact from "../../data/DataImpact";


const SectionImpact = () => {
  const currentData = DataImpact;

  return (
    <div className="mt-16">
            <p className="text-hero tracking-widest text-[15px] dark:text-white">
              IMPACT
            </p>
            <h1 className="text-3xl lg:text-[32px] font-bold text-secondary dark:text-hero mt-2">
              What If We Don't Care?
            </h1>
            <p className="font-Poppins text-sm text-gray-500 dark:text-gray-200 mt-4 max-w-[35rem] text-justify leading-relaxed ">
              If we choose to ignore the importance of reducing, reusing, and
              recycling, the environmental consequences will be severe and
              long-lasting. Landfills will overflow with waste, leading to
              increased pollution in our air, soil, and water.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:mx-0">
              {currentData.map((DataImpact, index) => (
                <Impact
                  key={index}
                  image={DataImpact.image}
                  title={DataImpact.title}
                  desc={DataImpact.desc}
                  path={DataImpact.path}
                />
              ))}
            </div>
          </div>
  )
}

export default SectionImpact