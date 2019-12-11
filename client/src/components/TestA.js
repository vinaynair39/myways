import React, { useState, useEffect, Suspense } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList';
import { connect } from 'react-redux';
import { addAnswers } from '../actions/test';
import Loader from 'react-loader-spinner'



const TestA = ({ test, isLoading, addAnswers }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentSubquestion, setCurrentSubquestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([])
    const totalLength = test.questions.length;
    const instruction = test.instruction;
    const assesmentType = test.assesmentType;

    useEffect(() => {
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            alert("Completed!")
            history.push('/');
        }
        else {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubquestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubquestion].options.map(option => option.option));
        }
        console.log(currentQuestion, currentSubquestion)

    }, [currentSubquestion])


    const nextQuestion = () => {
        console.log(currentQuestion, currentSubquestion)
        if (totalLength === currentQuestion) {
            alert("Completed!")
            history.push('/');
            return true;
        }
        if (totalLength > currentQuestion && (test.questions[currentQuestion].questionSet.length - 1) > (currentSubquestion)) {
            setCurrentSubquestion(currentSubquestion + 1)
            console.log(currentQuestion, currentSubquestion)
            return true;
        }
        if ((test.questions[currentQuestion].questionSet.length - 1) == currentSubquestion) {
            setCurrentSubquestion(0);
            setCurrentQuestion(currentQuestion + 1)
            console.log(currentQuestion, currentSubquestion)

            return true;
        }
        setCurrentQuestion(currentQuestion + 1);
        console.log(currentQuestion, currentSubquestion)
    }

    const previousQuestion = () => {
        console.log(currentQuestion, currentSubquestion)
        if (currentQuestion >= 0 && currentSubquestion > 0) {
            setCurrentSubquestion(currentSubquestion - 1)
            console.log(currentQuestion, currentSubquestion)
            return true;
        }
        if (currentQuestion > 0 && currentSubquestion == 0 ) {
            setCurrentQuestion(currentQuestion - 1);
            console.log(question)
            setCurrentSubquestion(test.questions[currentQuestion].questionSet.length - 1)
            console.log(currentQuestion, currentSubquestion)
            return true;
        }
        setParagraph(test.questions[currentQuestion].paragraph);
        // setCurrentQuestion(currentQuestion - 1);
        console.log(currentQuestion, currentSubquestion);
    }

    return (
        <>
            {<>
                <div className="test__item">
                    <div>
                        {!!paragraph && <h2 title={test.instructions} className='test__paragraph'>{paragraph}</h2>}
                    </div>
                    <div>
                        {!!question && <h2 className="test__sub-question">{question}</h2>}
                    </div>
                </div>
                <div><ButtonList nextQuestion={nextQuestion} previousQuestion={previousQuestion} options={options} currentQuestion={currentQuestion} currentSubquestion={currentSubquestion} /></div>
                <div className="test__options">
                    {/* <Options nextQuestion={nextQuestion}  /> */}
                </div>
            </>}
        </>
    )

}



export default TestA;
// export default TestA;