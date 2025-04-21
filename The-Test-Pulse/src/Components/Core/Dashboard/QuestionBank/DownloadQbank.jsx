import React, { useEffect, useState } from "react";
import { toast } from "react";
import { getAllQuestionBanks } from "../../../../Services/Operations/QuestionBanKApi";
import DownloadQbTable from "./DownloadQbTable";
function DownloadQbank() {
  const [questionBanks, setQuestionBanks] = useState([]);
  const [subject, setSubject] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [topic, setTopic] = useState([]);
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestionBanks = async () => {
      try {
        const response = await getAllQuestionBanks();
        setQuestionBanks(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchQuestionBanks();
  }, []);
  const resetStates = () => {
    setSubject([]);
    setChapter([]);
    setTopic([]);
    setQuestions([]);
  };
  const handleSelectQuestionBank = (e) => {
    const id = e.target.value;
    console.log(id);
    const selectedQuestionBank = questionBanks.find(
      (questionBank) => questionBank._id === id
    );
    resetStates();
    setSubject(selectedQuestionBank?.subjects || []);
  };

  const handleSelectSubject = (e) => {
    const value = e.target.value;
    const selectedSubject = subject.find(
      (subject) => subject.subjectName === value
    );
    setChapter(selectedSubject?.Chapter || []);
  };
  const handleSelectChapter = (e) => {
    const value = e.target.value;

    const selectedChapter = chapter.find(
      (chapter) => chapter.chapterName === value
    );

    setTopic(selectedChapter?.topics || []);
  };
  const handleSelectTopic = (e) => {
    const value = e.target.value;

    const selectedTopic = topic.find((topic) => topic.topicName === value);
    setQuestions(selectedTopic?.questions || []);
  };

  return (
    <div>
      <h1 className="md:text-2xl text-richblack-500 font-bold">
        Download Questions
      </h1>
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="flex gap-2 items-center ">
          <p className="capitalize text-richblack-300">
            Select Question Bank :{" "}
          </p>
          <select
            onChange={handleSelectQuestionBank}
            className="border-2 form-style border-richblack-100 p-2 rounded-lg text-sm"
          >
            <option>Select Question Bank</option>
            {questionBanks.map((questionBank) => (
              <option key={questionBank._id} value={questionBank._id}>
                {questionBank.Category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center ">
          <p className="capitalize text-richblack-300">Choose a Subject :</p>
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
        </div>
        <div className="flex gap-2 items-center ">
          <p className="capitalize text-richblack-300">Choose a Chapter :</p>

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
        </div>
        <div className="flex items-center gap-2">
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
        </div>
      </div>
      <DownloadQbTable question={Questions} />
    </div>
  );
}

export default DownloadQbank;
