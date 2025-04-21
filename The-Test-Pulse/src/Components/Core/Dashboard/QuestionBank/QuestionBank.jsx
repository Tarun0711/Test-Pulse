import React, { useEffect, useState } from "react";
import {
  addChapterIntoSubject,
  addSubjectIntoQuestionBank,
  createQuestionBank,
  getAllQuestionBanks,
  addTopicIntoChapter,
  addQuestionDetails,
  addQuestionDetailsAsPicture,
} from "../../../../Services/Operations/QuestionBanKApi";
import DataTable from "./TableQuestion";
import toast from "react-hot-toast";
import { filledInputClasses } from "@mui/material";

function QuestionBank() {
  const [showInput, setShowInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [questionBanks, setQuestionBanks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedQuestionBankId, setSelectedQuestionBankId] = useState(null);
  const [subject, setSubject] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [otherSubjectvalue, setOtherSubjectValue] = useState("");
  const [otherSubject, setOtherSubject] = useState(false);
  const [chapter, setChapter] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [otherChapter, setOtherChapter] = useState(false);
  const [chapterName, setChapterName] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const [topic, setTopic] = useState([]);
  const [otherTopic, setOtherTopic] = useState(false);
  const [topicName, setTopicName] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [Questions, setQuestions] = useState([]);
  const [showInputQuestion, setShowInputQuestion] = useState(false);

  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const[showFileInput,setShowFileInput]=useState(false)
  const [fileInput, setFile] = useState(null);

  useEffect(() => {
    const fetchQuestionBanks = async () => {
      setLoading(true);
      // toast.loading("loading .....")
      try {
        const response = await getAllQuestionBanks();
        setQuestionBanks(response.data);
        setError(null);
        toast.dismiss();
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestionBanks();
  }, []);

  const resetSelectedStates = () => {
    // setSelectedQuestionBankId(null);
    setSelectedSubject("");
    setSelectedSubjectId("");
    setSelectedChapter(null);
    setSelectedChapterId("");
    setSelectedTopic(null);
    setSelectedTopicId("");
    setOtherSubjectValue("");
    setOtherChapter("");
    setOtherTopic("");
  };
  const handleCreateQuestionBank = async () => {
    try {
      const response = await createQuestionBank({ Category: newCategory });
      setQuestionBanks([...questionBanks, response.data]);

      setNewCategory("");
      setShowInput(false);
      setError("");
      resetSelectedStates();
    } catch (error) {
      setError(error.className);
    }
  };

  const handleSelectQuestionBank = (id) => {
    setSelectedQuestionBankId(id);
    const selectedQuestionBank = questionBanks.find(
      (questionBank) => questionBank._id === id
    );
    setSubject(selectedQuestionBank?.subjects || []);
    setError(null);
    resetSelectedStates();
  };

  const handleSelectSubject = (e) => {
    const value = e.target.value;
    const selectedSubject = subject.find(
      (subject) => subject.subjectName === value
    );

    if (value === "Other") {
      setOtherSubject(true);
    } else {
      setSelectedSubject(value);
      setChapter(selectedSubject?.Chapter || []);
      setSelectedSubjectId(selectedSubject?._id || "");
    }
  };

  const handleAddSubject = async () => {
    try {
      const response = await addSubjectIntoQuestionBank({
        questionBankId: selectedQuestionBankId,
        SubjectName: otherSubjectvalue || selectedSubject,
      });
      const updatedQuestionBanksResponse = await getAllQuestionBanks();
      setQuestionBanks(updatedQuestionBanksResponse.data);
      const updatedSubject = updatedQuestionBanksResponse.data
        .find((questionBank) => questionBank._id === selectedQuestionBankId)
        .subjects.find(
          (subject) => subject.subjectName === response.data.subjectName
        );
      setSubject(updatedSubject);
      setError(null);
      setOtherSubject(false);
      resetSelectedStates();

      setOtherSubjectValue("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSelectChapter = (e) => {
    const value = e.target.value;
    if (value === "Other") {
      setOtherChapter(true);
    } else {
      setOtherChapter(false);
      const selectedChapter = chapter.find(
        (chapter) => chapter.chapterName === value
      );

      setSelectedChapter(selectedChapter?.chapterName || "");
      setSelectedChapterId(selectedChapter?._id || "");
      setTopic(selectedChapter?.topics || []);
    }
  };

  const handleAddchapter = async () => {
    const subjectId = selectedSubjectId;
    try {
      const response = await addChapterIntoSubject({
        chapterName: chapterName,
        subjectId: subjectId,
      });
      const updatedQuestionBanksResponse = await getAllQuestionBanks();
      setQuestionBanks(updatedQuestionBanksResponse.data);
      const updatedChapter = updatedSubject.subjects
        .find((subject) => subject._id === selectedSubjectId)
        .Chapter.find(
          (chapter) => chapter.chapterName === response.data.chapterName
        );

      setChapter(updatedChapter);
      resetSelectedStates();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSelectTopic = (e) => {
    const value = e.target.value;
    if (value === "other") {
      setOtherTopic(true);
    } else {
      setOtherTopic(false);
      const selectedTopic = topic.find((topic) => topic.topicName === value);
      setSelectedTopic(selectedTopic?.topicName || "");
      setQuestions(selectedTopic?.questions || []);
      setSelectedTopicId(selectedTopic?._id);
    }
  };
  const handleAddtopic = async () => {
    try {
      const response = await addTopicIntoChapter({
        topicName: topicName,
        chapterId: selectedChapterId,
      });
      setTopic([...topic, response.data]);
      setTopicName("");
      setOtherTopic(false);
      resetSelectedStates();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreateQuestion = async () => {
    if (showFileInput) {
      // Handle file upload
      const file =fileInput;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('topicId', selectedTopicId);
      formData.append('correctAnswer', correctAnswer);
      try {
        const response = await addQuestionDetailsAsPicture(formData);
        setQuestions([...Questions, response.data]);
        setShowFileInput(false);
      } catch (error) {
        console.error(error);
      }
    } else if (showInputQuestion) {
      // Handle text question upload
      const newQuestion = {
        questionText: questionText,
        options: options,
        correctAnswer: correctAnswer,
        topicId: selectedTopicId,
      };
  
      try {
        const response = await addQuestionDetails(newQuestion);
        setQuestions([...Questions, response.data]);
        setQuestionText("");
        setOptions(["", "", "", ""]);
        setCorrectAnswer("");
        setShowInputQuestion(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  
  const handleAddQuestionText = () => {
    setShowOptions(true);
  };
  const handleOptionChange = (index, value) => {
    setOptions(
      options.map((option, i) => {
        if (i === index) {
          return value;
        }
        return option;
      })
    );
  };
  const handleCorrectAnswerChange = (value) => {
    setCorrectAnswer(value);
  };


  
  return (
    <div>
      <div className="flex flex-col w-full items-start gap-4 h-full bg-white rounded-lg shadow-lg p-2 md:p-4">
        <div className="flex justify-between w-full ">
          <h1 className="md:text-2xl text-richblack-500 font-bold text-center">
            Question Bank
          </h1>
          <button
            onClick={() => setShowInput(true)}
            className="p-2 hover:bg-blue-500 border-2 hover:text-white text-blue-500 border-richblack-700 shadow-md rounded-lg text-xs"
          >
            Create Question Bank
          </button>
        </div>
        {showInput && (
          <div className="flex gap-2">
            <input
            
              type="text"
              accept="*"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter Question Bank Name"
              className=" border-2 px-2  border-richblack-100 placeholder:text-sm rounded-lg"
            />
            <button
              className="py-2 px-3 h-fit hover:bg-blue-500 hover:text-white text-blue-500 border-2 border-richblack-700 shadow-md md:text-md transition-all duration-300  rounded-lg text-xs"
              onClick={handleCreateQuestionBank}
            >
              Create Question Bank
            </button>
          </div>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : questionBanks.length === 0 ? (
          <p className="text-sm md:px-4 text-red-400 ">
            No Question Bank added yet. Please click the "Add Question Bank"
            button to create one.
          </p>
        ) : (
          <>
            <p className="capitalize text-richblack-200">
              Choose a question bank
            </p>
            <div className="flex gap-4 flex-wrap">
              {questionBanks.map((questionBank) => (
                <button
                  className={`p-2 shadow-md text-richblack-500 rounded-lg text-sm ${
                    selectedQuestionBankId === questionBank._id
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  key={questionBank._id}
                  onClick={() => handleSelectQuestionBank(questionBank._id)}
                >
                  {questionBank.Category}
                </button>
              ))}
            </div>
            {selectedQuestionBankId && (
              <div className="flex flex-col gap-2">
                <p className="capitalize text-richblack-200">
                  Choose a Subject
                </p>
                <select
                  onChange={handleSelectSubject}
                  className="border-2 border-richblack-100 p-2 rounded-lg text-sm"
                >
                  <option value="">Select a subject</option>
                  {subject &&
                    subject.map((key, index) => (
                      <option key={index} value={key.subjectName}>
                        {key.subjectName}
                      </option>
                    ))}
                  <option value="Other">Other</option>
                </select>
                {otherSubject && (
                  <>
                    <p className="capitalize text-richblack-200">
                      Enter Subject
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                      
                        type="text"
                        value={otherSubjectvalue}
                        onChange={(e) => setOtherSubjectValue(e.target.value)}
                        placeholder="Enter subject name"
                        className=" border-2 px-2 py-1  border-richblack-100 placeholder:text-sm rounded-lg"
                      />
                      <button
                        className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-2 border-richblack-700 shadow-md rounded-lg text-xs"
                        onClick={handleAddSubject}
                      >
                        Add Subject
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
            {selectedSubject && (
              <div className="flex flex-col gap-2">
                <p className="capitalize text-richblack-200">
                  Choose a Chapter
                </p>
                <select
                  onChange={handleSelectChapter}
                  className="border-2 border-richblack-100 p-2 rounded-lg text-sm"
                >
                  <option value="">Select a chapter</option>
                  {chapter &&
                    chapter.map((key, index) => (
                      <option key={index} value={key.chapterName}>
                        {key.chapterName}
                      </option>
                    ))}
                  <option value="Other">Other</option>
                </select>
                {otherChapter && (
                  <>
                    <p className="capitalize text-richblack-200">
                      Enter Chapter
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                      
                        type="text"
                        value={chapterName}
                        onChange={(e) => setChapterName(e.target.value)}
                        placeholder="Enter chapter name"
                        className=" border-2 px-2 py-1  border-richblack-100 placeholder:text
                    -sm rounded-lg"
                      />
                      <button
                        className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-
                    2 border-richblack-700 shadow-md rounded-lg text-xs"
                        onClick={handleAddchapter}
                      >
                        Add Chapter
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
            {selectedChapter && (
              <div className="flex flex-col gap-2">
                <p className="capitalize text-richblack-200">Choose a Topic</p>
                <select
                  onChange={handleSelectTopic}
                  className="border-2 border-richblack-100 p-2 rounded-lg text-sm"
                >
                  <option value="">Select a topic</option>
                  {topic &&
                    topic.map((key, index) => (
                      <option key={index} value={key.topicName}>
                        {key.topicName}
                      </option>
                    ))}
                  <option value="other">Other</option>
                </select>
                {otherTopic && (
                  <>
                    <p className="capitalize text-richblack-200">Enter Topic</p>
                    <div className="flex items-center gap-2">
                      <input
                      
                        type="text"
                        value={topicName}
                        onChange={(e) => setTopicName(e.target.value)}
                        placeholder="Enter topic name"
                        className=" border-2 px-2 py-1  border-richblack-100 placeholder:text
                  -sm rounded-lg"
                      />
                      <button
                        className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-
                  2 border-richblack-700 shadow-md rounded-lg text-xs"
                        onClick={handleAddtopic}
                      >
                        Add Topic
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
            {selectedTopic && (
              <div className="flex flex-col  w-full items-center gap-4 pb-3">
                <button
                  onClick={() => setShowInputQuestion(!showInputQuestion)}
                  className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-2 md:text-md border-richblack-700 shadow-md rounded-lg text-xs"
                >
                  Add Questions As Text
                </button>
                <button
                  onClick={() => setShowFileInput(!showFileInput)}
                  className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-2 md:text-md border-richblack-700 shadow-md rounded-lg text-xs"
                >
                  Add Question A Picture
                </button>
                {showFileInput &&(
                  <div className="flex flex-col w-full items-center gap-4 pb-3">
                    <p className="capitalize text-richblack-200">Upload Question File</p>
                    <input
                    
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border-2 px-2 py-1  border-richblack-100 placeholder:text
                    -sm rounded-lg"
                    />
                     <select
                          className="p-3 rounded-xl mr-4"
                          value={correctAnswer}
                          placeholder="please select correct option"
                          onChange={(e) =>
                            handleCorrectAnswerChange(e.target.value)
                          }
                        >
                          <option value="">Select correct answer</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                    <button
                    onClick={handleCreateQuestion}
                    className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-
                    2 border-richblack-700 shadow-md rounded-lg text-xs"
                    >
                      UploadQuesiton
                    </button>
                    </div>
                )}
                {showInputQuestion && (
                  <div className="w-4/5 mx-4">
                    <div className="flex gap-2 items-center">
                      <div className="form w-full">
                        <input
                        
                          className=" border-2 px-2 py-1 w-full border-richblack-100 placeholder:text
-sm rounded-lg"
                          type="text"
                          value={questionText}
                          onChange={(e) => setQuestionText(e.target.value)}
                          placeholder="Enter question text"
                        />
                        <span className="input
                        -border"></span>
                      </div>
                      <button
                        className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-2 md:text-md border-richblack-700 shadow-md rounded-lg text-xs"
                        onClick={handleAddQuestionText}
                      >
                        Add question text
                      </button>
                    </div>
                    {showOptions && (
                      <div className="flex flex-col items-center mt-4 text-richblack-700 gap-3 rounded-lg">
                        {Array(4)
                          .fill(0)
                          .map((_, index) => (
                            <input
                            
                              className=" border-2 px-2 py-1  border-richblack-100 placeholder:text
                            -sm rounded-lg"
                              key={index}
                              type="text"
                              value={options[index] || ""}
                              onChange={(e) =>
                                handleOptionChange(index, e.target.value)
                              }
                              placeholder={`Option ${index + 1}`}
                            />
                          ))}
                        <select
                          className="p-3 rounded-xl mr-4"
                          value={correctAnswer}
                          placeholder="please select correct option"
                          onChange={(e) =>
                            handleCorrectAnswerChange(e.target.value)
                          }
                        >
                          <option value="">Select correct answer</option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={handleCreateQuestion}
                          className="p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-2 md:text-md border-richblack-700 shadow-md rounded-lg text-xs"
                        >
                          Create question
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <DataTable Questions={Questions} />
              </div>
            )}
          </>
        )}
        <p className="text-red-500 ">{error}</p>
      </div>
    </div>
  );
}

export default QuestionBank;
