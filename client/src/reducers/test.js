import {
    ADD_TESTS,
    ADD_ANSWERS,
    CURRENT_TEST,
    CURRENT_ANSWERS,
    QUESTION_STATE
} from '../actions/constants'

const initState = {
    tests: [],
    questions: [],
    answers: [],
    current: {
        currentQuestion:0,
        currentSubquestion: 0
    },
    previous: {
        currentQuestion:0,
        currentSubquestion: 0
    },
}
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TESTS:
            return {
                ...state,
                tests: action.tests
            };
        case ADD_ANSWERS:
            if(!!state.answers.questions[action.currentQuestion].questionSet){
                state.answers.questions[action.currentQuestion].questionSet[action.currentSubquestion].answer.option = action.answer;
                state.answers.questions[action.currentQuestion].questionSet[action.currentSubquestion].answer.optionNumber = action.answerNumber;
            }
            else{
                state.answers.questions[action.currentQuestion].answer.option = action.answer;
                state.answers.questions[action.currentQuestion].answer.optionNumber = action.answerNumber;
            }
            return state;
        case CURRENT_ANSWERS:
            return {
                ...state,
                answers: action.answers
            }
        case CURRENT_TEST:
            return {
                ...state,
                questions: action.questions
            }
        case QUESTION_STATE:
            return {
                ...state,
                previous: state.current,
                current: action.current
            }
        default:
            return state;
    }
};