import React, { useState, useEffect, Suspense } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList';
import { connect } from 'react-redux';
import { getCurrentTest } from '../actions/test';


const TestA = ({ test, isLoading, currentTest }) => {
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
            if (assesmentType === 'deductiveReasoning') {
                currentTest('deductiveReasoning').then(() => {
                    history.push('/test/problemSensitivity');
                })
            }
            if (assesmentType === 'problemSensitivity') {
                currentTest('deductiveReasoning').then(() => {
                    history.push('/test/languageTest');
                })
            }
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
            {console.log(test)
            }        {<>
                <div className="test__item">
                    <div>
                        {!!paragraph ? <h2 title={test.instructions} className='test__paragraph'>{paragraph}</h2> : <p>No questions yet</p>}
                    </div>
                    <div>
                        {!!question ? <h2 className="test__sub-question">{question}</h2> : <p>No questions yet</p>}
                    </div>
                </div>
                <div><ButtonList nextQuestion={nextQuestion} options={options} /></div>
                <div className="test__options">
                    {/* <Options nextQuestion={nextQuestion}  /> */}
                </div>
            </>}
        </>
    )

}

const mapDispatchToProps = (dispatch) => ({
    currentTest: (name) => dispatch(getCurrentTest(name))
})

const mapStateToProps = (state) => ({
    isLoading: state.auth.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(TestA);
// export default TestA;