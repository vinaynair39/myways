import { ADD_QUESTIONS, ADD_TESTS, ADD_ANSWERS, CURRENT_TEST, LOADING_UI, UNLOADING_UI, CURRENT_ANSWERS } from './constants';

import axios from 'axios';


export const addTests = (tests) => ({
    type: ADD_TESTS,
    tests
});
export const currentTest = (questions) => ({
    type: CURRENT_TEST,
    questions
});
export const currentAnswers = (answers) => ({
    type: CURRENT_ANSWERS,
    answers
});

export const addQuetions = (questions) => ({
    type: ADD_QUESTIONS,
    questions
});

export const addAnswers = (data) => {
    return ({
        type: ADD_ANSWERS,
        ...data
    })
};


export const startAddAnswers = () => {
    return (dispatch, getState) => {
        axios.get('/api/test/questions').then(res => {
        })
    }
}
export const startAddTests = () => {
    return (dispatch, getState) => {
        return axios.get('/api/test/tests').then(res => {
            dispatch(addTests(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getCurrentTest = (testName = "deductiveReasoning") => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        // return axios.get(`/api/test/${testName}`).then(res => {
        return axios.get(`http://localhost:5000/api/test/${testName}`).then(res => {
            dispatch(currentTest(res.data));
            dispatch(getCurrentAnswers(testName)).then(() => {
                dispatch({ type: UNLOADING_UI });
            });
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getCurrentAnswers = (testName = "deductiveReasoning") => {
    return (dispatch, getState) => {
        console.log('bitchh')
        dispatch({ type: LOADING_UI });
        // return axios.get(`/api/test/${testName}`).then(res => {
        return axios.get(`/api/answers/deductiveReasoning`).then(res => {
            console.log(res.data)
            dispatch(currentAnswers(res.data));
        }).catch(err => {
            console.log(err)
        })
    }
}