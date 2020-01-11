import React from 'react';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../actions/test';
import { physical, informative, creative, interactive, persuasive, administrative } from '../workOrientation/WorkOrientationData'

export const CenterOfOperationBox = ({ img, colr, text, name }) => {
    const location = useLocation();
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
            case 'visual':
                dispatch(setCurrentItem(physical));
                break;
            case 'audio':
                dispatch(setCurrentItem(informative));
                break;
            case 'read/write':
                dispatch(setCurrentItem(creative));
                break;
            case 'kinesthetic/touch':
                dispatch(setCurrentItem(persuasive));
                break;
            default:
                break;

        }
    }


    return (
        <>
            {console.log(location.pathname)}
            <div className={location.pathname === "/learningStyle" ? "centerOfOperation__list-item2" : "centerOfOperation__list-item"}>
                <div className="centerOfOperation__image">
                    <img onMouseEnter={currentItem} name={name} src={img} alt="" style={{ background: colr }} />
                </div>
            </div>
        </>
    )
}

export default CenterOfOperationBox;