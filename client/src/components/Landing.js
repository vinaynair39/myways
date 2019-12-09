import React, { Component } from 'react';
import styled from "styled-components";
import pic from "../img/pic.png";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90%;
  position: relative;
  .pic{
    position: absolute;
    bottom: 0;
    height: 100%;
  }
  .title{
    font-size: 3.5rem;
  }
  .sub-title{
    font-size: 2.3rem;
  }
`;

class Landing extends Component {
  render() {
    return (
      <Wrapper className="">
         <div className="d-flex flex-column justify-content-center align-items-center">
           <div className="title">Let us help you to</div>
           <div className="sub-title">Discover your abilities</div></div>
         <div className="d-flex justify-content-end align-items-center">
          <img src={pic} className="pic" alt=""/>
         </div>
      </Wrapper>
    )
  }
}

export default Landing