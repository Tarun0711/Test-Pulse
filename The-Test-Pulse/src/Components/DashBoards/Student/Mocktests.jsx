import React from "react";
import { Link } from "react-router-dom";

const Data = [
  { title: "Neet" },
  { title: "Jee Mains" },
  { title: "Jee Advance" },
  { title: "11th" },
  { title: "12th" },
];

function Mocktests() {
  return (
    <div className="md:w-[] px-4 py-4">
      <h1 className=" text-richblack-600 md:text-2xl p-2 px-4 font-bold">
        Mocks Tests
      </h1>
      <hr className="text-black mb-2" />
      <div className="flex justify-start gap-4 flex-wrap items-center">
        {Data.map((item, index) => (
          <Link to={'/mock-test'}
            className={`w-[200px] hover:scale-105 transition-all ease-in-out duration-300 flex items-center justify-center h-[50px] rounded-xl ${
              index % 2 === 0
                ? "bg-green-100 border-2 border-green-700"
                : "bg-pink-100 border-2 border-pink-500"
            }`}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mocktests;
