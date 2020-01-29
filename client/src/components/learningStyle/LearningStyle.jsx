import React from 'react';
import LearningStyleChart from './LearningStyleChart'
import LearningStyleBox from './LearningStyleBox'
import Link from 'react-router-dom/Link'
import { setCurrentItem } from '../../actions/test';
import { useDispatch } from 'react-redux';
import { beholder, listener, reader, experimenter} from '../learningStyle/learningStyleData'

const LearningStyle = ({ results }) => {
    
    const dispatch = useDispatch();

    const currentItem = (e) => {
        switch (e.target.name) {
            case 'beholder':
                dispatch(setCurrentItem(beholder));
                break;
            case 'listener':
                dispatch(setCurrentItem(listener));
                break;
            case 'reader':
                dispatch(setCurrentItem(reader));
                break;
            case 'experimenter':
                dispatch(setCurrentItem(experimenter));
                break;
            default:
                break;

        }
    }
    return (
        <>
            <div className="centerOfOperation  animated fadeIn">
                <div className="centerOfOperation__data2">
                    <div className="traits__title mt-0">
                        <img src="https://image.flaticon.com/icons/svg/1081/1081040.svg" alt="" />
                        <h1>Learning Style</h1>
                    </div>
                    <div className="centerOfOperation__chart">
                        <LearningStyleChart />
                    </div>
                    <div className="centerOfOperation__list2" >
                        <div className="centerOfOperation__list-item2" ><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'beholder'} src={"https://image.flaticon.com/icons/png/512/128/128644.png"} style={{background:"#6decb9"}} /><h6>Beholder</h6></div></div>
                        <div className="centerOfOperation__list-item2 "><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'listener'} src={"https://image.flaticon.com/icons/png/512/930/930381.png"} style={{background:"#f8b195"}} /><h6>Listener</h6></div></div>
                        <div className="centerOfOperation__list-item2 "><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'reader'} src={"https://image.flaticon.com/icons/png/512/85/85590.png"} style={{background:"#f67280"}} /><h6>Reader</h6></div></div>
                        <div className="centerOfOperation__list-item2 "><div className="centerOfOperation__image"><img onMouseEnter={currentItem} name={'experimenter'} src={"https://image.flaticon.com/icons/png/512/84/84590.png"} style={{background:"#413c69"}} /><h6>Experimenter</h6></div></div>
                    </div>
                </div>
                <div className="centerOfOperation__next">
                    <LearningStyleBox />
                    <div>
                        <h5>Explore Next</h5>
                        <Link to="subjectInterest"><img src="https://image.flaticon.com/icons/svg/1182/1182545.svg" alt="" /></Link>
                        <h6>Subject Interest</h6>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LearningStyle;