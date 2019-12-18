import React from "react";
import { Link } from "react-router-dom";
import TestInfo from "./TestInfo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faPalette } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  padding-top: 3rem;
  margin: 1rem;
  width: 22vw;
  .card {
    border-color: transparent;
    transition: all 1s linear;
    border-radius: 2rem;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img {
    height: 12.5rem;
    padding: 1rem 0.3rem 0.3rem 0.3rem;
  }
  .title {
    font-size: 1.3rem;
    line-height: normal;
    margin-bottom: 0.5rem;
  }
  .button {
    justify-content: flex-end;
    font-size: 1.3rem;
    background: #0f9d58;
    color: white;
    outline: none;
    border: none;
    padding: 0.2rem;
    border-radius: 0 0 0.2rem 0.2rem;
  }
  .badge {
    font-size: 0.85rem;
  }
  .tech-stack {
    text-align: center;
  }
  .h-title {
    font-size: 1.5rem;
    padding: 0.1rem;
    font-weight: 550;
  }
  .button-select {
    background: #0f9d58;
    border: none;
    outline: none;
    width: 21vw;
    font-size: 1.5rem;
    color: white;
    padding: 0.3rem;
    text-decoration: none;
    color: white;
    text-align: center;
    border-radius: 0 0 2rem 2rem;
  }
  link,
  a:hover {
    text-decoration: transparent !important;
  }
`;

// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestListItem = ({ assesmentName, assesmentType, definition }) => {
  return (
    <Wrapper>
      <div className="card col-auto">
        <img
          src="https://image.flaticon.com/icons/svg/1651/1651670.svg"
          alt=""
          className="card-img"
        />
        <div className="card-body d-flex-row  m-0 p-0">
          <div className="h-title m-2">{assesmentName}</div>
        </div>
        <div className="button-select">
          <Link to="#" className="button-select">
            View
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default TestListItem;
