import React from 'react';
import TraitListItem from './TraitListItem';
import TraitListChart from './TraitListChart';

const TraitList = () => {
    return (
        <>
            <div className="traits">
                <div className="traits__title">
                    <img src="https://atmanco.com/wp-content/uploads/2015/12/personality-traits-about-workforce.png" alt="" />
                    <h1>Personality Traits</h1>
                </div>
                <TraitListChart />
                <TraitListItem />
            </div>
        </>
    )
}


export default TraitList;