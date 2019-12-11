import {
    ADD_TESTS,
    ADD_ANSWERS,
    CURRENT_TEST,
    CURRENT_ANSWERS
} from '../actions/constants'

const initState = {
    tests: [],
    questions: [],
    answers: [],
}
let count = 1;
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TESTS:
            return {
                ...state,
                tests: action.tests
            };
        case ADD_ANSWERS:
                // state.answers.questions[action.currentQuestion].questionSet[action.currentSubquestion].answer.option = action.answer;
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
        default:
            return state;
    }
};