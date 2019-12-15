import { ADD_QUESTIONS, GET_DIFFICULTY, ADD_TESTS, ADD_ANSWERS, CURRENT_TEST, LOADING_UI,TEST_STATE, UNLOADING_UI, CURRENT_ANSWERS,QUESTION_STATE } from './constants';

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

export const startAddAnswers = () => {
    return (dispatch, getState) => {
        axios.get('http://edoflip.myways.in/api/questions').then(res => {
        })
    }
}
export const startAddTests = () => {
    return (dispatch, getState) => {
        return axios.get('http://edoflip.myways.in/api/test/tests').then(res => {
            dispatch(addTests(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getCurrentTest = (testName = "deductiveReasoning") => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        return axios.get(`http://edoflip.myways.in/api/test/${testName}`).then(res => {
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
        return axios.get(`http://edoflip.myways.in/api/answers/${testName}`).then(res => {
            console.log(res.data)
            dispatch(currentAnswers(res.data));
        }).catch(err => {
            console.log(err)
        })
    }
}


export const sendAnswers = (answers) => {
    return (dispatch, getState) => {
        console.log('send send send');
        dispatch({ type: LOADING_UI });
        console.log(answers)
        return axios.post(`http://edoflip.myways.in/api/result/answers`, answers).then(res => {
            alert("answer submitted");
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
}



