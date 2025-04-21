import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";
import TestSeriesCard from "../Core/DashBoardHome/TestSeriesCard";
import { ArrowRight } from "@mui/icons-material";
const data = [
  {
    title: "Practice Jee Mains",
  },
  {
    title: "Practice Jee Advanced",
  },
  {
    title: "Practice NEET",
  },
  {
    title: "Practice KVPY",
  },
];
function UnderHeroSection() {
  return (
    <div className="h-auto  mt-14 md:px-28 p-6  dark:bg-gray-900 bg-white">
      <div className="w-full flex  justify-between">
        <h1 className="text-4xl font-bold dark:text-richblack-5 text-gray-700">
          Test Series
        </h1>
        <Link
          className="text-blue-500 flex h-fit items-center"
          to="/test-series"
        >
          View All <ArrowRight />
        </Link>
      </div>
      <div className="md:p-4 flex flex-wrap  gap-4">
        <TestSeriesCard />
        <TestSeriesCard />
        <TestSeriesCard />
        <TestSeriesCard />
        <TestSeriesCard />
        <TestSeriesCard />
      </div>
      <div className=" gap-4">
      <div className="w-full flex  justify-between">
        <h1 className="text-4xl font-bold dark:text-richblack-5 text-gray-700">
          Explore Category
        </h1>
        <Link
          className="text-blue-500 flex h-fit items-center"
          to="/test-series"
        >
          View All <ArrowRight />
        </Link>
      </div>
        <div className="flex flex-wrap p-4 gap-4  ">
          {data.map((item) => (
            <>
              <Link
                to={`/explore/${item.title.toLowerCase().replace(/\s/g, "-")}`}
                key={item.title}
                className="text-white flex-1 h-20 hover:scale-95 transition-all ease-in-out duration-300 shadow-md relative w-60  p-4 bg-blue-500 rounded-xl  text-2xl hover:text-white-500"
              >
                {item.title}
                <p className=" absolute right-4 bottom-3">
                  <FaArrowRightLong />
                </p>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UnderHeroSection;
