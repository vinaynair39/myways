import React from 'react';
import CenterOfOperationBox from '../result/CenterOfOperationBox'
import LearningStyleChart from './LearningStyleChart'
import LearningStyleBox from './LearningStyleBox'
import Link from 'react-router-dom/Link'
import { setCurrentItem } from '../../actions/test';
import { physical, informative, creative, interactive, persuasive, administrative } from '../workOrientation/WorkOrientationData'
import { useDispatch } from 'react-redux';


const LearningStyle = ({ results }) => {
    return (
        <>
            <div className="centerOfOperation  animated fadeIn">
                <div className="centerOfOperation__data2">
                    <div className="centerOfOperation__chart">
                        <div className="traits__title mt-0">
                            <img src="https://atmanco.com/wp-content/uploads/2015/12/personality-traits-about-workforce.png" alt="" />
                            <h1>Learning Style</h1>
                        </div>
                        <LearningStyleChart />
                    </div>
                    <div className="centerOfOperation__list2" >
                        <div ><CenterOfOperationBox name={'visual'} img={"https://image.flaticon.com/icons/png/512/128/128644.png"} colr="#6decb9" /><h6>Visual</h6></div>
                        <div ><CenterOfOperationBox name={'audio'} img={"https://image.flaticon.com/icons/png/512/930/930381.png"} colr="#f8b195" /><h6>Audrio</h6></div>
                        <div ><CenterOfOperationBox name={'read/write'} img={"https://image.flaticon.com/icons/png/512/85/85590.png"} colr="#f67280" /><h6>Read/Write</h6></div>
                        <div ><CenterOfOperationBox name={'kinesthetic/touch'} img={"https://image.flaticon.com/icons/png/512/84/84590.png"} colr="#413c69" /><h6>Kinesthetic/Touch</h6></div>
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