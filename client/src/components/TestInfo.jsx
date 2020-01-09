import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestInfo = (props) => {


    return (
        <>
            <Link className='goto-dashboard' to='/dashboard'><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <div className="testInfo">
                <h2 className="testInfo__title">{props.currentTestInfo.assesmentName}</h2>
                <h4 className="testInfo__subtitle">{props.currentTestInfo.instructions}</h4>
                <Link className="button-testInfo" to={`../test/${props.currentTestInfo.assesmentType}`}>Start!</Link>
            </div></>
    );
}

const mapStateToProps = (state, props) => ({
    currentTestInfo: state.test.tests.filter(test => {
        if (test.assesmentType === props.match.params.name)
            return test
    })[0]
})
export default connect(mapStateToProps, undefined)(TestInfo);
// export default TestInfo;