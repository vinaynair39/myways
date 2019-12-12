import React, { useState, useEffect, Suspense } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import ButtonList from './ButtonList';
import { connect } from 'react-redux';
import { sendAnswers, questionState } from '../actions/test';
import Progress from 'react-progressbar';


const TestA = ({ test, isLoading, sendAnswers, answers, questionState }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentSubquestion, setCurrentSubquestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [timer, setTimer] = useState(0);
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [progress, setProgress] = useState(0)
    const [counter, setCounter] = useState(0);
    const [prevState, setPrevState] = useState(-1);
    const [currentState, setCurrentState] = useState(0);
    let subquestionsTotal = 0;
    const totalLength = test.questions.length;

    useEffect(() => {
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            alert("Completed!");
            sendAnswers(answers);
            history.push('/dashboardtest');
            stopTimer();
            resetTimer();
        }
        else {
            setParagraph(test.questions[currentQuestion].paragraph);
            console.log(prevState, currentState)
            setQuestion(test.questions[currentQuestion].questionSet[currentSubquestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubquestion].options.map(option => option.option));
            addProgress();
        }
    }, [currentSubquestion, currentQuestion])

    //Timer Implementation
    const startTimer =()=> {
        this.timer = setInterval(() => setTimer(timer + 1), 1000)
        console.log("start")
      }  
      const stopTimer=()=> {
        clearInterval(this.timer)
        console.log("stop")
      }  
      const resetTimer=()=> {
        setTimer(0);
        console.log("reset")
      }

    const nextQuestion = () => {
        setPrevState(currentState);
        setCurrentState(currentState + 1);
        if (totalLength === currentQuestion) {
            alert("Completed!")
            history.push('/');
            questionState({ currentQuestion, currentSubquestion });
            return true;
        }
        if (totalLength > currentQuestion && (test.questions[currentQuestion].questionSet.length - 1) > (currentSubquestion)) {
            setCurrentSubquestion(currentSubquestion + 1);
            setPrevState(currentState);
            setCurrentState(currentState + 1);
            return currentQuestion, currentSubquestion;
        }
        if ((test.questions[currentQuestion].questionSet.length - 1) == currentSubquestion) {
            setCurrentSubquestion(0);
            setCurrentQuestion(currentQuestion + 1);
            setPrevState(currentState);
            setCurrentState(currentState + 1);
            return currentQuestion, currentSubquestion;
        }
        setCurrentQuestion(currentQuestion + 1);
        setPrevState(currentState);
        setCurrentState(currentState + 1);
        return currentQuestion, currentSubquestion;
    }

    const previousQuestion = () => {
        if (currentQuestion >= 0 && currentSubquestion > 0) {
            setCurrentSubquestion(currentSubquestion - 1);
            setCurrentState(currentState - 1);
            return true;
        }
        if (currentQuestion > 0 && currentSubquestion == 0) {
            setCurrentSubquestion(test.questions[currentQuestion - 1].questionSet.length - 1)
            setCurrentQuestion(currentQuestion - 1);
            setCurrentState(currentState - 1);
            return true;
        }
    }



    const addProgress = () => {
        test.questions.forEach(question => {
            subquestionsTotal += question.questionSet.length;
        });
        setProgress((currentState / subquestionsTotal) * 100);
    }


    const modal = () => (
        <>
            <Progress completed={progress} color={'#FFC765'} />
            <div className="button_modal">
                <button type="button" className="button__modal-icon" data-toggle="modal" data-target="#exampleModalCenter">
                    <FontAwesomeIcon color={'#2e3740'} icon={faQuestion} className="form-icon" size='lg' />
                </button>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">{test.assesmentType}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {test.instructions}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            {<>
                <div className="test__item">
                    {modal()}
                    <div>{timer}</div>
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
    sendAnswers: (answers) => dispatch(sendAnswers(answers)),
    questionState: (current) => dispatch(questionState(current))
});

const mapStateToProps = (state) => ({
    answers: state.test.answers,
    previousState: state.test.previous,
    currentState: state.test.current
})

export default connect(mapStateToProps, mapDispatchToProps)(TestA);
// export default TestA;