import React from 'react';
import {useLocation} from 'react-router-dom'

export const CenterOfOperationBox = ({ img, colr, text }) => {
    const location = useLocation();
    
    return(
        <>
        {console.log(location.pathname)}
        <div className={location.pathname=== "/learningStyle" ? "centerOfOperation__list-item2":"centerOfOperation__list-item"}>
            <div className="centerOfOperation__image">
                <img src={img} alt="" style={{ background: colr }} />
            </div>
            <div className="list-card__content">
                <p>{text|| 'noob'}</p>
            </div>
        </div>
    </>
    )
}

export default CenterOfOperationBox;