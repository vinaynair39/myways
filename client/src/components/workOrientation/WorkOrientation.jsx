import React, { useState } from 'react';
import WorkOrientationChart from './WorkOrientationChart'
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../actions/test';
import { physical, informative, creative, interactive, persuasive, administrative } from './WorkOrientationData'

const WorkOrientation = () => {
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch();
    const currentItem = (e) => {
        switch (e.target.name) {
            case 'physical':
                dispatch(setCurrentItem(physical));
                break;
            case 'informative':
                dispatch(setCurrentItem(informative));
                break;
            case 'creative':
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
            <div className="workOrientation animated fadeIn">
                <div className="workOrientation__title">
                    <img src="https://image.flaticon.com/icons/png/512/426/426992.png" alt="" />
                    <h1>Work Orientation</h1>
                </div>
                <div className="workOrientaiton__Chart">
                    <WorkOrientationChart />
                </div>
                <div className="workOrientaiton__item">
                    <div><img name="physical" onMouseEnter={currentItem} src="https://image.flaticon.com/icons/svg/1077/1077147.svg" alt="" /><h6>Physical</h6></div>
                    <div><img onMouseEnter={currentItem} name="informative" src="https://image.flaticon.com/icons/svg/2450/2450881.svg" alt="" /><h6>Informative</h6></div>
                    <div><img onMouseEnter={currentItem} name="creative" src="https://image.flaticon.com/icons/svg/2452/2452184.svg" alt="" /><h6>Creative</h6></div>
                    <div><img onMouseEnter={currentItem} name="interactive" src="https://image.flaticon.com/icons/svg/2152/2152563.svg" alt="" /><h6>Interactive</h6></div>
                    <div><img onMouseEnter={currentItem} name="persuasive" src="https://image.flaticon.com/icons/png/512/2245/2245092.png" alt="" /><h6>Persuasive</h6></div>
                    <div><img onMouseEnter={currentItem} name="administrative" src="https://image.flaticon.com/icons/svg/2452/2452002.svg" alt="" /><h6>Administrative</h6></div>
                </div>
                {console.log(isShown)}
            </div>
        </>
    );
}

export default WorkOrientation;