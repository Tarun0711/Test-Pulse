import React from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStep } from "../../slices/QuizSlice";
import Leaderboard from "./LeaderBoard";
import Formatting from "./Analysis";

function Result() {
  const dispatch=useDispatch()
  const navigate=useNavigate()


 const handleDashboardClick=()=>{
  dispatch(setStep(1))
  navigate('/')
 }
  return (
    <div className="result-container p-4">
      <div className="flex items-center md:flex-row flex-col justify-between">
        <div>
          <p className="text-richblack-800 text-xl">Quiz Name</p>
          <h1 className="font-semibold text-blue-400 text-2xl md:text-4xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
        </div>
        <div className="flex text-black flex-wrap justify-around items-center gap-3">
              <button onClick={handleDashboardClick} className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3">
                <svg
                  className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#06B6D4"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                Dashboard
              </button>
              <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 rounded-md px-3">
                <svg
                  className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#60A5FA"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                Questions
              </button>
              <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 rounded-md px-3">
                <svg
                  className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#FACC14"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                  <path d="M15 3v6h6"></path>
                </svg>
                Notes
              </button>
              <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C] h-9 rounded-md px-3">
                <svg
                  className="lucide lucide-star text-orange-400 dark:text-orange-600"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#FB923C"
                  fill="#FB923C"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Review Exam
              </button>
            </div>
            <div>
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col ">
        <div className="relative md:w-1/2 w-full">
          <div className="mt-8 flex-wrap md:justify-start bg-white bg-opacity-35  justify-center backdrop-blur-3xl border-2 flex items-center border-white p-4 rounded-xl">
            <img
              className="h-44 rounded-xl w-44 bg-white"
              src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
              alt="user"
            />
            <div className="ml-4">
              <p className="text-blue-500 md:text-4xl text-2xl font-semibold underline ">
                Lorem, ipsum dolor.
              </p>
              <p className="text-sm text-richblack-500">abc9991@gmail.com</p>
              <div className="flex mt-3 items-center gap-3 justify-around">
                <div className="border-r-2 border-richblack-600 p-2 text-center w-fit">
                  <h1 className="text-4xl">99</h1>
                  <p className="text-richblack-800 border-richblack-600">Scored</p>
                </div>
                <div className="border-r-2 border-richblack-600 text-center p-2 w-fit">
                  <h1 className="text-4xl">89</h1>
                  <p className="text-richblack-800 ">Percentile</p>
                </div>
                <div className=" p-2 text-center w-fit">
                  <h1 className="text-4xl">121</h1>
                  <p className="text-richblack-800">Rank</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container bg-white bg-opacity-35 backdrop-blur-xl  ">
              <div className="skill-box">
                <span className="title">Chemistry</span>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">50%</span>
                  </span>
                </div>
              </div>

              <div className="skill-box">
                <span className="title">Physics</span>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">70%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Maths</span>
                <div className="skill-bar">
                  <span className="skill-per javascript">
                    <span className="tooltip">50%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="  mt-2 text-richblack-600 rounded-lg backdrop-blur-xl flex items-center justify-around p-2 md:p-4 bg-white bg-opacity-35 ">
            <div className="px-4 py-3 border-r-2 border-r-richblack-100">
              <strong className="md:text-xl text-lg">56:06 min</strong>
              <p className="text-sm">Time Spent</p>
            </div>
            <div className="px-4 py-3 border-r-2 border-r-richblack-100">
              <strong className="text-xl">46</strong>
              <p className="text-sm">Question Attempt</p>
            </div>
            <div className="px-4 py-3 border-r-2 border-r-richblack-100">
              <strong className="text-xl">23</strong>
              <p className="text-sm">Correct Answers</p>
            </div>
            <div className="px-4 py-3 ">
              <strong className="text-xl">56</strong>
              <p className="text-sm">Marks Obtain</p>
            </div>
          </div>
        </div>
        <div className="md:w-[45%] mt-4">
        <Leaderboard/>

            <Formatting/>
        </div>
      </div>
    </div>
  );
}

export default Result;
