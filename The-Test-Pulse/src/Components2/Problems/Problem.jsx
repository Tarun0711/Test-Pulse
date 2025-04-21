import React, { useState } from "react";
import StudyPlanCard from "./StudyPlanCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SearchSharp } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "./Table";
import Navbar from "../../Components/Home/Navbar";
import Calendar from "../Calendar";
import { Link } from "react-router-dom";

const StudyPlan = [
  {
    title: "Study Plan 1",
    description:
      "This is a study plan for top interview questions for the study plan 1",
    image: "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover",
  },
  {
    title: "Study Plan 2",
    description:
      "This is a study plan for top interview questions for the study plan 2",
    image: "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover",
  },
  {
    title: "Study Plan 3",
    description:
      "This is a study plan for top interview questions for the study plan 3",
    image: "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover",
  },
  {
    title: "Study Plan 4",
    description:
      "This is a study plan for top interview questions for the study plan 4",
    image: "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover",
  },
  {
    title: "Study Plan 5",
    description:
      "This is a study plan for top interview questions for the study plan 5",
    image: "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover",
  },
];

const topics = [
  "Kinematics",
  "Laws of Motion",
  "Work, Energy, and Power",
  "Rotational Dynamics",
  "Gravitation",
  "Electrostatics",
  "Current Electricity",
  "Magnetism and Magnetic Effects of Current",
  "Optics",
  "Modern Physics",
  "Thermodynamics",
  "Oscillations and Waves",
  "Algebraic Equations",
  "Quadratic Equations",
  "Matrices and Determinants",
  "Probability and Statistics",
  "Trigonometry",
  "Differential Calculus",
  "Integral Calculus",
  "Vector Algebra",
  "3D Geometry",
  "Complex Numbers",
  "Permutations and Combinations",
  "Limits and Continuity",
  "Atomic Structure",
  "Chemical Bonding",
  "Periodic Table and Periodicity",
  "Thermodynamics",
  "Equilibrium",
  "Electrochemistry",
  "Kinetics",
  "Organic Reactions Mechanism",
  "Coordination Compounds",
  "Transition Elements",
  "Surface Chemistry",
  "Solid State Chemistry",
];

const superTopics = [
  "All",
  "Jee Advance",
  "Jee Main",
  "IIT JEE",
  "AIPMT",
  "NEET",
  "AIIMS",
  "BITSAT",
  "VITEEE",
  "SRMJEE",
];

function Problem() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [value, setValue] = useState("");
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); // Set the selected topic
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      partialVisibilityGutter: 140,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      partialVisibilityGutter: 140,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 140,
    },
  };
  return (
    <div className="h-auto dark:bg-gray-900 bg-white">
      <Navbar isHome={true} />
      <div className="p-6 mt-14 md:px-24">
        <div className="flex items-center justify-between w-[70%] ">
          <h1 className="text-3xl font-bold dark:text-richblack-5 text-gray-700">
            Study Plan
          </h1>
          <Link className="text-blue-500 underline underline-offset-4" to="/study-plan">See all</Link>
        </div>
        <div className="w-full flex items-center justify-center gap-4 ">
          <div className="w-full  px-4 py-2 gap-3 flex ">
            <div className="w-[80%]  px-4 py-2 gap-3 flex flex-wrap ">
              {StudyPlan.map((plan, index) => (
                <StudyPlanCard key={index} data={plan} />
              ))}
            </div>

            <Calendar />
          </div>
        </div>
        <div className="w-full py-2 ">
          <h1 className="text-2xl font-bold dark:text-richblack-5 text-gray-700">
            Popular Topics
          </h1>
          {/* Popular topics */}
          <div className="w-full px-4 py-2 gap-3 flex flex-wrap ">
            {(isExpanded ? topics : topics.slice(0, 15)).map((topic, index) => (
              <p
                key={index}
                className="text-sm p-2 bg-gray-100 dark:text-gray-300 dark:bg-warmGray-800 rounded-full text-center "
              >
                {topic}{" "}
                <span className="bg-blue-100 text-blue-500 p-1 px-2 rounded-full">
                  11
                </span>
              </p>
            ))}
            <p
              onClick={toggleExpand}
              className="bg-blue-100 text-blue-500 p-2 text-center rounded-full "
            >
              {isExpanded ? "Collapse " : "Expand "}
            </p>
          </div>
        </div>
        <div className="w-full py-2 ">
          <h1 className="text-2xl font-bold dark:text-richblack-5 text-gray-700">
            Problems
          </h1>
          {/* Super Topics */}
          <div className="w-full px-4 py-2">
            <Carousel
              responsive={responsive}
              autoPlay={false}
              infinite={false}
              centerMode={false}
              draggable={true}
              showDots={false}
              itemClass="border-gray-200 border-solid p-2"
            >
              {superTopics.map((topic, index) => (
                <p
                  onClick={() => handleTopicClick(topic)}
                  key={index}
                  className={`text-sm p-2 rounded-full text-center cursor-pointer ${
                    selectedTopic === topic
                      ? "bg-black dark:bg-white dark:text-black text-white"
                      : " bg-gray-100 dark:bg-warmGray-800 dark:text-gray-300 text-gray-700"
                  }`}
                >
                  {topic}
                </p>
              ))}
            </Carousel>
          </div>
          {/* Problem */}

          <div className="flex items-center gap-4 md:flex-row flex-row-reverse justify-end">
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              className="dark:text-black dark:border-gray-400"
            >
              <InputLabel
                className="dark:text-gray-400"
                id="demo-select-small-label"
              >
                Status
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                className="dark:text-black dark:border-gray-400 dark:focus:bg-none dark:bg-gray-200"
                id="demo-select-small"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Latest</MenuItem>
                <MenuItem value={20}>Listed</MenuItem>
                <MenuItem value={30}>Unlisted</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              className="dark:text-black dark:border-gray-400"
            >
              <InputLabel
                className="dark:text-gray-400"
                id="demo-select-small-label"
              >
                Difficulty
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                className="dark:text-black dark:border-gray-400 dark:focus:bg-none dark:bg-gray-200"
                id="demo-select-small"
                value={status}
                label="Difficulty"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value={10}>Easy</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Hard</MenuItem>
              </Select>
            </FormControl>

            <div className="relative md:w-1/3">
              <input
                className="w-full p-2 px-5 pr-10 overflow-hidden  border-2 bg-transparent focus:outline-none dark:text-white border-gray-200 dark:border-gray-600 rounded-xl"
                placeholder="Search Questions"
                type="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <SearchSharp className="text-gray-500 absolute right-5 bottom-[9px]" />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Problem;
