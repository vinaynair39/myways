import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  padding-top: 1.5rem;
  margin: 0.7rem;
  width: 22vw;
  .card {
    border-color: transparent;
    margin-right: 1rem;
    transition: all 0.1s ease;
    cursor: pointer;
    border-radius: 2rem;
    &:hover{
      transform: scale(1.05);
    }
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
    color: #2e3740;
    text-align: center;
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
    font-size: 1.3rem;
    color: #2e3740;
    padding: 0.1rem;
    font-weight: 550;
    text-align: center;
  }
  .button-select {
    background: #ffd369;
    border: none;
    outline: none;
    font-size: 1.3rem;
    color: #2e3740;
    font-weight: 700; 
    padding: 0.3rem;
    text-decoration: none;
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

const TestListItem = ({ assesmentName, assesmentType, definition, imageUrl, testState }) => {
  return (
    <Wrapper>
      {console.log(assesmentType)}
      <Link to={`../testInfo/${assesmentType}`} >
        <div className="card col-auto p-0">
          <img
            src={imageUrl}
            alt=""
            className="card-img"
          />
          <div className="card-body d-flex-row m-0 p-0">
            <div className="h-title m-2">{assesmentName}</div>
          </div>
          {testState[assesmentType] ? <div className="button-select" disable={true}>
            Completed <FontAwesomeIcon icon={faCheck} color={'#904E55'} />
          </div> : <div className="button-select">
            View
          </div>}

        </div>
      </Link>
    </Wrapper>
  );
};


const mapStateToProps = (state) => ({
  testState: state.auth.user ? state.auth.user.testStatus : ''
});

export default connect(mapStateToProps, undefined)(TestListItem);
