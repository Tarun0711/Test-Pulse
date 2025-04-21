import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHeart, FaLock, FaUnlock } from "react-icons/fa";

const data = [
  {
    name: "Mock Test 1",
    ended: "12 August 2015",
    image:
      "https://img.freepik.com/free-vector/flat-geometric-background_23-2148967370.jpg",
  },
  {
    name: "Mock Test 2",
    ended: "12 August 2015",
    image:
      "https://img.freepik.com/free-vector/gradient-abstract-background_23-2149131346.jpg",
  },
  {
    name: "Mock Test 3",
    ended: "12 August 2015",
    image:
      "https://img.freepik.com/free-vector/flat-geometric-background_23-2148957214.jpg",
    locked: true,
  },
  {
    name: "Mock Test 4",
    ended: "12 August 2015",
    image:
      "https://img.freepik.com/free-vector/flat-geometric-background_23-2148957289.jpg",
  },
  {
    name: "Mock Test 5",
    ended: "12 August 2015",
    image:
      "https://img.freepik.com/free-vector/flat-design-abstract-background_23-2149103999.jpg",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

function FeaturedContest() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-6 md:px-28 py-12 mt-28 flex flex-col gap-8 transition-colors duration-300">
      {/* Title Section */}
    
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Practice Mock Tests
        </h1>
        <p className=" flex items-center gap-2 text-blue-800 cursor-pointer">
          <FaHeart /> <span>Sponsor a Contest</span>
        </p>
      </div>
      {/* Carousel Section */}
      <div className="w-[90%] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
          containerClass="carousel-container"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative group mx-4 rounded-lg overflow-hidden shadow-lg ${
                item.locked ? "opacity-80 grayscale" : "opacity-100"
              }`}
            >
              {/* Image with Hover Effect */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              {/* Test Details */}
              <div className="absolute bottom-4 left-4 text-white space-y-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm">Ended: {item.ended}</p>
              </div>

              {/* Lock Icon Overlay */}
              <div
                className={`absolute top-4 right-4 p-2 rounded-full ${
                  item.locked
                    ? "bg-gray-500 dark:bg-gray-700 text-white shadow-md"
                    : "bg-green-500 dark:bg-green-600 text-white shadow-lg"
                } flex items-center justify-center`}
              >
                {item.locked ? (
                  <FaLock className="w-6 h-6" />
                ) : (
                  <FaUnlock className="w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedContest;
