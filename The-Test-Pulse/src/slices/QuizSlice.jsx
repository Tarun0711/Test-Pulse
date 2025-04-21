import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    step: 1,
    questions: [],
    quiz: null,
    conductQuiz:null,
    editQuiz: false,
    currentQuestion: 0,
    score: 0,
    isFinished: false,
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    setEditQuiz: (state, action) => {
      state.editQuiz = action.payload;
    },
    setConductQuiz: (state, action) => {
      state.conductQuiz = action.payload;
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    nextQuestion: (state) => {
      state.currentQuestion++;
    },
    answerQuestion: (state, action) => {
      if (action.payload.isCorrect) {
        state.score++;
      }
    },
    setScore:(state,action)=>{
      state.score=action.payload
      },
    finishQuiz: (state) => {
      state.isFinished = true;
    },
    resetQuizState: (state) => {
      state.step = 1
      state.quiz = null
      state.editQuiz = false
      state.conductQuiz=null
      state.score=null

    },
  },
});

export const {
  setStep,
  setQuiz,
  setEditQuiz,
  addQuestion,
  nextQuestion,
  answerQuestion,
  finishQuiz,
  resetQuizState,
  setConductQuiz,
  conductQuiz,
  setScore,
  
} = quizSlice.actions;

export default quizSlice.reducer;