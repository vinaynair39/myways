import React from 'react';
import TestListItem from '../TestListItem/TestListItem'

const TestList = ({tests}) => (
        <div className="dashboard-list">
            {console.log(tests.length)}
        {tests.length === 0 ? (<p>No Tests</p>) : (tests.map((test) => {
            return <TestListItem key={test.assesmentType}  {...test} />
        }))}
    </div>
)

export default TestList;