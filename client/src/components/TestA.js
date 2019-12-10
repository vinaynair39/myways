import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList';
import { connect } from 'react-redux';
import { getCurrentTest } from '../actions/test';


const TestA = ({ test }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOptions, setCurrentOptions] = useState(0);
    const [currentSubQuestion, setCurrentSubQuestion] = useState(0);
    const [currentParagraph, setcurrentParagraph] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([])
    const totalLength = test.questions.length;
    const instruction = test.instruction;
    const assesmentType = test.assesmentType;

    useEffect(() => {
        nextQuestion();
    }, [])

    const saveToLocalStorage = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('question', serializedState)
        } catch (e) {
            console.log(e)
        }
    }

    const nextQuestion = () => {
        setQuestion('');
        if (totalLength === currentQuestion) {
            if (assesmentType === 'deductiveReasoning')
                history.push('/event/problemSensitivity');
            if (assesmentType === 'problemSensitivity')
                history.push('/event/languageTest');
            saveToLocalStorage(0);
            return true;
        }

        if (totalLength > currentQuestion && (test.questions[currentQuestion].questionSet.length - 1) > (currentSubQuestion)) {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubQuestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubQuestion].options.map(option => option.option))
            setCurrentSubQuestion(currentSubQuestion + 1);
            return true;
        }
        if ((test.questions[currentQuestion].questionSet.length - 1) == currentSubQuestion) {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubQuestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubQuestion].options.map(option => option.option))
            setCurrentSubQuestion(0);
            setCurrentQuestion(currentQuestion + 1)
            return true;
        }
        setParagraph(test.questions[currentQuestion].paragraph);
        setCurrentQuestion(currentQuestion + 1);

    }


    return (
        <>
            <div className="test__item">
                <div>
                    {!!paragraph ? <h3 title={test.instructions} className='test__paragraph'>{paragraph}</h3> : <p>No questions yet</p>}
                </div>
                <div>
                    {!!question ? <h4 className="test__sub-question">{question}</h4> : <p>No questions yet</p>}
                </div>
            </div>
            <div><ButtonList nextQuestion={nextQuestion} options={options} /></div>
            <div className="test__options">
                {/* <Options nextQuestion={nextQuestion}  /> */}
            </div>

        </>
    )

}

const mapDispatchToProps = (dispatch) => ({
    currentTest: (name) => dispatch(getCurrentTest(name))
})

export default connect(undefined, mapDispatchToProps)(TestA);
// export default TestA;