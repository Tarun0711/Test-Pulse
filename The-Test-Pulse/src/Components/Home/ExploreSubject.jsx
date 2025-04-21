import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Data = [
  {
    title: "Maths",
    path: "/explore/maths",
  },
  {
    title: "Physics",
    path: "/explore/physics",
  },
  {
    title: "Chemistry",
    path: "/explore/chemistry",
  },
  {
    title: "Biology",
    path: "/explore/biology",
  },
];

function ExploreSubject() {
  return (
    <div className="h-auto md:px-28 dark:bg-gray-900 bg-white">
      <div className="w-full flex  justify-between">
        <h1 className="text-4xl font-bold dark:text-richblack-5 text-gray-700">
          Explore Subjects
        </h1>
        <Link
          className="text-blue-500 flex h-fit items-center"
          to="/test-series"
        >
          View All <ArrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap p-4  gap-4  ">
        {Data.map((item, index) => (
          <>
            <Link
              to={`/explore/${item.title.toLowerCase().replace(/\s/g, "-")}`}
              key={item.title}
              className="text-white flex-1 h-20 hover:scale-95 transition-all ease-in-out duration-300 shadow-md relative w-60  p-4 bg-caribbeangreen-300 rounded-xl  text-2xl hover:text-white-500"
            >
              {item.title}
              <p className=" absolute right-4 bottom-3">
                <FaArrowRightLong />
              </p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default ExploreSubject;
