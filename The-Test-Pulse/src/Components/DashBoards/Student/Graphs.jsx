import React from "react";
import BasicColor from "./Chart";
import Formatting from "./LineChart";

function Graphs() {
  return (
    <div className="w-full bg-white p-4 rounded-xl ">
      <h1 className="text-xl underline font-bold text-richblack-600">
        The Bharamstera Test Series || The Test Pulse{" "}
        <span className="text-xl font-mediu ">("Analytics")</span>{" "}
      </h1>
      <BasicColor />
      
    </div>
  );
}

export default Graphs;
