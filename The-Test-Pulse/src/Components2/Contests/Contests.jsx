import React, { useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import trophy from "../../Assests/Logo/trophy.png";
import logo from "../../Assests/Logo/TextLogo.svg";
import WeeklyContestCard from "./WeeklyContestCard";
import ContestTab from "./ContestTab";
import MyContest from "./MyContest";
import { IoTrophy } from "react-icons/io5";
import LeaderBoardCard from "./LeaderBoardCard";
import FeaturedContest from "./FeaturedContest";

function Contests() {
  const [selected, setSelected] = useState("Past Contests");

  return (
    <div className="h-auto w-full bg-gray-100 dark:bg-[#121212] ">
      <Navbar isHome={true} />
      <div className="h-[90vh]">
        <div
          style={{
            background:
              " radial-gradient(circle, rgba(44,44,44,1) 0%, rgba(30,30,30,1) 30%)",
          }}
          className="w-full md:h-[70%]  flex items-center flex-col gap-4 justify-center"
        >
          <img src={trophy} alt="trophy" className="h-20 md:h-40" />
          <div className="flex items-center justify-center gap-4">
            <img src={logo} alt="logo" className="h-12 " />
            <h1 className="text-gray-300 text-3xl md:text-5xl">Contests</h1>
          </div>
          <p className="text-gray-400 font-thin text-sm md:text-lg">
            Participate in contests and improve your skills
          </p>
        </div>
        <div className="w-full h-[30%]  gap-4  flex items-center justify-center">
          <WeeklyContestCard />
          <WeeklyContestCard />
        </div>
      </div>
      
      <FeaturedContest/>
      <div className="w-full flex items-center mb-14 gap-4 justify-center">
        <div className="w-[40%] mt-10 h-[90vh] shadow-md rounded-lg justify-center bg-white p-4 dark:bg-[#000000]">
          <div className="flex flex-wrap rounded-lg p-1 w-72 text-sm">
            {["Past Contests", "My Contest"].map((option) => (
              <label key={option} className="flex-1 text-center cursor-pointer">
                <input
                  type="radio"
                  name="radio"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="hidden"
                />
                <span
                  className={`flex items-center text-md justify-center rounded-lg py-2  transition-all duration-150 ease-in-out ${
                    selected === option
                      ? "bg-gray-200 font-semibold "
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
          {selected === "Past Contests" ? <ContestTab /> : <MyContest />}
        </div>
        <div className="w-[20%] mt-10 h-[90vh] shadow-md rounded-lg justify-center overflow-hidden bg-white p-4 dark:bg-[#000000]">
          <h1 className="text-lg flex dark:text-gray-200 items-center gap-3 "><IoTrophy fontSize={24}/>Leaderboard</h1>
          <hr className="text-gray-300 dark:text-gray-700 my-2"/>
          {/* Leaderboard */}
          <div className="w-full flex flex-col items-center justify-start gap-2 h-[1000px]  overflow-y-scroll">
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contests;
