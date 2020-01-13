import React, {useEffect,useState} from 'react';
import TestB from '../components/TestB';
import TestA from '../components/TestA';
import { connect } from 'react-redux';
import { getCurrentTest } from '../actions/test';
import { Loader } from 'semantic-ui-react';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestPage = (props) =>{
    useEffect(() => {
        props.currentTest(props.match.params.name);
    },[]);  

    return (
        <div className='testpage'>
            {props.tests.assesmentType === props.match.params.name && 
            ((props.match.params.name ===  'informationOrdering' || props.match.params.name ===  'personalityTest')
            ? <TestB test={props.tests} /> : <TestA test={props.tests} />)}
        </div>  
    )
}
    
const mapStateToProps = (state) => ({
    tests: state.test ? state.test.questions: [],
    loading:state.auth.loading
});
const mapDispatchToProps = (dispatch) => ({
    currentTest: (name) => dispatch(getCurrentTest(name))
})



export default connect(mapStateToProps, mapDispatchToProps)(TestPage);