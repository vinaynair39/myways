import React, { useEffect } from 'react';
import TestList from '../components/TestList'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    .title{
        font-size: 3rem;
        color: #0f9d58;
    }
`;

const DashboardPage = ({tests}) => {
    return (
        <Wrapper className="">
            <div className="title">Psychometric Evaluation</div>
            <div className='button-start'>
            </div>
            <TestList tests={tests}/>
        </Wrapper>
    )
}
const mapStateToProps = (state) => ({
    tests: state.test.tests
})
export default connect(mapStateToProps, undefined)(DashboardPage);