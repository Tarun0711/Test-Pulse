import React from "react";
import Sidebar from "../Components/Core/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Components/Core/Dashboard/Navbar";

function Dashboard() {
  return (
    <div className=" overflow-y-hidden">
      {/* <Link
        to={"#"}
        className="w-full bg-richblack-700 text-yellow-300 text-xs  py-1 text-center"
      >
        {" "}
        Buy Bharam Test Series With The Exclusive Discount Of ₹350💯
      </Link> */}
      <div className="flex bg-richblack-5 h-[calc(100vh-0.5rem)] overflow-y-hidden">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="md:p-4 p-2 overflow-y-scroll h-[85vh] bg-richblack-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
