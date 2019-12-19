import React from 'react';

export const CenterOfOperationBox = ({ img, colr }) => (
    <>
        <div className="centerOfOperation__list-item">
            <div className="centerOfOperation__image">
                <img src={img} alt="" style={{ background: colr }} />
            </div>
            <div className="list-card__content">
                <p>This means you are a noob. Level up.</p>
            </div>
        </div>
    </>
);

export default CenterOfOperationBox;