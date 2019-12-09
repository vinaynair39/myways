
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addAnswers } from '../actions/test';
const Options = (props) => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const handleShowButton = () => {
        setShowButton(true);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // getAnswer(selectedOption);
        props.nextQuestion();
        console.log(selectedOption)
        setSelectedOption(null);
    };

    // const getAnswer = (answer) => {
    //     console.log(answer, props.assesmentType, props.currentQuestion, props.currentTest)
    //     props.setAnswers(answer, props.assesmentType, props.currentQuestion, props.currentTest)
    //     console.log(answer)
    // }
    return (
        <form className="options__radios">
            <div className="options__radio">
                <input type="radio" id="radio1" name="radio" checked={showButton} value={'a'} onChange={(e) => {
                    setSelectedOption(e.target.value);
                    handleShowButton();
                }} />
                <label htmlFor="radio1">
                    <div className="options__checker"></div>
                    a
                </label>
            </div>

            <div className="options__radio">
                <input type="radio" id="radio2" name="radio" checked={showButton} value={'b'} onChange={(e) => {
                    setSelectedOption(e.target.value)
                    handleShowButton();
                }} />
                <label htmlFor="radio2">
                    <div className="options__checker"></div>
                    b
                    </label>
            </div>

            <div className="options__radio">
                <input type="radio" id="radio3" name="radio" value={'c'} onChange={(e) => {
                    setSelectedOption(e.target.value);
                    handleShowButton();
                }} />
                <label htmlFor="radio3">
                    <div className="options__checker"></div>
                    c
                    </label>
            </div>

            <div className="options__radio">
                <input type="radio" id="radio4" name="radio" value={'d'} onChange={(e) => {
                    setSelectedOption(e.target.value);
                    handleShowButton();
                }} />
                <label htmlFor="radio4">
                    <div className="options__checker"></div>
                    d
                        </label>
            </div>
            {showButton ? <button type="submit" className="button button-submit" onClick={onSubmit}>Submit</button> : <button disabled={true} className="button button-submit" type="submit" onClick={onSubmit}>Submit</button>}
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setAnswers: (answer, assesmentType, currentQuestion) => dispatch(addAnswers(answer, assesmentType, currentQuestion))
})

export default connect(undefined, mapDispatchToProps)(Options);