import { useEffect, useRef } from 'react';
import { FaRecycle } from 'react-icons/fa'; // FontAwesome icon, or replace it with your preferred icon library

const ScrollingText = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let scrollAmount = 0;

    const scrollText = () => {
      scrollAmount += 0.5; // Adjust the speed here
      scroll.style.transform = `translateX(-${scrollAmount}px)`;
      if (scrollAmount >= scroll.offsetWidth) {
        scrollAmount = 0; // Reset when the text goes out of view
      }
      requestAnimationFrame(scrollText);
    };

    scrollText();
  }, []);

  return (
    <div className="bg-primary dark:bg-third w-full overflow-hidden py-4 font-syne font-bold">
      <div ref={scrollRef} className="whitespace-nowrap flex items-center space-x-4">
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
        <FaRecycle className="text-white" />
        <span className="text-white text-xl">Let's Save Our Earth!</span>
      </div>
    </div>
  );
};

export default ScrollingText;
