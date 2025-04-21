import React, { useState } from "react";
import { FaArrowRightLong, FaHeartCircleBolt } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Graphs from "./Student/Graphs";
import YourStatistics from "./Student/YourStatistics";
import Mocktests from "./Student/Mocktests";
import ExploreTestseries from "./Student/ExploreTestSeries";
import PopularQuiz from "./Student/PopularQuiz";
import { BiHeart } from "react-icons/bi";
import Profilecard from "./Student/Profilecard";
import StreakCard from "./Student/StreakCard";

const UpcomingEvents = [
  {
    id: 1,
    title: "Mathematics Test",
    description: "Monthly assessment of mathematics skills.",
    date: "2024-08-10",
    time: "09:00 AM",
    location: "Room A101",
  },
  {
    id: 2,
    title: "Science Test",
    description: "Bi-weekly evaluation of science knowledge.",
    date: "2024-08-15",
    time: "10:30 AM",
    location: "Room B202",
  },
  {
    id: 3,
    title: "English Test",
    description: "Weekly grammar and comprehension assessment.",
    date: "2024-08-17",
    time: "11:00 AM",
    location: "Room C303",
  },
];

const CardData = [
  {
    Title: "Dive Deep into Knowledge",
    Description: "Explore Our Comprehensive Test Series",
    Link: "/test-series",
    Color: "bg-blue-600",
    Image:
      "https://www.pinclipart.com/picdir/big/565-5658340_transparent-testing-clipart-free-test-clipart-png.png",
  },
  {
    Title: "Stay on Track",
    Description: "Build Your Streak and Master the Material",
    Link: "/test-series",
    Color: "bg-caribbeangreen-500",
    Image:
      "https://cdn4.iconfinder.com/data/icons/flycons/128/speed_streak_fast_motion-24-512.png",
  },
  {
    Title: "Clear Your Confusions",
    Description: "Our Experts Are Here to Help Ask Your Doubts Here!",
    Link: "/test-series",
    Color: "bg-yellow-500",
    Image:
      "https://cdn0.iconfinder.com/data/icons/business-blue-series-set-4-1/128/a-78-512.png",
  },
];

function StudentDasboard() {
  return (
    <div className="w-full">
      <div className="flex relative gap-4 h-fit rounded-xl">
        <div>
          <div className="flex flex-wrap gap-4 items-center shadow-lg bg-white w-full p-4 rounded-2xl">
            {CardData.map((key, index) => (
              <div
                key={index}
                className={`${key.Color} relative text-white overflow-hidden border ring-richblack-300 shadow-xl  rounded-lg w-72 h-44 p-4`}
                style={{
                  backgroundImage: `url(${key.Image})`,
                  backgroundSize: "150px 120px",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-xl z-[50] underline  my-2 font-semibold ">
                  {key.Title}
                </h1>
                <p className="text-sm my-3 text-richblack-5">
                  {key.Description}
                </p>
                <Link
                  to={key.Link}
                  className="flex float-start hover:scale-95 bg-white bg-opacity-35 p-3 rounded-xl  items-center gap-2
                    text-richblack-5"
                >
                  Continue
                  <FaArrowRightLong />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-20%">
        <Profilecard/>
        </div>
        {/* <div className="w-full overflow-hidden h-72 border p-2 mx-2 bg-white rounded-lg">
        <h1 className="text-xl underline text-richblack-500 ">Upcoming Events</h1>
        <hr/>
        <div className="flex flex-col gap-4 h-60 overflow-y-scroll mt-4">
          {UpcomingEvents.map((key, index) => (
            <div key={index} className="flex flex-col items-start  h-fit text-white p-2 gap-4 bg-blue-500
            rounded-xl w-full">
              <div
              className="flex items-center gap-2"
              >
              <h1 className="underline underline-offset-2 font-bold">{key.title}</h1>
              <p className="text-xs text-richblack-5">{key.date}</p>
                </div>
              
              <p className="text-xs text-richblack-5">{key.description}</p>
              </div>
          ))}
        </div>
      </div> */}
      </div>
      {/* <div className=" mt-4">
        <Graphs/>
      </div> */}
      <div className=" mt-4 md:w-[72%] rounded-2xl shadow-md bg-white">
        <YourStatistics />
      </div>
      <div className=" mt-4 md:w-[72%] rounded-2xl shadow-md bg-white">
        <Mocktests />
      </div>
      <div className=" mt-4 md:w-[100%] rounded-2xl shadow-md bg-white">
        <ExploreTestseries />
      </div>
      <div className=" mt-4 md:w-[100%] rounded-2xl shadow-md bg-white">
        <PopularQuiz />
      </div>
      <div className="mt-10">
        <h1 className="flex items-center gap-4 text-4xl text-blue-300 font-bold">
          Test Mein Ho Smart, Pulse Mein Ho Fast
          <FaHeartCircleBolt fill="	#FFC0CB" />
        </h1>
      </div>
    </div>
  );
}

export default StudentDasboard;
