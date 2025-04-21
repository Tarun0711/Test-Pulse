import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function MiddleContent() {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // add more options here...
  ]);

  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const filteredOptions = options.filter((option) => {
    return option.label.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleExamChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedExam(selectedOption);
  };

  const handleQuizChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedQuiz(selectedOption);
  };

  const navigate = useNavigate();
  const handleStartTestClick = () => {
    if (selectedExam && selectedQuiz) {
      navigate(`/quiz/examSelected=${selectedExam.value}/quizSelected=${selectedQuiz.value}`);
    } else {
      toast.error("Please select both exam and quiz");
    }
  };

  return (
    <div className="bg-transparent backdrop-blur-xl px-8 md:w-1/3 flex items-center justify-center gap-4 flex-col py-4 rounded-md ">
      {/* <input
        type="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search options..."
      /> */}
      <div className="flex flex-col w-full gap-2 text-r">
        <label className="text-richblack-100" htmlFor="exam">
          Select exam you would like to appear
        </label>
        <select
          name="exam"
          className="w-full px-4 focus:border-2 focus:border-blue-600 text-richblack-600 border-2 border-richblack-600 rounded-xl py-3"
          onChange={handleExamChange}
        >
          <option value="">Select Your Dream</option>
          {filteredOptions.map((option) => (
            <option
              className={`mt-2 ${
                selectedExam && selectedExam.value === option.value
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-full gap-2 text-r">
        <label className="text-richblack-100" htmlFor="quiz">
          Select Quiz
        </label>
        <select
          name="quiz"
          className="w-full px-4 text-richblack-600 focus:border-2 focus:border-blue-600 border-2 border-richblack-600 rounded-xl py-3"
          onChange={handleQuizChange}
        >
          <option value="">Select Quiz</option>
          {filteredOptions.map((option) => (
            <option
              className={`mt-2 ${
                selectedQuiz && selectedQuiz.value === option.value
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleStartTestClick}
        className="w-full transition-all ease-in-out duration-500 rounded-xl hover:scale-95 bg-blue-500 py-2 text-white"
      >
        Start Test
      </button>
    </div>
  );
}

export default MiddleContent;

