import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import CalendarImg from "../Assests/Calendar.svg";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Function to get the number of days in the current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate the calendar data
  const generateCalendar = () => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = getDaysInMonth(currentDate);

    const calendar = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null); // Empty placeholder for alignment
        } else if (dayCounter > daysInMonth) {
          week.push(null); // Empty placeholder after the month's end
        } else {
          week.push(dayCounter++);
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  // Navigate to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Navigate to the next month (restricted beyond current month)
  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    if (
      nextMonth.getMonth() <= today.getMonth() &&
      nextMonth.getFullYear() <= today.getFullYear()
    ) {
      setCurrentDate(nextMonth);
    }
  };

  const calendarData = generateCalendar();

  return (
    <div className="w-96 mx-auto p-4 my-7 border-1 border-gray-400 bg-white dark:bg-gray-800 shadow-lg rounded-md">
      {/* Header with navigation */}
      <div className="flex relative items-center justify-between mb-4">
        <p className="text-sm font-medium text-purple-600">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </p>
        <div className="flex gap-2 absolute items-baseline right-0 -top-14 ">
          <button
            onClick={goToPreviousMonth}
            className="px-2 py-1 text-black dark:text-white "
          >
            <IoMdArrowDropleft />
          </button>
          <div className="relative">
            <img src={CalendarImg} alt="calendar" className="h-20 w-20 " />
            <p className="font-bold absolute text-xl bottom-4 right-1 dark:text-gray-200 text-gray-800">
              {currentDate.toLocaleString("default", { day: "2-digit" })}
            </p>
          </div>
          <button
            onClick={goToNextMonth}
            disabled={
              currentDate.getMonth() === today.getMonth() &&
              currentDate.getFullYear() === today.getFullYear()
            }
            className={`px-2 py-1 dark:text-white text-black rounded ${
              currentDate.getMonth() === today.getMonth() &&
              currentDate.getFullYear() === today.getFullYear()
                ? "text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            <IoMdArrowDropright />
          </button>
        </div>
      </div>
      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-sm font-medium dark:text-gray-100 text-gray-700"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Calendar dates */}
      <div className="grid grid-cols-7 gap-1 mt-1">
        {calendarData.map((week, weekIndex) =>
          week.map((day, dayIndex) => {
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            );
            const isToday =
              day === today.getDate() &&
              currentDate.getMonth() === today.getMonth() &&
              currentDate.getFullYear() === today.getFullYear();
            const isFuture = date > today;

            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`flex items-center text-xs justify-center h-6 w-6 ${
                  isToday
                    ? "bg-green-600 text-white rounded-full"
                    : isFuture
                    ? " text-gray-500 cursor-not-allowed"
                    : day
                    ? "text-gray-800 dark:text-gray-200"
                    : "bg-transparent"
                }`}
              >
                <Tooltip title="Today" arrow>
                  <span>{day || ""}</span>
                </Tooltip>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Calendar;
