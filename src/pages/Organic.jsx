
import React, { useState, useEffect, useRef, useMemo } from 'react';
import imgOrganic7 from '../assets/Organic/img-organic7.png';
import li1 from '../assets/Organic/li-1.svg';
import li2 from '../assets/Organic/li-2.svg';
import li3 from '../assets/Organic/li-3.svg';
import li4 from '../assets/Organic/li-4.svg';
import li5 from '../assets/Organic/li-5.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { PiStarFour } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Organic = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [mapUrl, setMapUrl] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


  const [waste, setWaste] = useState('');
  const [inputError, setInputError] = useState('');

  const [displayedCo2, setDisplayedCo2] = useState(null);
  const [displayedTrees, setDisplayedTrees] = useState(null);
  const [inputAnimating, setInputAnimating] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const co2Frame = useRef(null);

  const [methodSlide, setMethodSlide] = useState(0);

  const whatImages = [
    'https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://plus.unsplash.com/premium_photo-1723300629422-1c985bedc940?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170',
    'https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065',
    'https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
  ];
  const [whatIndex, setWhatIndex] = useState(0);
  const [whatHovered, setWhatHovered] = useState(false);


  useEffect(() => {
    if (whatHovered) return undefined;
    const timer = setTimeout(() => {
      setWhatIndex((s) => (s + 1) % whatImages.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [whatHovered, whatImages.length, whatIndex]);
  const whatIsRef = useRef(null);
  const manageRef = useRef(null);
  const typesRef = useRef(null);
  const mapRef = useRef(null);
  const howToRef = useRef(null);
  const calculatorRef = useRef(null);
  const detailRefs = useRef({});
  const [activeHero, setActiveHero] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleCalculate = () => {
    const w = parseFloat(waste); //jadi calculate nya tu ngitung sampah per tahun brp kg gt
    if (isNaN(w) || w <= 0) {
      setDisplayedCo2(null);
      setDisplayedTrees(null);
      return;
    }

    const co2 = w * 1.8;
    const trees = co2 / 21;




    const duration = 900;
    const start = performance.now();
    setIsCounting(true);


    if (co2Frame.current) cancelAnimationFrame(co2Frame.current);

    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);

      const ease = 1 - (1 - t) * (1 - t);
      const currentCo2 = co2 * ease;
      const currentTrees = trees * ease;
      setDisplayedCo2(currentCo2);
      setDisplayedTrees(currentTrees);

      if (t < 1) {
        co2Frame.current = requestAnimationFrame(animate);
      } else {

        setDisplayedCo2(co2);
        setDisplayedTrees(trees);
        setIsCounting(false);
      }
    };

    co2Frame.current = requestAnimationFrame(animate);
  };


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {

    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode();


    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=bank+sampah+organik+kompos+recycling&center=${latitude},${longitude}&zoom=13&maptype=${isDarkMode ? 'satellite' : 'roadmap'}`;
          setMapUrl(url);
        },
        (error) => {
          console.log('Location access denied, using default location');
          const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=bank+sampah+organik+kompos+recycling&center=${-8.6705},${115.2126}&zoom=13&maptype=${isDarkMode ? 'satellite' : 'roadmap'}`;
          setMapUrl(url);
        }
      );
    } else {
      const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=bank+sampah+organik+kompos+recycling&center=${-8.6705},${115.2126}&zoom=13&maptype=${isDarkMode ? 'satellite' : 'roadmap'}`;
      setMapUrl(url);
    }
  }, [isDarkMode]);
  useEffect(() => {
    const interval = setInterval(() => {

    }, 3500);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const c = co2Frame.current;
    return () => {
      if (c) cancelAnimationFrame(c);
    };
  }, []);

  const inputAnimTimeout = useRef(null);
  const handleInputChange = (e) => {
    const v = e.target.value;


    if (v !== '' && (isNaN(v) || v.includes('e') || v.includes('E'))) {
      setInputError('Please enter numbers only');
      return;
    }

    setInputError('');
    setWaste(v);

    setInputAnimating(true);
    if (inputAnimTimeout.current) clearTimeout(inputAnimTimeout.current);
    inputAnimTimeout.current = setTimeout(() => setInputAnimating(false), 180);
  };
  const methods = [
    {
      id: 'composting',
      title: 'Composting',
      steps: [
        {
          title: 'Prepare the container',
          detail: 'Use a clean plastic bottle or jar with a loose-fitting lid to let gas escape.'
        },
        {
          title: 'Layer dry and wet materials',
          detail: 'Alternate layers of brown materials (dry leaves, paper) and green materials (food scraps, grass clippings).'
        },
        {
          title: 'Add bio-activator (EM4)',
          detail: 'Sprinkle EM4 or other beneficial microorganisms to speed up decomposition.'
        },
        {
          title: 'Mix every 3-4 days',
          detail: 'Turn and mix the compost regularly to provide oxygen and maintain decomposition.'
        },
        {
          title: 'Wait 3-4 weeks',
          detail: 'Allow the compost to mature. It\'s ready when it looks dark and smells earthy.'
        }
      ],
      benefits: [
        'Reduces the amount of waste sent to landfills',
        'Produces natural fertilizer for healthier plants',
        'Lowers greenhouse gas emissions (like methane)',
        'Saves money — no need for chemical fertilizers'
      ],
      description: 'Composting is a natural process that turns food and garden waste into nutrient-rich soil. It helps reduce landfill waste, cuts greenhouse gas emissions, and creates organic fertilizer for plants.'
    },
    {
      id: 'eco-enzyme',
      title: 'Eco-Enzyme',
      steps: [
        {
          title: 'Prepare the container',
          detail: 'Use a clean plastic bottle or jar with a loose-fitting lid to let gas escape.'
        },
        {
          title: 'Add ingredients',
          detail: 'Mix fruit/vegetable peels, brown sugar, and water in 3:1:10 ratio.'
        },
        {
          title: 'Ferment',
          detail: 'Store in a dark place for 3 months. Release gas weekly by opening the lid slightly.'
        },
        {
          title: 'Filter the liquid',
          detail: 'After 3 months, strain the liquid and discard solids.'
        },
        {
          title: 'Use & Store',
          detail: 'Use diluted eco-enzyme for cleaning, fertilizing, or pest control.'
        }
      ],
      benefits: [
        'Turns waste into useful household cleaner',
        'Reduces chemical waste pollution',
        'Can be used for cleaning, fertilizing, or pest control'
      ],
      description: 'Eco-Enzyme is made by fermenting fruit and vegetable peels with sugar and water. It\'s a natural cleaner that\'s safe for the environment and has multiple uses.'
    },
    {
      id: 'biogas',
      title: 'Biogas Production',
      steps: [
        {
          title: 'Prepare the digester',
          detail: 'Set up an anaerobic digester tank with inlet and outlet valves.'
        },
        {
          title: 'Add organic waste',
          detail: 'Fill the digester with food scraps, manure, or plant materials.'
        },
        {
          title: 'Seal tightly',
          detail: 'Ensure the tank is airtight to create an oxygen-free environment.'
        },
        {
          title: 'Wait for decomposition',
          detail: 'Allow bacteria to break down waste over 2-3 weeks, producing methane gas.'
        },
        {
          title: 'Collect and use gas',
          detail: 'Capture the biogas and use it for cooking or generating electricity.'
        }
      ],
      benefits: [
        'Produces clean renewable energy',
        'Reduces methane emissions',
        'Turns waste into a useful resource'
      ],
      description: 'Biogas is produced by decomposing organic waste in an oxygen-free environment. It creates renewable energy that can be used for cooking or electricity.'
    },
    {
      id: 'animal-feed',
      title: 'Animal Feed',
      steps: [
        {
          title: 'Collect food waste',
          detail: 'Gather leftover fruits, vegetables, and safe food scraps.'
        },
        {
          title: 'Sort & clean',
          detail: 'Remove any harmful items like onions, chocolate, or processed foods.'
        },
        {
          title: 'Chop finely',
          detail: 'Cut food into small pieces for easier consumption.'
        },
        {
          title: 'Mix',
          detail: 'Combine different types of waste for balanced nutrition.'
        },
        {
          title: 'Feed livestock',
          detail: 'Give appropriate portions to chickens, pigs, or other animals.'
        }
      ],
      benefits: [
        'Reduces food waste',
        'Provides affordable livestock feed',
        'Supports sustainable agriculture'
      ],
      description: 'Animal feed recycling uses leftover fruits and vegetables to feed livestock. It\'s an easy way to reduce food waste and support sustainable farming.'
    },
    {
      id: 'liquid-fertilizer',
      title: 'Organic Fertilizer Liquid',
      steps: [
        {
          title: 'Prepare the ingredients',
          detail: 'Collect organic waste like fruit peels, vegetable scraps, and plant materials.'
        },
        {
          title: 'Add natural activator',
          detail: 'Mix in EM4 or other beneficial microorganisms to speed up fermentation.'
        },
        {
          title: 'Ferment',
          detail: 'Store mixture in a sealed container for 2-4 weeks in a cool place.'
        },
        {
          title: 'Filter the liquid',
          detail: 'Strain out solids and collect the nutrient-rich liquid.'
        },
        {
          title: 'Use for plants',
          detail: 'Dilute with water (1:10 ratio) and apply to soil or spray on leaves.'
        }
      ],
      benefits: [
        'Boosts plant growth naturally',
        'Reduces chemical fertilizer use',
        'Easy to make from kitchen waste'
      ],
      description: 'Organic liquid fertilizer is made by blending and fermenting organic waste with water. It provides essential nutrients for plants naturally.'
    }
  ];


  const methodImageSets = useMemo(() => ({
    'composting': [
      'https://images.unsplash.com/photo-1621496654772-c66c48290259?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1686579341853-2effa68407e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1541858619423-42850b8687c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1499125613777-b4fd250db5cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1501169527804-c216a681aab8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    ],
    'eco-enzyme': [
      'https://media.istockphoto.com/id/2186095567/id/foto/teh-kompos-atau-ekstrak-cair-sangat-cocok-sebagai-pupuk.jpg?s=1024x1024&w=is&k=20&c=y6ECxgFYpUb2sRmMg5wqdoNoGm1MncXySClT07EPxxQ=',
      'https://images.unsplash.com/photo-1587202372775-bd2f1e9e9b4f?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1582719478189-946f28b3cc0c?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1532634896-26909d0d8b9f?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1170',
    ],
    'biogas': [
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1616628189782-43e1e88fef8c?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1501004318641-87f8b6cfb1d6?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1501004318641-d76694265947?auto=format&fit=crop&q=80&w=1170',
    ],
    'animal-feed': [
      'https://images.unsplash.com/photo-1604079628043-9431b249e8a1?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1574226516831-e1dff420e12e?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1623206831038-403a7a3a4d41?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1549399548-7b2a4f6d8d2a?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1518976024611-486b4d8a1d8f?auto=format&fit=crop&q=80&w=1170',
    ],
    'liquid-fertilizer': [
      li1,
      li2,
      li3,
      li4,
      li5,
    ],
  }), []);

  useEffect(() => {
    if (!selectedMethod) {
      setMethodSlide(0);
      return;
    }
    setMethodSlide(0);
    const imgs = methodImageSets[selectedMethod] || [];
    const interval = setInterval(() => {
      setMethodSlide((prev) => (prev + 1) % (imgs.length || 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedMethod, methodImageSets]);

  const wasteTypes = [
    {
      id: 'food',
      title: 'Food Waste',
      description: 'Decomposes quickly and enriches soil with nutrients.',
      detail: 'Food waste includes fruit peels, vegetable scraps, coffee grounds, and eggshells. These are rich in nitrogen, which helps compost break down faster.',
      extraInfo: 'Properly managing food waste reduces landfill use and helps return nutrients to the soil naturally.',
      img: 'https://plus.unsplash.com/premium_photo-1725394921112-ab7b0265e5fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171'
    },
    {
      id: 'garden',
      title: 'Garden Waste',
      description: 'Adds structure and air to your compost mix.',
      detail: 'Garden waste includes dry leaves, grass clippings, and small branches. These materials provide carbon and improve airflow inside compost piles.',
      extraInfo: 'Properly balancing garden waste with food scraps keeps your compost healthy and well-aerated.',
      img: 'https://images.unsplash.com/photo-1603112032050-5dc5e0250edf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171'
    },
    {
      id: 'paper',
      title: 'Paper Waste',
      description: 'Great for absorbing moisture and adding carbon.',
      detail: 'Paper waste such as napkins, plain paper, and cardboard can be composted if free from ink or plastic coatings. It helps absorb excess water and adds carbon, balancing wet organic waste.',
      extraInfo: 'Recycling paper into compost reduces landfill waste and improves soil texture.',
      img: 'https://plus.unsplash.com/premium_photo-1726743661254-84e6828d989d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1107'
    },
    {
      id: 'paper2',
      title: 'Agricultural Waste',
      description: 'Great for absorbing moisture and adding carbon.',
      detail: 'Paper waste such as napkins, plain paper, and cardboard can be composted if free from ink or plastic coatings. It helps absorb excess water and adds carbon, balancing wet organic waste.',
      extraInfo: 'Recycling paper into compost reduces landfill waste and improves soil texture.',
      img: 'https://plus.unsplash.com/premium_photo-1664359132286-d3fa0dce553f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172'
    }
  ];

  const infoSections = [
    {
      id: 'benefits',
      title: 'Benefits of Organic Waste?',
      content: 'Organic waste can be turned into compost that enriches soil, supports plant growth, and reduces landfill waste.'
    },
    {
      id: 'purpose',
      title: 'Purpose of Managing Waste?',
      content: 'The goal is to turn natural waste into useful resources while keeping the environment clean and sustainable.'
    },
    {
      id: 'impact',
      title: 'Environmental Impact?',
      content: 'Composting reduces methane emissions from landfills and helps fight climate change.'
    },
    {
      id: 'examples',
      title: 'Examples of Organic Waste?',
      content: 'Food scraps, fruit peels, leaves, and grass clippings — all can naturally decompose into compost.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-base-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className="pt-20 lg:pt-12 pb-0 overflow-hidden dark:bg-base-100">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="px-8 lg:pl-12 lg:pr-8">
            <h1
              className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-secondary dark:text-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Where Nature Meets Innovation for a <span className="text-primary dark:text-hero">Greener Tomorrow</span>
            </h1>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore practical ways to transform organic waste into valuable resources. From understanding what organic waste is to discovering easy composting methods, discover how small actions can make a big impact on the environment. Together, let's turn waste into growth.
            </p>
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => { setActiveHero('learn'); whatIsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'learn'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === 'learn' ? 'bg-green-600 text-white shadow-md border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Learn Organic Waste
                <span>→</span>
              </button>
              <button
                onClick={() => { setActiveHero('types'); typesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'types'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === 'types' ? 'bg-green-600 text-white shadow-md border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Organic Waste Types →
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-3" data-aos="fade-up" data-aos-delay="500">
              <button
                onClick={() => { setActiveHero('manage'); manageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'manage'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === 'manage' ? 'bg-green-600 shadow-md text-white border-secondary' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Manage Organic Waste
                <span>→</span>
              </button>
              <button
                onClick={() => { setActiveHero('ai'); mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'ai'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === 'ai' ? 'bg-green-600 text-white shadow-md border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Organic Maps →
              </button>
              <button
                onClick={() => { setActiveHero('calculator'); calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'calculator'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === 'calculator' ? 'bg-green-600 shaadow-md text-white border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Organic Calculator →
              </button>
            </div>
          </div>

          {/* Image nempel kanan - NO PADDING */}
          <div
            className="flex justify-end items-center lg:pr-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={imgOrganic7}
              alt="Organic Waste Illustration"
              className="w-[90%] lg:w-[90%] h-auto object-contain"
            />
          </div>
          {/* main large spinning star (top-right) */}
          <h1 className="justify-end items-end flex mt-1 absolute right-4 sm:right-8 md:right-12 lg:right-32 top-32 lg:top-20 z-40 pointer-events-none" data-aos="zoom-in" data-aos-delay="400">
            <PiStarFour className="animate-spin rotate-90 mt-3 text-hero dark:text-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </h1>

          {/* smaller pulsing star (bottom-right) */}
          <h1 className="justify-end items-end flex mt-1 absolute right-8 sm:right-16 md:right-24 lg:right-36 bottom-16 sm:bottom-20 lg:bottom-24 z-30 pointer-events-none" data-aos="zoom-in" data-aos-delay="500">
            <PiStarFour className="animate-spin rotate-90 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-hero dark:text-white" />
          </h1>
          <h1 className="justify-start items-center flex mt-1 absolute right-48 sm:right-64 md:right-80 lg:right-[30rem] top-28 sm:top-32 lg:top-40 z-30 pointer-events-none" data-aos="zoom-in" data-aos-delay="300">
            <PiStarFour className="animate-spin mt-1 rotate-90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-hero dark:text-white" />
          </h1>
        </div>
      </div>

      {/* What Is Organic Waste Section */}
      <div ref={whatIsRef} className="py-12 lg:py-16 bg-green-50/40 dark:bg-base-200">
        <div className="flex flex-col lg:flex-row mx-8 lg:mx-12 gap-8 lg:gap-16 items-start">
          <div className="flex-1">

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
              data-aos="fade-right"
            >
              What Is <span className="text-primary dark:text-hero">Organic Waste?</span>
            </h2>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-4 lg:mb-6 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Organic waste comes from living things and can decompose naturally, such as food scraps, leaves, and twigs. It's nature's way of recycling itself and we can learn from it. 🌿
            </p>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              By properly managing organic waste, we allow nature's cycle to continue in a sustainable way. When composted, this waste turns into nutrient rich soil that helps plants grow healthier, reduces pollution.
            </p>

            <div className="space-y-1 mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="300">
              {infoSections.map((section) => {
                const isOpen = selectedInfo === section.id;
                return (
                  <div key={section.id} className="border-b border-gray-200 dark:border-gray-600">
                    <button
                      onClick={() => setSelectedInfo(isOpen ? null : section.id)}
                      className="w-full px-3 sm:px-4 py-4 sm:py-5 flex items-center rounded-md justify-between hover:bg-gray-50 dark:hover:bg-base-100 transition-all duration-300"
                    >
                      <span
                        className={`text-left transition-all duration-300 ${isOpen ? 'text-green-700 dark:text-primary font-bold text-lg sm:text-xl lg:text-2xl' : 'text-primary dark:text-hero font-normal text-xs sm:text-sm lg:text-base'
                          }`}
                      >
                        {section.title}
                      </span>

                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen
                          ? 'bg-green-700 dark:bg-primary border-primary'
                          : 'bg-white dark:bg-base-100 border-primary hover:border-primary hover:bg-green-50/40'
                          }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 ${isOpen ? '-rotate-90 text-white' : 'rotate-90 text-primary'
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-3 sm:px-4 pb-4 sm:pb-5 animate-slideDown">
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>

                );
              })}
            </div>
          </div>
          <div
            className="flex-1 w-full flex items-center justify-center pb-8 sm:pb-10 lg:pb-10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="relative h-[600px] sm:h-[650px] md:h-[680px] lg:h-[700px] w-full flex items-center justify-center"
              style={{ overflow: 'visible' }}
              onMouseEnter={() => setWhatHovered(true)}
              onMouseLeave={() => setWhatHovered(false)}
              onTouchStart={() => setWhatHovered(true)}
              onTouchEnd={() => setWhatHovered(false)}
            >
              {whatImages.map((src, i) => {
                const n = whatImages.length;
                let raw = i - whatIndex;


                if (raw > Math.floor(n / 2)) raw -= n;
                if (raw < -Math.floor(n / 2)) raw += n;


                if (Math.abs(raw) > 1) return null;


                const translateY = raw * 140;
                const distance = Math.abs(raw);
                const scale = raw === 0 ? 1 : 0.88;
                const opacity = raw === 0 ? 1 : 0.6;
                const blur = distance === 0 ? 'blur(0px)' : 'blur(3px)';
                const zIndex = 10 - distance;

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 rounded-3xl overflow-hidden bg-green-50/40 dark:bg-base-100 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: raw === 0 ? '82%' : '72%',
                      height: raw === 0 ? '52%' : '45%',
                      top: `calc(50% + ${translateY}px)`,

                      transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
                      opacity,
                      filter: blur,
                      zIndex,

                      willChange: 'transform, opacity, filter, top',
                      transition:
                        'top 1000ms cubic-bezier(0.22,1,0.36,1), transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms linear, filter 1000ms linear',
                    }}
                  >
                    <img
                      src={src}
                      alt={`slide-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed right-6 z-100 bottom-6 z-50 rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 bg-green-600  focus:ring-green-300 transition-transform duration-200 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 z-300 h-6 bg-green-600 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Types of Organic Waste Section */}
      <div ref={typesRef} className="py-12 lg:py-16 mx-8 lg:mx-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-3 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          Types of <span className="text-primary dark:text-hero">Organic Waste?</span>
        </h2>
        <p
          className="text-sm lg:text-base text-gray-600 dark:text-gray-200 text-center mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover what kinds of organic materials you can recycle and turn into compost.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wasteTypes.map((type, idx) => (
            <div
              key={type.id}
              className="group bg-gray-50 dark:bg-base-200 text-secondary dark:text-white rounded-3xl p-4 hover:shadow-lg transition-all duration-300 border hover:bg-green-50/40 dark:hover:bg-base-100 border-gray-100 dark:border-gray-700"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-40 mb-6 flex items-center justify-center overflow-hidden">
                {type.img ? (
                  <img src={type.img} alt={type.title} className="object-cover h-full w-full rounded-2xl transform transition-transform duration-500 ease-out group-hover:scale-110" />
                ) : (
                  <span className="text-gray-400 dark:text-gray-400 text-sm">Image</span>
                )}
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2">{type.title}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4 text-xs sm:text-sm">{type.description}</p>
              <button
                onClick={() => setSelectedType(type.id)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Type Detail Modal */}
      {selectedType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6 animate-fadeIn">
          <div className="bg-white dark:bg-base-100 rounded-3xl max-w-xl w-full p-8 relative animate-slideUp">
            {/* <button
              onClick={() => setSelectedType(null)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300 text-2xl"
            >
              ×
            </button> */}

            {wasteTypes
              .filter((t) => t.id === selectedType)
              .map((type) => (
                <div key={type.id}>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden">
                    {type.img ? (
                      <img src={type.img} alt={type.title} className="object-cover h-full w-full rounded-2xl" />
                    ) : (
                      <span className="text-gray-400 dark:text-gray-400">Image</span>
                    )}
                  </div>
                  <h3 className="text-3xl text-secondary dark:text-white font-bold mb-4">{type.title}</h3>
                  <p className="text-gray-700 dark:text-white mb-4 leading-relaxed text-sm">
                    {type.detail}
                  </p>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-sm">
                    {type.extraInfo}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedType(null)}
                      className="mt-6 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-secondary dark:text-white hover:bg-gray-300 dark:hover:bg-base-200 rounded-full font-medium transition-all duration-300 text-sm"
                    >
                      Close
                    </button>
                  </div>

                </div>
              ))}
          </div>
        </div>
      )}

      {/* How to Manage Section */}
      <div ref={manageRef} className="py-12 lg:py-16 bg-green-50/40 dark:bg-base-200 relative">
        {/* Decorative stars */}
        <div className="absolute right-[30rem] top-12 z-10 pointer-events-none" data-aos="zoom-in">
          <PiStarFour className="animate-spin rotate-90 text-hero/70 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div className="absolute right-[26rem] top-20 z-10 pointer-events-none" data-aos="zoom-in" data-aos-delay="100">
          <PiStarFour className="animate-spin rotate-90 text-hero/50 dark:text-hero text-2xl sm:text-3xl md:text-3xl lg:text-4xl" />
        </div>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl mx-8 lg:mx-12 font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          How to Manage <span className="text-primary dark:text-hero">Organic Waste?</span>
        </h2>

        <p
          className="text-sm lg:text-base mx-8 lg:mx-12 text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Organic waste management isn't just about composting it's about reusing and recycling what nature gives us. By managing it wisely, we can reduce pollution, save resources, and create a greener environment. 🌱
        </p>

        <div
          className="flex flex-wrap gap-3 mx-8 lg:mx-12 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id === selectedMethod ? null : method.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium ${selectedMethod === method.id
                ? 'bg-green-600 text-white border-green-600 shadow-sm'
                : 'bg-white dark:bg-base-100 border-gray-300 dark:border-gray-600 text-secondary dark:text-white hover:border-secondary hover:bg-green-50/40 dark:hover:bg-base-300'
                }`}
            >
              {method.title}
              <span className={`ml-2 transform transition-transform ${selectedMethod === method.id ? '-rotate-90 text-white' : 'rotate-90 text-gray-500 dark:text-gray-400'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {selectedMethod && (
          <div className="animate-slideDown" data-aos="fade-up" data-aos-delay="300">
            {methods
              .filter((m) => m.id === selectedMethod)
              .map((method) => (
                <div key={method.id} className="bg-white dark:bg-base-100 p-8 rounded-3xl mx-8 lg:mx-12">
                  <div className="grid md:grid-cols-2 gap-12 mb-8">
                    <div
                      className="rounded-3xl overflow-hidden bg-green-50/40 dark:bg-base-100 h-72 sm:h-96 relative"
                      data-aos="fade-right"
                    >
                      {(() => {
                        const imgs = methodImageSets[method.id] || methodImageSets['composting'];
                        return (
                          <div
                            className="absolute inset-0 flex transition-transform duration-1000 ease-out"
                            style={{
                              transform: `translateX(-${methodSlide * 100}%)`,
                            }}
                          >
                            {imgs.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`${method.title} ${i + 1}`}
                                className="w-full h-full object-cover flex-shrink-0"
                                loading="lazy"
                              />
                            ))}
                          </div>
                        );
                      })()}

                      {/* indicator dots for header slideshow */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {(methodImageSets[method.id] || methodImageSets['composting']).map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === methodSlide ? 'bg-white dark:bg-base-100' : 'bg-white dark:bg-base-100/40'} transition-all duration-300`}
                          />
                        ))}
                      </div>
                    </div>

                    <div data-aos="fade-left">
                      <h2 className="text-2xl text-secondary dark:text-primary font-bold mb-4">{method.title}</h2>
                      <p className="text-gray-600 dark:text-gray-200 mb-6 leading-relaxed text-sm">
                        {method.description}
                      </p>

                      <h3 className="text-2xl font-bold text-secondary dark:text-primary mt-8 mb-3">
                        Benefits of {method.title}
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {method.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-hero mt-0.5 inline-flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 512 512"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="30"
                                className="text-hero-600 "
                              >
                                <path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58" />
                                <path d="M173 253c86 81 175 129 292 147" />
                              </svg>
                            </span>

                            <span className="text-gray-700 dark:text-white">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => howToRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        className="px-5 py-2.5 rounded-full border-2 text-sm font-medium bg-green-600 text-white border-green-600 hover:bg-green-700 transition-all"
                      >
                        Let's Make It →
                      </button>
                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 md:mt-16 gap-12">
                    <div data-aos="fade-up" data-aos-delay="300">
                      <h3 ref={howToRef} className="text-2xl text-secondary dark:text-primary font-bold mb-3">
                        How to Make {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                        Follow these simple steps to turn {method.id === 'composting' ? 'your organic waste into nutrient-rich compost' : method.id === 'eco-enzyme' ? 'fruit peels into natural eco-cleaners' : method.id === 'biogas' ? 'organic waste into renewable energy' : method.id === 'animal-feed' ? 'leftovers as healthy animal feed' : 'food waste into liquid fertilizer'}:
                      </p>
                      <div className="space-y-3" data-aos="fade-up" data-aos-delay="300">
                        {method.steps.map((step, idx) => {
                          const stepKey = `${method.id}-${idx}`;
                          const isOpen = selectedStep === stepKey;
                          return (
                            <div
                              key={idx}
                              className={`rounded-2xl overflow-hidden border ${isOpen ? 'bg-primary dark:bg-third border-hero dark:border-third' : 'bg-green-50/40 dark:bg-base-200 border-gray-200 dark:border-gray-600'}`}>
                              <button
                                onClick={() => setSelectedStep(isOpen ? null : stepKey)}
                                className={`w-full px-6 py-4 pb-4 flex items-center justify-between transition-all duration-300 ${isOpen ? '' : 'hover:bg-gray-100 dark:hover:bg-base-100'}`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${isOpen ? 'bg-white text-green-600  dark:text-third' : 'bg-primary text-white  dark:bg-third'}`}>
                                    {idx + 1}
                                  </div>
                                  <span className={`${isOpen ? 'text-white font-bold' : 'text-sm font-medium text-left text-gray-800 dark:text-white'}`}>{step.title}</span>
                                </div>
                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen ? 'border-white' : 'border-gray-200 dark:border-gray-600'}`}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? '-rotate-90 text-white' : 'rotate-90 text-primary  '}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </button>
                              <div
                                ref={(el) => (detailRefs.current[stepKey] = el)}
                                style={{ maxHeight: isOpen ? `${detailRefs.current[stepKey]?.scrollHeight || 0}px` : '0px' }}
                                className="px-6 pb-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                              >
                                <div className={`pl-10 pr-8 pb-3 transform transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                                  <p className={`${isOpen ? 'text-white' : 'text-gray-600 dark:text-gray-200'} text-sm leading-relaxed`}>{step.detail}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="relative h-96 rounded-3xl md:mt-24 overflow-hidden flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                      <DotLottieReact
                        src="https://lottie.host/1bc690f4-3ecf-42d8-a4c9-4afcd507677b/n5KVQwAA7R.lottie"
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>

                  </div>

                  <div className="mt-20">

                    <h3 className="text-2xl font-bold text-center mb-3 text-secondary dark:text-primary" data-aos="fade-up">
                      Learn How to Make {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200 text-center mb-4 text-base" data-aos="fade-up" data-aos-delay="100">
                      {method.id === 'composting'
                        ? 'Watch this quick tutorial on making compost from kitchen waste.'
                        : method.id === 'eco-enzyme'
                          ? 'Short video on making eco-enzyme at home.'
                          : method.id === 'biogas'
                            ? 'Video on how biogas is made naturally.'
                            : method.id === 'animal-feed'
                              ? 'Guide to creating animal feed from leftovers.'
                              : 'Tutorial on making liquid fertilizer from food scraps.'}
                    </p>
                    <div className="aspect-video w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-auto overflow-hidden rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
                      <iframe
                        className="w-full h-full"
                        src={
                          method.id === 'composting'
                            ? 'https://www.youtube.com/embed/egyNJ7xPyoQ'
                            : method.id === 'eco-enzyme'
                              ? 'https://www.youtube.com/embed/ReJUhI4tjIc'
                              : method.id === 'biogas'
                                ? 'https://www.youtube.com/embed/BaMKVqcRaLk'
                                : method.id === 'animal-feed'
                                  ? 'https://www.youtube.com/embed/hPsOSUsq3Fg'
                                  : 'https://www.youtube.com/embed/wrZSYaDI_7Q'
                        }
                        title={`How to Make ${method.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Find Centers Section */}
      <div ref={mapRef} className="py-12 lg:py-16 mx-8 lg:mx-12">
        <div className="text-center mb-6 lg:mb-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-3 text-secondary dark:text-primary"
            data-aos="fade-up"
          >
            Find Organic Waste <span className="text-primary dark:text-hero">Centers Near You</span>
          </h2>
          <p
            className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-4 lg:mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover local compost facilities, waste banks, or recycling hubs near your area.
          </p>
        </div>

        {/* Embedded Google Maps */}
        <div
          className="rounded-3xl overflow-hidden bg-green-50/40 dark:bg-base-100 shadow-lg border-2 border-gray-200 dark:border-gray-600 h-[300px] sm:h-[400px] lg:h-[500px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {mapUrl ? (
            <iframe
              src={mapUrl}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nearby Organic Waste Centers"
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Loading map...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Carbon Calculator Section */}
      <div ref={calculatorRef} className="py-12 lg:py-16 mx-8 lg:mx-12">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6 lg:mb-8">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-3 text-secondary dark:text-primary"
              data-aos="fade-up"
            >
              Carbon Impact <span className="text-primary dark:text-hero">Calculator</span>
            </h2>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Calculate the positive impact of your organic waste management on the environment
            </p>
          </div>

          {/* Calculator Box */}
          <div
            className="bg-white dark:bg-base-200 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-600 shadow-sm"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="font-medium mb-4 text-xs text-secondary dark:text-primary sm:text-sm">
              How many kilograms of organic waste do you process per week?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full sm:flex-1">
                <input
                  type="text"
                  placeholder="Enter the number..."
                  value={waste}
                  onChange={handleInputChange}
                  className={`w-full px-5 py-3 border border-gray-200 dark:border-gray-600 dark:bg-base-100 rounded-full text-sm focus:outline-none focus:border-green-600 transition-transform duration-150 ${inputAnimating ? 'scale-90' : ''}`}
                />
                {inputError && (
                  <p className="text-red-500 text-xs mt-2 ml-4 animate-slideDown flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024" className="flex-shrink-0">
                      <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768a384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0a48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32" />
                    </svg>
                    {inputError}
                  </p>
                )}
              </div>
              <button
                onClick={handleCalculate}
                disabled={isCounting || inputError}
                className={`px-6 sm:px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-all text-sm ${isCounting || inputError ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isCounting ? 'Calculating...' : 'Calculate'}

              </button>
            </div>

            {/* Result Section */}
            {displayedCo2 !== null && displayedTrees !== null && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                <div
                  className="bg-green-50/40 dark:bg-green-900/30 border border-gray-200 dark:border-green-900/30 rounded-2xl p-5 sm:p-6 text-center"
                  data-aos="fade-up"
                >
                  <p className="text-gray-600 dark:text-gray-200 text-xs mb-1 sm:mb-2">CO₂ Saved</p>
                  <p className={`text-3xl sm:text-4xl font-bold text-secondary dark:text-primary transition-all ${isCounting ? 'transform scale-105' : ''}`}>
                    {Number(displayedCo2).toFixed(1)} kg
                  </p>
                  <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">Amazing impact!</p>
                </div>

                <div
                  className="bg-green-50/40 dark:bg-green-900/30 border border-gray-200 dark:border-green-900/30 rounded-2xl p-5 sm:p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="text-gray-600 dark:text-gray-200 text-xs mb-1 sm:mb-2">Trees Equivalent</p>
                  <p className={`text-3xl sm:text-4xl font-bold text-primary dark:text-hero transition-all ${isCounting ? 'transform scale-105' : ''}`}>
                    {Number(displayedTrees).toFixed(2)}
                  </p>
                  <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">Keep it growing!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Organic;
