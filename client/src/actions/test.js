import {ADD_QUESTIONS, ADD_TESTS, ADD_ANSWERS , CURRENT_TEST} from './constants';

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

export const addAnswers = (answer, assesmentType, currentQuestion, currentTest) => ({
    type: ADD_ANSWERS,
    answer,
    assesmentType,
    currentQuestion
});


export const startAddAnswers = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:5000/api/test/questions').then(res => {
            console.log(res.data)
        })
    }
}
export const startAddTests = () => {
    return (dispatch, getState) => {
        return axios.get('http://localhost:5000/api/test/questions').then(res => {
            console.log(res.data)
            dispatch(addTests(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getCurrentTest= (testName) => {
    return (dispatch, getState) => {
        return axios.get(`http://localhost:5000/api/test/${testName}`).then(res => {
            dispatch(currentTest(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}