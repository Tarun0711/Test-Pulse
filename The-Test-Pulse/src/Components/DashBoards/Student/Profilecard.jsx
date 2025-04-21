import React from "react";
import { FaRankingStar, FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";
import StreakCard from "./StreakCard";

function Profilecard() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="max-w-[320px] absolute border-2 px-4 py-2 bg-white border-richblue-500 rounded-2xl flex flex-col my-3 items-center ">
      <img
        className="h-20 rounded-full p-1 border-2 border-blue-900 w-20 "
        src={user.image}
        alt={user.firstName}
      />
      <h1 className=" capitalize font-bold">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-sm  text-richblack-500">{user.accountType}</p>
      <p className="flex  text-start gap-2 text-xl items-center">
        Rank
        <FaRankingStar fontSize={20} fill="#" />
        <span className="text-red-700 font-bold">{"213"}</span>{" "}
      </p>

      <div className="w-full border-y-2 py-3">
        <p className="flex w-full text-start gap-2 items-center">
          Streak
          <FaStar fontSize={20} fill="#ffd500" />
          <span className="text-green-600 font-bold">{"46"}</span>{" "}
        </p>
        <p className="flex w-full text-start gap-2 items-center">
          Points
          <FaCoins fontSize={20} fill="#" />
          <span className="text-red-700 font-bold">{"213"}</span>{" "}
        </p>
      </div>
      <StreakCard/>
      <Link className="text-blue-400 underline hover:scale-95" to={"#"}>
        Continue Enrolled Test Series
      </Link>

    </div>
  );
}

export default Profilecard;
