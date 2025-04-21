import React from "react";
import Coin from "../../Assests/Logo/Coin.svg";
import { ArrowRight } from "@mui/icons-material";

function EarnCoinsCard(props) {
  return (
    <div className="w-80 border-[0.5px] bg-white dark:bg-richblack-900 border-gray-300  min-h-28 shadow-lg rounded-lg flex overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 w-[30%] flex flex-col gap-2 items-center justify-center text-center">
        <img src={Coin} alt="coin" className="h-10" />
        <p className="text-amber-400 text-xl font-semibold">+10</p>
      </div>
      <div className="p-4 flex flex-col gap-4 justify-center items-center">
        <p className="text-gray-500  dark:text-gray-100 text-md">
          Check in daily to get 10 coins
        </p>
        <button className="outline-amber-400 outline-dashed outline-1 text-amber-500 px-4 py-2 rounded-lg">
          Go to Mission <ArrowRight />
        </button>
      </div>
    </div>
  );
}

function EarnCoins() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-light text-center  text-gray-600 dark:text-gray-100">
        Earn Coins
      </h2>
      <div className="flex justify-center flex-wrap gap-8 items-center mt-5">
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
        <EarnCoinsCard />
      </div>
    </div>
  );
}

export default EarnCoins;
