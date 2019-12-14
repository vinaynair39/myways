import React, { Component } from 'react';
import styled from "styled-components";
import pic from "../img/pic.png";
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 88vh;
  position: relative;
  .pic{
    position: absolute;
    bottom: -7.9rem;
    right: 3rem;
    height: 120%;

  }
  .title{
    font-size: 3.5rem;
  }
  .sub-title{
    font-size: 2.3rem;
  }
  .link{
    margin-top:1rem;
    font-size: 2rem;
    text-align:center;
    background-color: #FFC765;
    font-weight: 1000;
    text-decoration-line:none;
    border-radius: 5px;
    color: #2e3740;
    width: 15rem;
    &:hover{
      background-color: #2e3740;
      color:white;
      text-align:center;
    }
  }
`;

class Landing extends Component {
  render() {
    return (
      <Wrapper className="">
        <div className="d-flex flex-column justify-content-center align-items-center animated fadeInUp">
          <div className="title">Let us Help You</div>
          <div className="sub-title">Discover Your Strengths</div>
          <Link to="/dashboardTest" className="link">Know more!</Link>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <img src={pic} className="pic" alt="" />
        </div>
      </Wrapper>
    )
  }
}

export default Landing