import React, {useEffect,useState} from 'react';
import TestB from '../components/TestB/TestB';
import TestA from '../components/TestA/TestA';
import { connect } from 'react-redux';
import { getCurrentTest } from '../actions/test';

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