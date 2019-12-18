import React from 'react';
import ResultItem from './ResultItem'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import styled from 'styled-components';

const Wrapper = styled.div`

    .title{
    font-weight: bold;
    width: 100%; 
   border-bottom: 3px solid #f8d539; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
}
.title span{
    background:#F3F7F7; 
    padding:0 10px; 
}
`;

const ResultList = ({ results }) => (
    <Wrapper className=" d-flex justify-content-center ">
        <div className="">
        <div className="row d-flex justify-content-center px-4 pt-2 ">
            <h1 className="col-12 mt-3 title" ><span>Your Strengths</span></h1>
            {results.map(result => {
                if (result.score >= 75) {
                    return <div  className="col-4"> <ResultItem result={result}/></div>
                       
                }
            })}
        </div>
        <div className="row d-flex justify-content-center px-4 pt-2">
        <h1 className="col-12 mt-3 title" ><span>Intermediate Ability</span></h1>
            {results.map(result => {
                if (result.score > 50 && result.score < 75) {
                    return <div  className="col-4"> <ResultItem result={result}/></div>
                }
            })}
        </div>
        <div className="row d-flex justify-content-center px-4 pt-2" >
        <h1 className="col-12 mt-3 title" ><span>Your Weaknesses</span></h1>
            {results.map(result => {
                if (result.score < 50) {
                    return <div  className="col-4"> <ResultItem result={result}/></div>
                }
            })}
        </div>
        </div>
        
    </Wrapper>
)

export default ResultList;