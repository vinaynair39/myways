import React, {useEffect} from 'react';
import CenterOfOperationBox from './CenterOfOperationBox';
import Charts from './Charts'
import Link from 'react-router-dom/Link'
import TraitBox from '../personalityTraits/TraitBox'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const CenterOfOperation = ({ results }) => {

    return(
        <>
        <div className="centerOfOperation  animated fadeIn">
            <div className="centerOfOperation__data">
                <div className="centerOfOperation__chart">
                    <div className="traits__title">
                        <img src="https://image.flaticon.com/icons/svg/2472/2472104.svg" alt="" />
                        <h1>Center Of Operation</h1>
                    </div>
                    <Charts />
                </div>
                <div className="centerOfOperation__list" >
                    <div ><CenterOfOperationBox name={'thinking'} img={"https://image.flaticon.com/icons/png/512/1491/1491416.png"} colr="#FACC2E" /><h6>Thinking</h6></div>
                    <div ><CenterOfOperationBox name={'feeling'} img={"https://image.flaticon.com/icons/svg/1301/1301414.svg"} colr="#F25C5C" /><h6>Feeling</h6></div>
                    <div ><CenterOfOperationBox name={'intuition'} img={"https://image.flaticon.com/icons/png/512/1491/1491376.png"} colr="#0080FF" /><h6>Intuition</h6></div>
                </div>
            </div>
            <div className="centerOfOperation__next">
                <TraitBox />
                <div>
                    <h5>Explore Next</h5>
                    <Link to="learningStyle"><img src="https://image.flaticon.com/icons/png/512/201/201612.png" alt="" /></Link>
                    <h6>Learning Style</h6>
                </div>
            </div>
        </div>
    </>
    )
}

export default CenterOfOperation;