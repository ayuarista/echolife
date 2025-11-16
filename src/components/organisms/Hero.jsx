import React from "react";
import { TiTree } from "react-icons/ti";
import { FaLeaf } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1674161610452-88bb7b13a931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  return (
    <section className="
      relative min-h-screen w-full 
      bg-gradient-to-b from-lime-50 via-white to-transparent dark:bg-base-300
      flex items-center justify-center overflow-hidden
      "
    >
      <div className="
        absolute inset-0 
        bg-white/40 dark:bg-white/5 
        backdrop-blur-2xl
      " />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10">

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="
            mb-6 inline-flex items-center gap-2 
            rounded-full px-5 py-2 
            backdrop-blur-md border-gray-300 border
            text-gray-700 dark:text-gray-200
            text-sm font-medium
          ">
            <FaLeaf className="text-green-700 dark:text-green-400 text-lg" />
            Echolife - Sustain together
          </div>

          {/* Heading */}
          <h1 className="
            font-dmsans text-4xl sm:text-5xl lg:text-6xl 
            font-bold leading-tight tracking-tight 
            text-gray-900 dark:text-white 
            mb-5 max-w-4xl
          ">
             Build Eco-Friendly <br />
            
            Digital <span className="inline-flex items-center">
              <span className="
                inline-flex w-12 h-12 sm:w-14 sm:h-14 
                rounded-xl bg-gradient-to-tr from-green-700 to-green-900 dark:bg-green-500 
                items-center justify-center ml-2
              ">
                <TiTree className="text-white text-3xl" />
              </span>
            </span>{" "} Habits
          </h1>

          {/* Description */}
          <p className="
            text-gray-500 dark:text-gray-300 
            max-w-2xl text-[15px] leading-relaxed mb-10
          ">
            Agriculture the property you need with Homedewe. From dream homes and
            modern apartments to commercial properties.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button className="
              group p-2 bg-gradient-to-l from-green-700 to-green-900 dark:bg-hero 
              hover:bg-green-900 dark:hover:bg-green-400 
              text-white rounded-full transition-all duration-300 
              flex items-center gap-4 px-4
            ">
              Get Started
              <div className="
                bg-white text-black rounded-full p-2.5
                dark:bg-black dark:text-white
              ">
                <HiArrowRight className="-rotate-45 group-hover:rotate-1 transition-all duration-300" />
              </div>
            </button>
            <div>
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
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Our Community 130+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-3">
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden bg-black/80">
              <img 
                src="https://images.unsplash.com/photo-1657956735299-35814096b8a0?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt="leaves"
              />
           </div>
          </div>

          {/* CENTER BIG IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative h-96 lg:h-[380px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1722642916399-793ab812eaa9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt="Center"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-3">
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1615671524827-c1fe3973b648?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt="Right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
