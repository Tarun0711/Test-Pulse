import React from "react";
import Logo from "../../Assests/Logo/Logo2.svg";
import { BiSolidTimer } from "react-icons/bi";
import { RiNewspaperFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { PieChart } from "@mui/x-charts/PieChart";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../slices/QuizSlice";
const data = [
  { id: 0, value: 10, label: "Maths" },
  { id: 1, value: 15, label: "Physics" },
  { id: 2, value: 20, label: "Chemistry" },
];

function Details() {
  const [value, setValue] = React.useState("1");
  const dispatch = useDispatch()
  const {quiz} =useSelector((state)=>state.quiz);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNextClick=()=>{
    dispatch(setStep(2))
  }

  return (
    <div className="h-screen text-black w-screen overflow-y-scroll bg-richblack-5">
      <nav className="h-24 flex items-center bg-white px-1 md:px-4 backdrop-blur-2xl justify-between border-b shadow-sm shadow-richblack-400">
        <img
          className="md:h-20 md:w-20 h-16 w-16 object-fill"
          src={Logo}
          alt="Logo"
        />
        <h1 className="text-center font-mono text-black md:text-3xl font-bold">
          JEE MAIN TEST -mock test
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-blue-600 w-fit  rounded-full">
            <img
              src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
              className=" aspect-auto md:h-16 md:w-16 h-12 w-12"
              alt="user"
            />
          </div>
          <p className="text-richblack-800 md:text-md text-sm  ">Guest user</p>
        </div>
      </nav>
      <div className="flex items-center justify-between p-4">
      <h1 className="md:text-2xl text-xl font-semibold text-richblack-700 ">
        Quiz Details
      </h1>
      <button
        onClick={handleNextClick}
        className="w-fit flex items-center gap-2 px-4 transition-all ease-in-out duration-500 rounded-md hover:scale-95 bg-blue-500 py-2 text-white"
      >
        Take Assessment <MdNavigateNext fontSize={24}/>
      </button>
      
      </div>
      
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[70%]">
          <div className="flex flex-wrap gap-4 px-8 items-center border rounded-xl bg-white shadow-md shadow-richblack-100 p-4 mx-2 justify-between ">
            <div className="">
              <h1 className="text-md  text-black">Marking Schema</h1>
              <div className="bg-blue-50 border-2 shadow-md rounded-xl shadow-richblack-200 w-fit p-4 text-center">
                <h1 className="text-md">Total marks</h1>
                <h1 className="text-xl font-bold">30</h1>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <h1 className="text-md bg-blue-50 p-2 text-center mx-2 rounded-2xl border-2 border-blue-400 text-black">
                <BiSolidTimer fontSize={32} className="text-red-200" />
                45 Minutes
              </h1>
              <h1 className="text-md p-2 bg-blue-50 text-center mx-2 rounded-2xl border-2 border-blue-400  text-black">
                <RiNewspaperFill fontSize={32} className="text-yellow-200" />
                30 Questions
              </h1>
              <h1 className="text-md p-2 bg-blue-50 text-center mx-2 rounded-2xl border-2 border-blue-400  text-black">
                <FaUserEdit fontSize={32} className="text-caribbeangreen-25" />
                100+ Attempts
              </h1>
            </div>
          </div>
          <div className="flex flex-col px-8 mt-4 border rounded-xl bg-white shadow-md shadow-richblack-100 p-4 mx-2 justify-between ">
            <p>Subject Included</p>
            <div className="flex items-center gap-4 py-2 flex-wrap">
              <p className="border-2 bg-blue-50 border-richblack-100 p-2 rounded-lg px-4">
                Maths
              </p>
              <p className="border-2 bg-blue-50 border-richblack-100 p-2 rounded-lg px-4">
                Physics
              </p>
              <p className="border-2 bg-blue-50 border-richblack-100 p-2 rounded-lg px-4">
                Chemistry
              </p>
            </div>
          </div>
          <div className="flex flex-col px-8 mt-4 border rounded-xl bg-white shadow-md shadow-richblack-100 p-4 mx-2 justify-between ">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    className="bg-white rounded-lg text-black"
                    aria-label="lab API tabs example"
                  >
                    <Tab label="About Instructor" value="1" />
                    <Tab label="Instructions" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">! no data found</TabPanel>
                <TabPanel value="2">! no data found</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
        <div className="md:w-[30%] ">
          <div className="bg-white rounded-xl">
            <h1 className="text-md p-2 text-center mx-2 rounded-2xl">
              Section Distribution
            </h1>
            <PieChart
              className="text-black"
              series={[
                {
                  data,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details
