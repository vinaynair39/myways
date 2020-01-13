import React, { useEffect } from 'react';
import CenterOfOperationBox from './CenterOfOperationBox';
import Charts from './Charts'
import Link from 'react-router-dom/Link'
import { setCurrentItem } from '../../actions/test';
import { useDispatch } from 'react-redux';
import { physical, informative, creative, interactive, persuasive, administrative } from '../workOrientation/WorkOrientationData';


const CenterOfOperation = ({ results }) => {

    const dispatch = useDispatch();

    const currentItem = (e) => {
        switch (e.target.name) {
            case 'thinking':
                dispatch(setCurrentItem(physical));
                break;
            case 'feeling':
                dispatch(setCurrentItem(informative));
                break;
            case 'intuition':
                dispatch(setCurrentItem(creative));
                break;
            case 'interactive':
                dispatch(setCurrentItem(interactive));
                break;
            case 'persuasive':
                dispatch(setCurrentItem(persuasive));
                break;
            case 'administrative':
                dispatch(setCurrentItem(administrative));
                break;
            default:
                break;

        }
    }

    return (
        <>
            <div className="centerOfOperation animated fadeIn">
                <div className="centerOfOperation__data">
                <div className="centerOfOperation__title">
                    <img src="https://image.flaticon.com/icons/svg/1753/1753543.svg" alt="" />
                    <h1>Center Of Operation</h1>
                </div>
                <div className="centerOfOperation__chart">
                    <Charts />
                </div>
                <div className="centerOfOperation__list" >
                    <div className="centerOfOperation__list-item "><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'thinking'} src={"https://image.flaticon.com/icons/png/512/1491/1491416.png"} style={{ background: "#FACC2E" }} /><h6>Thinking</h6></div></div>
                    <div className="centerOfOperation__list-item"><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'feeling'} src={"https://image.flaticon.com/icons/svg/1301/1301414.svg"} style={{ background: "#F25C5C" }} /><h6>Feeling</h6></div></div>
                    <div className="centerOfOperation__list-item"><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'intuition'} src={"https://image.flaticon.com/icons/png/512/1491/1491376.png"} style={{ background: "#0080FF" }} /><h6>Intuition</h6></div></div>
                </div>
                </div>
                <div className="centerOfOperation__next">
                <CenterOfOperationBox/>
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