import React from "react";
import { TiTree } from "react-icons/ti";
import { FaRecycle, FaLeaf, FaGlobeAmericas } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-lime-50 via-green-50/30 to-white flex items-center justify-center overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-lime-200/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-emerald-200/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700">
            <TiTree className="text-green-600 text-lg" /> 
            Echolife - Sustain together
          </div>

          {/* Heading */}
          <h1 className="font-dmsans mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Green Solutions for Future{" "}
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-800 items-center justify-center">
                <FaLeaf className="text-white text-xl sm:text-2xl" />
              </span>
            </span>{" "}
            Waste Management
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-500 mb-8">
            Track your waste, learn recycling basics, and join community actions to give materials a second life. From households to businesses, we make sustainability simple.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="group px-8 py-3.5 bg-green-800 hover:bg-green-900 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2">
              Get Started
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300">
              How it works
            </button>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Card */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-96">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
                alt="Community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=1" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=2" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=3" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-white text-sm font-medium">150K+ Joined</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">Join us in transforming the future of waste management</p>
              </div>
            </div>
          </div>

          {/* Center Large Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=1200" 
                alt="Waste Management" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating badges */}
              <div className="absolute top-8 left-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-900">Innovative Agriculture</span>
              </div>
              
              <div className="absolute top-1/3 left-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-900">Innovative Agriculture</span>
              </div>
              
              <div className="absolute top-2/3 right-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-900">Innovative Agriculture</span>
              </div>
              
              <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-900">Innovative Agriculture</span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-96">
              <img 
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800" 
                alt="Green Nature" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-900">Innovative Agriculture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}