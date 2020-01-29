import {
    LOGIN,
    LOGOUT,
    LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
    UNSET_ERRORS,
    SET_USER,
    SET_TEST_COMPLETED
} from '../actions/constants'

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {},
    error: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                isAuthenticated: false
            };
        case LOADING_UI:
            return {
                ...state,
                loading: true,
            };
        case UNLOADING_UI:
            return {
                ...state,
                loading: false
            };
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case UNSET_ERRORS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case SET_TEST_COMPLETED:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.test]: true
                }

            }
        default:
            return state;
    }
};