import React from 'react';
import { Link } from 'react-router-dom';
import TestInfo from './TestInfo'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestListItem = ({ assesmentType, assesmentName, definition, instruction }) => {
    return (
        <div>
            <h1>{assesmentName}</h1>
            <h6>{definition}</h6>
            <Link to={`../testInfo/${assesmentType}`}>View</Link>
        </div>
    );
}


export default TestListItem;