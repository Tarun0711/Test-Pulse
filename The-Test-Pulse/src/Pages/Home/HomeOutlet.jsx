import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Testing/TestingPhaseComponents/Footer";

function HomeOutlet() {
  return (
    <div className=" w-full min-h-screen dark:bg-gray-900 bg-white h-auto flex flex-col justify-between">
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeOutlet;
