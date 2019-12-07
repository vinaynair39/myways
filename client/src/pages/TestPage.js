import React  from 'react';
import { Link } from 'react-router-dom';
import TestList from '../components/TestList';
import { connect } from 'react-redux';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestPage = (props) => {


    return (
        <div>
            <TestList tests={props.tests} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    tests: state.test
});


export default connect(mapStateToProps, undefined)(TestPage);