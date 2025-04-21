import React from "react";
import { FaPlay, FaPlayCircle } from "react-icons/fa";

function MockCard({ data }) {
  return (
    <div className="h-[370px] w-[350px] dark:bg-gray-800 hover:scale-105 transition-all ease-in-out duration-300 bg-white  shadow-lg border rounded-xl overflow-hidden">
      {/* Top Gradient Section */}
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="h-[60%] w-full bg-gradient-to-tr from-orange-400 via-pink-400 to-pink-600 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <h2 className="text-gray-50 absolute top-4 left-2 font-bold text-2xl">
          {data.name}
        </h2>
        {/* Overlay Play Icon */}
        <FaPlayCircle className="absolute hover:text-Voilet hover:shadow-2xl -bottom-9 right-[10%] dark:bg-hero-dark-500 dark:text-white bg-white rounded-full shadow-md p-3 text-gray-800 text-7xl cursor-pointer" />
      </div>

      {/* Content Section */}
      <div className="h-[40%]  flex flex-col justify-between p-5">
        {/* Title */}

        {/* Chapters and Items */}
        <div className="flex justify-between font-inter items-center mt-4">
          <div className="text-center">
            <p className="text-lg font-semibold dark:text-white text-gray-800">
              {data.chapters}
            </p>
            <p className="text-sm text-gray-500">Chapters</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold dark:text-white text-gray-800">
              {data.totalQuestions}
            </p>
            <p className="text-sm text-gray-500">Total Questions</p>
          </div>

          <div className="text-center mt-4 pr-4">
            <p className="text-lg font-semibold dark:text-white text-gray-800">{data.time}</p>
            <p className="text-sm text-gray-500">Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockCard;
