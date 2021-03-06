import React, { useState, useEffect } from 'react';
import { history } from '../../routers/AppRouter'
import { Link } from 'react-router-dom';
import { getCurrentTest, clearResponse } from '../../actions/test';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonList from '../ButtonList/ButtonList';
import { sendAnswers, sendAnswers2, questionState, getDifficulty } from '../../actions/test';
import { connect } from 'react-redux';
import Progress from 'react-progressbar';
import Timer from 'react.timer';
import { testState } from '../../actions/test';
import { setTestCompleted as testComplete, saveUserToLocalStorage } from '../../actions/auth';
import Loader from "../Loader/Loader";







const TestB = ({ test, loading, currentTest, clearResponse, sendAnswers, sendAnswers2, answers, user, postUser, userId, getDifficulty, testState, setTestComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [progress, setProgress] = useState(0);
    const [difficulty, setDifficulty] = useState(0);
    const totalLength = test.questions.length;
    const [testCompleted, setTestCompleted] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [test2, setTest2] = useState(false)

    let subquestionsTotal = 0;


    useEffect(() => {
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            setProgress(100);
            if (test.assesmentType === 'personalityTest' && test2 === false) {
                console.log('inside 2')
                setCurrentQuestion(0);
                setQuestion('');
                setProgress(0);
                setTestCompleted(false);
                setQuestionNumber(0);
                sendAnswers(test.assesmentType, answers);
                setTest2(true);
            }
            if (testCompleted) {
                test.assesmentType === 'personalityTest' ? sendAnswers2(test.assesmentType, answers):sendAnswers(test.assesmentType, answers);
                sendAnswers(test.assesmentType, answers);
                setTestComplete(test.assesmentType);
                saveUserToLocalStorage(user);
                history.push('/dashboard');
                clearResponse();
            }
        }
        else {
            setQuestion(test.questions[currentQuestion].question);
            setQuestionNumber(test.questions[currentQuestion].questionNumber)
            !!test.questions[currentQuestion].options && setOptions(test.questions[currentQuestion].options.map(option => option.option));
            calculateProgress();
        }
    }, [currentQuestion, testCompleted, test.questions])


    const stars = () => {

        const addDifficulty = () => {
            setProgress(100);
            setTestCompleted(true);
            console.log(difficulty);
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
        setQuestion('');

        if (totalLength > currentQuestion) {
            setCurrentQuestion(currentQuestion + 1);
            return true;
        }
        if ((test.questions[currentQuestion] - 1) == currentQuestion) {
            setQuestion(test.questions[currentQuestion].question);
            setCurrentQuestion(0)
            return true;
        }
    }

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            return true;
        }
    }
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }


    const calculateProgress = () => {
        setProgress((currentQuestion / totalLength) * 100);
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


    const data = () => {
        if (totalLength === currentQuestion) {
            console.log(test.assesmentType !== 'personalityTest', test.assesmentType === 'personalityTest' && test2)
            if (test.assesmentType !== 'personalityTest')
                return stars();
            if (test.assesmentType === 'personalityTest' && test2)
                return stars();
        }
        else {
            return <>
                <div>
                    <div>{!!question &&
                        (validURL(question) ? <div className="test__img"><img src={question} /></div>
                            : <div><h2 className="test__title">{question}</h2></div>)}</div>
                </div>
            </>
        }
    }

    // return (
    //     <>
    //        {modal()}
    //        {loading && <Loader />}
    //         <div className="test__item2">
    //             {data()}
    //         </div>
    //     </>
    // )

    return (
        <>
            {loading && <Loader />}
            <div className="test__item2">
                {modal()}
                <div>
                    {data()}
                </div>
            </div>
            <div>{totalLength !== currentQuestion && <ButtonList previousQuestion={previousQuestion} test={test} questionNumber={questionNumber} nextQuestion={nextQuestion} options={options} currentQuestion={currentQuestion} currentTest={test.assesmentType} />}</div>
            <div className="test__options">
                {/* <Options nextQuestion={nextQuestion}  /> */}
            </div>
        </>
    )



}


const mapDispatchToProps = (dispatch) => ({
    sendAnswers: (testName, answers) => dispatch(sendAnswers(testName, answers)),
    sendAnswers2: (testName, answers) => dispatch(sendAnswers2(testName, answers)),
    currentTest: (name) => dispatch(getCurrentTest(name)),
    testState: (name) => dispatch(testState(name)),
    getDifficulty: (difficulty) => dispatch(getDifficulty(difficulty)),
    testState: (assesmentType) => dispatch(testState(assesmentType)),
    setTestComplete: (test) => dispatch(testComplete(test)),
    clearResponse: () => dispatch(clearResponse())
})

const mapStateToProps = (state) => ({
    answers: state.test.response,
    loading: state.auth.loading,
    user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(TestB);
