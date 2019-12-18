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
    margin: 0 3rem 3.5rem 3rem;
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
    margin: 2rem;
    font-size: 1.4rem;
    color: white;
    border-radius: 3rem;
    width: 100vw;
    
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
  .radios2 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
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

function ButtonList({value,pos,key}) {
  const [showButton, setShowButton] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const checkGroup = [{checked1}, {checked2}, {checked3}, {checked4}, {checked5}]
  console.log(checkGroup)

  const handleShowButton = () => {
    setShowButton(true);
  }

  const showHandleButton = (showButton) => {
      console.log('bith')
      return showButton
  }
  const getCurrentRadio = () => {
    if(pos === 0){
        return checked1;
    }
    else if(pos === 1){
      return checked2;
    }
    else if(pos === 2){
      return checked3;
    }
    else if(pos === 3){
      return checked4;
    }
    else if(pos === 4){
      return checked5;
    }
  }


//   const getCurrentRadioSet = () => {
//   }

console.log(checkGroup)
  console.log(getCurrentRadio())
  return (
    <Wrapper className="">
        <div className="radio button-select">
          <input type="radio" id={`radio${pos+1}`} name={`radio${pos+1}`} value={value} checked={checkGroup[pos]} onChange={(e) => {
            setSelectedOption(e.target.value);
            // getCurrentRadioSet();
            handleShowButton();
            console.log(selectedOption)
          }} />
          <label htmlFor={`radio${pos+1}`}>
            <div className="checker"></div>
            {value}
          </label>
        </div>
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setAnswers: 0//(answer, assesmentType, currentQuestion) => dispatch(addAnswers(answer, assesmentType, currentQuestion))
})

export default connect(undefined, mapDispatchToProps)(ButtonList);
