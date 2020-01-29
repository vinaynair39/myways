import axios from 'axios';
import {
    LOGIN, LOGOUT, LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
    SET_USER,
    SET_TEST_COMPLETED
} from './constants.js'
import { startAddTests } from './test';

// changes the state isAuthenticated from false to true
export const login = () => ({
    type: LOGIN,
});

// changes the state isAuthenticated from true to false
export const logout = () => ({
    type: LOGOUT
});


// The error messages that we get back from backend is stored inside redux
export const setError = (error) => ({
    type: SET_ERRORS,
    error
})

// To store user informations like if a certain test is completed by the user or not
// dispatched while login or register
export const setUser = (user) => ({
    type: SET_USER,
    user
});

// dispatched after user gives a test
// this changes the user state ( for e.g deductiveReasoning is changed from false to true)
export const setTestCompleted = (test) => ({
    type: SET_TEST_COMPLETED,
    test
})

// post req to register a new user
export const startSignUp = (newUser) => {
    return (dispatch) => {
        dispatch({ type: LOADING_UI }); // changes the state loading from false to true (for loader)
        axios.post('http://edoflip.myways.in/api/register', { ...newUser }).then((res) => {
            console.log(res.data)
            setAuthorizationHeader(res.data.token); // the jwt token received is then added as a request header
            dispatch(setUser(res.data.data));       // stores the user info in redux
            saveUserToLocalStorage(res.data.data);  // stores the user info in the local storage 
            dispatch(startAddTests()).then(() => {  // loades up all the tests onto redux
                dispatch(login());
                dispatch({ type: UNLOADING_UI });  // changes the state loading from true to false (for loader)
            })
        }).catch(err => {
            dispatch({
                type: 'SET_ERRORS',
                error: err.response ? (err.response.data.general || err.response.data.email || err.response.data.password || err.response.data.error || err.response.data.handle) : ''
            })
        });
    }
}


// post req to login a user
export const startLogin = (credentials) => {

    return (dispatch) => {
        dispatch({ type: LOADING_UI });
        return axios.post('http://edoflip.myways.in/api/login', credentials).then(async res => {
            console.log(res.data);
            setAuthorizationHeader(res.data.token);
            dispatch(setUser(res.data.data));
            saveUserToLocalStorage(res.data.data);
            await dispatch(startAddTests())
            dispatch({ type: UNLOADING_UI });
            dispatch(login());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                error: err.response ? err.response.data.message : ''
            })
        });
    }
};

// logs out a user
export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('token'); // removes the jwt token from local storage
        delete axios.defaults.headers.common['x-access-token'];  //removes the token from the req header
        dispatch(logout()); // changes the state isAuthenticated from true to false
    };
};



// stores the user data to local storage
export const saveUserToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('user', serializedState)
    } catch (e) {
        console.log(e)
    }
}




// appends the jwt token to the req header and also saves the jwt token to local storage
export const setAuthorizationHeader = (token) => {
    const FBIdToken = `${token}`;
    localStorage.setItem('token', FBIdToken);
    axios.defaults.headers.common['x-access-token'] = FBIdToken;
};
