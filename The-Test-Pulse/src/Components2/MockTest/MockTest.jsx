import React from "react";
import Navbar from "../../Components/Home/Navbar";
import MockCard from "../../Components/Home/MockCard";


const data = [
    {
      name: "Mock Test 1",
      chapters: "5",
      totalQuestions: "50",
      time: "30 min",
      image:
        "https://img.freepik.com/free-vector/flat-geometric-background_23-2148967370.jpg?t=st=1734100166~exp=1734103766~hmac=eabc330e5f5b3ee5d6e1cbbc1c3dfce57f653576a76b70abe71a69b6ab2ac683&w=996",
    },
    {
      name: "Mock Test 2",
      chapters: "7",
      totalQuestions: "70",
      time: "40 min",
      image:
      "https://img.freepik.com/free-vector/gradient-abstract-background_23-2149131346.jpg?t=st=1734100386~exp=1734103986~hmac=220e0ba9b7835b8d2de5fd8593570517a9f8419ee07447a97e171b613267a05f&w=996",
    },
    {
      name: "Mock Test 3",
      chapters: "6",
      totalQuestions: "60",
      time: "35 min",
      image:
        "https://img.freepik.com/free-vector/flat-geometric-background_23-2148957214.jpg?t=st=1734100345~exp=1734103945~hmac=9b7acde11c26ef6057615c4800fdd972d5e27452f58f084a7742a12e23097b80&w=996",
        locked: true,
    },
    {
      name: "Mock Test 4",
      chapters: "4",
      totalQuestions: "40",
      time: "25 min",
      image:
      "https://img.freepik.com/free-vector/flat-geometric-background_23-2148957289.jpg?t=st=1734100322~exp=1734103922~hmac=c6495a8785a31e13952e7e031aa32a0b0e3e4b745f135cb85ff31234f1c5c22f&w=996",
    },
    {
      name: "Mock Test 5",
      chapters: "8",
      totalQuestions: "80",
      time: "45 min",
      image:
        "https://img.freepik.com/free-vector/flat-design-abstract-background_23-2149103999.jpg?t=st=1734100302~exp=1734103902~hmac=f491e1d646e4bedfafaff1da47d1969066838068277a61e810c9354cde628bc0&w=996",
    },
  ];
  

function MockTest() {
  return (
    <div className="h-auto w-full bg-gray-100 dark:bg-[#121212] ">
      <Navbar isHome={true} />
      <div className="p-6 mt-14 md:px-24">
        <h1 className="text-3xl font-bold dark:text-richblack-5 text-gray-700">
          Mock Test
        </h1>
        <div className="w-full py-2 px-4 gap-6 flex flex-wrap ">
            {data.map((data, index) => (
            <MockCard data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MockTest;
