import React from 'react';
import WorkOrientationChart from './WorkOrientationChart'

const WorkOrientation = () => {
    return (
        <>
            <div className="workOrientation">
                <div className="workOrientation__title">
                    <img src="https://image.flaticon.com/icons/png/512/426/426992.png" alt=""/>
                    <h1>Work Orientation</h1>
                </div>
                <div className="workOrientaiton__Chart">
                    <WorkOrientationChart />
                </div>
            </div>
        </>
    );
}

export default WorkOrientation;