import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DataSlider from '../../data/DataSlider3R'; // pastikan path benar

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
            ? 'w-8 h-2 rounded-full bg-green-700 mt-2'
            : 'w-5 h-2 rounded-lg bg-green-300 scale-75 mt-2'
          } mx-1`}
        style={{ transition: 'all 0.3s ease' }}
      ></div>
    ),
    dotsClass: 'slick-dots custom-dots flex items-center justify-center mt-6',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mx-0 lg:mx-12 mt-14">
      <div className="relative mt-8">
        <Slider {...settings} className="px-2">
          {DataSlider.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${index === activeSlide ? 'scale-100 z-10' : 'opacity-100 scale-75'
                }`}
            >
              {/* CARD CONTAINER */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Slide ${index}`}
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

// Arrow Components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-0 z-10`}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#4CAF50',
        borderRadius: '100px',
        scale: '1.1',
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-0 z-10`}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#4CAF50',
        borderRadius: '100px',
        scale: '1.1',
      }}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
