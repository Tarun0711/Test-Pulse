import React from "react";

function LeaderBoardCard() {
  return (
    <div className="w-full h-24  hover:shadow-xl transition-all ease-in-out duration-500 p-2 bg-white dark:bg-[#000000] rounded-xl flex items-center overflow-hidden">
      <div className="flex-grow">
        <div className="flex items-center">
            <p className="text-yellow-500 text-lg italic mr-4 dark:text-gray-400">
                1
            </p>
          <img
            src="https://via.placeholder.com/50"
            alt="Profile Pic"
            className="h-14 w-14 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                John Doe
            </h3>
            <p className="text-xs font-light text-gray-500 flex items-center gap-2 dark:text-gray-400">
            Rating <span className="text-green-500">2000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardCard;
