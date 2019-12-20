import React from 'react';
import ResultItem from './ResultItem'
import { useLocation } from 'react-router-dom'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import styled from 'styled-components';

const Wrapper = styled.div`
height: 100vh;
.title{
    width: 100%; 
    border-bottom: 3px solid #f8d539; 
    line-height: 0.1em;
    margin: 10px 0 20px;
    color:#696969;
}
.title span{
    background:#FFFFFF; 
    padding:0 10px; 
}
`;

const ResultList = ({ results, type = "" }) => {
    const location = useLocation();
    return (
        <Wrapper className=" d-flex justify-content-center ">
            <div className="">
                <div className="cognitive__title">
                    <img src={location.pathname === '/CognitiveIntelligence' ? "https://image.flaticon.com/icons/png/512/789/premium/789274.png" : "https://image.flaticon.com/icons/png/512/1535/1535019.png"} alt="" />
                    <h1>{location.pathname === '/CognitiveIntelligence' ? "Cognitive Intelligence" : "Career Values"}</h1>
                </div>
                <div className="row d-flex justify-content-center px-4 pt-2 ">
                    <h1 className="col-12 mt-3  title " ><span>{type === 'cognitive' ? 'Your strengths' : 'Most Important Values'}</span></h1>
                    {results.map(result => {
                        if (result.score >= 75) {
                            return <div className="col-4"> <ResultItem result={result} /></div>

                        }
                    })}
                </div>
                <div className="row d-flex justify-content-center px-4 pt-2">
                    <h1 className="col-12 mt-3 title " ><span>{type === 'cognitive' ? 'Intermediate Ability' : 'Intermediate Values'}</span></h1>
                    {results.map(result => {
                        if (result.score > 50 && result.score < 75) {
                            return <div className="col-4"> <ResultItem result={result} /></div>
                        }
                    })}
                </div>
                <div className="row d-flex justify-content-center px-4 pt-2" >
                    <h1 className="col-12 mt-3  title" ><span>{type === 'cognitive' ? 'Need to Imporve' : 'Need to improve'}</span></h1>
                    {results.map(result => {
                        if (result.score < 50) {
                            return <div className="col-4"> <ResultItem result={result} /></div>
                        }
                    })}
                </div>
            </div>
        </Wrapper>
    );
}


export default ResultList;