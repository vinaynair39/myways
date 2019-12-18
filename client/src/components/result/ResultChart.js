import React from 'react';
import ResultChartBox from './ResultChartBox'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const ResultChart = ({ results }) => (
    <>
        <div className="row d-flex justify-content-center" style={{ width: "100vw" }}>
        </div>
        <div className="row d-flex justify-content-center" style={{ width: "100vw" }}>
            <div className="col-4"><ResultChartBox img={"https://image.flaticon.com/icons/png/512/1491/1491416.png"} colr="#FACC2E"/></div>
        
            <div className="col-4"><ResultChartBox img={"https://image.flaticon.com/icons/svg/1301/1301414.svg"} colr="#F25C5C"/></div>
        <div className="col-4"><ResultChartBox img={"https://image.flaticon.com/icons/png/512/1491/1491376.png"} colr="#0080FF"/></div>
        </div>
    </>
)

export default ResultChart;