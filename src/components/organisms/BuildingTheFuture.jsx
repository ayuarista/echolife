import React from 'react'
import recycle from "../../assets/Home/recycle.png"
const BuildingTheFuture = () => {
  return (
    <div className="mt-5">
          <h1 className="text-secondary text-4xl font-bold font-Poppins">
            Building the Future Through 3R
          </h1>
          <div className="items-center font-Poppins max-w-[48rem] leading-relaxed text-justify justify-center gap-10 mt-4">
            <p className='text-black'>
              Let's realize a green future through{" "}
              <span className="text-xl text-primary font-bold">
                Reuse, Reduce, and Recycle.{" "}
              </span>
              Every small action contributes greatly to the preservation of the
              earth. Together, we reduce plastic waste and save natural
              resources. Make recycling a lifestyle, for a healthier earth for
              our children and grandchildren.
            </p>
            <button className="bg-primary font-Poppins text-white py-2 px-6 rounded-md mt-6 hover:shadow-glow transition-all duration-300 font-medium text-sm">
              Get Started
            </button>
          </div>
          <div className="flex justify-end mr-12 -mt-[13.5rem]">
            <img src={recycle} alt="" className="w-[15rem]" />
          </div>
        </div>
  )
}

export default BuildingTheFuture