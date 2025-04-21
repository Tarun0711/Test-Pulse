import { apiConnector } from "../ApiConnector";
import { QuestionBankEndPoints } from "../Api";
import { toast} from 'react-hot-toast';
const {
  ADD_CAHPTER_INTO_SUBJECT,
  ADD_SUBJECT_INTO_QUESTIONBANK,
  ADD_QUESTION_INTO_TOPIC,
  GET_QUESTION_BANK_BY_ID,
  ADD_TOPIC_INTO_CHAPTER,
  CREATE_QUESTION_BANK,
  GET_QUESTION_ALL_BANK,
  ADD_QUESTION_AS_PICTURE
} = QuestionBankEndPoints;

export const createQuestionBank = async (Category) => {
  try {
    toast.loading('Creating question bank...');
    const response = await apiConnector("POST", CREATE_QUESTION_BANK, Category);
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error creating question bank');
    throw error;
  }
};

export const getQuestionBankById = async (questionBankId) => {
  try {
    toast.loading('Loading question bank...');
    const response = await apiConnector(
      "GET",
      `${GET_QUESTION_BANK_BY_ID}/${questionBankId}`
    );
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error loading question bank');
    throw error;
  }
};

export const getAllQuestionBanks = async () => {
  try {
    toast.loading('Loading all question banks...');
    const response = await apiConnector("GET", GET_QUESTION_ALL_BANK);
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error loading all question banks');
    throw error;
  }
};

export const addSubjectIntoQuestionBank = async (SubjectName, questionBankId) => {
  try {
    toast.loading('Adding subject to question bank...');
    const response = await apiConnector(
      "POST",
      ADD_SUBJECT_INTO_QUESTIONBANK,
      SubjectName,
      questionBankId
    );
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error adding subject to question bank');
    throw error;
  }
};

export const addChapterIntoSubject = async (chapterName, subjectId) => {
  try {
    toast.loading('Adding chapter to subject...');
    const response = await apiConnector(
      "POST",
      ADD_CAHPTER_INTO_SUBJECT,
      chapterName,
      subjectId
    );
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error adding chapter to subject');
    throw error;
  }
};

export const addTopicIntoChapter = async (topicName, chapterId) => {
  try {
    toast.loading('Adding topic to chapter...');
    const response = await apiConnector(
      "POST",
      ADD_TOPIC_INTO_CHAPTER,
      topicName,
      chapterId
    );
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error adding topic to chapter');
    throw error;
  }
};

export const addQuestionDetails = async (questionData) => {
  try {
    toast.loading('Adding question details...');
    const response = await apiConnector(
      "POST",
      ADD_QUESTION_INTO_TOPIC,
      questionData
    );
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error adding question details');
    throw error;
  }
};

export const addQuestionDetailsAsPicture = async (questionData) => {
  try {
    toast.loading('Adding question details...');
    const response = await apiConnector(
      "POST",
      ADD_QUESTION_AS_PICTURE,
      questionData
    );
    toast.dismiss();
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error adding question details');
    throw error;
  }
};