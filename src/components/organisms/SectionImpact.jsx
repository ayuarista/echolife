import React from 'react'
import Impact from "../../components/molecules/Impact";
import DataImpact from "../../data/DataImpact";


const SectionImpact = () => {
  const currentData = DataImpact;

  return (
    <div className="mt-16 ">
      <div>
        <p className="text-hero tracking-widest text-[15px] dark:text-white" data-aos="fade-down">
          IMPACT
        </p>
        <h1 className="text-3xl lg:text-[32px] font-bold text-secondary dark:text-primary mt-2" data-aos="fade-up" data-aos-delay="100">
          What If We {" "}
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">
                Don't Care?
              </span>
        </h1>
        <p className="font-Poppins text-sm text-gray-500 dark:text-gray-200 mt-4 max-w-[35rem] text-justify leading-relaxed " data-aos="fade-up" data-aos-delay="200">
          If we choose to ignore the importance of reducing, reusing, and
          recycling, the environmental consequences will be severe and
          long-lasting. Landfills will overflow with waste, leading to
          increased pollution in our air, soil, and water.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:mx-0">
        {currentData.map((DataImpact, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
            data-aos-duration="700"
            style={{ width: '100%' }}
          >
            <Impact
              image={DataImpact.image}
              title={DataImpact.title}
              desc={DataImpact.desc}
              path={DataImpact.path}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionImpact