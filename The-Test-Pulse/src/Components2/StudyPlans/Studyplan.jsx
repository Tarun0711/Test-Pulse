import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar";
import StudyPlanCard from "../Problems/StudyPlanCard";
import FeaturedPlanCard from "./FeaturedPlanCard";

function Studyplan() {
  const featuredPlans = Array(7).fill(null); 

  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <Navbar isHome={true} />
      <div className="p-6 mt-14 md:px-24">
        {/* Header Section */}
        <div className="flex items-center justify-between w-full md:w-[90%]">
          <h1 className="text-3xl font-bold dark:text-richblack-5 text-gray-700">
            Study Plan
          </h1>
          <Link
            className="bg-gray-200 dark:bg-gray-800 p-2 rounded flex items-center text-gray-700 dark:text-white"
            to="/studyplan/my-study-plan"
          >
            My Study Plans <ArrowRight className="ml-1" />
          </Link>
        </div>

        {/* Ongoing Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold dark:text-richblack-5 text-gray-700">
            Ongoing
          </h2>
          <div className="mt-4">
            <StudyPlanCard data={{ title: "Study plan 1" }} />
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold dark:text-richblack-5 text-gray-700">
            Featured
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {featuredPlans.map((_, index) => (
              <FeaturedPlanCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studyplan;
