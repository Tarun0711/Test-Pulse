import React from "react";
import { Link } from "react-router-dom";

function TestSeriesCard({ categoryName, testSeriesName }) {
  return (
    <div className="max-w-sm mx-auto border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
      {/* Badge */}
      <div className="mb-3">
        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full dark:text-blue-300 dark:bg-blue-900">
          ONLINE TEST SERIES
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Leader Test Series (Class 12+)
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        All India Test Series
      </p>

      {/* Features */}
      <ul className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        <li className="flex items-center gap-2">
          <span>✔</span> 20+ (Part + Full) syllabus Tests
        </li>
        <li className="flex items-center gap-2">
          <span>✔</span> Detailed solutions to all questions
        </li>
        <li className="flex items-center gap-2">
          <span>✔</span> Exclusive ALLEN's Question Bank
        </li>
      </ul>

      {/* Pricing */}
      <div className="flex items-end gap-4 justify-between">
        <div>
          <p className="text-sm line-through text-gray-400">₹6,700</p>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
            ₹5,000{" "}
            <span className="text-sm font-normal">+ Taxes applicable</span>
          </p>
        </div>
        <Link 
          to={`/test-series-details/${categoryName}/${testSeriesName}`}
          target="_blank"
          className="text-blue-600 font-semibold hover:underline dark:text-blue-400"
        >
          Know more →
        </Link>
      </div>
    </div>
  );
}

export default TestSeriesCard;
