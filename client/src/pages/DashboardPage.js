import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const DashboardPage = (props) => {
    return (
        <div className="dashboard">
            <h1>MyWays</h1>
            <div className='button-start'>
            <div>
                <Link to="/test" className="effect1" href="#">
                    Start Test!
                <span className="bg"></span>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default DashboardPage;