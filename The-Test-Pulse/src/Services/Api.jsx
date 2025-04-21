

const BASE_URL = "http://localhost:4010/api/v1";


// const BASE_URL="https://thetestpulse-backend.onrender.com/api/v1";

export const QuestionBankEndPoints = {
    GET_QUESTION_BANK_BY_ID: BASE_URL + '/questionBank/getQuestionBankData',
    ADD_SUBJECT_INTO_QUESTIONBANK:BASE_URL+'/questionBank/addsubjectIntoQuestionBank',
    ADD_QUESTION_INTO_TOPIC:BASE_URL+'/questionBank/addQuestion',
    ADD_CAHPTER_INTO_SUBJECT:BASE_URL+'/questionBank/addChapterIntoSubject',
    ADD_TOPIC_INTO_CHAPTER:BASE_URL+'/questionBank/addTopicIntoChapter',
    CREATE_QUESTION_BANK:BASE_URL+'/questionBank/createQuestionBank',
    GET_QUESTION_ALL_BANK:BASE_URL+'/questionBank/getAllQuestionBankData',
    ADD_QUESTION_AS_PICTURE:BASE_URL+'/questionBank/addQuestioAsPicture',
}

export const endpoints={
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}