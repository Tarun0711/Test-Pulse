import React from "react";
import image1 from "../../../Assests/1.png";
import image2 from "../../../Assests/2.png";
import image3 from "../../../Assests/3.png";
import { Link } from "react-router-dom";
import Banner from "./Banner"; 

function LandingMain() {
  const images = [image1, image2, image3];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="background h-auto  md:h-screen flex gap-3  md:flex-row flex-col-reverse md:px-10 md:pb-0 pb-6 px-2 w-full pt-6">
      <div className="md:w-1/2 flex md:h-full flex-col h-1/2 gap-4 items-start justify-center px-6">
        <h1 className="md:text-5xl text-2xl font-bold text-white">
          Unlock Your <span className="GradientText"> Potential</span> with{" "}
        </h1>
        <span className="GradientText md:text-6xl text-3xl font-bold">The Test Pulse</span>
        <p className="text-white md:text-md text-sm ">
          "Welcome to 'The Test Pulse,' your premier platform dedicated to
          empowering JEE and NEET students with effective test preparation tools
          and resources. Dive into our curated practice tests and expertly
          designed study materials to ace your exams with confidence!"{" "}
        </p>
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <button className="learn-more ">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Know More</span>
          </button>
          <Link to={"/"} className="text-white Glass hover:scale-105 ease-in-out duration-200 border-2 py-2 px-3 rounded-lg">Get Free Consultation</Link>
        </div>
        <Banner/>
      </div>
      <div className="flex justify-center md:h-full h-1/2 items-center md:py-10   md:w-1/2">
        <img
          src={randomImage}
          alt="Random Image"
          className="w-[70%] hover:scale-105 transition-all ease-in-out duration-1000"
        />
      </div>
    </div>
  );
}

export default LandingMain;
