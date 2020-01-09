import React, { Component } from 'react';
import styled from "styled-components";
import pic from "../img/pic.png";
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 88vh;
  position: relative;
  .pic{
    justify-self:center;
    align-self:center;
    & img{
      margin-top:2rem; 
      height: 80vh;

    }
  }
  .title{
    font-size: 5vh;
    @media screen and (min-height: 800px){
      font-size: 10vh;
    }
  }
  .sub-title{
    font-size: 2.3rem;
    @media screen and (min-height: 800px){
      font-size: 5vh;
      margin-bottom: 1rem;
    }
  }
  .link{
    margin-top:1rem;
    font-size: 2rem;
    text-align:center;
    background-color: #FEC665;
    font-weight: 1000;
    text-decoration-line:none;
    border-radius: 7px;
    color: #2e3740;
    width: 15rem;
    &:hover{
      background-color: #2E3740;
      color:white;
      text-align:center;
    }
    @media screen and (min-height: 800px){
      padding: 0.7rem 0.5rem;
      border-radius: 10px;
    }
  }
`;

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      {/* <Wrapper className="">
        <div className="d-flex flex-column justify-content-center align-items-center animated fadeInUp">
          <div className="title">Let us Help You</div>
          <div className="sub-title">Discover Your Strengths</div>
          <Link to="/dashboard" className="link">Know more!</Link>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <img src={pic} alt=''/>
        </div> */}
          <Wrapper className="">
          <div className="pic animated fadeIn">
            <img src={process.env.PUBLIC_URL + '/landing.svg'} alt="" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center animated fadeIn">
            <div className="title">Let us Help You</div>
            <div className="sub-title">Discover Your Strengths</div>
            <Link to="/dashboard" className="link">Know more!</Link>
          </div>
        
      </Wrapper></React.Fragment>
    )
  }
}

export default Landing