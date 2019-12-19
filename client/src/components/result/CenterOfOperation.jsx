import React from 'react';
import CenterOfOperationBox from './CenterOfOperationBox';
import Charts from './Charts'
import Link from 'react-router-dom/Link'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const CenterOfOperation = ({ results }) => (
    <>
        <div className="centerOfOperation">
            <div className="centerOfOperation__data">
                <div className="centerOfOperation__chart">
                    <Charts />
                </div>
                <div className="centerOfOperation__list" >
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/1491/1491416.png"} colr="#FACC2E" /></div>
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/svg/1301/1301414.svg"} colr="#F25C5C" /></div>
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/1491/1491376.png"} colr="#0080FF" /></div>
                </div>
            </div>
            <div className="centerOfOperation__next">
                <h4>Explore Next</h4>
                <Link to="subjectInterest"><img src="https://image.flaticon.com/icons/png/512/1825/1825157.png" alt="" /></Link>
                <h6>Subject Interest</h6>
            </div>
        </div>
    </>
)

export default CenterOfOperation;