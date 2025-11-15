import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DataSlider from '../../data/DataSlider3R';

const ImageSlider = ({ category = 'reuse' }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Filter images by category
  const filteredImages = DataSlider.filter(image => image.category === category);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div
        className={`${i === activeSlide
          ? 'w-8 h-2 rounded-full bg-primary mt-6'
          : 'w-5 h-2 rounded-lg bg-hero/15 scale-75 mt-6'
          } mx-1`}
        style={{ transition: 'all 0.3s ease' }}
      ></div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mx-0 lg:mx-12 mt-14">
      <div className="relative mt-8">
        <Slider {...settings} className="px-2">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`transition-all duration-300 ${index === activeSlide ? 'scale-100 z-10' : 'opacity-100 scale-75'
                }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={image.url}
                  alt={image.id}
                  className="w-full lg:h-[23rem] h-[12rem] object-cover"
                  style={{
                    filter: index === activeSlide ? 'none' : 'brightness(100%)',
                  }}
                />
                {index !== activeSlide && (
                  <div className="absolute inset-0 bg-black/55"></div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};



// =============================
// ARROW COMPONENTS
// =============================
const SampleNextArrow = ({ style, onClick }) => (
  <button
    className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary dark:bg-hero text-white flex items-center justify-center cursor-pointer z-10 hover:shadow-lg transition-shadow"
    onClick={onClick}
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
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
  </button>
);

const SamplePrevArrow = ({ style, onClick }) => (
  <button
    className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary dark:bg-hero text-white flex items-center justify-center cursor-pointer z-10 hover:shadow-lg transition-shadow"
    onClick={onClick}
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

export default ImageSlider;
