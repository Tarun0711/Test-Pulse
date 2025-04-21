import { TextSnippet } from "@mui/icons-material";
import React from "react";

function TestSeriesCard() {
  return (
    <div className="w-[350px] hover:scale-95 duration-300 transition-all ease-in-out dark:border-none border-[0.5px] font-inter rounded-xl overflow-hidden shadow-md h-[500px] dark:bg-gray-800 bg-white">
      <img
        src="https://www.selfstudys.com/uploads/images/ZoQBghL6eeKceaFa7les.jpg"
        className="h-[200px] w-full"
        alt="card"
      />
      <div className="flex flex-col gap-4 justify-around p-4">
        <h1 className="dark:text-gray-200 text-gray-600 text-2xl font-semibold">
          Lorem ipsum dolor, sit adipisicing.
        </h1>
        <p className="dark:text-gray-400 font-thin flex items-center gap-4 text-gray-800 text-base">
          <TextSnippet /> for 12th class students
        </p>
        <div className="flex items-center justify-between">
          <p className="text-green-600 text-sm font-light ">
            1243 Students shows intrest this week
          </p>
          <button className="py-2 px-4 dark:text-white text-green-800 hover:bg-green-300 dark:hover:bg-green-600 rounded-md">
            Explore
          </button>
        </div>
        <button
          className="bg-yellow-500 text-black w-full py-2 px-4 rounded-md"
          type="button"
          onClick={() => {}}
        >
          Get 35% discount intantly
        </button>
      </div>
    </div>
  );
}

export default TestSeriesCard;
