import React from "react";
import Whitebg from "../../../Assests/wb-white-bg.jpg";
import Satisfication from "../../../Assests/customer-satisfaction.png";
import Secure from "../../../Assests/cyber-security.png";
import Personalised from "../../../Assests/personalized.png";
import Image from "../../../Assests/microsoft_data.jpg";
import inspiration from "../../../Assests/inspiration.png";

const Data = [
  {
    title: "Powering Seamless Quiz Experiences",
    description:
      "TestPulse revolutionizes quiz conducting with its intuitive platform. Easily create, manage, and administer quizzes tailored to your needs. From educational assessments to engaging contests, TestPulse ensures seamless experiences for users and administrators alike.",
    img: Satisfication,
  },
  {
    title: "Personalized Quiz Experiences for Every User",
    description:
      "Personalize quiz experiences with TestPulse. Tailor assessments to individual learning styles and preferences, ensuring each user receives a customized learning journey. Empower educators and businesses with tools that foster engagement and boost knowledge retention.",
    img: Personalised,
  },
  {
    title: "Interactive Quizzes, Instant Insights",
    description:
      "At TestPulse, we merge interactive quiz creation with instant insights. Our platform allows you to craft engaging quizzes that captivate participants, while real-time analytics provide actionable data to enhance learning and decision-making.",
    img: inspiration,
  },
  {
    title: "Secure, Scalable Quiz Management",
    description:
      "Secure and scalable, TestPulse is your go-to platform for managing quizzes of any size. From small classrooms to large corporate training sessions, our robust system ensures reliable performance, data security, and seamless integration with your existing workflows.",
    img: Secure,
  },
];
function SystemWorks() {
  return (
    <div
      className=" relative h-auto  flex flex-col justify-center items-center gap-4  md:px-6 py-8"
      style={{
        backgroundImage: `url(${Whitebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-blue-700 z-10 text-3xl font-bold text-center py-4 underline underline-offset-8 ">
        Why The Test Pulse
      </h1>

      <div className="flex items-center justify-around">
        <img
          src={Image}
          alt=""
          className="md:block hidden w-1/3 shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
        />
        <div>
          {Data.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3 px-4" key={i}>
                <div className="flex md:flex-row flex-col gap-6" key={i}>
                  <div className="  rounded-full flex justify-center items-center ">
                    <img
                      src={ele.img}
                      alt="image"
                      className=" w-[200px] p-2 rounded-full shadow-lg h-[80px]"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold md:text-[18px]">
                      {ele.title}
                    </h2>
                    <p className="text-md">{ele.description}</p>
                  </div>
                </div>
                <div
                  className={` ${
                    Data.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14  hidden border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SystemWorks;
