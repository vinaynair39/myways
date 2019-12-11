import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestInfo = (props ) => {


    return (
        <div>
            <h2>{props.currentTestInfo.assesmentName}</h2>
            <h4>{props.currentTestInfo.instructions}</h4>
            <Link to={`../test/${props.currentTestInfo.assesmentType}`}>Start!</Link>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    currentTestInfo: state.test.tests.filter(test => {
        if(test.assesmentType === props.match.params.name)
            return test
    })[0]
})
export default connect(mapStateToProps, undefined)(TestInfo);
// export default TestInfo;