import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import { getCurrentTest } from '../actions/test';
import ButtonList from './ButtonList';
import {connect} from 'react-redux'


const TestB = ({ test, currentTest }) => {
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
    console.log(test)

    useEffect(() => {
        console.log(test)
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
        console.log(totalLength - 1, 'vs', currentQuestion)
        if ((totalLength) === currentQuestion) {
            currentTest('deductiveReasoning').then(()=> {
                history.push('/test/deductiveReasoning');
            })
            saveToLocalStorage(0);
            return true;
        }

        if (totalLength > currentQuestion) {
            setParagraph(test.questions.paragraph);
            setQuestion(test.questions[currentQuestion].question);
            setOptions(test.questions[currentQuestion].options.map(option => option.option))
            setCurrentQuestion(currentQuestion + 1);
            return true;
        }
        if ((test.questions[currentQuestion] - 1) == currentSubQuestion) {
            setQuestion(test.questions[currentQuestion].question);
            setOptions(test.questions[currentQuestion].options.map(option => option.option))
            setCurrentQuestion(0)
            return true;
        }
    }
    return (
        <>
                <div className="test__item">
                    <div>
                        {/* {!!paragraph ? <h3 title={test.instructions} className='test__paragraph'>{paragraph}</h3> : <p>No questions yet</p>} */}
                    </div>
                    <div>
                        <div>{!!question ? <h2 className="test__title">{question}</h2> : <p>No questions yet</p>}</div>
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

const mapStateToProps = (state) => ({
    isLoading: state.auth.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(TestB);
