import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Exclusive Offer",
    description: "Enrol for Online Courses for classes 6–10",
    highlight: "Get a Bridge Course worth ₹6K FREE!",
    bgColor: "bg-blue-400",
    buttonColor: "text-blue-500",
    buttonText: "Enrol Now",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Start Learning Today",
    description: "Interactive classes for holistic learning",
    highlight: "",
    bgColor: "bg-green-400",
    buttonColor: "text-green-500",
    buttonText: "Get Started",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Track Your Progress",
    description: "With personalized reports and analytics",
    highlight: "",
    bgColor: "bg-purple-400",
    buttonColor: "text-purple-500",
    buttonText: "Explore More",
    imgSrc: "https://via.placeholder.com/300",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className={`flex ${slide.bgColor} text-white p-6 rounded-lg items-center justify-center`}
            >
              <div className="w-1/2">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.highlight && (
                  <p className="mt-2 text-green-300">{slide.highlight}</p>
                )}
                <button
                  className={`mt-14 bg-white ${slide.buttonColor} font-semibold px-4 py-2 rounded`}
                >
                  {slide.buttonText}
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
