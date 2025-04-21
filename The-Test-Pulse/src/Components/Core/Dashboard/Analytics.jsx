import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import { IoNewspaper } from "react-icons/io5";
import { MdInsights, MdScore } from "react-icons/md";

const quizData = [
  {
    title: "Lorem ipsum dolor sit amet.",
    questionAttempt: "12",
    marksObtain: "102",
    rank: "123",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nostrum!",
  },
];
function Analytics() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Dashboard
        </Link>
        <Link underline="hover" color="inherit">
          Analytics
        </Link>
      </Breadcrumbs>
      {user.accountType ==="Student" &&(
          <div>
            <h1 className="md:text-xl my-4 text-richblack-400 font-bold">
              Recently Attempted Quiz
            </h1>
            <div className="bg-white shadow-lg rounded-xl flex items-center w-full p-2 ">
              {quizData.map((item, index) => (
                <div
                  key={index}
                  className="flex py-2 items-center hover:scale-95 transition-all duration-500 ease-in-out justify-between border-2 w-full border-richblack-300 px-4 rounded-lg"
                >
                  <div>
                    <h1 className="font-bold md:text-lg">{item.title}</h1>
                    <p className="text-richblack-500 py-2 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <hr className="text-black rotate-90 " />

                  <div className="flex font-bold gap-4 my-1 items-center">
                    <p className="text-lg text-green-700 hover:scale-105 transition-all duration-500 ease-in-out flex items-center gap-2 ">
                      <span className="text-richblack-300 font-normal text-sm">
                        Question Attempt
                      </span>
                      <IoNewspaper /> {item.questionAttempt}
                    </p>
                    <p className="text-lg text-red-600 hover:scale-105 transition-all duration-500 ease-in-out flex items-center gap-2">
                      <span className="text-richblack-300 font-normal text-sm">
                        Score
                      </span>{" "}
                      <MdScore /> {item.marksObtain}
                    </p>
                    <p className="text-lg text-blue-800 hover:scale-105 transition-all duration-500 ease-in-out flex items-center gap-2">
                      {" "}
                      <span className="text-richblack-300 font-normal text-sm">
                        Rank
                      </span>
                      <MdInsights fontSize={24} /> {item.rank}
                    </p>
                  </div>
                  <button className="bg-pink-500 px-5 hover:scale-95 transition-all duration-500 ease-in-out hover:bg-pink-400 py-2 text-white rounded-md mt-2">
                    Analyse
                  </button>
                </div>
              ))}
            </div>
            <h1 className="md:text-xl my-4 text-richblack-400 font-bold">
              Owned Test Series
            </h1>
            <div className="min-h-36 shadow-lg flex items-center justify-center bg-white rounded-lg">
              <p>
                Your have not enrolled any test series !{" "}
                <Link className="text-blue-500 ">Explore Now</Link>
              </p>
            </div>
            <h1 className="md:text-xl my-4 text-richblack-400 font-bold">
              Owned Quizzes
            </h1>
            <div className="min-h-36 shadow-lg flex items-center justify-center bg-white rounded-lg">
              <p>
                Your have not enrolled any Quiz!{" "}
                <Link className="text-blue-500 ">Explore Now</Link>
              </p>
            </div>
          </div>
        )}
    </div>
  );
}

export default Analytics;
