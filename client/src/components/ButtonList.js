import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 25vw;
  padding-right: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:90vh;
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
    margin: 2rem;
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
  .radios2 {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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
const questions = (
  <div className="question">
    A is shorter than B but much taller than E. C is the tallest and D is a
    little bit shorter than A. Who is the shortest?
  </div>
);
const twoButton = (
  <div>
    <div class="radios">
      <div class="radio button-select">
        <input type="radio" id="radio1" name="radio1" />
        <label for="radio1">
          <div class="checker"></div>
          Strong Argument
        </label>
      </div>

      <div class="radio button-select">
        <input type="radio" id="radio2" name="radio1" />
        <label for="radio2">
          <div class="checker"></div>
          Weak Argument
        </label>
      </div>
    </div>
  </div>
);

const fourButton = (
  <div>
    <div class="radios2">
      <div class="radio button-select">
        <input type="radio" id="radio3" name="radio2" />
        <label for="radio3">
          <div class="checker"></div>
          Option A
        </label>
      </div>

      <div class="radio button-select">
        <input type="radio" id="radio4" name="radio2" />
        <label for="radio4">
          <div class="checker"></div>
          Option B
        </label>
      </div>
      <div class="radio button-select">
        <input type="radio" id="radio5" name="radio2" />
        <label for="radio5">
          <div class="checker"></div>
          Option C
        </label>
      </div>
      <div class="radio button-select">
        <input type="radio" id="radio6" name="radio2" />
        <label for="radio6">
          <div class="checker"></div>
          Option D
        </label>
      </div>
    </div>
  </div>
);

export default function ButtonList() {
  return (
    <Wrapper className="">
      {questions}
      {twoButton}
      {fourButton}
    </Wrapper>
  );
}
