import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import { getCurrentTest } from '../actions/test';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import ButtonList from './ButtonList';
import { connect } from 'react-redux'
import Progress from 'react-progressbar';


const TestB = ({ test, currentTest }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [progress, setProgress] = useState(0)
    const totalLength = test.questions.length;
    let subquestionsTotal = 0;

    console.log(test)

    useEffect(() => {
        if (totalLength === currentQuestion) {
            setParagraph('');
            setQuestion('');
            setOptions('');
            alert("Completed!")
            history.push('/dashboardtest');
        }
        else {
            setQuestion(test.questions[currentQuestion].question);
            !!test.questions[currentQuestion].options && setOptions(test.questions[currentQuestion].options.map(option => option.option));
            calculateProgress();
        }
    }, [currentQuestion])

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
            console.log("hello")
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
    )

    return (
        <>
            <Progress completed={progress} color={'#FFC765'} />
            <div className="test__item">
                {modal()}
                <div>
                    {/* {!!paragraph ? <h3 title={test.instructions} className='test__paragraph'>{paragraph}</h3> : <p>No questions yet</p>} */}
                </div>
                <div>
                    <div>{!!question &&
                        (validURL(question) ? <div className="test__img"><img  src={question} /></div>
                            : <h2 className="test__title">{question}</h2>)}</div>
                </div>
            </div>

            <div><ButtonList previousQuestion={previousQuestion} nextQuestion={nextQuestion} options={options} currentQuestion={currentQuestion} currentTest={test.assesmentType} /></div>
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
