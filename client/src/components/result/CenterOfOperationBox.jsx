import React from 'react';

export const CenterOfOperationBox = ({img, colr}) => (
    <>
           <div className="list">
           <div className="list-card d-flex align-items-center flex-column">
            <div className="list-card__image">
                <img src={img} alt="" style={{background:colr}}/>
            </div>
            <div className="list-card__content">
                <p>This means you are a noob. Level up.</p>
            </div>
        </div>
            </div>
    </> 
);

export default CenterOfOperationBox;