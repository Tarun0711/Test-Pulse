import { CalendarMonth } from "@mui/icons-material";
import React from "react";
import { MdLockOutline } from "react-icons/md";
import { VscNotebookTemplate } from "react-icons/vsc";

const TestDetailCard = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-between border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
      <section className="mb-3">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          AITS Test Series (Class 12+)
        </h1>
        <p className="text-gray-600 text-lg flex gap-3 items-center dark:text-gray-400 mb-4">
          <VscNotebookTemplate /> 90 question | 300 marks | 180 minutes
        </p>
        <p className="text-gray-600 text-lg flex gap-3 items-center dark:text-gray-400 mb-4">
          <CalendarMonth /> Starts On | 12th August 2025
        </p>
      </section>
      <p className="text-lg font-bold flex flex-col items-center justify-center text-gray-500 dark:text-gray-100">
        <MdLockOutline
          fontSize={42}
          className="dark:text-gray-200 bg-richblack-5 p-1 rounded-full dark:bg-gray-500"
        />
        Locked
      </p>
    </div>
  );
};

export default TestDetailCard;
