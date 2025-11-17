import React, { useState, useEffect, useRef, useMemo } from "react";
import imgHazardous2 from "../assets/Hazardous/img-hazardous2.png";
import li1 from "../assets/Organic/li-1.svg";
import li2 from "../assets/Organic/li-2.svg";
import li3 from "../assets/Organic/li-3.svg";
import li4 from "../assets/Organic/li-4.svg";
import li5 from "../assets/Organic/li-5.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { PiStarFour } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
const Hazardous = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [mapUrl, setMapUrl] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [waste, setWaste] = useState("");
  const [inputError, setInputError] = useState("");

  const [displayedCo2, setDisplayedCo2] = useState(null);
  const [displayedTrees, setDisplayedTrees] = useState(null);
  const [inputAnimating, setInputAnimating] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const co2Frame = useRef(null);

  const [methodSlide, setMethodSlide] = useState(0);

  const whatImages = [
    'https://images.unsplash.com/photo-1690306815613-f839b74af330?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1690356107603-f06f8adf80d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1642204705127-accc0dcc5779?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600683550685-d6cea04f22aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704756082548-af7c773aa0ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    const w = parseFloat(waste);
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
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=limbah+B3+hazardous+waste+disposal&center=${latitude},${longitude}&zoom=13&maptype=${isDarkMode ? "satellite" : "roadmap"
            }`;
          setMapUrl(url);
        },
        (error) => {
          console.log("Location access denied, using default location");
          const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=limbah+B3+hazardous+waste+disposal&center=${-8.6705},${115.2126}&zoom=13&maptype=${isDarkMode ? "satellite" : "roadmap"
            }`;
          setMapUrl(url);
        }
      );
    } else {
      const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=limbah+B3+hazardous+waste+disposal&center=${-8.6705},${115.2126}&zoom=13&maptype=${isDarkMode ? "satellite" : "roadmap"
        }`;
      setMapUrl(url);
    }
  }, [isDarkMode]);
  useEffect(() => {
    const interval = setInterval(() => { }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

    if (v !== "" && (isNaN(v) || v.includes("e") || v.includes("E"))) {
      setInputError("Please enter numbers only");
      return;
    }

    setInputError("");
    setWaste(v);

    setInputAnimating(true);
    if (inputAnimTimeout.current) clearTimeout(inputAnimTimeout.current);
    inputAnimTimeout.current = setTimeout(() => setInputAnimating(false), 180);
  };
  const methods = [
    {
      id: "chemical-waste",
      title: "Safe Chemical Waste Handling",
      steps: [
        {
          title: "Identify chemical waste",
          detail:
            "Check for materials labeled as flammable, corrosive, toxic, or reactive. Examples include cleaning agents, paints, pesticides, and solvents.",
        },
        {
          title: "Use proper containers",
          detail:
            "Store in sealed, chemical-resistant containers made of plastic or metal. Avoid glass for acids or reactive substances.",
        },
        {
          title: "Label and separate",
          detail:
            "Mark each container clearly with “Chemical Waste” and the type of material. Keep it away from food or recyclables.",
        },
        {
          title: "Avoid mixing chemicals",
          detail:
            "Never mix different chemicals. It can cause dangerous reactions or toxic gas release.",
        },
        {
          title: "Contact disposal facility",
          detail:
            "Send chemical waste to authorized hazardous waste collection centers for safe treatment.",
        },
      ],
      benefits: [
        "Prevents chemical leaks and contamination",
        "Reduces risk of toxic exposure",
        "Protects soil and water from pollution",
        "Complies with safety and environmental standards",
      ],
      description:
        "Chemical waste must be handled with caution. Proper storage, labeling, and disposal prevent pollution and protect both humans and the environment.",
    },
    {
      id: "medical-waste",
      title: "Medical Waste Management",
      steps: [
        {
          title: "Collect medical waste safely",
          detail:
            "Use designated containers with biohazard symbols for items like syringes, gloves, and bandages.",
        },
        {
          title: "Separate by type",
          detail:
            "Distinguish between infectious, sharps, and pharmaceutical waste to ensure proper treatment.",
        },
        {
          title: "Use puncture-proof containers",
          detail:
            "Store needles and sharp objects in hard, sealed containers to avoid injuries.",
        },
        {
          title: "Disinfect or incinerate",
          detail:
            "Autoclave infectious waste or incinerate it at high temperature to eliminate pathogens.",
        },
        {
          title: "Record and track disposal",
          detail:
            "Keep records of quantities and dates for accountability and safe monitoring.",
        },
      ],
      benefits: [
        "Prevents infection spread",
        "Protects healthcare workers and the public",
        "Ensures compliance with health regulations",
      ],
      description:
        "Medical waste requires strict handling procedures. Proper segregation, storage, and disposal are vital to protect people and prevent contamination.",
    },
    {
      id: "ewaste",
      title: "Electronic Waste Recycling",
      steps: [
        {
          title: "Collect e-waste separately",
          detail:
            "Gather old devices like phones, batteries, and computers. Keep them separate from general waste.",
        },
        {
          title: "Store safely",
          detail:
            "Avoid crushing or breaking electronics, as they may release hazardous materials like lead or mercury.",
        },
        {
          title: "Find certified recyclers",
          detail:
            "Send e-waste to authorized recycling facilities that can extract valuable metals safely.",
        },
        {
          title: "Avoid informal recycling",
          detail:
            "Do not burn or dismantle electronics manually — it releases toxic fumes and pollutes the environment.",
        },
        {
          title: "Encourage reuse",
          detail:
            "Donate or refurbish usable electronics to extend their life and reduce waste generation.",
        },
      ],
      benefits: [
        "Recovers valuable metals and components",
        "Prevents toxic chemical leakage",
        "Supports sustainable material use",
      ],
      description:
        "E-waste contains valuable resources but also hazardous materials. Responsible recycling helps recover metals and prevent environmental pollution.",
    },
    {
      id: "industrial-waste",
      title: "Industrial Waste Treatment",
      steps: [
        {
          title: "Identify industrial by-products",
          detail:
            "Includes metal scraps, chemical residues, sludge, and other manufacturing wastes.",
        },
        {
          title: "Segregate hazardous and non-hazardous waste",
          detail:
            "Separate waste streams for proper recycling, reuse, or disposal.",
        },
        {
          title: "Pre-treat before disposal",
          detail:
            "Use neutralization, filtration, or solidification to minimize toxic impact.",
        },
        {
          title: "Use authorized treatment plants",
          detail:
            "Send industrial waste to certified facilities equipped for safe processing.",
        },
        {
          title: "Monitor and document disposal",
          detail:
            "Maintain detailed waste records for compliance and safety audits.",
        },
      ],
      benefits: [
        "Reduces industrial pollution",
        "Encourages responsible manufacturing",
        "Protects workers and nearby communities",
      ],
      description:
        "Industrial waste requires proper segregation and treatment to reduce environmental impact and promote sustainable production.",
    },
    {
      id: "safe-storage",
      title: "Safe Storage and Disposal Practices",
      steps: [
        {
          title: "Use leak-proof containers",
          detail:
            "Store hazardous liquids in tightly sealed, compatible containers labeled clearly.",
        },
        {
          title: "Keep away from sunlight and heat",
          detail:
            "Store in cool, dry areas to prevent reactions or evaporation of toxic fumes.",
        },
        {
          title: "Avoid drain disposal",
          detail:
            "Never pour hazardous waste down sinks or drains — it can contaminate water sources.",
        },
        {
          title: "Deliver to collection centers",
          detail:
            "Bring waste to municipal hazardous waste drop-off sites or recycling centers.",
        },
        {
          title: "Educate and train handlers",
          detail:
            "Ensure everyone involved understands safe handling procedures and emergency responses.",
        },
      ],
      benefits: [
        "Prevents groundwater contamination",
        "Reduces fire and chemical hazards",
        "Promotes responsible community waste management",
      ],
      description:
        "Proper storage and disposal are key steps in managing hazardous waste safely. It protects ecosystems, reduces pollution, and ensures community safety.",
    },
  ];
  const methodImageSets = useMemo(() => ({
    'chemical-waste': [
      'https://images.unsplash.com/photo-1704756082548-af7c773aa0ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1679805040302-49765a8b9f83?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1684227997225-b2ae025d0b7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600683550685-d6cea04f22aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1633129167930-2019e0ba8257?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],

    'medical-waste': [
      'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582560474992-385ebb9b29a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1646956141021-d687dcfe5fb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1715442405505-e53ddb9f7d26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1690306815613-f839b74af330?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    'ewaste': [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582748298043-0c0d31aa506e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1759659514489-60060eaf181b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1759500657339-6e11b99a8882?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],

    'industrial-waste': [
      'https://images.unsplash.com/photo-1585906114301-1995c48be894?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1642204705127-accc0dcc5779?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1727373203641-7615f95d3bd1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1690356107603-f06f8adf80d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1648818170819-0dd78af84faa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],

    'safe-storage': [
      'https://images.unsplash.com/photo-1579812838194-6e2964204f58?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1623434974327-f5934bfac387?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1681731061718-46364a2cf0b6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1695369557512-4865fee190c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1762805544550-f12a8ebceb2e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      id: "food",
      title: "Chemical Waste",
      description: "Contains harmful chemicals to health and environment.",
      detail:
        "Chemical waste includes acids, solvents, cleaning agents, paints, and pesticides. These materials require special handling and disposal to prevent contamination.",
      extraInfo:
        "Proper chemical waste management prevents water and soil pollution while protecting human health.",
      img: "https://images.unsplash.com/photo-1546695032-736b612d5a0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
    },
    {
      id: "garden",
      title: "Medical Waste",
      description:
        "Must be handled carefully to avoid infection or contamination.",
      detail:
        "Medical waste includes used syringes, bandages, expired medicines, and laboratory materials. It needs to be sterilized or incinerated safely.",
      extraInfo:
        "Proper disposal of medical waste protects healthcare workers and prevents disease spread.",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: "paper",
      title: "Electronic Waste",
      description: "Contains valuable metals but can release toxic substances.",
      detail:
        "E-waste includes old phones, computers, batteries, and circuit boards. It contains heavy metals like lead and mercury that must be recycled properly.",
      extraInfo:
        "Recycling e-waste recovers valuable materials and prevents toxic leaks into the environment.",
      img: "https://images.unsplash.com/photo-1672689921625-26cfee65f0e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073",
    },
    {
      id: "paper2",
      title: "Industrial Waste",
      description: "Generated from factories and production processes.",
      detail:
        "Industrial waste includes metal scraps, sludge, chemicals, and residues from manufacturing. It requires proper treatment before disposal.",
      extraInfo:
        "Managing industrial waste helps reduce pollution and promotes sustainable production practices.",
      img: "https://images.unsplash.com/photo-1710599377519-9d990cdf1c01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },
  ];

  const infoSections = [
    {
      id: "benefits",
      title: "Benefits of Managing Hazardous Waste?",
      content:
        "Proper management prevents pollution, protects human health, and conserves ecosystems from toxic damage.",
    },
    {
      id: "purpose",
      title: "Purpose of Managing Hazardous Waste?",
      content:
        "The main goal is to safely collect, store, and dispose of harmful materials without endangering people or the environment.",
    },
    {
      id: "impact",
      title: "Environmental Impact?",
      content:
        "If not managed properly, hazardous waste can contaminate soil, water, and air  posing long-term health risks.",
    },
    {
      id: "examples",
      title: "Examples of Hazardous Waste?",
      content:
        "Batteries, paint, pesticides, used oil, and electronic waste all contain chemicals that can be dangerous if not handled carefully.",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-white dark:bg-base-100"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Hero Section */}
      <div className="pt-20 lg:pt-12 pb-0 overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-white via-hero/5 to-white dark:from-base-100 dark:via-base-200 dark:to-base-100">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="px-8 lg:pl-12 lg:pr-8">
            <h1
              className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-secondary dark:text-primary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Protecting Nature Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">
                Safe Waste Management
              </span>
            </h1>
            <p
              className="text-sm lg:text-[15px] text-left text-gray-500 dark:text-gray-400 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore safe and responsible ways to manage hazardous waste. Learn
              what makes it dangerous and discover effective disposal and
              recycling methods. By handling waste properly, we can protect both
              people and the planet. Together, let’s make safety our priority
              for a cleaner, healthier future.
            </p>
            <div
              className="flex flex-wrap gap-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                onClick={() => {
                  setActiveHero("learn");
                  whatIsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeHero === "learn"}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === "learn"
                  ? "bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero"
                  : "border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-hero hover:bg-hero/5 dark:hover:bg-base-200 dark:text-white"
                  }`}
              >
                Learn Hazardous Waste
                <span>→</span>
              </button>
              <button
                onClick={() => {
                  setActiveHero("types");
                  typesRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeHero === "types"}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === "types"
                  ? "bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero"
                  : "border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-hero hover:bg-hero/5 dark:hover:bg-base-200 dark:text-white"
                  }`}
              >
                Hazardous Waste Types →
              </button>
            </div>
            <div
              className="flex flex-wrap gap-3 mt-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <button
                onClick={() => {
                  setActiveHero("manage");
                  manageRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeHero === "manage"}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${activeHero === "manage"
                  ? "bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero"
                  : "border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-hero hover:bg-hero/5 dark:hover:bg-base-200 dark:text-white"
                  }`}
              >
                Manage Hazardous Waste
                <span>→</span>
              </button>
              <button
                onClick={() => {
                  setActiveHero("ai");
                  mapRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeHero === "ai"}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === "ai"
                  ? "bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero"
                  : "border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-hero hover:bg-hero/5 dark:hover:bg-base-200 dark:text-white"
                  }`}
              >
                Hazardous Waste Maps →
              </button>
              <button
                onClick={() => {
                  setActiveHero("calculator");
                  calculatorRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeHero === "calculator"}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeHero === "calculator"
                  ? "bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero"
                  : "border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-hero hover:bg-hero/5 dark:hover:bg-base-200 dark:text-white"
                  }`}
              >
                Hazardous Waste Calculator →
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
              src={imgHazardous2}
              alt="Hazardous Waste Illustration"
              className="w-[90%] lg:w-[90%] h-auto lg:mt-0 mt-16 object-contain"
            />
          </div>

          {/* main large spinning star (top-right) */}
          <h1
            className="justify-end items-end flex mt-1 absolute right-4 sm:right-8 md:right-12 lg:right-20 top-20 lg:top-24 z-40 pointer-events-none"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <PiStarFour className="animate-spin rotate-90 mt-3 text-hero dark:text-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
          </h1>

          {/* smaller pulsing star (bottom-right) */}
          <h1
            className="justify-end items-end flex mt-1 absolute right-8 sm:right-16 md:right-24 lg:right-36 bottom-16 sm:bottom-20 lg:bottom-24 z-30 pointer-events-none hidden sm:flex"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <PiStarFour className="animate-spin rotate-90 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-hero/80 dark:text-hero/95" />
          </h1>

          {/* left-middle spinning star */}
          <h1
            className="justify-start items-center flex mt-1 absolute right-10 sm:right-32 md:right-80 lg:right-[30rem] top-36 sm:top-32 lg:top-36 z-30 pointer-events-none"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <PiStarFour className="animate-spin mt-1 rotate-90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-hero/70 dark:text-white" />
          </h1>
        </div>
      </div>

      {/* What Is Organic Waste Section */}
      <div
        ref={whatIsRef}
        className="py-12 lg:py-16 lg:mt-12 bg-hero/5 dark:bg-base-200"
      >
        <div className="flex flex-col lg:flex-row mx-8 lg:mx-12 gap-8 lg:gap-16 items-start">
          <div className="flex-1">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
              data-aos="fade-right"
            >
              What Is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">
                Hazardous Waste?
              </span>
            </h2>
            <p
              className="text-sm lg:text-[15px] text-justify text-gray-500 dark:text-gray-400 mb-4 lg:mb-6 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Hazardous waste refers to materials that can be harmful to humans,
              animals, or the environment if not handled properly such as
              batteries, chemicals, and medical waste.
            </p>
            <p
              className="text-sm lg:text-[15px] text-justify text-gray-500 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Proper management ensures these wastes are safely treated,
              recycled, or disposed of to prevent pollution and protect health.
              Responsible handling keeps our Earth cleaner and safer for
              everyone.
            </p>

            <div
              className="space-y-1 mb-8 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {infoSections.map((section) => {
                const isOpen = selectedInfo === section.id;
                return (
                  <div
                    key={section.id}
                    className="border-b border-gray-200 dark:border-gray-600"
                  >
                    <button
                      onClick={() =>
                        setSelectedInfo(isOpen ? null : section.id)
                      }
                      className="w-full px-3 sm:px-4 py-4 sm:py-5 flex items-center justify-between hover:bg-primary/10 dark:hover:bg-base-100 transition-all duration-300"
                    >
                      <span
                        className={`text-left transition-all duration-300 ${isOpen
                          ? "text-green-700 dark:text-primary font-semibold [font-size:20px] sm:[font-size:24px] lg:[font-size:22px]"
                          : "text-primary dark:text-hero [font-size:10px] sm:[font-size:12px] lg:[font-size:16px]"
                          }`}
                      >
                        {section.title}
                      </span>


                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen
                          ? "bg-green-700 dark:bg-primary border-secondary"
                          : "bg-white dark:bg-base-100 border-primary hover:border-primary hover:bg-hero/5"
                          }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 ${isOpen
                            ? "-rotate-90 text-white"
                            : "rotate-90 text-primary"
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
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
              style={{ overflow: "visible" }}
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
                const blur = distance === 0 ? "blur(0px)" : "blur(3px)";
                const zIndex = 10 - distance;

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: raw === 0 ? "82%" : "72%",
                      height: raw === 0 ? "52%" : "45%",
                      top: `calc(50% + ${translateY}px)`,

                      transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
                      opacity,
                      filter: blur,
                      zIndex,

                      willChange: "transform, opacity, filter, top",
                      transition:
                        "top 1000ms cubic-bezier(0.22,1,0.36,1), transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms linear, filter 1000ms linear",
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
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed right-6 z-100 bottom-6 z-50 rounded-full p-3 shadow-lg focus:outline-none bg-primary dark:bg-hero transition-transform duration-200 active:scale-90 ${showBackToTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 z-300 h-6 bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* Types of Organic Waste Section */}
      <div ref={typesRef} className="py-12 lg:py-16 mx-8 lg:mx-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-3 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          Types of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">Hazardous Waste</span>
        </h2>
        <p
          className="text-sm lg:text-[15px] text-gray-500 dark:text-gray-400 text-center mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover what kinds of hazardous waste you can identify and how to
          dispose of them safely.
        </p>

        {/* Hazardous Waste Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {wasteTypes.map((type, idx) => (
            <div
              key={type.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group cursor-pointer"
              onClick={() => setSelectedType(type.id)}
            >
              {/* Card */}
              <div
                className="
        relative overflow-hidden rounded-2xl
        bg-white dark:bg-base-200
        border border-gray-200/60 dark:border-gray-700/50
        hover:border-gray-300 dark:hover:border-gray-600
        transition-all duration-300
      "
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-base-200">
                  {type.img ? (
                    <img
                      src={type.img}
                      alt={type.title}
                      className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="
            text-base lg:text-[17px] font-semibold
            text-gray-900 dark:text-white
            mb-2
            group-hover:text-primary dark:group-hover:text-hero
            transition-colors duration-300
          "
                  >
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {type.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div
                  className="
          absolute bottom-3 right-5
          w-8 h-8 rounded-full
          bg-primary
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transform translate-x-2 group-hover:translate-x-0
          transition-all duration-300
        "
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Type Detail Modal */}
      {selectedType && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedType(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {wasteTypes
              .filter((t) => t.id === selectedType)
              .map((type) => (
                <div key={type.id}>
                  {/* Header with Image */}
                  <div className="relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedType(null)}
                      className="
                  absolute top-4 right-4 z-10
                  w-10 h-10 rounded-full
                  bg-white/90 dark:bg-gray-900/90
                  backdrop-blur-sm
                  flex items-center justify-center
                  hover:bg-white dark:hover:bg-gray-900
                  transition-all duration-200
                  shadow-lg
                "
                    >
                      <svg
                        className="w-5 h-5 text-gray-700 dark:text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                      {type.img ? (
                        <img
                          src={type.img}
                          alt={type.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image Available
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />


                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {type.detail}
                    </p>
                    {type.extraInfo && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {type.extraInfo}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* How to Manage Section */}
      <div
        ref={manageRef}
        className="py-12 lg:py-16 bg-hero/5 dark:bg-base-200 relative"
      >
        {/* Decorative stars */}
        <div
          className="absolute right-[30rem] top-12 z-10 pointer-events-none"
          data-aos="zoom-in"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/70 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        </div>
        <div
          className="absolute right-[26rem] top-20 z-10 pointer-events-none"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <PiStarFour className="animate-spin rotate-90 text-hero/50 dark:text-hero text-2xl sm:text-3xl md:text-3xl lg:text-4xl" />
        </div>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl mx-8 lg:mx-12 font-bold mb-4 lg:mb-6 text-secondary dark:text-primary"
          data-aos="fade-up"
        >
          How to Manage{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">Hazardous Waste?</span>
        </h2>

        <p
          className="text-sm mx-8 lg:mx-12 leading-relaxed lg:text-[15px] text-justify text-gray-500 dark:text-gray-400 mb-6 lg:mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hazardous waste management isn't just about disposal it's about
          handling dangerous materials responsibly. By managing it properly, we
          can protect health, prevent pollution, and keep our environment safe. ⚠️
        </p>

        <div
          className="flex flex-wrap gap-3 mx-8 lg:mx-12 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() =>
                setSelectedMethod(
                  method.id === selectedMethod ? null : method.id
                )
              }
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium ${selectedMethod === method.id
                ? "bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero"
                : "border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-hero hover:bg-hero/5 dark:hover:bg-base-200 dark:text-white"
                }`}
            >
              {method.title}
              <span
                className={`ml-2 transform transition-transform ${selectedMethod === method.id
                  ? "-rotate-90 text-white dark:text-base-300"
                  : "rotate-90 text-gray-500 dark:text-gray-400"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {selectedMethod && (
          <div
            className="animate-slideDown mx-8 lg:mx-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {methods
              .filter((m) => m.id === selectedMethod)
              .map((method) => (
                <div
                  key={method.id}
                  className="bg-white dark:bg-base-100 p-8 rounded-3xl"
                >
                  <div className="grid md:grid-cols-2 gap-12 mb-8">
                    <div
                      className="rounded-3xl overflow-hidden h-72 sm:h-96 relative"
                      data-aos="fade-right"
                    >
                      {(() => {
                        const imgs =
                          methodImageSets[method.id] ||
                          methodImageSets["composting"];
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
                        {(
                          methodImageSets[method.id] ||
                          methodImageSets["composting"]
                        ).map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === methodSlide
                              ? "bg-white dark:bg-base-100"
                              : "bg-white dark:bg-base-100/40"
                              } transition-all duration-300`}
                          />
                        ))}
                      </div>
                    </div>

                    <div data-aos="fade-left">
                      <h2 className="text-2xl text-secondary dark:text-primary font-semibold mb-4">
                        {method.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-200 mb-6 leading-relaxed text-sm">
                        {method.description}
                      </p>

                      <h3 className="text-2xl font-semibold text-secondary dark:text-primary mt-8 mb-3">
                        Benefits of {method.title}
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {method.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
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

                            <span className="text-gray-700 dark:text-white">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() =>
                          howToRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                        className="px-5 py-2.5 rounded-full border-2 text-sm font-medium bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold border-primary dark:border-hero hover:bg-green-700 transition-all"
                      >
                        Let's Make It →
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 md:mt-16 gap-12">
                    <div data-aos="fade-up" data-aos-delay="300">
                      <h3
                        ref={howToRef}
                        className="text-2xl text-secondary dark:text-primary font-semibold mb-3"
                      >
                        How to Make {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                        Follow these simple steps to turn{" "}
                        {method.id === "chemical-waste"
                          ? "hazardous chemicals into safely managed materials"
                          : method.id === "medical-waste"
                            ? "medical waste into properly disposed materials"
                            : method.id === "ewaste"
                              ? "electronic waste into recycled components"
                              : method.id === "industrial-waste"
                                ? "industrial waste into safely treated materials"
                                : "hazardous waste into safely stored and disposed materials"}
                        :
                      </p>
                      <div
                        className="space-y-3"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        {method.steps.map((step, idx) => {
                          const stepKey = `${method.id}-${idx}`;
                          const isOpen = selectedStep === stepKey;
                          return (
                            <div
                              key={idx}
                              className={`rounded-2xl overflow-hidden border ${isOpen
                                ? "bg-primary dark:bg-third border-hero dark:border-third"
                                : "bg-hero/5 dark:bg-base-200 border-gray-200 dark:border-gray-600"
                                }`}
                            >
                              <button
                                onClick={() =>
                                  setSelectedStep(isOpen ? null : stepKey)
                                }
                                className={`w-full px-6 py-4 pb-4 flex items-center justify-between transition-all duration-300 ${isOpen
                                  ? ""
                                  : "hover:bg-primary/10 dark:hover:bg-base-100"
                                  }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${isOpen
                                      ? "bg-white text-green-600  dark:text-third"
                                      : "bg-primary text-white  dark:bg-third"
                                      }`}
                                  >
                                    {idx + 1}
                                  </div>
                                  <span
                                    className={`${isOpen
                                      ? "text-white font-bold"
                                      : "text-sm font-medium text-left text-gray-800 dark:text-white"
                                      }`}
                                  >
                                    {step.title}
                                  </span>
                                </div>
                                <div
                                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen
                                    ? "border-white"
                                    : "border-gray-200 dark:border-gray-600"
                                    }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-4 h-4 transform transition-transform duration-300 ${isOpen
                                      ? "-rotate-90 text-white"
                                      : "rotate-90 text-primary  "
                                      }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </button>
                              <div
                                ref={(el) => (detailRefs.current[stepKey] = el)}
                                style={{
                                  maxHeight: isOpen
                                    ? `${detailRefs.current[stepKey]
                                      ?.scrollHeight || 0
                                    }px`
                                    : "0px",
                                }}
                                className="px-6 pb-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                              >
                                <div
                                  className={`pl-10 pr-8 pb-3 transform transition-all duration-300 ${isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-2 opacity-0"
                                    }`}
                                >
                                  <p
                                    className={`${isOpen
                                      ? "text-white"
                                      : "text-gray-600 dark:text-gray-200"
                                      } text-sm leading-relaxed`}
                                  >
                                    {step.detail}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>


                    <div
                      className="relative h-96 rounded-3xl md:mt-40  overflow-hidden flex items-center justify-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <DotLottieReact
                        src="https://lottie.host/f50034fa-820d-4c43-b4a0-f87badd99a08/jdAGc0hQQq.lottie"
                        loop
                        autoplay
                        style={{
                          width: "100%",
                          height: "150%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-20">
                    <h3
                      className="text-2xl font-semibold text-center mb-3 text-secondary dark:text-primary"
                      data-aos="fade-up"
                    >
                      Learn How to Make {method.title}
                    </h3>
                    <p
                      className="text-gray-600 dark:text-gray-200 text-center mb-4 text-base"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {method.id === "chemical-waste"
                        ? "Watch this video on how to handle chemical waste safely."
                        : method.id === "medical-waste"
                          ? "Learn proper medical waste management through this short guide."
                          : method.id === "ewaste"
                            ? "Discover how electronic waste is safely recycled."
                            : method.id === "industrial-waste"
                              ? "Learn about industrial waste treatment and responsible disposal."
                              : "Watch how to safely store and dispose of hazardous materials."}
                    </p>

                    <div
                      className="aspect-video w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-auto overflow-hidden rounded-2xl"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <iframe
                        className="w-full h-full"
                        src={
                          method.id === 'chemical-waste'
                            ? 'https://www.youtube.com/embed/-3-kpi2rZwc?si=Bj3NgraBQyIq5bxY'
                            : method.id === 'medical-waste'
                              ? 'https://www.youtube.com/embed/gKSPSKiB9PE?si=ySwxEhQ7nwoWU09R'
                              : method.id === 'ewaste'
                                ? 'https://www.youtube.com/embed/r-diBr0-Ky8?si=cVOR91RJ3oM0naEO'
                                : method.id === 'industrial-waste'
                                  ? 'https://www.youtube.com/embed/VW5iKCvs8Jw?si=Nb8P4Z11NO3VWImj'
                                  : 'https://www.youtube.com/embed/PxwAtAMPNt4?si=qw-r8TiIGXtjy25n'
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
            Find Hazardous Waste{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">
              Disposal Centers Near You
            </span>
          </h2>
          <p
            className="text-sm lg:text-[15px] text-center text-gray-500 dark:text-gray-400 mb-4 lg:mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover nearby facilities that safely collect and manage hazardous
            materials such as chemicals, batteries, and medical waste.
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
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-400">
              Map loading…
            </div>
          )}
        </div>
      </div>

      {/* Carbon Calculator Section */}
      <div className="py-16 lg:py-24 bg-gradient-to-b from-white via-hero/5 to-white dark:from-base-100 dark:via-base-200 dark:to-base-100">


        <div ref={calculatorRef} className="py-12 lg:py-16 mx-8 lg:mx-12">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-6 lg:mb-8">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-3 text-secondary dark:text-primary"
                data-aos="fade-up"
              >
                Carbon Impact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">Calculator</span>
              </h2>
              <p
                className="text-sm leading-relaxed lg:text-[15px] text-gray-500 dark:text-gray-400 text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Calculate the positive impact of your hazardous waste management
                on the environment
              </p>
            </div>

            {/* Calculator Box */}
            <div
              className="bg-white dark:bg-base-200 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-600 shadow-sm"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <p className="font-medium mb-4 text-sm lg:text-[15px] text-neutral-800 dark:text-neutral-200 sm:text-sm">
                How many kilograms of hazardous waste do you process per week?
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:flex-1">
                  <input
                    type="text"
                    placeholder="Enter the number..."
                    value={waste}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-3 border border-gray-200 dark:border-gray-600 dark:bg-base-100 rounded-full text-sm focus:outline-none focus:border-primary dark:border-hero transition-transform duration-150 ${inputAnimating ? "scale-90" : ""
                      }`}
                  />
                  {inputError && (
                    <p className="text-red-500 text-xs mt-2 ml-4 animate-slideDown flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 1024 1024"
                        className="flex-shrink-0"
                      >
                        <path
                          fill="currentColor"
                          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768a384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0a48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
                        />
                      </svg>
                      {inputError}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleCalculate}
                  disabled={isCounting || inputError}
                  className={`px-6 sm:px-8 py-3 bg-primary dark:bg-hero text-white dark:text-base-300 font-semibold rounded-full font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all text-sm ${isCounting || inputError
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                    }`}
                >
                  {isCounting ? "Calculating..." : "Calculate"}
                </button>
              </div>

              {/* Result Section */}
              {displayedCo2 !== null && displayedTrees !== null && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                  <div
                    className="bg-hero/5 dark:bg-green-900/30 border border-gray-200 dark:border-green-900/30 rounded-2xl p-5 sm:p-6 text-center"
                    data-aos="fade-up"
                  >
                    <p className="text-gray-600 dark:text-gray-200 text-xs mb-1 sm:mb-2">
                      CO₂ Saved
                    </p>
                    <p
                      className={`text-3xl sm:text-4xl font-bold text-secondary dark:text-primary transition-all ${isCounting ? "transform scale-105" : ""
                        }`}
                    >
                      {Number(displayedCo2).toFixed(1)} kg
                    </p>
                    <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">
                      Amazing impact!
                    </p>
                  </div>

                  <div
                    className="bg-hero/5 dark:bg-green-900/30 border border-gray-200 dark:border-green-900/30 rounded-2xl p-5 sm:p-6 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p className="text-gray-600 dark:text-gray-200 text-xs mb-1 sm:mb-2">
                      Trees Equivalent
                    </p>
                    <p
                      className={`text-3xl sm:text-4xl font-bold text-primary dark:text-hero transition-all ${isCounting ? "transform scale-105" : ""
                        }`}
                    >
                      {Number(displayedTrees).toFixed(2)}
                    </p>
                    <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">
                      Keep it growing!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hazardous;

