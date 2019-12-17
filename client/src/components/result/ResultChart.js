import React from 'react';
import ResultChartBox from './ResultChartBox'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const ResultChart = ({ results }) => (
    <>
        <div className="row d-flex justify-content-center" style={{ width: "80vw" }}>
        </div>
        <div className="row d-flex justify-content-center" style={{ width: "80vw" }}>
        <ResultChartBox/>
        </div>
    </>
)

export default ResultChart;