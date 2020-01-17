import { ADD_QUESTIONS,CLEAR_RESPONSE, GET_DIFFICULTY, ADD_TESTS,SET_CURRENT_ITEM, ADD_ANSWERS, CURRENT_TEST, LOADING_UI,TEST_STATE, UNLOADING_UI, CURRENT_ANSWERS,QUESTION_STATE } from './constants';

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
export const questionState = (current) => ({
    type: QUESTION_STATE,
    current
});

export const testState = (assesmentType) => ({
    type: TEST_STATE,
    assesmentType
});

export const getDifficulty = (difficulty) => ({
    type: GET_DIFFICULTY,
    difficulty
});

export const setCurrentItem = (item) => ({
    type: SET_CURRENT_ITEM,
    item
});

export const clearResponse = () => ({
    type: CLEAR_RESPONSE
})




export const addAnswers = (answerNumber, answer, currentQuestion, currentSubquestion) => {
    return (
        {
            type: ADD_ANSWERS,
            answerNumber,
            answer,
            currentQuestion,
            currentSubquestion,
        })
};


export const startAddTests = () => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        return axios.get('http://edoflip.myways.in/api/test').then(res => {
            dispatch(addTests(res.data));
            dispatch({ type: UNLOADING_UI });
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getCurrentTest = (testName = "deductiveReasoning") => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        return axios.get(`http://edoflip.myways.in/api/test/${testName.toLowerCase()}`).then(res => {
            dispatch(currentTest(res.data));
            dispatch({ type: UNLOADING_UI });
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
}



export const sendAnswers = (testName,answers) => {
    return (dispatch, getState) => {
        console.log('send send send');
        dispatch({ type: LOADING_UI });
        console.log(answers)
        return axios.post(`http://edoflip.myways.in/api/test/${testName.toLowerCase()}`, {response:answers}).then(res => {
            console.log(res.data)
            dispatch(currentTest(res.data));
            dispatch({ type: UNLOADING_UI });
            return res.data;
        }).catch(err => {
            console.log(err)
        })
    }
}

export const sendAnswers2 = (testName,answers) => {
    return (dispatch, getState) => {
        console.log('send send send');
        dispatch({ type: LOADING_UI });
        console.log(answers)
        return axios.post(`http://edoflip.myways.in/api/test/${testName.toLowerCase()}2`, {response:answers}).then(res => {
            console.log(res.data)
            dispatch(currentTest(res.data));
            dispatch({ type: UNLOADING_UI });
            return res.data;
        }).catch(err => {
            console.log(err)
        })
    }
}




