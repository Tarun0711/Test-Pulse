import React from "react";
import "./Style.css";
import Navbar from "./TestingPhaseComponents/Navbar";
import Hero from "./TestingPhaseComponents/Hero";
import Crausel from "./TestingPhaseComponents/Crausel";
import MiddleContent from "./TestingPhaseComponents/MiddleContent";
import Footer from "./TestingPhaseComponents/Footer";
function MockHome() {
  return (
    <div className="homePage flex flex-col items-center">
      <Navbar />
      <div className=" my-2 md:w-3/5 w-full rounded-xl overflow-hidden">
        <Crausel />
      </div>
      <MiddleContent />
    </div>
  );
}

export default MockHome;
