import React from 'react';
import TraitListItem from './TraitListItem';
import TraitListChart from './TraitListChart';

const TraitList = () => {
    return (
        <>
            <div className="traits">
                <div className="traits__title">
                    <img src="https://image.flaticon.com/icons/svg/2472/2472104.svg" alt="" />
                    <h1>Personality Traits</h1>
                </div>
                <TraitListChart />
                <TraitListItem />
            </div>
        </>
    )
}


export default TraitList;