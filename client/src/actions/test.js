import {ADD_QUESTIONS, ADD_TESTS} from './constants'

import axios from 'axios';


export const addTests = (tests) => ({
    type: ADD_TESTS,
    tests
});

export const addQuetions = (questions) => ({
    type: ADD_QUESTIONS,
    questions
});


export const startAddQuestions = () => {
    return (dispatch, getState) => {
        axios.get('/test/questions').then(res => {
            console.log(res.data)
        })
    }
}

export const startAddTests = () => {
    return (dispatch, getState) => {
        axios.get('/test/questions').then(res => {
            console.log(res.data);
            dispatch(addTests(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}