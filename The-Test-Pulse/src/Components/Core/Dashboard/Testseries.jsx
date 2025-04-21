import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sizes from "./FilterChip";
import TestSeriesCard from "../../DashBoards/Student/TestSeriesCard";
import { useSelector } from "react-redux";
import InstructorTestSeriesScreen from "./instructorTestSeriesScreen";
function Testseries() {
  const { user } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  return (
    <div className=" ">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          DashBoard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          // href="/material-ui/getting-started/installation/"
        >
          Test Series
        </Link>
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
      </Breadcrumbs>
      {user.accountType === "Student" && (
        <>
          <h1 className="md:text-xl my-4 text-richblack-400 font-bold">
            Enrolled Test Series
          </h1>
          <div className="bg-white rounded-lg shadow-md  min-h-44 flex justify-center items-center ">
            <p className=" space-x-1 ">
              You have not Enrolled for any test series{" "}
              <Link className="text-blue-500 underline">Explore now</Link>
            </p>
          </div>
          <div className="my-4">
            <div className="flex items-center justify-between">
              <h1 className="md:text-xl my-4 text-richblack-400 font-bold">
                Explore Test Series
              </h1>
              <Sizes />
            </div>
            <div className="bg-white rounded-lg p-4 flex-wrap gap-4 shadow-md justify-center min-h-44 flex items-center ">
              <TestSeriesCard />
              <TestSeriesCard />
              <TestSeriesCard />
              <TestSeriesCard />
              <TestSeriesCard />
              <TestSeriesCard />
              <TestSeriesCard />
            </div>
          </div>
        </>
      )}
      {user.accountType === "Instructor" && (
        <div className="w-full h-full">
        <InstructorTestSeriesScreen/>
        </div>
        
      )}
    </div>
  );
}

export default Testseries;


{/* <div className="flex gap-2">
          <button
            onClick={() => navigate("/dashboard/test-series/questionBank")}
            className="bg-white hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-30 md:p-3 p-2 rounded-lg   text-blue-500"
          >
            Add Question Bank
          </button>
          <button
            onClick={() =>
              navigate("/dashboard/test-series/questionBank/downloadQbank")
            }
            className="bg-white hover:bg-blue-500 transition-all ease-in-out duration-300 hover:text-white md:p-3 p-2 rounded-lg   text-blue-500"
          >
            Download Question Bank
          </button>
        </div> */}




