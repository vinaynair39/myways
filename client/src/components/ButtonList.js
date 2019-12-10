import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';

const Wrapper = styled.div`
  .question {
    width: 100%;
    font-size: 1.5rem;
    text-align: justify;
  }
  .button-select {
    background: #0f9d58;
    border: none;
    outline: none;
    padding: 0.7rem;
    margin: 0 3rem 3rem 3rem;
    font-size: 1.3rem;
    color: white;
    border-radius: 3rem;
    width: fit-content;
  }
  .button-select2 {
    background: #0f9d58;
    border: none;
    outline: none;
    padding: 1rem 1.35rem 1rem 1.35rem;
    margin: 0 2rem 3rem 2rem;
    font-size: 1.4rem;
    color: white;
    border-radius: 3rem;
    width: 100vw;
  }
  .button-select3 {
    background: #0f9d58;
    border: none;
    outline: none;
    margin: 0 3rem 3.5rem 3rem;
    margin: 0 2rem 3.5rem 2rem;
    font-size: 1.4rem;
    color: white;
    border-radius: 3rem;
    width: fit-content;
  }
  .radios {
    width: 100%;
    display: flex;
    position:fixed;
    left: 0;
    bottom: 0;
    justify-content: center;
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
  .radio {
    input {
      position: absolute;
      pointer-events: none;
      visibility: hidden;
    }
    input:focus + label {
      background: transparent;
      .checker {
        border-color: white;
      }
    }
    input:checked + label {
      .checker {
        box-shadow: inset 0 0 0 20px white;
      }
    }
    label {
      display: flex;
      align-items: center;
      height: 28px;
      border-radius: 16px;
      margin: 10px;
      padding: 0 8px 0 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background: transparent;
        .checker {
          box-shadow: inset 0 0 0 2px white;
        }
      }
    }
    .checker {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      margin-right: 8px;
      box-shadow: inset 0 0 0 1px #d1d4db;
      transition: box-shadow 0.3s ease;
    }
  }
`;



function ButtonList(props) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleShowButton = () => {
    setShowButton(true);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // getAnswer(selectedOption);
    console.log(selectedOption)
    props.nextQuestion();
    setSelectedOption(0);
    setShowButton(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setChecked5(false);
    };

  const twoButton = ([a, b]) => (
    <div>
      <div className="radios">
        <div className="radio button-select">
          <input type="radio" id="radio1" name="radio1" value={a} checked={checked1} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked1(true);
            handleShowButton();
          }} />
          <label htmlFor="radio1">
            <div className="checker"></div>
            {a}
          </label>
        </div>

        <div className="radio button-select">
        <input type="radio" id="radio2" name="radio1" value={b} checked={checked2} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked2(true);
            handleShowButton();
          }} />
          <label htmlFor="radio2">
            <div className="checker"></div>
            {b}
          </label>
        </div>
      </div>
    </div>
  );


  const fourButton = ([a,b,c,d,e]) => (
    <div>
      <div className="radios">
        <div className="radio button-select">
        <input type="radio" id="radio1" name="radio1" value={a} checked={checked1} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked1(true);
            handleShowButton();
          }} />
          <label htmlFor="radio1">
            <div className="checker"></div>
            {a}
          </label>
        </div>

        <div className="radio button-select">
        <input type="radio" id="radio2" name="radio1" value={b} checked={checked2} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked2(true);
            handleShowButton();
          }} />
          <label htmlFor="radio2">
            <div className="checker"></div>
            {b}
          </label>
        </div>
        <div className="radio button-select">
        <input type="radio" id="radio3" name="radio1" value={c} checked={checked3} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked3(true);
            handleShowButton();
          }} />
          <label htmlFor="radio3">
            <div className="checker"></div>
            {c}
          </label>
        </div>
        <div className="radio button-select">
        <input type="radio" id="radio4" name="radio1" value={d} checked={checked4} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked4(true);
            handleShowButton();
          }} />
          <label htmlFor="radio4">
            <div className="checker"></div>
            {d}
          </label>
        </div>
      </div>
    </div>
  )

  const fiveButton = ([a,b,c,d,e]) => (
    <div>
      <div className="radios">
        <div className="radio button-select3">
        <input type="radio" id="radio1" name="radio1" value={a} checked={checked1} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked1(true);
            handleShowButton();
          }} />
          <label htmlFor="radio1">
            <div className="checker"></div>
            {a}
          </label>
        </div>

        <div className="radio button-select3">
        <input type="radio" id="radio2" name="radio1" value={b} checked={checked2} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked2(true);
            handleShowButton();
          }} />
          <label htmlFor="radio2">
            <div className="checker"></div>
            {b}
          </label>
        </div>
        <div className="radio button-select3">
        <input type="radio" id="radio3" name="radio1" value={c} checked={checked3} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked3(true);
            handleShowButton();
          }} />
          <label htmlFor="radio3">
            <div className="checker"></div>
            {c}
          </label>
        </div>
        <div className="radio button-select3">
        <input type="radio" id="radio4" name="radio1" value={d} checked={checked4} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked4(true);
            handleShowButton();
          }} />
          <label htmlFor="radio4">
            <div className="checker"></div>
            {d}
          </label>
        </div>
        <div className="radio button-select3">
        <input type="radio" id="radio5" name="radio1" value={e} checked={checked5} onChange={(e) => {
            setSelectedOption(e.target.value);
            setChecked5(true);
            handleShowButton();
          }} />
          <label htmlFor="radio5">
            <div className="checker"></div>
            {e}
          </label>
        </div>
      </div>
    </div>
  );
  const getButton = () => {
    if (props.options.length === 2)
      return twoButton([...props.options])
    if (props.options.length === 4)
      return fourButton([...props.options])
    if (props.options.length === 5)
      return fiveButton([...props.options])
  }
  return (
    <Wrapper className="">
      {getButton()}
      <div className="test-buttons">{showButton ? <button className="button button-right" onClick={onSubmit}><FontAwesomeIcon icon={faArrowRight} size='2x' /></button>
        : <button className="button button-disable"><FontAwesomeIcon icon={faArrowRight} size='2x' /></button>
      }</div>
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setAnswers: 0//(answer, assesmentType, currentQuestion) => dispatch(addAnswers(answer, assesmentType, currentQuestion))
})

export default connect(undefined, mapDispatchToProps)(ButtonList);