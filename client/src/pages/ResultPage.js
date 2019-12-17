import React, {useEffect,useState} from 'react';
import ResultList from '../components/result/ResultList';
import { connect } from 'react-redux';
import { getCurrentTest } from '../actions/test';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const ResultPage = (props) =>{
    useEffect(() => {
    },[]);  

    return (
        <div className='testpage'>
            <ResultList results={props.results} />
        </div>  
    )
}
    
const mapStateToProps = (state) => ({
    results: [{title: 'problem solving',subtitle: 'there is this thing called as proper plaanning and yahape yeh nhi hoga',score: 90},{title: 'problem solving',subtitle: 'there is this thing called as proper plaanning and yahape yeh nhi hoga',score: 80}, {title: 'problem solving',subtitle: 'there is this thing called as proper plaanning and yahape yeh nhi hoga',score: 70}],
});
const mapDispatchToProps = (dispatch) => ({
    currentTest: (name) => dispatch(getCurrentTest(name))
})



export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);