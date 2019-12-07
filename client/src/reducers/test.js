import {
    ADD_TESTS
} from '../actions/constants'


export default (state = [], action) => {
    switch (action.type) {
        case ADD_TESTS:
            return action.tests;
        default:
            return state;
    }
};