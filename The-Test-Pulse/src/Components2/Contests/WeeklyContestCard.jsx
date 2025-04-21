import { CalendarMonth, Timer } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

function WeeklyContestCard() {
  const [timeRemaining, setTimeRemaining] = useState(10 * 60 * 60 + 40 * 60 + 30); // 10 hours, 40 minutes, 30 seconds in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="min-w-96 min-h-[350px] rounded-xl overflow-hidden hover:shadow-xl transition-all ease-in-out duration-300 shadow-lg bg-white">
      <div
        className="h-52 bg-blue-500 relative flex justify-center items-center "
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/009/751/175/original/blue-background-dark-blue-abstract-background-geometry-shine-and-layer-element-for-presentation-design-free-vector.jpg)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-2 right-2">
          <div className="bg-white rounded-full p-2">
            <Tooltip title="Mark To calendar">
              <CalendarMonth />
            </Tooltip>
          </div>
        </div>
        <p className="text-gray-50 absolute font-light bottom-2 left-4 text-lg flex items-center">
            <Timer/>
          Starts in {formatTime(timeRemaining)}
        </p>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mt-2">Weekly Contest 428</h3>
        <p className="text-sm text-gray-500 mt-1">Sunday 8:00 AM GMT+5:30</p>
      </div>
    </div>
  );
}

export default WeeklyContestCard;