import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";

const OurMissions = () => {
  const avatars = [
    "https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1674161610452-88bb7b13a931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <p className="text-hero uppercase tracking-widest text-[15px] dark:text-white">
                our missions
              </p>
              <h1 className="text-3xl lg:text-[32px] font-bold text-secondary dark:text-hero mt-2">
              Our Mission for a Greener Planet
              </h1>
              <div className="font-Poppins text-sm lg:text-[15px] md:text-[15px] mt-2 max-w-md text-justify leading-relaxed text-gray-500 dark:text-white">
              Let's realize a green future through{" "}
              <span className="text-[17px] md:text-xl lg:text-[18px] text-primary dark:text-hero font-bold">
                Reuse, Reduce, and Recycle.{" "}
              </span>
              Every small action contributes greatly to the preservation of the
              earth. Together, we reduce plastic waste and save natural
              resources. Make recycling a lifestyle, for a healthier earth for
              our children and grandchildren.
            </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <RiGlobalLine className="text-yellow-500 text-xl" />
                <span className="text-gray-900 dark:text-white font-semibold">
                  195+ Countries
                </span>
              </div>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      alt={`User ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  1M+ Community
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="group px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                Learn more
              </button>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative" data-aos="fade-left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[27rem] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589122827461-0ab8d74458f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="mission"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat Card 1 - Top Right */}
              <div
                className="absolute -top-4 -right-4 bg-white dark:bg-base-300 rounded-2xl p-6 shadow-xl"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-1">
                  87%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Success Rate
                </div>
              </div>

              {/* Stat Card 2 - Bottom Right */}
              <div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-base-300 rounded-2xl p-6 shadow-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    50
                  </span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    K+
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Tons Recycled
                </div>
              </div>

              {/* Description Card - Bottom Left */}
              <div
                className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-base-300/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl max-w-xs"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Our vision is to be a global leader in sustainable waste management, ensuring a cleaner future for generations to come.
                </p>
              </div>

              {/* Description Card 2 - Top Left */}
              <div
                className="absolute -top-6 -left-6 bg-white/95 dark:bg-base-300/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl max-w-xs"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Empowering communities worldwide with education and tools to reduce waste and protect our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissions;
