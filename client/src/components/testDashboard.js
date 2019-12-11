import React from 'react';
import { Link } from 'react-router-dom';
import TestInfo from './TestInfo';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faPalette } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 3rem;
.button-select {
    background: #0f9d58;
    border: none;
    outline: none;
    font-size: 2rem;
    color: white;
    width: fit-content;
  }
  .nav-linker{
    text-decoration: none;
    color: black;
  }
  .card-category {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 90vw;
    border-radius: 1rem;
  }
  .icon-container {
    padding: 0.7rem;
    font-size: 2.2rem;
    color: white;
    min-height: 25vh;
    display: flex;
    justify-content: center;
align-items: center;
    border-radius: 0rem 1rem 1rem 0rem;
    background: #0f9d58;
  }
  .category {
    font-size: 1.6rem;
    padding-left: 0.7rem;
  }
  .title{
      font-size: 2.2rem;
      font-weight: bold;
  }
  .sub-title{
    font-size: 1.3rem;
  }
`;

// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestListItem = ({assesmentName, assesmentType, definition}) => {
    return (
        <Wrapper >
            <div className="card-category row m-0 p-0 d-flex flex-row align-items-center">
            <div className="category col-10">
                <div className="category row-6 title">{assesmentName}</div>
                <div className="category row-6 sub-title">{definition}</div></div>
            <div className="icon-container  col-2 text-center">
        <Link to={`../testInfo/${assesmentType}`} className="button-select">View</Link>
            </div>
          </div>
        </Wrapper >
    );
}


export default TestListItem;