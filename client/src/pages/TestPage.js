import React  from 'react';
import Test from '../components/Test';
import { connect } from 'react-redux';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestPage = (props) => {


    return (
        <div className='test'>
            <Test tests={props.tests}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tests: state.test.questions
});


export default connect(mapStateToProps, undefined)(TestPage);