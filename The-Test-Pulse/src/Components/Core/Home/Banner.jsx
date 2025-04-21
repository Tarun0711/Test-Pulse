import React from "react";
import School from "../../../Assests/school.png";
import Institute from "../../../Assests/homework.png";

import Teacher from "../../../Assests/teacher.png";
import Student from "../../../Assests/boy.png";
const Data = [
  {
    Number: "100+",
    title: "Schools",
    img: School,
  },
  {
    Number: "1000+",
    title: "Students",
    img: Student,
  },
  {
    Number: "40+",
    title: "Teachers",
    img: Teacher,
  },
  {
    Number: "100+",
    title: "Institutes",
    img: Institute,
  },
];
function Banner() {
  return (
    <div className="w-full bg-transparent py-3 h-auto">
      <div className="flex gap-2 md:flex-nowrap  flex-wrap">
        {Data.map((key, index) => (
          <div
            className="bg-white flex  items-center overflow-hidden w-[300px] gap-2 p-2 max-h-32  rounded-2xl"
            key={index}
          >
            <img src={key.img} alt="img" className="md:h-10 h-8 " />
            <div>
              <h1 className="font-bold md:text-xl text-lg">{key.Number}</h1>
              <h2 className="font-semibold  text-richblack-600">
                {key.title}
              </h2>
            </div>
            <img />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
