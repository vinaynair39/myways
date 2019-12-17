import React from 'react';
import ResultItem from './ResultItem'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const ResultList = ({ results }) => (
    <>
        <div className="row d-flex justify-content-center" style={{ width: "80vw" }}>
            <h1>Your strengths</h1>
            {results.map(result => {
                if (result.score >= 75) {
                    return <ResultItem result={result} />
                }
            })}
        </div>
        <div className="row d-flex justify-content-center" style={{ width: "80vw" }}>
            <h1>Intermediate ablitiy</h1>
            {results.map(result => {
                if (result.score > 50 && result.score < 75) {
                    return <ResultItem result={result} />
                }
            })}
        </div>
        <div className="row d-flex justify-content-center" style={{ width: "80vw" }}>
            <h1>Your weakness</h1>
            {results.map(result => {
                if (result.score < 50) {
                    return <ResultItem result={result} />
                }
            })}
        </div>
    </>
)

export default ResultList;