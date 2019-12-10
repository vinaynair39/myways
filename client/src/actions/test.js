import {ADD_QUESTIONS, ADD_TESTS, ADD_ANSWERS , CURRENT_TEST, LOADING_UI, UNLOADING_UI} from './constants';

import axios from 'axios';


export const addTests = (tests) => ({
    type: ADD_TESTS,
    tests
});
export const currentTest = (questions) => ({
    type: CURRENT_TEST,
    questions
});

export const addQuetions = (questions) => ({
    type: ADD_QUESTIONS,
    questions
});

export const addAnswers = (answer, currentQuestion, currentTest) => ({
    type: ADD_ANSWERS,
    answer,
    currentQuestion,
    currentTest
});


export const startAddAnswers = () => {
    return (dispatch, getState) => {
        axios.get('/api/test/questions').then(res => {
            console.log(res.data)
        })
    }
}
export const startAddTests = () => {
    return (dispatch, getState) => {
        return axios.get('/api/test/questions').then(res => {
            console.log(res.data)
            dispatch(addTests(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getCurrentTest= (testName="informationOrdering") => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        // return axios.get(`/api/test/${testName}`).then(res => {
        return axios.get(`http://localhost:5000/api/test/${testName}`).then(res => {
            dispatch(currentTest(res.data));
            return res.data;
        }).catch(err => {
            console.log(err)
        })
    }
}