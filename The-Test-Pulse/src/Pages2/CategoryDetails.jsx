import React, { useState } from "react";
import Navbar from "../Components/Home/Navbar";
import { HiPresentationChartBar } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";
import TestSeriesCard from "./TestSeriesCard";

function CategoryDetails() {
  const [selected, setSelected] = useState("Class 11th");

  const categories = ["All Test Series","Class 11th", "Class 12th", "Dropper"];

  return (
<div className="h-auto dark:bg-gray-900 bg-white">
      <Navbar isHome={true} />
      <div>
        <div
          style={{
            background: "rgb(134,208,255)",
            background:
              "linear-gradient(180deg, rgba(134,208,255,1) 0%, rgba(2,2,2,0) 100%)",
          }}
          className="flex font-inter md:px-24 justify-center items-center w-full  h-auto"
        >
          <div className="flex flex-col font-inter justify-center items-start w-[70%]  h-[70vh]">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">
              <span className="text-5xl font-bold text-orange-500">Neet </span>{" "}
              Online test series
            </h1>
            <p className="flex items-start gap-2 text-gray-600 py-2 px-4 dark:text-gray-300">
              <HiPresentationChartBar color="#f97316" fontSize={42} />
              <span className="max-w-[60%] text-lg">
                The test series provides full-length mock tests designed to
                simulate the actual NEET exam pattern and difficulty level. It
                includes section-wise and subject-specific tests with instant
                performance analysis, including topic-wise strengths,
                weaknesses, and time management insights.
              </span>
            </p>
            <p className="flex items-start gap-2 text-gray-600 py-2 px-4 dark:text-gray-300">
              <MdFactCheck color="#f97316" fontSize={42} />
              <span className="max-w-[60%] text-lg">
                Students can practice in a real-time exam-like interface to
                build familiarity with the NEET exam. The test series often
                allows flexibility to attempt tests at a preferred time,
                enabling self-paced learning while adhering to NEET’s structure
                and time constraints.
              </span>
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://thequalifier.in/img/the-qualifier-neet-illustration.png"
              alt="NEET Online Test Series Illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* Test Series Section */}
      <div className="w-full flex-col flex md:px-24 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Test Series for NEET Students
        </h2>
        <div className="flex gap-4 mb-6">
          {categories.map((label) => (
            <button
              key={label}
              onClick={() => setSelected(label)}
              className={`w-fit px-4 py-2 rounded-lg transition duration-200 outline-2 outline ${
                selected === label
                  ? "outline-blue-500  text-blue-500"
                  : "outline-gray-200 text-gray-600 dark:text-white hover:bg-blue-500 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {Array(7)
            .fill(null)
            .map((_, idx) => (
              <TestSeriesCard categoryName={'Neet'} testSeriesName={'Leader Test Series'} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;
