import React from "react";

const FeaturedPlanCard = () => {
  return (
    <div className="w-72 p-6 relative h-[350px] bg-violet-500 text-white rounded-xl shadow-lg overflow-hidden">
      <img
        className="w-full h-full absolute hover:scale-110 transition-all duration-300 top-0 left-0 z-0 object-cover rounded-xl"
        src="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover"
        alt="LeetCode 75"
      />
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-2">LeetCode 75</h2>
        <p className="text-sm mb-4">Ace Coding Interview with 75 Qs</p>
      </div>
    </div>
  );
};

export default FeaturedPlanCard;
