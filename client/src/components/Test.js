import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import Options from './Options'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const Test = ({ tests }) => {
    const {currentTest: ct, currentQuestion: cq} = JSON.parse(localStorage.getItem('question'));
    const [currentTest, setCurrentTest] = useState(ct || 0);
    const [currentQuestion, setCurrentQuestion] = useState(cq || 0);
    const [question, setQuestion] = useState('');
    const [testName, setTestName] = useState('')
    const totalLength = tests.length;

    useEffect(() => {
        nextQuestion();
    }, [])
    
const saveToLocalStorage = (state) => {
    try{
      const serializedState = JSON.stringify(state);
      localStorage.setItem('question',serializedState)
    } catch(e){
      console.log(e)
    }
  }

    const nextQuestion = () => {
        setQuestion('');
        saveToLocalStorage({currentTest, currentQuestion})
        if (totalLength === currentTest) {
            alert("Successfully Completed!");
            { history.push('/') }
            saveToLocalStorage(0);
            return true;
        }

        if (totalLength > currentTest && (tests[currentTest].questions.length - 1) > (currentQuestion)) {
            setQuestion(tests[currentTest].questions[currentQuestion].question);
            setTestName(tests[currentTest].assesmentType)
            setCurrentQuestion(currentQuestion + 1)
            return true;
        }
        if ((tests[currentTest].questions.length - 1) == currentQuestion) {
            setQuestion(tests[currentTest].questions[currentQuestion].question);
            setCurrentQuestion(0);
            setCurrentTest(currentTest + 1)
            return true;
        }

        setTestName(tests[currentTest].assesmentType);
        setCurrentTest(currentTest + 1);
    }


    return (
        <>
            <div className="test__item">
                <h1 className='test__title'>{testName}</h1>
                <div className="test__img">
                    <div>
                        {!!question ? <img src={question} /> : <p>No questions yet</p>}
                    </div>
                </div>
            </div>
            <div className="test__options">
                <Options nextQuestion={nextQuestion} assesmentType={tests[currentTest === 0 ? 0 : currentTest-1].assesmentType} currentQuestion={currentQuestion} currentTest={currentTest} />
            </div>

        </>
    )

}

// export default connect(undefined, mapDispatchToProps)(Test);
export default Test;