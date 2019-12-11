import React from 'react';
import TestListItem from './TestListItem'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestList = ({tests}) => (
    <div>
        <div className="list">
        {tests.length === 0 ? (<p>No Tests</p>) : (tests.map((test) => {
            return <TestListItem key={test.assesmentType}  {...test} />
        }))}
    </div>
    </div>
)

export default TestList;