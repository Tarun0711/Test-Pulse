import React from "react";
import Navbar from "../Components/Home/Navbar";

function Premium() {
  return (
    <div className="h-auto dark:bg-gray-900 bg-white">
      <Navbar isHome={true} />
      <div className="flex flex-col font-inter justify-center items-center h-[50vh]">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
          Premium
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Upgrade your experience with our premium plan
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 pb-9">
        <div className="max-w-[30%] mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Monthly{" "}
            <span className="text-sm text-gray-500">billed monthly</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Our monthly plan grants access to{" "}
            <span className="font-semibold">all premium features</span>, the
            best plan for short-term subscribers.
          </p>
          <div className="flex items-center mb-6">
            <span className="text-4xl font-bold text-gray-900 mr-1">900 ₹</span>
            <span className="text-lg text-gray-500">/mo</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Prices are marked in USD</p>
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
            Subscribe
          </button>
        </div>
       <div className="max-w-[40%] mx-auto bg-orange-100  border border-orange-500 rounded-lg shadow-2xl shadow-orange-400 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Yearly{" "}
            <span className="text-sm text-gray-500">billed Yearly( ₹7200)</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Our monthly plan grants access to{" "}
            <span className="font-semibold">all premium features</span>, the
            best plan for short-term subscribers.
          </p>
          <div className="flex items-center my-6">
            <span className="text-4xl font-bold text-gray-900 mr-1">600 ₹</span>
            <span className="text-lg text-gray-500">/mo</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Prices are marked in USD</p>
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Premium;
