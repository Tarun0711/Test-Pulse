import * as React from "react";
import "./Style.css";

export default function Formatting() {
  const previousRank = 5;
  const currentRank = 3;

  const progress = ((previousRank - currentRank) / previousRank) * 100;
  const progressText = progress > 0 ? "increase" : "decrease";
  const quote =
    progress > 0
      ? "Great job! Keep up the good work! 🥳"
      : "Keep trying! You can improve!";

  return (
    <div className="analysis w-full mx-auto mt-4 p-2 px-6 rounded-lg shadow-md">
      <h2 className="text-2xl backdrop-blur-2xl font-bold text-center text-blue-600 mb-2">
        Rank Progress
      </h2>
      <div className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Previous Rank:</span> {previousRank}
      </div>
      <div className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Current Rank:</span> {currentRank}
      </div>
      <div
        className={`text-lg font-bold bg-white px-2 py-1 rounded-lg ${
          progress > 0 ? "text-green-500 " : "text-red-500 "
        } mb-4`}
      >
        <span className="font-semibold backdrop-blur-md">Progress:</span>{" "}
        {Math.abs(progress.toFixed(2))}% {progressText}
      </div>
      <p className="text-center backdrop-blur-md md:text-md text-sm py-2  -mx-2 rounded-lg  font-medium text-gray-800">{quote}</p>
    </div>
  );
}
