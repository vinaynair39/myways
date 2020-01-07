import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonList from './ButtonList';
import { connect } from 'react-redux';
import { sendAnswers, questionState, getDifficulty } from '../actions/test';
import Progress from 'react-progressbar';
import Timer from 'react.timer';
import { testState } from '../actions/test'
import { postUser, saveUserToLocalStorage } from '../actions/auth';

const TestA = ({ test, isLoading, sendAnswers, answers, questionState, user, userId, getDifficulty,testState, postUser}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentSubquestion, setCurrentSubquestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [progress, setProgress] = useState(0)
    const [prevState, setPrevState] = useState(-1);
    const [currentState, setCurrentState] = useState(0);
    const [testCompleted, setTestCompleted] = useState(false);
    const [difficulty, setDifficulty] = useState(0);
    const [questionNumber, setQuestionNumber] = useState('1');
    const [subquestionNumber, setSubquestionNumber] = useState('1');
    let subquestionsTotal = 0;
    const totalLength = test.questions.length;
    const [sublength, setSublength] = useState(!!test.questions[currentQuestion] && test.questions[currentQuestion].questionSet.length);

    useEffect(() => {
        setSublength(!!test.questions[currentQuestion] && test.questions[currentQuestion].questionSet.length);
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            setProgress(100);
            if (testCompleted) {
                testState(test.assesmentType);  
                getDifficulty(difficulty)
                alert("Completed!");
                sendAnswers({ id: userId, answers });
                saveUserToLocalStorage(user);
                postUser(user);
                history.push('/dashboard');
            }
        }
        else {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubquestion].question);
            setQuestionNumber(test.questions[currentQuestion].questionNumber)
            setSubquestionNumber(test.questions[currentQuestion].questionSet[currentSubquestion].questionNumber);
            if (test.questions[currentQuestion].questionSet[currentSubquestion].options) {
                setOptions(test.questions[currentQuestion].questionSet[currentSubquestion].options.map(option => option.option));
            }
            addProgress();
        }
    }, [currentSubquestion, currentQuestion, testCompleted, questionNumber,subquestionNumber])

    const stars = () => {

        const addDifficulty = () => {
            setProgress(100);
            setTestCompleted(true);
        }
        return (
            <div className="test-feedback">
                <h2 className="test__title">How difficulty did you find this test? specifiy using this</h2>
                <div className="stars">
                    <input type="radio" id="star5" name="stars" value="5" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star5"></label>
                    <input type="radio" id="star4" name="stars" value="4" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star4"></label>
                    <input type="radio" id="star3" name="stars" value="3" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star3"></label>
                    <input type="radio" id="star2" name="stars" value="2" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star2"></label>
                    <input type="radio" id="star1" name="stars" value="1" onChange={e => setDifficulty(e.target.value)} /><label htmlFor="star1"></label>
                    <button className="button-form" onClick={addDifficulty}>Submit</button>
                </div>
            </div>
        )
    }


    const nextQuestion = () => {
        setPrevState(currentState);

        if (totalLength > currentQuestion && (test.questions[currentQuestion].questionSet.length - 1) > (currentSubquestion)) {
            setCurrentSubquestion(currentSubquestion + 1);
            setPrevState(currentState);
            setCurrentState(currentState + 1);
            return true;
        }
        if ((test.questions[currentQuestion].questionSet.length - 1) == currentSubquestion) {
            setCurrentSubquestion(0);
            setCurrentQuestion(currentQuestion + 1);
            setPrevState(currentState);
            setCurrentState(currentState + 1);
            return true;
        }
        setCurrentQuestion(currentQuestion + 1);
        setPrevState(currentState);
        setCurrentState(currentState + 1);
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
            <Link className='goto-dashboard' to='/dashboard'><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <Progress completed={progress} color={'#FFC765'} />
            <div title="elapsed time" className="test-timer"><Timer /></div>
            <div className="button_modal mt-1">
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
                    {totalLength === currentQuestion ? stars() :
                        <>
                            <div>
                                {!!paragraph && <h2 title={test.instructions} className='test__paragraph'>{paragraph}</h2>}
                            </div>
                            <div>
                                {!!question && <h2 className="test__sub-question">{question}</h2>}
                            </div></>
                    }
                </div>
                <div>{totalLength !== currentQuestion && <ButtonList nextQuestion={nextQuestion} previousQuestion={previousQuestion} options={options} questionNumber={questionNumber} subquestionNumber={subquestionNumber} sublength={sublength}currentQuestion={currentQuestion+1} totalLength={totalLength} currentSubquestion={currentSubquestion+1} />}</div>
                <div className="test__options">
                </div>
            </>}
        </>
    )

}
const mapDispatchToProps = (dispatch) => ({
    sendAnswers: (answers) => dispatch(sendAnswers(answers)),
    questionState: (current) => dispatch(questionState(current)),
    testState: (name) => dispatch(testState(name)),
    getDifficulty: (difficulty) => dispatch(getDifficulty(difficulty)),
    testState: (assesmentType) => dispatch(testState(assesmentType)),
    postUser: (user) => dispatch(postUser(user))
});

const mapStateToProps = (state) => ({
    answers: state.test.answers,
    previousState: state.test.previous,
    currentState: state.test.current,
    user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(TestA);
// export default TestA;