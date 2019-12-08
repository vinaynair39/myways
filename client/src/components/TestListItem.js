import React from 'react';
import TestListItem from './TestListItem';
import { Link } from 'react-router-dom'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestList = (props) => (
    <div>        
        <Link to={`../test/${props.assesmentType}`}>{props.assesmentType}</Link>
    </div>
    
)

export default TestList;