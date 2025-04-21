import React from "react";
import Insights from "../../../Assests/efficacy.png";
import { Link } from "react-router-dom";
import diploma from "../../../Assests/diploma.png";
import graduation from "../../../Assests/graduation.png";
import start from "../../../Assests/start.png";
const Data = [
  {
    title: "Insightful Analytics",
    description:
      "The Test Pulse Creator provides actionable insights through comprehensive analytics. Track participant performance, identify strengths and weaknesses, and make informed decisions to enhance learning outcomes.",
    image: Insights,
  },
  {
    title: "Empower Learning Everywhere",
    description:
      "The Test Pulse revolutionizes learning by offering a dynamic platform that fosters interactive learning experiences. we empower our audience to excel with our innovative quiz solutions.",
    image: graduation,
  },
  {
    title: "Efficiency Redefined",
    description:
      "The Test Pulse streamlines quiz creation and management, saving you time and effort. Our user-friendly interface ensures a seamless experience from creation to deployment, enabling you to focus on what matters.",
    image: start,
  },
  {
    title: "Engage and Educate",
    description:
      "The Test Pulse empowers educators and businesses to create engaging quizzes that captivate participants while imparting knowledge effortlessly. Drive learning and retention with our intuitive platform.",
    image: diploma,
  },
];

function Benefits() {
  return (
    <div className=" relative h-auto w-full flex flex-col justify-center items-center gap-4  bg-blue-50 px-2 md:px-6 py-8">
  
        <h1 className="text-blue-700 z-10 text-3xl font-bold text-center ">Transforming Learning and Assessment</h1>
        <p className="md:w-2/3 text-center z-10 text-richblack-600"> Discover a revolutionary platform that enhances educational outcomes through interactive quizzes, insightful analytics, and personalized learning paths, empowering educators and businesses alike to achieve greater insights and outcomes effortlessly.</p>
      <div className="flex items-center flex-wrap md:flex-nowrap justify-center gap-6">
        {Data.map((key, index) => {
          return (
            <div className=" flex z-10 flex-col rounded-2xl md:px-4 p-2 py-4 bg-white justify-center  items-center gap-3 w-[270px] md:w-[300px]" key={index}>
                <img src={key.image} className="md:h-44 h-32" alt="..." />
                <div className="">
                  <h1 className="md:text-2xl text-xl font-semibold text-richblack-600">{key.title}</h1>
                  <p className="md:text-md text-sm  text-richblack-400">{key.description}</p>
                </div>
              <Link
          to={"/signup"}
          className="text-violet-600 hover:scale-110 transition-all ease-in-out duration-150 hover:underline underline-offset-8"
        >
          Register Now
        </Link>

            </div>
          );
        })}
       
      </div>
    </div>
  );
}

export default Benefits;
