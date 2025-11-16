import { FaLeaf, FaRecycle, FaRadiation } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function WasteTypesCards() {
  const navigate = useNavigate();

  const wasteTypes = [
    {
      id: 'organic',
      title: 'Organic Waste',
      description: 'Natural waste that decomposes easily, like food scraps and yard waste.',
      icon: FaLeaf,
      gradient: 'from-green-500 to-emerald-600',
      hoverGradient: 'group-hover:from-green-600 group-hover:to-emerald-700',
    },
    {
      id: 'inorganic',
      title: 'Inorganic Waste',
      description: 'Non-biodegradable materials like plastic, glass, and metal that can be recycled.',
      icon: FaRecycle,
      gradient: 'from-blue-500 to-cyan-600',
      hoverGradient: 'group-hover:from-blue-600 group-hover:to-cyan-700',
    },
    {
      id: 'hazardous',
      title: 'Hazardous Waste',
      description: 'Dangerous materials like batteries, chemicals, and electronics requiring special handling.',
      icon: FaRadiation,
      gradient: 'from-red-500 to-orange-600',
      hoverGradient: 'group-hover:from-red-600 group-hover:to-orange-800',
    },
  ];

  return (
    <div className='py-10' data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wasteTypes.map((type, idx) => {
            const IconComponent = type.icon;
            return (
              <div
                key={type.id}
                
                onClick={() => navigate(`/waste-types/${type.id}`)}
                className="group cursor-pointer h-full"
              >
                <div className="
                  relative overflow-hidden
                  bg-white dark:bg-gray-800
                  rounded-2xl
                  border border-gray-200 dark:border-gray-700
                  hover:border-transparent
                  transition-all duration-300
                  hover:shadow-2xl h-full
                ">
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br ${type.gradient}
                    transition-opacity duration-300
                  `} />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`
                        inline-flex w-12 h-12 rounded-2xl
                        bg-gradient-to-br ${type.gradient}
                        items-center justify-center
                        group-hover:scale-110 group-hover:rotate-6
                        transition-all duration-300
                        shadow-lg
                      `}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="
                      text-xl font-semibold mb-3
                      text-gray-900 dark:text-white
                      group-hover:text-white
                      transition-colors duration-300
                    ">
                      {type.title}
                    </h3>

                    {/* Description */}
                    <p className="
                      text-gray-600 dark:text-gray-300
                      group-hover:text-white/90
                      leading-relaxed mb-6 text-sm
                      transition-colors duration-300
                    ">
                      {type.description}
                    </p>

                    {/* Button */}
                    <div className="flex items-center justify-between">
                      <span className="
                        text-sm font-semibold
                        text-gray-900 dark:text-white
                        group-hover:text-white
                        transition-colors duration-300
                      ">
                        Explore More
                      </span>
                      <div className="
                        w-10 h-10 rounded-full
                        bg-gray-100 dark:bg-gray-700
                        group-hover:bg-white/20
                        flex items-center justify-center
                        group-hover:translate-x-2
                        transition-all duration-300
                      ">
                        <HiArrowRight className="
                          text-gray-900 dark:text-white
                          group-hover:text-white
                          text-xl
                        " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}