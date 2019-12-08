import {
    ADD_TESTS,
    ADD_ANSWERS
} from '../actions/constants'

const initState = {
    questions: [],
    answers: [],
}
let count = 1;
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TESTS:
            return {
                ...state,
                questions: action.tests
            };
            // case ADD_ANSWERS:
            //     return {
            //         ...state,
            //         answers:[...state.answers,
            //             {
            //                 "assesmentType": action.assesmentType,
            //                 "Question": [{
            //                     ""
            //                 }]
            //             }
            //         ]
            //     }
        default:
            return state;
    }
};