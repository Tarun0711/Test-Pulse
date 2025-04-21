import React, { useRef, useState } from "react";
import Navbar from "../Components/Home/Navbar";
import { Star, StarOutline } from "@mui/icons-material"; // Replace with actual icon names if different
import { HiBookOpen } from "react-icons/hi2";
import TestDetailCard from "./TestDetailCard";

const offerings = [
  "12 All India Tests covering full syllabus (2 Semi-Major + 10 Major) as per latest NEET syllabus",
  "Detailed solutions available for every test",
  "Multiple re-attempts allowed for each paper",
  "Unique ALLEN App Advantage with personalised study tools like Improvement Book, Revision Cards, etc.",
  "Create your own Practice Question Paper powered by ALLEN's 15,000+ question bank",
];

const sidebarFeatures = [
  "Attempt First Test for Free",
  "Comprehensive preparation with part, full-length, and board pattern tests.",
  "Unlimited re-attempts for all tests",
  "Seminars/ Topper's talk at Offline center",
  "One on One Telephonic mentorship",
  "Offline center for 24/7 counselling",
];

function TestSeriesDetailsPage() {
  const [showAllTests, setShowAllTests] = useState(false);
  const testCards = Array(11).fill(0);
  const testSectionRef = useRef(null); 

  const handleToggleTests = () => {
    setShowAllTests((prev) => {
      const newShowAll = !prev;
      if (!prev) {
        testSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return newShowAll;
    });
  };
  return (
    <div className="h-auto dark:bg-gray-900 bg-white">
      <Navbar isHome={true} />

      {/* Main Content */}
      <div className="relative flex mt-14 h-auto w-full">
        {/* Left Section */}
        <div className="w-[65%] dark:bg-gray-800 mt-5 shadow-lg mb-7 mx-7 rounded-xl h-auto pb-5">
          <section className="pt-12 px-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              NEET(UG) Major Online Test Series: Target 2025
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                Class: Dropper | 6 months
              </p>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              The test series provides full-length mock tests designed to
              simulate the actual NEET exam pattern and difficulty level. It
              includes section-wise and subject-specific tests with instant
              performance analysis, including topic-wise strengths, weaknesses,
              and time management insights.
            </p>
            <div className="flex items-center gap-4 text-gray-600 py-2 dark:text-gray-300">
              <HiBookOpen
                fontSize={42}
                className="bg-gray-200 dark:bg-gray-700 p-1 rounded-md"
              />
              <div>
                <h2 className="text-sm font-thin">Subjects</h2>
                <p className="text-lg">Physics, Chemistry, Biology</p>
              </div>
            </div>
          </section>

          <section className="px-4">
            <h2 className="text-2xl font-bold dark:text-gray-400 text-gray-800 mb-6">
              Program Offerings
            </h2>
            <ul className="dark:text-gray-300 text-gray-600">
              {offerings.map((offering, index) => (
                <li key={index} className="mb-2 flex items-start gap-2">
                  <Star /> {offering}
                </li>
              ))}
            </ul>
          </section>

          <section ref={testSectionRef} className="mt-4 px-4">
            <h2 className="text-3xl font-bold dark:text-gray-400 text-gray-800 mb-6">
              Tests
            </h2>
            <div className="flex flex-col items-start gap-2">
              {testCards.slice(0, showAllTests ? testCards.length : 5).map((_, index) => (
                <TestDetailCard key={index} />
              ))}
            </div>
            <button
              onClick={handleToggleTests}
              className="mt-4 px-4 w-full py-2 text-blue-600 bg-blue-100 rounded "
            >
              {showAllTests ? "Show Less" : "Show More"}
            </button>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="w-[35%] mt-5 mb-7">
          <div className="max-w-sm sticky top-20 dark:bg-gray-800 bg-white border-gray-300 rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold dark:text-white text-gray-800">
              Arjuna JEE 2025 AITS
            </h2>
            <div className="relative my-4 w-full h-[200px]">
              <img
                src="https://www.edumate.tv/wp-content/uploads/2021/02/366225-neet-650x330-1.jpg"
                alt="Arjuna JEE"
                className="w-full rounded-lg"
              />
            </div>
            <ul className="space-y-1 dark:text-gray-300 text-gray-600">
              {sidebarFeatures.map((text, idx) => (
                <li key={idx} className="flex text-yellow-500 items-start gap-2">
                  <StarOutline /> {text}
                </li>
              ))}
            </ul>
            <div className="mt-4 ">
              <div className="flex justify-between items-center text-gray-800">
                <div>
                  <p className="line-through text-gray-400">₹1,999</p>
                  <p className="text-xl font-bold text-green-600">₹999</p>
                </div>
                <span className="px-2 py-1 text-sm font-extralight text-green-500 rounded">
                  Discount of 50% applied
                </span>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSeriesDetailsPage;
