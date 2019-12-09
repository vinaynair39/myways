import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import Options from './Options'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const Test = ({ tests }) => {
    const [currentTest, setCurrentTest] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [question, setQuestion] = useState('');
    const [testName, setTestName] = useState('')
    const totalLength = tests.length;

    useEffect(() => {
        nextQuestion();
    }, [])

    const nextQuestion = () => {
        setQuestion('');
        if (totalLength === currentTest) {
            alert("Successfully Completed!");
            { history.push('/') }
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
                {!!question ? <img className="test__img" src={question} /> : <p>No questions yet</p>}
            </div>
            <div className="test__options">
                <Options nextQuestion={nextQuestion} assesmentType={tests[currentTest === 0 ? 0 : currentTest - 1].assesmentType} currentQuestion={currentQuestion} currentTest={currentTest} />
            </div>

        </>
    )

}

// export default connect(undefined, mapDispatchToProps)(Test);
export default Test;