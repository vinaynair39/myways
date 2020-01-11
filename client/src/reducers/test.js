import {
    ADD_TESTS,
    ADD_ANSWERS,
    CURRENT_TEST,
    CURRENT_ANSWERS,
    QUESTION_STATE,TEST_STATE,
    GET_DIFFICULTY,
    SET_CURRENT_ITEM
} from '../actions/constants'

const initState = {
    tests: [],
    questions: [],
    response: {},
    currentItem: {}
}
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TESTS:
            return {
                ...state,
                tests: action.tests
            };
        case ADD_ANSWERS:
            const currentQuestion = action.currentQuestion;
            if(!!action.currentSubquestion){
                return{
                    ...state,
                    response:{
                        ...state.response,
                        [currentQuestion]:{
                            ...state.response[currentQuestion],
                            [action.currentSubquestion]: action.answerNumber
                        }
                    }
                }   
            }
            else{
                return {
                    ...state,
                    response: {
                        ...state.response,
                        [currentQuestion]:action.answerNumber
                    }
                }
            }
        case CURRENT_ANSWERS:
            return {
                ...state,
                answers: action.answers
            }
        case GET_DIFFICULTY:
            state.answers.userDifficulty = action.difficulty;
            return state;
        case CURRENT_TEST:
            return {
                ...state,
                questions: action.questions
            }
        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.item
            }
        default:
            return state;
    }
};