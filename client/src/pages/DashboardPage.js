import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const DashboardPage = (props) => {
    return (
        <Wrapper className="">
            <div className="title">Psychometric Evaluation</div>
            <div className='button-start'>
            <div>
                <Link to="/test/informationOrdering" className="effect1" href="#">
                    Start Test!
                <span className="bg"></span>
                </Link>
            </div>
            </div>
        </Wrapper>
    )
}

export default DashboardPage;