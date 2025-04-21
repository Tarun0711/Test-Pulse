import React from "react";
import Slideshow from "../Testing/TestingPhaseComponents/Crausel";
import Navbar from "../Components/Home/Navbar";
import Carousel from "./Carousel";
import CourseCards from "./TestSeriesCategoryCard";

function TestSeries() {
  return (
    <div className="h-auto dark:bg-gray-900 bg-white">
      <Navbar isHome={true} />
      <div className="p-6 mt-14 md:px-24">
        <Carousel />
        <h2 className="text-3xl mt-4 font-bold tracking-tight leading-tight text-gray-600 dark:text-white">
          Explore Your Category
        </h2>
        <div className="mt-4 px-8">
              <CourseCards/>
        </div>
      </div>
    </div>
  );
}

export default TestSeries;
