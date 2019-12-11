import React, { useState, useEffect, Suspense } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList';
import { connect } from 'react-redux';
import { sendAnswers } from '../actions/test';
import Loader from 'react-loader-spinner'



const TestA = ({ test, isLoading, sendAnswers, answers }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentSubquestion, setCurrentSubquestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([])
    const totalLength = test.questions.length;

    useEffect(() => {
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            alert("Completed!");
            sendAnswers({answers});

            history.push('/');
        }
        else {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubquestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubquestion].options.map(option => option.option));
        }
        console.log(currentQuestion, currentSubquestion)

    }, [currentSubquestion, currentQuestion])


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

    const previousQuestion =  () => {
        if (currentQuestion >= 0 && currentSubquestion > 0) {
            setCurrentSubquestion(currentSubquestion - 1)
            return true;
        }
        if (currentQuestion > 0 && currentSubquestion == 0 ) {
            setCurrentSubquestion(test.questions[currentQuestion-1].questionSet.length - 1)
            setCurrentQuestion(currentQuestion - 1);
            return true;
        }

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
                </div>
            </>}
        </>
    )

}

const mapDispatchToProps = (dispatch) => ({
    sendAnswers: (answers) => dispatch(sendAnswers(answers))
});

const mapStateToProps = (state) => ({
    answers: state.test.answers
})

export default connect(mapStateToProps, mapDispatchToProps)(TestA);
// export default TestA;