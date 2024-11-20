import React from "react";
import hero from "../assets/3R/hero.jpg";
import reuses from "../assets/3R/reuse.png";
import reduce from "../assets/3R/reduce.png";
import recycle from "../assets/3R/recycle.png";
import shoes from "../assets/3R/shoes.png";
import { IoLeafOutline } from "react-icons/io5";
import ImageSlider from "../components/molecules/ImageSlider";
import kelapa from "../assets/3R/kelapa.png";
import bunga from "../assets/3R/bunga.png";
import kardus from "../assets/3R/kardus.png";
import Card3R from "../components/molecules/Card3R";
import DataReuse from "../data/DataReuse";
import DataReduce from "../data/DataReduce";
import DataRecycle from "../data/DataRecycle";
import pakaian from "../assets/3R/pakaian.png";
import tanaman from "../assets/3R/tanaman.png";
import { TbCurrentLocation } from "react-icons/tb";

const Page3R = () => {
  return (
    <div className="pt-16">
      <div
        className="w-full md:min-h-[50vh] min-h-[55vh] lg:min-h-[68vh] xl:min-h-[59vh] bg-cover bg-center text-black bg-blend-multiply bg-black/55 flex justify-center items-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="text-white text-left p-12 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mt-0">
            3R
          </h1>
          <p className="text-4xl md:text-5xl lg:text-5xl font-semibold mt-4">
            Reuse, Reduce, Recycle
          </p>
        </div>
      </div>

      <div className="mx-10">
        <div className="mt-5">
          <h1 className="text-secondary dark:text-primary text-[27px] md:text-[38px] lg:text-[45px] font-bold text-center mt-1">
            What Do You Want to Know More Deeply?
          </h1>
          <p className="font-Poppins text-sm md:text-[15px] text-black dark:text-gray-200 mt-4 max-w-[37.5rem] text-pretty mx-auto text-center leading-relaxed">
            Together, we can reduce waste, conserve resources, and pave the way
            for a sustainable future. Let’s start making a difference, one
            choice at a time!
          </p>
          <div className="flex items-center gap-14 mt-12 justify-center flex-wrap">
            <div className="w-[12rem] bg-white dark:bg-base-100 border hover:scale-110 transform transition-all duration-200 cursor-pointer rounded-sm p-4 hover:shadow-sm">
              <a href="#reuse">
                <img src={reuses} alt="" />
                <p className="text-[16px] text-black dark:text-white font-semibold text-center">
                  Reuse
                </p>
              </a>
            </div>
            <div className="w-[12rem] bg-white border hover:scale-110 dark:bg-base-100 transform transition-all duration-150 cursor-pointer rounded-sm p-4 hover:shadow-sm">
              <a href="#reduce">
                <img src={reduce} alt="" />
                <p className="text-[16px] text-black dark:text-white font-semibold text-center">
                  Reduce
                </p>
              </a>
            </div>
            <div className="w-[12rem] bg-white border hover:scale-110 dark:bg-base-100 transform transition-all duration-150 cursor-pointer rounded-sm p-4 hover:shadow-sm">
              <a href="#recycle">
                <img src={recycle} alt="" />
                <p className="text-[16px] text-black dark:text-white font-semibold text-center">
                  Recycle
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Reuse Section */}
        <section id="reuse">
          <div className="mt-16">
            <h1 className="text-secondary dark:text-primary text-5xl font-bold text-center">
              What is Reuse?
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
              <img
                src={shoes}
                alt="Reuse shoes"
                className="w-80 md:w-64 lg:w-[27rem] mb-0 lg:mb-10"
              />
              <div className="flex flex-col items-start justify-center gap-4 max-w-lg text-left">
                <div className="flex items-start gap-2 mb-7 lg:-ml-32 -ml-0">
                  <span className="bg-hero p-2 rounded-lg text-black">
                    <IoLeafOutline size={20} />
                  </span>
                  <p className="text-[14px] md:text[15px] text-gray-600 dark:text-gray-100 font-medium max-w-[23.5rem] leading-relaxed text-justify">
                    Reuse is the act of reusing items that are still suitable
                    for use. Reusing means taking action, such as reusing unused
                    waste.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-20 -ml-0 lg:-ml-10">
                  <span className="bg-hero p-2 rounded-lg text-black">
                    <IoLeafOutline size={20} />
                  </span>
                  <p className="text-[14px] md:text[15px] text-gray-600 font-medium max-w-[23.5rem] dark:text-gray-100 leading-relaxed text-justify">
                    The main principle of reuse is how we try to utilize waste
                    so that it has a longer useful life or find other
                    alternatives for utilizing the waste.
                  </p>
                </div>
              </div>
            </div>
            <p className="border-hero border-b-2 text-white"></p>
          </div>
          <div>
            <ImageSlider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <div className="flex items-center gap-10 flex-wrap">
          <div className="w-[22rem] lg:w-[32rem] md:w-[25rem] md:h-[27vh] h-[43vh] lg:h-[60vh] xl:h-[50vh] bg-third rounded-e-badge p-6 lg:p-8">
            <h1 className="font-bold text-white text-2xl lg:text-3xl">
              The benefits of{" "}
              <span className="text-4xl lg:text-6xl font-bold text-white">
                Reuse?
              </span>{" "}
            </h1>
            <p className="text-white font-medium text-[13px] lg:text-[15px] xl:text-base max-w-[10.8rem] lg:max-w-[20.5rem] text-justify mt-5 lg:mt-7">
              The main principle of reuse is how we try to utilize waste so that
              it has a longer useful life or look for other alternatives in
              utilizing the waste.
            </p>

            <div className="relative lg:-mt-6 flex justify-end mx-18 lg:-mx-28 -mt-7">
              <div className="w-[7rem] lg:w-[12rem] h-[9rem] lg:h-[13rem] absolute bottom-[-0.5rem] -rotate-[3deg] z-0 bg-gray-200/30  p-1 lg:p-2 rounded-lg">
                <img
                  src="https://images.pexels.com/photos/7190613/pexels-photo-7190613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[7.5rem] lg:w-[10rem] h-[8rem] lg:h-[11rem] absolute rotate-[15deg] z-10 bg-gray-200/30 p-1 lg:p-2 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1604631698209-c105c7874ea8?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div></div>
            </div>
            <p className="border-white border-b-2 flex mt-24 lg:mt-20 xl:mt-28 z-0"></p>
          </div>
          <div className="flex flex-col text-black text-4xl lg:text-[53px] justify-end text-center mx-auto mb-12 lg:mb-0 leading-relaxed">
            <h1 className="font-bold text-secondary dark:text-hero">
              LET'S DO 3R GUYS!
            </h1>
            <h1 className="font-bold text-transparent custom-outline text-secondary">
              LET'S DO 3R GUYS!
            </h1>
            <h1 className="font-bold text-secondary dark:text-hero">
              LET'S DO 3R GUYS!
            </h1>
            <h1 className="font-bold text-transparent custom-outline text-primary">
              LET'S DO 3R GUYS!
            </h1>
          </div>
        </div>
      </div>
      <div class="bg-gradient-to-r from-gradient dark:bg-gradient-to-tl dark:to-[#249E52] dark:from-[#0D381D] dark:rounded-r-full to-white h-[12rem] md:h-[10rem] lg:h-[13rem] w-full">
        <div className="flex items-center justify-between lg:mt-32 md:mt-32">
          <div className="p-4 lg:pl-14 lg:pb-16">
            {" "}
            {/* Menambahkan jarak di kanan teks */}
            <h1 className="text-secondary dark:text-hero text-3xl lg:text-5xl font-bold">
              How to Reuse?
            </h1>
            <p className="text-gray-500 font-medium lg:max-w-[35rem] dark:text-white md:text-[15px] mt-3 text-sm lg:text-base text-justify leading-relaxed">
              Reuse is the reuse of items that are still usable to reduce waste.
              For example, you can repair or donate unused items, sell them, or
              find creative ways to reuse them.
            </p>
          </div>
          <div className="pr-12">
            {" "}
            {/* Menambahkan jarak di kiri gambar */}
            <img src={kelapa} alt="" className="hidden lg:block md:block md:w-[25rem] lg:w-[23rem]" />
          </div>
        </div>
      </div>
      <div className="mt-12 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {DataReuse.map((card) => (
          <Card3R
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
      <section id="reduce">
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center xl:gap-10">
            <div className="relative w-full lg:w-[25rem] h-[145px] bg-gradient-to-r from-third to-white dark:bg-gradient-to-l dark:to-secondary dark:from-[#0D381D] dark:rounded-r-full">
              <div className="w-[90%] h-[210px] lg:h-[300px] p-4 -mt-12 lg:-mt-24 ml-4 lg:ml-12">
                <img
                  src={pakaian}
                  alt="Reduce image"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 px-4 lg:px-0">
              <h1 className="text-2xl lg:text-2xl font-bold text-secondary mb-2 dark:text-primary">
                What is meant by
                <span className="block text-4xl lg:text-5xl font-bold text-secondary dark:text-primary">
                  Reduce?
                </span>
              </h1>
              <p className="text-xs lg:text-sm text-gray-500  dark:text-gray-300 leading-relaxed lg:max-w-md text-justify font-medium">
                Reduce is a way to reduce the use or purchase of materials that
                have the potential to become waste. So, reducing is one of the
                effective steps to protect natural resources, protect the
                environment, and save money.
              </p>
            </div>
          </div>
        </div>

        <div className="p-10">
          <ImageSlider />
        </div>
      </section>
      <div className="mt-20">
        <div className="flex justify-end items-end bg-third rounded-s-full lg:rounded-l-full lg:ml-[33.5rem] lg:w-[45rem] md:ml-[328px] xl:ml-[35rem] md:w-[31rem]">
          <div className="w-[18rem] md:w-[23rem] lg:w-[28rem] h-[26vh] md:h-[26vh] lg:h-[45vh] xl:h-[37vh] pl-16 lg:pl-0">
            <h1 className="text-base md:text-3xl lg:text-3xl font-bold text-white mt-3 lg:mt-6">
              Let's find out more about
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mt-2">
              Reduce!
            </h1>
            <p className="text-[12px] lg:text-sm md:text-[15px] text-white max-w-80 text-justify mt-1 lg:mt-4 pr-2">
              Reduce means efforts made to reduce waste production by reducing
              the use of single-use items or taking steps to reduce the
              consumption of natural resources.
            </p>

            <div className="relative lg:-mt-6 flex justify-start mx-18 lg:mx-0 -mt-7">
              <div className="w-[8rem] lg:w-[11.9rem] h-[8rem] lg:h-[12rem] absolute bottom-[2.5rem] mr-2 -mb-5 right-full z-0 bg-black/30 dark:bg-gray-200/30 p-2 lg:p-2 rounded-full">
                <img
                  src={bunga}
                  alt="Bunga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[6.9rem] lg:w-[9.9rem] h-[7rem] lg:h-[10rem] -mr-0 absolute top-0 mb-10 right-full z-0 bg-black/30 dark:bg-gray-200/30 p-2 lg:p-2 rounded-full">
                <img
                  src={kardus}
                  alt="Kardus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-20 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {DataReduce.map((card) => (
          <Card3R
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
      <section id="recycle">
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gradient to-white flex justify-between dark:bg-gradient-to-l dark:to-secondary dark:from-[#0D381D] dark:rounded-r-full w-72md:w-96 dark:md:w-[25rem] dark:w-[38rem]">
            <div className="p-10">
              <h1 className="font-bold text-secondary text-3xl dark:text-hero">
                What is <br />
                <h1 className="text-5xl">Recycle?</h1>
              </h1>
              <p className="text-gray-500  dark:text-white font-medium text-justify leading-relaxed max-w-lg mt-3 lg:text-base text-sm">
                Recycle or recycle is the activity of reprocessing materials or
                products that are no longer used into new items that can be
                reused.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <ImageSlider />
        </div>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="w-[22rem] h-72 bg-third rounded-r-full">
              <div className="w-60 lg:w-72 ml-[7rem]">
                <img src={tanaman} alt="" className="w-full" />
              </div>
            </div>
            <div className="p-8">
              <h1 className="font-bold text-secondary dark:text-primary text-3xl">
                The Most Efficient Way <span className="text-[40px] lg:text-5xl mt-1">to Recycle</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-300 text-justify max-w-xl mt-4 font-medium text-[15px] leading-relaxed">
                Recycle is the process of recycling unused items into new
                materials to reduce waste. The first step is to separate
                recyclable waste, such as paper, plastic, metal, and glass.
                After that, it is important to clean the items from dirt or food
                scraps so that the recycling process can run effectively. Next,
                place the recyclables in designated locations, both at home and
                in public facilities. You can also look for recycling programs
                in your community and follow the instructions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 lg:mt-20 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {DataRecycle.map((card) => (
          <Card3R
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Page3R;
