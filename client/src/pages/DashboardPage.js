import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const DashboardPage = (props) => {
    return (
        <div>
            <h1>hello</h1>
            <Link to="/test"><button>Start Test</button></Link>
        </div>
    )
}

export default DashboardPage;