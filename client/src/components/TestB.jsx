import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import { getCurrentTest } from '../actions/test';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonList from './ButtonList';
import { sendAnswers, questionState, getDifficulty } from '../actions/test';
import { connect } from 'react-redux';
import Progress from 'react-progressbar';
import Timer from 'react.timer';
import { testState } from '../actions/test';
import { postUser, saveUserToLocalStorage } from '../actions/auth';






const TestB = ({ test, currentTest, sendAnswers, answers, user, postUser, userId, getDifficulty, testState}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [progress, setProgress] = useState(0);
    const [difficulty, setDifficulty] = useState(0);
    const totalLength = test.questions.length;
    const [testCompleted, setTestCompleted] = useState(false);
    let subquestionsTotal = 0;

    console.log(test)

    useEffect(() => {
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            setProgress(100);
            if (testCompleted) {
                testState(test.assesmentType);
                getDifficulty(difficulty);
                alert("Completed!");
                sendAnswers({ id: userId, answers });
                postUser(user);
                saveUserToLocalStorage(user);
                history.push('/dashboard');
            }
        }
        else {
            setQuestion(test.questions[currentQuestion].question);
            !!test.questions[currentQuestion].options && setOptions(test.questions[currentQuestion].options.map(option => option.option));
            calculateProgress();
        }
    }, [currentQuestion, testCompleted])


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
            {console.log('rjlgwfgerklngerlgn')}
            <div className="test__item">
                {modal()}
                <div>
                    {totalLength === currentQuestion ? stars() : <div>
                        <div>{!!question &&
                            (validURL(question) ? <div className="test__img"><img src={question} /></div>
                                : <h2 className="test__title">{question}</h2>)}</div>
                    </div>}
                </div>
            </div>
            <div>{totalLength !== currentQuestion && <ButtonList previousQuestion={previousQuestion} nextQuestion={nextQuestion} options={options} currentQuestion={currentQuestion} currentTest={test.assesmentType} />}</div>
            <div className="test__options">
                {/* <Options nextQuestion={nextQuestion}  /> */}
            </div>
        </>
    )

}


const mapDispatchToProps = (dispatch) => ({
    sendAnswers: (answers) => dispatch(sendAnswers(answers)),
    currentTest: (name) => dispatch(getCurrentTest(name)),
    testState: (name) => dispatch(testState(name)),
    getDifficulty: (difficulty) => dispatch(getDifficulty(difficulty)),
    testState: (assesmentType) => dispatch(testState(assesmentType)),
    postUser: (user) => dispatch(postUser(user))

})

const mapStateToProps = (state) => ({
    answers: state.test.answers,
    isLoading: state.auth.loading,
    user: state.auth.user

})

export default connect(mapStateToProps, mapDispatchToProps)(TestB);
