import React from "react";
import BasicTabs from "./SeriesMainTabsMui";

function TestSeries() {


  return (
    <div className=" relative text-black border h-auto w-full flex flex-col justify-center items-center gap-4 bg-white  md:px-6 py-8">
      <h1 className="md:text-lg text-md text-violet-500">Learn At Your Own Pace</h1>
      <h1 className="md:text-3xl text-2xl font-bold">Our Top Rated Test Series</h1>
      <BasicTabs/>
    </div>
  );
}

export default TestSeries;
