import { Alert } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import questionData from "../../Data/Question.json";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { BiArrowFromLeft } from "react-icons/bi";
import { setStep } from "../../slices/QuizSlice";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify";
import logoThumbnail from '../../Assests/Logo/Thumbnail.svg'
function Platform() {
  const [timeRemaining, setTimeRemaining] = useState(310);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("question");
  const [reviewedIndices, setReviewedIndices] = useState({});
  const [answeredIndices, setAnsweredIndices] = useState({});
  const [visitedIndices, setVisitedIndices] = useState({});
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch()

  const [showRightContainer, setShowRightContainer] = useState(true);

  const handleToggleRightContainer = () => {
    setShowRightContainer(!showRightContainer);
  };


  // const finishButtonRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const disableActions = (e) => {
      e.preventDefault();
    };

    document.addEventListener('copy', disableActions);
    document.addEventListener('cut', disableActions);
    document.addEventListener('paste', disableActions);
    document.addEventListener('selectstart', disableActions);

    return () => {
      document.removeEventListener('copy', disableActions);
      document.removeEventListener('cut', disableActions);
      document.removeEventListener('paste', disableActions);
      document.removeEventListener('selectstart', disableActions);
    };
  }, []);

  const handleFinishClick=()=>{
    dispatch(setStep(3))
    toast.success("Test submit successfully")
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
        if (timeRemaining === 300) {
          const speech = new SpeechSynthesisUtterance("Only 5 minutes left");
          speech.lang = "en-US";
          speech.volume = 1;
          speech.rate = 1;
          window.speechSynthesis.speak(speech);
        }
      } else {
        setFinished(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
  };

  const handleNextClick = () => {
    if (currentIndex < questionData.question.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setVisitedIndices((prev) => ({ ...prev, [currentIndex + 1]: true }));
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleMarkAsReview = (index) => {
    setReviewedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
    setAnsweredIndices((prev) => ({
      ...prev,
      [index]: true,
    }));
  };


  const handleClearAnswer = () => {
    setAnswers((prev) => {
      const updatedAnswers = { ...prev };
      delete updatedAnswers[currentIndex];
      return updatedAnswers;
    });
    setAnsweredIndices((prev) => {
      const updatedIndices = { ...prev };
      delete updatedIndices[currentIndex];
      return updatedIndices;
    });
  };

  useEffect(() => {
    const checkFullscreen = () => {
      if (!document.fullscreenElement) {
        setAlertCount((prevCount) => {
          if (prevCount < 4) {
            alert("Please submit the test first.");
            return prevCount + 1;
          } else {
            if (finishButtonRef.current) {
              finishButtonRef.current.click();
            }
            return prevCount;
          }
        });
      }
    };
    

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        alert("Please submit the test first.");
        document.documentElement.requestFullscreen();
      }
    };

    document.documentElement.requestFullscreen();

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    const fullscreenCheckInterval = setInterval(checkFullscreen, 1000);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      clearInterval(fullscreenCheckInterval);
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!finished) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [finished]);


  useEffect(() => {
    const handlePopState = (event) => {
      event.preventDefault();
      alert("Please submit the test first.");
      window.history.pushState(null, null, window.location.pathname);
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-richblack-5 overflow-x-hidden overflow-y-scroll">
      <nav className="h-[70px] px-4 w-full bg-blue-600 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
            alt="User Avatar"
            className="h-[50px] rounded-full"
          />
          <h1 className="text-white font-semibold">Lorem, ipsum.</h1>
        </div>
        <p className="font-bold hidden md:block text-2xl text-white">
          @ Lorem ipsum dolor sit amet
        </p>
        <div className="flex gap-3 items-center">
          <div className="text-white flex items-center md:flex-col">
            <p className="text-md md:block hidden md:text-sm">Time Remaining</p>
            <p className="bg-blue-400 font-bold text-center py-2 px-1 h-fit rounded-lg mt-1">
              {formatTime(timeRemaining)}
            </p>
          </div>
          {finished ? (
            <button onClick={handleFinishClick} className="bg-pink-300 text-xs font-bold py-[10px] px-4 h-fit text-white rounded-3xl">
              Time Expired
            </button>
          ) : (
            <button onClick={handleFinishClick} 
            className="bg-caribbeangreen-300 h-fit font-bold py-2 px-4 text-white rounded-3xl">
              Finish
            </button>
          )}
        </div>
        <button
  className={`border-2 p-2 md:hidden right-0 z-50 top-[20%] bg-opacity-75 rounded-lg absolute transition-all ease-in-out duration-300 ${showRightContainer? 'rotate-0' : 'rotate-180'} bg-white `}
  onClick={handleToggleRightContainer}
>
  <BiArrowFromLeft fontSize={24} />
</button>
      </nav>
      <div className={` ${timeRemaining < 300 ? "block" : "hidden"}`}>
        <Alert variant="filled" severity="warning">
          Only {formatTime(timeRemaining)} is left. Please finish the test on
          time.
        </Alert>
      </div>
      
      <div className="flex">
        <div className="md:w-[75%]">
          <div className="bg-blue-600 flex border border-white justify-between pl-4 gap-2 items-center text-white text-xl">
            <div className="flex items-center gap-3">
              <p>Questions</p>
              <p className="bg-blue-400 px-2 py-1 text-white font-bold rounded-xl">
                {currentIndex + 1} {" / "}
                {questionData.question.length}
              </p>
            </div>
            <div className="bg-blue-400 px-4  rounded-lg text-white h-full w-1/2 flex md:flex-row items-center justify-end">
              <p className="md:text-md text-sm">Marking Schema</p>
              <div className="flex justify-between">
                <span className="bg-blue-300 mx-2 text-md-end p-2 rounded-xl">
                  +4
                </span>
                <span className="bg-blue-300 p-2 px-3 rounded-xl">-1</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center bg-white mx-2 rounded-lg overflow-hidden mt-4">
            <button className="border-2 border-richblack-600 py-2 px-4 hover:scale-95 text-blue-600 bg-blue-100">
              Maths
            </button>
            <button className="border-2 border-richblack-600 py-2 px-4 hover:scale-95 bg-white">
              Physics
            </button>
            <button className="border-2 border-richblack-600 py-2 px-4 hover:scale-95 bg-white">
              Chemistry
            </button>
            <p className="text-richblack-300 md:block hidden">
              Choose section from here
            </p>
          </div>
          <div className="py-4 relative bg-white mx-2 rounded-lg">
            {questionData.question &&
              questionData.question.map((question, index) => {
                if (index === currentIndex) {
                  return (
                    <div className="z-40" key={index}>
                      <p className="text-lg text-richblack-800 px-4 py-3 font-semibold">
                        {question.question}
                      </p>
                      <div className="mx-4 z-50">
                        <RadioGroup
                          aria-label="Your plan"
                          name="people"
                          value={answers[index] || ""}
                          onChange={(e) =>
                            handleAnswerChange(index, e.target.value)
                          }
                        >
                          <List
                            sx={{
                              minWidth: 240,
                              "--List-gap": "0.5rem",
                              "--ListItem-paddingY": "1rem",
                              "--ListItem-radius": "8px",
                              "--ListItemDecorator-size": "32px",
                            }}
                          >
                            {question.options.map((item, optionIndex) => (
                              <ListItem
                                variant="outlined"
                                key={optionIndex}
                                sx={{ boxShadow: "sm" }}
                              >
                                <Radio
                                  overlay
                                  value={item.value}
                                  label={item.text}
                                  sx={{
                                    flexGrow: 1,
                                    flexDirection: "row-reverse",
                                  }}
                                  slotProps={{
                                    action: ({ checked }) => ({
                                      sx: (theme) => ({
                                        ...(checked && {
                                          inset: -1,
                                          border: "2px solid",
                                          borderColor:
                                            theme.vars.palette.primary[500],
                                        }),
                                      }),
                                    }),
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </RadioGroup>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              
          </div>
          <div className="flex items-center px-4 mt-3 justify-between">
            <div className="flex items-center gap-3">
              <button
              onClick={handleClearAnswer}
               className="bg-[#267111] text-white text-center py-2 px-4 rounded-xl hover:scale-90">
                Clear
              </button>
              <button
                onClick={() => {
                  handleMarkAsReview(currentIndex);
                  handleNextClick();
                }}
                className={`bg-blue-700 hover:scale-90 text-white text-center py-2 px-4 rounded-xl ${
                  reviewedIndices[currentIndex] ? "bg-blue-400" : ""
                }`}
              >
                {reviewedIndices[currentIndex]
                  ? "Unmark for Review"
                  : "Mark for Review"}
              </button>
            </div>
            <div className="flex items-center ml-4 px-4 gap-2">
              <button
                onClick={handlePreviousClick}
                disabled={currentIndex === 0}
                className={`bg-[#ff76e1] text-white text-center p-2 rounded-xl hover:scale-90 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                disabled={currentIndex === questionData.question.length - 1}
                className={`bg-[#2fc837] text-white text-center p-2 rounded-xl hover:scale-90 ${
                  currentIndex === questionData.question.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
         <div
          className={`md:w-[25%] z-40 md:relative absolute right-container left-0 bg-white  ${
            showRightContainer? "block" : "hidden"
          }`}
        >
          <div className="p-2 flex flex-wrap gap-3 border-2 justify-between border-richblack-300 py-4 border-dotted h-fit">
            <p className="text-richblack-300">
              Not visited{" "}
              <span className="ml-2 shadow-md shadow-richblue-600 p-2 px-3 text-richblack-5 font-bold text-xl bg-brown-300 rounded-full">
                {questionData.question.length -
                  Object.keys(visitedIndices).length-1}
              </span>
            </p>
            <p className="text-richblack-300">
              Not Answered{" "}
              <span className="ml-2 shadow-md shadow-pink-600 p-2 px-3 text-richblack-5 font-bold text-xl bg-pink-500 rounded-xl">
                {questionData.question.length -
                  Object.keys(answeredIndices).length}
              </span>
            </p>
            <p className="flex items-center text-richblack-300">
              Marked for <br /> Review{" "}
              <span
                style={{
                  clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0% 100%)",
                }}
                className="ml-2 shadow-md shadow-blue-400 p-2 px-3 text-richblack-5 font-bold text-xl bg-blue-500"
              >
                {Object.keys(reviewedIndices).length}
              </span>
            </p>
            <p className="flex items-center text-richblack-300">
              Answered{" "}
              <span
                style={{
                  clipPath:
                    "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                }}
                className="ml-2 shadow-md shadow-caribbeangreen-100 p-2 px-3 text-richblack-5 font-bold text-xl bg-caribbeangreen-300 h-fit"
              >
                {Object.keys(answeredIndices).length}
              </span>
            </p>

          </div>
          <hr className="my-4"/>

          <ul className="flex gap-3 mb-4">
            <li
              className={`${
                activeTab === "question"
                  ? "bg-[#4880FF] text-white"
                  : "text-richblack-300"
              } transition-all duration-700 ease-in-out py-2 px-4 rounded-lg cursor-pointer`}
              onClick={() => handleTabChange("question")}
            >
              Question
            </li>
            <li
              className={`${
                activeTab === "instruction"
                  ? "bg-[#4880FF] text-white"
                  : "text-richblack-300"
              } py-2 transition-all duration-700 ease-in-out px-4 rounded-lg cursor-pointer`}
              onClick={() => handleTabChange("instruction")}
            >
              Instruction
            </li>
          </ul>
          {activeTab === "question" ? (
            <div className="flex items-center px-4 H-[400px] flex-wrap gap-3 overflow-y-auto rounded-2xl py-2 border-2 justify-start border-richblack-300 w-full h-auto">
              {questionData.question.map((question, index) => (
                <p
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  key={index}
                  className={`text-richblack-500 w-10 cursor-pointer border text-center rounded-xl py-2 shadow-md ${
                    currentIndex === index
                      ? "clip-path bg-caribbeangreen-300 rounded-none font-bold text-white "
                      : reviewedIndices[index]
                      ? "clip-path-2 bg-blue-400 text-white "
                      : answeredIndices[index]
                      ? "clip-path-3 bg-caribbeangreen-200 text-white "
                      : ""
                  } `}
                >
                  {index + 1}
                </p>
              ))}
            </div>
          ) : (
            <div>{/* Instructions rendering can be added here */}</div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Platform;
