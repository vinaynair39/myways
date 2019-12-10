import React, {useEffect} from 'react';
import TestB from '../components/TestB';
import TestA from '../components/TestA';
import { connect } from 'react-redux';
import { getCurrentTest } from '../actions/test';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   


const TestPage = (props) =>{
    useEffect(() => {
        console.log(props.match.params.name)
        props.currentTest(props.match.params.name);
    
    },[]);  

    return (
        <div className='test'>
            {console.log(props.match.params.name)}
            {props.match.params.name === 'informationOrdering' ? <TestB test={props.tests} /> : <TestA test={props.tests} />}
        </div>
    )
}
    

const mapStateToProps = (state) => ({
    tests: state.test ? state.test.questions: []
});
const mapDispatchToProps = (dispatch) => ({
    currentTest: (name) => dispatch(getCurrentTest(name))
})



export default connect(mapStateToProps, mapDispatchToProps)(TestPage);