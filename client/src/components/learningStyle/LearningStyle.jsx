import React from 'react';
import CenterOfOperationBox from '../result/CenterOfOperationBox'
import LearningStyleChart from './LearningStyleChart'
import Link from 'react-router-dom/Link'

const LearningStyle = ({ results }) => (
    <>
        <div className="centerOfOperation">
            <div className="centerOfOperation__data">
                <div className="centerOfOperation__chart">
                <div className="traits__title mt-0">
                    <img src="https://atmanco.com/wp-content/uploads/2015/12/personality-traits-about-workforce.png" alt="" />
                    <h1>Learning Style</h1>
                </div> 
                    <LearningStyleChart />
                </div>
                <div className="centerOfOperation__list2" >
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/128/128644.png"} colr="#6decb9" /></div>
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/930/930381.png"} colr="#f8b195" /></div>
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/85/85590.png"} colr="#f67280" /></div>
                    <div ><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/84/84590.png"} colr="#413c69" /></div>
                </div>
            </div>
            <div className="centerOfOperation__next">
                <h4>Explore Next</h4>
                <Link to="subjectInterest"><img src="https://image.flaticon.com/icons/svg/1182/1182545.svg" alt="" /></Link>
                <h6>Subject Interest</h6>
            </div>
        </div>
    </>
)

export default LearningStyle;