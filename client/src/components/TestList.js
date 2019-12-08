import React from 'react';
import TestListItem from './TestListItem'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestList = (props) => (
    <div>
        <div className="list">
        {props.tests.length === 0 ? (<p>No Tests</p>) : (props.tests.map((test) => {
            return <TestListItem key={test.id}  {...test} />
        }))}
    </div>
    </div>
)

export default TestList;