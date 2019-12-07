import React from 'react';
import TestListItem from './TestListItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const Test = (props) => {
    const questionList = () => {
        
        return props.questions.questions.map(question => {
            return <li key={question.questionNumber}><img src={question.question}/></li>
        })
    }
    return (
        <div>
            <ul>
                {console.log(props.match.params.name)}
                {questionList()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    questions: state.test.filter(test => test.assesmentType === props.match.params.name)[0]
})


export default connect(mapStateToProps, undefined)(Test);