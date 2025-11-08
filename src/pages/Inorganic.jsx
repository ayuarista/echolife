import React, { useState, useEffect, useRef, useMemo } from 'react';
import imgInorganic1234567 from '../assets/Inorganic/img-inorganic7.png';
import li1 from '../assets/Organic/li-1.svg';
import li2 from '../assets/Organic/li-2.svg';
import li3 from '../assets/Organic/li-3.svg';
import li4 from '../assets/Organic/li-4.svg';
import li5 from '../assets/Organic/li-5.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { PiStarFour } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Inorganic = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [mapUrl, setMapUrl] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🧮 Tambahan state untuk Carbon Calculator
  const [waste, setWaste] = useState('');
  const [inputError, setInputError] = useState('');
  // target numeric results (not directly shown) - displayed values animate to these
  const [displayedCo2, setDisplayedCo2] = useState(null);
  const [displayedTrees, setDisplayedTrees] = useState(null);
  const [inputAnimating, setInputAnimating] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const co2Frame = useRef(null);
  // slide index for the selected-method header slideshow (separate from the page-wide carousel)
  const [methodSlide, setMethodSlide] = useState(0);
  // carousel for the "What Is Organic Waste" right column
  const whatImages = [
    'https://images.unsplash.com/photo-1704393741708-792c3200f6c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1565886728041-a239b6a3ec42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
    'https://images.unsplash.com/photo-1632247620837-970aa94d2b99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    'https://images.unsplash.com/photo-1631174523845-30b1ae2b8d43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1710830975524-6abdf177fba0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
  ];
  const [whatIndex, setWhatIndex] = useState(0);
  const [whatHovered, setWhatHovered] = useState(false);

  // advance carousel every 3s; pause while hovered. use timeout so timer resets after each advance.
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
  // Fungsi untuk menghitung dampak karbon
  const handleCalculate = () => {
    const w = parseFloat(waste);
    if (isNaN(w) || w <= 0) {
      setDisplayedCo2(null);
      setDisplayedTrees(null);
      return;
    }

    const co2 = w * 1.8; // tiap 1 kg sampah organik = 1.8 kg CO₂ dihemat
    const trees = co2 / 21; // 1 pohon menyerap ±21 kg CO₂/tahun

    // set numeric targets (displayed values will animate)

    // animate counting from 0 to target
    const duration = 900; // ms
    const start = performance.now();
    setIsCounting(true);

    // cancel any existing frame
    if (co2Frame.current) cancelAnimationFrame(co2Frame.current);

    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutQuad
      const ease = 1 - (1 - t) * (1 - t);
      const currentCo2 = co2 * ease;
      const currentTrees = trees * ease;
      setDisplayedCo2(currentCo2);
      setDisplayedTrees(currentTrees);

      if (t < 1) {
        co2Frame.current = requestAnimationFrame(animate);
      } else {
        // ensure final values exact
        setDisplayedCo2(co2);
        setDisplayedTrees(trees);
        setIsCounting(false);
      }
    };

    co2Frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    // Detect dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=bank+sampah+daur+ulang+recycling&center=${latitude},${longitude}&zoom=13&maptype=${isDarkMode ? 'satellite' : 'roadmap'}`;
          setMapUrl(url);
        },
        (error) => {
          console.log('Location access denied, using default location');
          const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=bank+sampah+daur+ulang+recycling&center=${-8.6705},${115.2126}&zoom=13&maptype=${isDarkMode ? 'satellite' : 'roadmap'}`;
          setMapUrl(url);
        }
      );
    } else {
      const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=bank+sampah+daur+ulang+recycling&center=${-8.6705},${115.2126}&zoom=13&maptype=${isDarkMode ? 'satellite' : 'roadmap'}`;
      setMapUrl(url);
    }
  }, [isDarkMode]);
  useEffect(() => {
    const interval = setInterval(() => {
      // legacy carousel removed; keep placeholder interval tidy
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // show/hide Back to Top button on scroll
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // cleanup animation frames on unmount
  useEffect(() => {
    const c = co2Frame.current;
    return () => {
      if (c) cancelAnimationFrame(c);
    };
  }, []);

  const inputAnimTimeout = useRef(null);
  const handleInputChange = (e) => {
    const v = e.target.value;

    // Validasi: hanya terima angka dan desimal
    if (v !== '' && (isNaN(v) || v.includes('e') || v.includes('E'))) {
      setInputError('Please enter numbers only');
      return;
    }

    setInputError('');
    setWaste(v);
    // small scale feedback when typing
    setInputAnimating(true);
    if (inputAnimTimeout.current) clearTimeout(inputAnimTimeout.current);
    inputAnimTimeout.current = setTimeout(() => setInputAnimating(false), 180);
  };
  const methods = [
    {
      id: 'recycling',
      title: 'Recycling',
      description:
        'Recycling is the process of converting inorganic waste such as plastic, paper, metal, and glass into new, useful products. It helps reduce landfill waste, save natural resources, and lower energy use in manufacturing.',
      steps: [
        {
          title: 'Collect recyclable materials',
          detail:
            'Separate inorganic waste such as plastic bottles, paper, cans, and glass from organic waste.',
        },
        {
          title: 'Clean and dry the materials',
          detail:
            'Wash bottles, cans, and other containers, then dry them to avoid contamination and bad odors.',
        },
        {
          title: 'Sort by type',
          detail:
            'Group materials according to their type — plastic with plastic, metal with metal, and glass with glass.',
        },
        {
          title: 'Deliver to a recycling center',
          detail:
            'Take the sorted waste to a recycling station or waste bank in your local area.',
        },
        {
          title: 'Reprocess into new products',
          detail:
            'The collected materials are melted, shredded, or reformed into new items such as textile fibers, metal tools, or glass containers.',
        },
      ],
      benefits: [
        'Reduces the amount of waste sent to landfills',
        'Conserves natural resources and raw materials',
        'Lowers energy consumption in production processes',
        'Supports the circular economy and sustainable industry',
      ],
    },
    {
      id: 'upcycling',
      title: 'Upcycling',
      description:
        'Upcycling means transforming waste materials into higher-value products without breaking them down completely. It focuses on creativity and innovation to give old items a second life and new purpose.',
      steps: [
        {
          title: 'Gather reusable items',
          detail:
            'Collect used materials such as bottles, cans, CDs, or cardboard that are still in good condition.',
        },
        {
          title: 'Clean and prepare materials',
          detail:
            'Wash, dry, and remove labels so that materials are ready for decorating or repurposing.',
        },
        {
          title: 'Plan your creative design',
          detail:
            'Decide how you want to reuse the materials — for example, as flower pots, lamps, or home decorations.',
        },
        {
          title: 'Craft with creativity',
          detail:
            'Use scissors, glue, paint, or tools to reshape and enhance the appearance of your items.',
        },
        {
          title: 'Use or display your creation',
          detail:
            'Show off your upcycled item as a functional or decorative object at home or in school projects.',
        },
      ],
      benefits: [
        'Adds new value to used materials',
        'Decreases household waste generation',
        'Encourages creativity and sustainability awareness',
        'Eco-friendly because it avoids industrial processing',
      ],
    },
    {
      id: 'waste-to-energy',
      title: 'Waste-to-Energy',
      description:
        'Reuse means using items again for the same or different purposes without needing to process them. It is one of the simplest and most effective ways to reduce waste generation and promote a sustainable lifestyle.',
      steps: [
        {
          title: 'Identify reusable items',
          detail:
            'Look for jars, bottles, containers, or plastic bags that can still be used safely.',
        },
        {
          title: 'Clean properly',
          detail:
            'Wash the items to ensure they are hygienic and free from unpleasant smells.',
        },
        {
          title: 'Repurpose for other uses',
          detail:
            'Use jars for kitchen storage, bottles for decoration, or boxes for organizing items.',
        },
        {
          title: 'Maintain and store properly',
          detail:
            'Keep the items dry and clean to make them last longer and remain safe to use.',
        },
        {
          title: 'Donate what you don’t need',
          detail:
            'Give away usable items to others or local communities to extend their lifespan.',
        },
      ],
      benefits: [
        'Reduces the need to buy new products',
        'Saves money and resources at home',
        'Minimizes overall waste production',
        'Promotes conscious and sustainable consumption habits',
      ],
    },
    {
      id: 'landfill-management',
      title: 'Landfill Management',
      description:
        'Waste-to-Energy (WtE) is the process of converting certain inorganic waste into energy through controlled combustion (incineration) or pyrolysis. It helps reduce landfill volume while producing electricity or heat as renewable energy.',
      steps: [
        {
          title: 'Collect non-recyclable inorganic waste',
          detail:
            'Gather waste such as mixed plastics, used paper, and packaging that cannot be recycled.',
        },
        {
          title: 'Remove hazardous materials',
          detail:
            'Ensure that no toxic or chemical waste is included, as it may cause harmful emissions.',
        },
        {
          title: 'Send to WtE facility',
          detail:
            'Transport the prepared waste to a waste-to-energy plant equipped with high-temperature combustion systems.',
        },
        {
          title: 'Convert heat into energy',
          detail:
            'The heat generated from combustion is used to produce steam, which powers turbines to generate electricity.',
        },
        {
          title: 'Manage ash and residue safely',
          detail:
            'Ash byproducts can be used in construction materials or disposed of securely.',
        },
      ],
      benefits: [
        'Produces renewable energy from waste materials',
        'Reduces the amount of waste going to landfills',
        'Lowers methane and CO₂ emissions from decomposition',
        'Decreases dependency on fossil fuels for power generation',
      ],
    },
    {
      id: 'mrf',
      title: 'Material Recovery Facility (MRF)',
      description:
        'Landfill management ensures that final waste disposal is handled safely and does not harm the environment. Modern landfills use liners, gas collection systems, and monitoring processes to minimize pollution and health risks.',
      steps: [
        {
          title: 'Select a safe landfill site',
          detail:
            'Choose a location far from residential areas and water sources to avoid contamination.',
        },
        {
          title: 'Install protective base layers',
          detail:
            'Apply clay and plastic liners to prevent leachate (liquid waste) from seeping into the ground.',
        },
        {
          title: 'Compact and cover waste regularly',
          detail:
            'Waste is compacted and covered daily to reduce odor, pests, and space usage.',
        },
        {
          title: 'Install gas collection systems',
          detail:
            'Capture methane gas generated by decomposition and use it as an energy source.',
        },
        {
          title: 'Close and monitor landfill sections',
          detail:
            'When full, seal landfill sections with soil and monitor air and water quality over time.',
        },
      ],
      benefits: [
        'Prevents soil and groundwater contamination',
        'Reduces harmful gas emissions and unpleasant odors',
        'Improves the overall safety and efficiency of waste disposal',
        'Protects surrounding communities and ecosystems',
      ],
    },
  ];


  // image sets for each method (5 images each)
  const methodImageSets = useMemo(() => ({
    'recycling': [
      'https://images.unsplash.com/photo-1751646312130-d6be98d867bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1541858619423-42850b8687c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1499125613777-b4fd250db5cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1501169527804-c216a681aab8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    ],
    'upcycling': [
      'https://media.istockphoto.com/id/2186095567/id/foto/teh-kompos-atau-ekstrak-cair-sangat-cocok-sebagai-pupuk.jpg?s=1024x1024&w=is&k=20&c=y6ECxgFYpUb2sRmMg5wqdoNoGm1MncXySClT07EPxxQ=',
      'https://images.unsplash.com/photo-1587202372775-bd2f1e9e9b4f?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1582719478189-946f28b3cc0c?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1532634896-26909d0d8b9f?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1170',
    ],
    'waste-to-energy': [
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1616628189782-43e1e88fef8c?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1501004318641-87f8b6cfb1d6?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1501004318641-d76694265947?auto=format&fit=crop&q=80&w=1170',
    ],
    'landfill-management': [
      'https://images.unsplash.com/photo-1604079628043-9431b249e8a1?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1574226516831-e1dff420e12e?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1623206831038-403a7a3a4d41?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1549399548-7b2a4f6d8d2a?auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1518976024611-486b4d8a1d8f?auto=format&fit=crop&q=80&w=1170',
    ],
    'mrf': [
      li1,
      li2,
      li3,
      li4,
      li5,
    ],
  }), []);

  // auto-advance header slideshow for the selected method
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
      id: 'plastic',
      title: 'Plastic Waste',
      description: 'Durable and versatile, but takes centuries to decompose.',
      detail: 'Plastic waste includes bottles, bags, and packaging materials. These items can be recycled into new products like containers, furniture, or even clothing fibers.',
      extraInfo: 'Properly sorting and recycling plastic waste helps reduce ocean pollution and conserve natural resources.',
      img: 'https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'
    },
    {
      id: 'metal',
      title: 'Metal Waste',
      description: 'Strong and recyclable without losing quality.',
      detail: 'Metal waste such as cans, aluminum foil, and scrap metal can be melted down and reused endlessly without degrading in quality.',
      extraInfo: 'Recycling metals saves energy and reduces the need for mining new raw materials.',
      img: 'https://images.unsplash.com/photo-1692800184439-8df73ea37e2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169'
    },
    {
      id: 'glass',
      title: 'Glass Waste',
      description: 'Can be recycled repeatedly without losing purity.',
      detail: 'Glass waste includes bottles, jars, and glass containers. It can be crushed, melted, and reshaped into new glass products indefinitely.',
      extraInfo: 'Sorting glass by color before recycling improves the quality of new glass materials.',
      img: 'https://images.unsplash.com/photo-1562360469-ca4431597566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    },
    {
      id: 'electronics',
      title: 'Electronic Waste',
      description: 'Valuable but harmful if mismanaged.',
      detail: 'E-waste includes old phones, computers, and household appliances. These contain metals and components that can be recovered and reused.',
      extraInfo: 'Recycling e-waste properly prevents toxic substances like lead and mercury from harming the environment.',
      img: 'https://images.unsplash.com/photo-1582748298043-0c0d31aa506e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'
    }
  ];

  const infoSections = [
    {
      id: 'benefits',
      title: 'Benefits of Inorganic Waste?',
      content: 'Inorganic waste can be recycled into new materials, reducing pollution and saving natural resources.'
    },
    {
      id: 'purpose',
      title: 'Purpose of Managing Inorganic Waste?',
      content: 'The goal is to minimize environmental damage by recycling, reusing, and reducing non-biodegradable waste.'
    },
    {
      id: 'impact',
      title: 'Environmental Impact?',
      content: 'Improper disposal of inorganic waste causes pollution, but recycling helps lower energy use and emissions.'
    },
    {
      id: 'examples',
      title: 'Examples of Inorganic Waste?',
      content: 'Plastic bottles, glass jars, metal cans, and electronic parts all are inorganic materials that can be reused or recycled.'
    }
  ];


  return (
    <div className="min-h-screen bg-white dark:bg-base-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className="pt-20 lg:pt-12 pb-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="px-8 lg:pl-12 lg:pr-8">
            <h1
              className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-secondary dark:text-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Where Innovation Meets Action for a <span className="text-primary dark:text-hero">Cleaner Future</span>
            </h1>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover simple ways to manage inorganic waste and turn it into useful materials. Learn what inorganic waste is and explore how small recycling actions can reduce pollution and protect our planet. Together, let’s make waste management smarter and greener. ♻️
            </p>
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => { setActiveHero('learn'); whatIsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'learn'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === 'learn' ? 'bg-green-600 text-white shadow-md border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Learn Inorganic Waste
                <span>→</span>
              </button>
              <button
                onClick={() => { setActiveHero('types'); typesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'types'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === 'types' ? 'bg-green-600 text-white shadow-md border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Inorganic Waste Types →
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-3" data-aos="fade-up" data-aos-delay="500">
              <button
                onClick={() => { setActiveHero('manage'); manageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'manage'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === 'manage' ? 'bg-green-600 shadow-md text-white border-secondary' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Manage Inorganic Waste
                <span>→</span>
              </button>
              <button
                onClick={() => { setActiveHero('ai'); mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'ai'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === 'ai' ? 'bg-green-600 text-white shadow-md border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Inorganic Maps →
              </button>
              <button
                onClick={() => { setActiveHero('calculator'); calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                aria-pressed={activeHero === 'calculator'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === 'calculator' ? 'bg-green-600 shaadow-md text-white border-green-600' : 'border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-green-50/40 dark:hover:bg-base-300 dark:text-white'}`}
              >
                Inorganic Calculator →
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
              src={imgInorganic1234567}
              alt="Inorganic Waste Illustration"
              className="w-[90%] lg:w-[85%] h-auto lg:mt-10 mt-16 object-contain"
            />
          </div>

          {/* main large spinning star (top-right) */}
          <h1 className="justify-end items-end flex mt-1 absolute right-4 sm:right-8 md:right-12 lg:right-20 top-20 lg:top-24 z-40 pointer-events-none" data-aos="zoom-in" data-aos-delay="400">
            <PiStarFour className="animate-spin rotate-90 mt-3 text-hero dark:text-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </h1>

          {/* smaller pulsing star (bottom-right) */}
          <h1 className="justify-end items-end flex mt-1 absolute right-8 sm:right-16 md:right-24 lg:right-48 bottom-16 sm:bottom-20 lg:bottom-24 z-30 pointer-events-none" data-aos="zoom-in" data-aos-delay="500">
            <PiStarFour className="animate-spin rotate-90 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-hero dark:text-white" />
          </h1>
          <h1 className="justify-start items-center flex mt-1 absolute right-48 sm:right-64 md:right-80 lg:right-[30rem] top-28 sm:top-32 lg:top-40 z-30 pointer-events-none" data-aos="zoom-in" data-aos-delay="300">
            <PiStarFour className="animate-spin mt-1 rotate-90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-hero dark:text-white" />
          </h1>
        </div>
      </div>

      {/* What Is Organic Waste Section */}
      <div ref={whatIsRef} className="pb-0 py-16 lg:pb-0 bg-green-50/40 dark:bg-base-200">
        <div className="flex flex-col lg:flex-row mx-8 lg:mx-12 gap-8 lg:gap-16 items-start">
          <div className="flex-1">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
              data-aos="fade-right"
            >
              What Is <span className="text-primary dark:text-hero">Inorganic Waste?</span>
            </h2>

            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-4 lg:mb-6 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Inorganic waste comes from non-living materials that do not decompose naturally, such as plastic, metal, and glass. These materials can last for hundreds of years and harm the environment if not managed properly. ♻️
            </p>
            <p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              By managing inorganic waste wisely, we can reduce pollution and save natural resources. Recycling and reusing help turn inorganic materials into useful new products.
            </p>

            <div className="space-y-1 mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="300">
              {infoSections.map((section) => {
                const isOpen = selectedInfo === section.id;
                return (
                  <div key={section.id} className="border-b border-gray-200 dark:border-gray-600">
                    <button
                      onClick={() => setSelectedInfo(isOpen ? null : section.id)}
                      className="w-full px-3 sm:px-4 py-4 sm:py-5 flex rounded-md items-center justify-between hover:bg-gray-50 dark:hover:bg-base-100 transition-all duration-300"
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

                // 🔁 looping biar index muter terus (infinite carousel)
                if (raw > Math.floor(n / 2)) raw -= n;
                if (raw < -Math.floor(n / 2)) raw += n;

                // ⚙️ hanya render 3 card aktif (atas, tengah, bawah)
                if (Math.abs(raw) > 1) return null;

                // 🔹 Posisi & efek transisi
                const translateY = raw * 140;
                const distance = Math.abs(raw);
                const scale = raw === 0 ? 1 : 0.88;
                const opacity = raw === 0 ? 1 : 0.6;
                const blur = distance === 0 ? 'blur(0px)' : 'blur(3px)';
                const zIndex = 10 - distance;

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: raw === 0 ? '82%' : '72%',
                      height: raw === 0 ? '52%' : '45%',
                      top: `calc(50% + ${translateY}px)`,
                      // use translate3d to trigger GPU compositing for smoother animation
                      transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
                      opacity,
                      filter: blur,
                      zIndex,
                      // hint browser to optimize these properties and provide explicit transition
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
          Types of <span className="text-primary dark:text-hero">Inorganic Waste</span>
        </h2>
        <p
          className="text-sm lg:text-base text-gray-600 dark:text-gray-200 text-center mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover what kinds of inorganic materials you can recycle and turn into new useful products.
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
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600">
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
          <PiStarFour className="animate-spin rotate-90  text-hero/70 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div className="absolute right-[26rem] top-20 z-10 pointer-events-none" data-aos="zoom-in" data-aos-delay="100">
          <PiStarFour className="animate-spin rotate-90 text-hero/50 dark:text-hero text-2xl sm:text-3xl md:text-3xl lg:text-4xl" />
        </div>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl mx-8 lg:mx-12 font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          How to Manage <span className="text-primary dark:text-hero">Inorganic Waste?</span>
        </h2>

        <p
          className="text-sm lg:text-base mx-8 lg:mx-12 text-gray-600 dark:text-gray-200 mb-6 lg:mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Inorganic waste management isn't just about recycling it's about reducing and reusing materials responsibly. By managing it wisely, we can minimize landfill waste, conserve resources, and protect our environment. ♻️
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
          <div className="animate-slideDown mx-8 lg:mx-12" data-aos="fade-up" data-aos-delay="300">
            {methods
              .filter((m) => m.id === selectedMethod)
              .map((method) => (
                <div key={method.id} className="bg-white dark:bg-base-100 p-8 rounded-3xl">
                  <div className="grid md:grid-cols-2 gap-12 mb-14 lg:mb-0">
                    <div
                      className="rounded-3xl overflow-hidden h-72 sm:h-96 relative"
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

                  <div className="grid md:grid-cols-2 md:mt-16 gap-12 ">
                    <div data-aos="fade-up" data-aos-delay="300">
                      <h3 ref={howToRef} className="text-2xl text-secondary dark:text-primary font-bold mb-3">
                        How to Make {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                        Follow these simple steps to turn {method.id === 'recycling' ? 'recyclable waste into reusable materials' : method.id === 'upcycling' ? 'old items into creative new products' : method.id === 'waste-to-energy' ? 'inorganic waste into renewable energy' : method.id === 'landfill-management' ? 'final waste into safely managed disposal' : 'mixed waste into sorted recyclable materials'}:
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
                                className={`w-full px-6 py-4 pb-4 flex items-center justify-between transition-all duration-300 ${isOpen ? '' : 'hover:bg-white dark:hover:bg-base-100'}`}
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

                  <div className="mt-14">

                    <h3 className="text-2xl font-bold text-center mb-3 text-secondary dark:text-primary" data-aos="fade-up">
                      Learn How to Make {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200 text-center mb-4 text-base" data-aos="fade-up" data-aos-delay="100">
                      {method.id === 'recycling'
                        ? 'Watch a short video about how recycling turns waste into new useful materials.'
                        : method.id === 'upcycling'
                          ? 'Learn how to upcycle waste creatively into valuable and artistic items.'
                          : method.id === 'waste-to-energy'
                            ? 'See how waste can be converted into clean renewable energy through Waste-to-Energy systems.'
                            : method.id === 'landfill-management'
                              ? 'Explore how proper landfill management keeps the environment safe and clean.'
                              : 'Watch how Material Recovery Facilities (MRF) sort and prepare waste for recycling.'}
                    </p>

                    <div className="aspect-video w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-auto overflow-hidden rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
                      <iframe
                        className="w-full h-full"
                        src={
                          method.id === 'recycling'
                            ? 'https://www.youtube.com/embed/egyNJ7xPyoQ'
                            : method.id === 'upcycling'
                              ? 'https://www.youtube.com/embed/ReJUhI4tjIc'
                              : method.id === 'waste-to-energy'
                                ? 'https://www.youtube.com/embed/BaMKVqcRaLk'
                                : method.id === 'landfill-management'
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
      </div>      {/* Find Centers Section */}
      <div ref={mapRef} className="py-12 lg:py-16 mx-8 lg:mx-12">
        <div className="text-center mb-6 lg:mb-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-3 text-secondary dark:text-primary"
            data-aos="fade-up"
          >
            Find Inorganic Waste <span className="text-primary dark:text-hero">Centers Near You</span>
          </h2>
          <p
            className="text-sm lg:text-base text-gray-600 dark:text-gray-200 mb-4 lg:mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover local recycling centers, waste banks, or material recovery facilities near your area.
          </p>
        </div>

        {/* Embedded Google Maps */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600 h-[300px] sm:h-[400px] lg:h-[500px]"
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
              Measure how your inorganic waste management helps reduce carbon emissions and protect the environment.
            </p>
          </div>

          {/* Calculator Box */}
          <div
            className="bg-white dark:bg-base-200 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-600 shadow-sm"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="font-medium mb-4 text-xs text-secondary dark:text-primary sm:text-sm">
              How many kilograms of inorganic waste do you recycle or process each week?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full sm:flex-1">
                <input
                  type="text"
                  placeholder="Enter the amount..."
                  value={waste}
                  onChange={handleInputChange}
                  className={`w-full px-5 py-3 border border-gray-200 dark:border-base-100 dark:bg-base-100 rounded-full text-sm focus:outline-none focus:border-green-600 transition-transform duration-150 ${inputAnimating ? 'scale-90' : ''}`}
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
                  <p className="text-gray-600 dark:text-gray-200 text-xs mb-1 sm:mb-2">CO₂ Emissions Reduced</p>
                  <p className={`text-3xl sm:text-4xl font-bold text-secondary dark:text-primary transition-all ${isCounting ? 'transform scale-105' : ''}`}>
                    {Number(displayedCo2).toFixed(1)} kg
                  </p>
                  <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">Every bit makes a difference!</p>
                </div>

                <div
                  className="bg-green-50/40 dark:bg-green-900/30 border border-gray-200 dark:border-green-900/30 rounded-2xl p-5 sm:p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="text-gray-600 dark:text-gray-200 text-xs mb-1 sm:mb-2">Equivalent Tree Benefit</p>
                  <p className={`text-3xl sm:text-4xl font-bold text-primary dark:text-hero transition-all ${isCounting ? 'transform scale-105' : ''}`}>
                    {Number(displayedTrees).toFixed(2)}
                  </p>
                  <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">Keep the planet green!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>



      {/* Bottom CTA */}
      {/* <div className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-6">
            "Start composting today and make a difference for our planet! 🌍"
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-5 py-2.5 border-2 border-white/30 hover:bg-white dark:bg-base-100/10 rounded-full text-sm font-medium transition-all">
              Eco-Enzyme →
            </button>
            <button className="px-5 py-2.5 border-2 border-white/30 hover:bg-white dark:bg-base-100/10 rounded-full text-sm font-medium transition-all">
              Biogas Production →
            </button>
            <button className="px-5 py-2.5 border-2 border-white/30 hover:bg-white dark:bg-base-100/10 rounded-full text-sm font-medium transition-all">
              Animal Feed →
            </button>
            <button className="px-5 py-2.5 border-2 border-white/30 hover:bg-white dark:bg-base-100/10 rounded-full text-sm font-medium transition-all">
              Organic Fertilizer Liquid →
            </button>
          </div>
        </div>
      </div> */}

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

export default Inorganic;
