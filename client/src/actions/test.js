import axios from 'axios';
import { ADD_QUESTIONS,CLEAR_RESPONSE, GET_DIFFICULTY, ADD_TESTS,SET_CURRENT_ITEM, ADD_ANSWERS, CURRENT_TEST, LOADING_UI,TEST_STATE, UNLOADING_UI, CURRENT_ANSWERS,QUESTION_STATE } from './constants';

// to load all the tests into redux
export const addTests = (tests) => ({
    type: ADD_TESTS,
    tests
});

// this stores all the questions of the current test
export const currentTest = (questions) => ({
    type: CURRENT_TEST,
    questions
});

// I dont think If I use this anymore but I'm gonna let it stay here.
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

// to add the answers
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

// api call to get all the tests from the backend. used in the dashboard
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

// api call to get the questions for the selected test
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


// this sends the answers to the backend
export const sendAnswers = (testName,answers) => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        return axios.post(`http://edoflip.myways.in/api/test/${testName.toLowerCase()}`, {response:answers}).then(res => {
            dispatch(currentTest(res.data));  //loads up new questions if anny
            dispatch({ type: UNLOADING_UI });
            return res.data;
        }).catch(err => {
            console.log(err)
        })
    }
}

// this is for personality test as in it we have to send the ans twice so this is for sending the ans the second time
export const sendAnswers2 = (testName,answers) => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING_UI });
        return axios.post(`http://edoflip.myways.in/api/test/${testName.toLowerCase()}2`, {response:answers}).then(res => {
            dispatch(currentTest(res.data)); 
            dispatch({ type: UNLOADING_UI });
            return res.data;
        }).catch(err => {
            console.log(err)
        })
    }
}




