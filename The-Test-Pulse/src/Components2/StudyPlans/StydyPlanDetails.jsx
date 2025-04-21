import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../Components/Home/Navbar";
import { PlayArrow, Share } from "@mui/icons-material";
import { toast } from "react-toastify";
import { BiTargetLock } from "react-icons/bi";
import ProblemsTable from "./ProblemsTable";
import data from "../../Data/neet_jee_categorized_questions.json";
import StudyPlanCard from "../Problems/StudyPlanCard";


const StudyPlanDetails = () => {
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState({ show: false, value: 0 });
  const [isShowTag, setIsShowTag] = useState(false); // Step 1: Define state for isShowTag

  const imageRef = useRef(null);
  const handleCheckboxChange = () => {
    setIsShowTag((prev) => !prev); // Toggle the value of isShowTag
  };

  //   useEffect(() => {
  //     if (progress.show) {
  //       const progressInterval = setInterval(() => {
  //         setProgress((prev) =>
  //           prev.value < 100 ? { ...prev, value: prev.value + 1 } : prev
  //         );
  //       }, 100);

  //       return () => clearInterval(progressInterval); // Cleanup on unmount or completion
  //     }
  //   }, [progress.show]);

  const handleMouseMove = (event) => {
    if (!imageRef.current) return;

    const { clientX, clientY } = event;
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const angle =
      Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    setRotation(angle);
  };

  const handleShareClick = async () => {
    try {
      const link = window.location.href;
      await navigator.clipboard.writeText(link);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link. Please try again.");
    }
  };

  const handleStartClick = () => {
    setProgress({ show: true, value: 0 });
    toast.info("Study Plan Started!");
  };

  return (
    <div className="dark:bg-gray-900 bg-white " onMouseMove={handleMouseMove}>
      <Navbar isHome />
      <div
        className="h-96 flex items-center justify-center relative"
        style={{
          background:
            "radial-gradient(circle, rgba(44,44,44,0) 0%, rgba(152,217,255,1) 100%)",
        }}
      >
        <div className="flex md:items-start items-center md:flex-row flex-col gap-7">
          <img
            ref={imageRef}
            className="h-40 transition-transform duration-100"
            src="https://assets.leetcode.com/static_assets/others/Pandas_icon.png"
            alt="Pandas Icon"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-sm flex items-center gap-2 dark:text-gray-300 text-gray-700">
              <BiTargetLock /> This is a sample study plan for Pandas. You can
              customize it according to your needs.
            </p>
            <h1 className="text-3xl font-bold dark:text-richblack-5 text-gray-700">
              Study Plan Details
            </h1>
            {!progress.show && (
              <button
                className="dark:bg-white flex items-center gap-2 rounded-xl bg-black dark:text-black text-white font-semibold border-2 px-4 py-2"
                onClick={handleStartClick}
                aria-label="Start Study Plan"
              >
                <PlayArrow />
                Start
              </button>
            )}
            {progress.show && (
              <div className="relative flex items-center w-56 h-2 rounded-full bg-gray-300 dark:bg-green-100">
                <div
                  className="bg-pink-400 h-full rounded-full"
                  style={{ width: `${progress.value}%` }}
                ></div>
                <p className="text-lg dark:text-white absolute -right-16">
                  {progress.value}/100
                </p>
              </div>
            )}
          </div>
          <Share
            className="text-violet-500 dark:text-pink-400 cursor-pointer"
            onClick={handleShareClick}
            aria-label="Share Study Plan"
          />
        </div>
      </div>
      <div className="md:w-[70%] mx-auto flex justify-end -mb-8 mt-4 md:px-24">
        <label
          onChange={handleCheckboxChange}
          for="hr"
          class="flex flex-row items-center gap-2.5 dark:text-white light:text-black"
        >
          <input id="hr" type="checkbox" class="peer hidden" />
          <div
            for="hr"
            class="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#7152f3] transition"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 light:stroke-[#e8e8e8] stroke-white dark:stroke-[#212121]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          Show Tags
        </label>
      </div>
      <div className="flex justify-center md:flex-row flex-col-reverse items-start overflow-hidden relative w-full gap-2 mt-4">
        <div className="p-6 md:w-[70%] ">
          {Object.entries(data).map(([category, questions]) => (
            <div key={category}>
              <ProblemsTable
                data={questions}
                isShowTag={isShowTag}
                category={category}
              />
            </div>
          ))}
        </div>
        <div className=" md:w-[20%] my-4 mt-12 h-full ">
          <div className="flex flex-col gap-4 justify-start items-start top-16 sticky">
            <h1 className="font-semibold dark:text-gray-100 text-gray-600">
              Summery
            </h1>
            <ul className="list-disc dark:text-gray-100 text-gray-600 text-left">
              <li>150 Original & Classic Questions</li>
              <li>Covers comprehensive interview topics</li>
              <li>Best for 3+ months of prep times</li>
              <li>Problems support high-quality editorial</li>
            </ul>
            <div className="flex justify-start flex-col mt-4 h-36 rounded-md w-full gap-4">
              <h1 className="font-semibold dark:text-gray-100 ">Awards</h1>
              <div className="flex justify-around shadow-inner-md p-2 rounded-lg bg-green-50 w-full gap-4 items-center">
                <img
                  src="https://pnghq.com/wp-content/uploads/target-png-transparent-29220.png"
                  alt=""
                  className="h-16"
                />
                <p>
                  <span className="dark:text-gray-100 font-semibold ">
                    Focus Edge 30 days Challenge
                  </span>
                  <br />
                  <span className="dark:text-gray-100 text-sm">
                    Complete the study plan to win the badge!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-start flex-col  mt-4 h-36 rounded-md w-full gap-4">
              <h1 className="font-semibold dark:text-gray-100 ">Related </h1>
              <div className="flex flex-col justify-around  p-2 w-full gap-4 items-center">
                <StudyPlanCard/>
                <StudyPlanCard/>
                <StudyPlanCard/>
                <StudyPlanCard/>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanDetails;
