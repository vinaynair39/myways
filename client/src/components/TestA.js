import React, { useState, useEffect } from 'react';
import { history } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const TestA = ({ test }) => {
    // const {currentTest: ct, currentQuestion: cq} = JSON.parse(localStorage.getItem('question'));
    // const [currentTest, setCurrentTest] = useState(ct || 0);
    // const [currentQuestion, setCurrentQuestion] = useState(cq || 0);
    // const [question, setQuestion] = useState('');
    // const [testName, setTestName] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOptions, setCurrentOptions] = useState(0);
    const [currentSubQuestion, setCurrentSubQuestion] = useState(0);
    const [currentParagraph, setcurrentParagraph] = useState(0);
    const [paragraph, setParagraph] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([])
    const totalLength = test.questions.length;
    const instruction = test.instruction;
    const assesmentType = test.assesmentType;

    useEffect(() => {
        // setCurrentTest(serializedState.currentTest);
        // setCurrentQuestion(serializedState.currentQuestion);
        nextQuestion();
    }, [])
    
const saveToLocalStorage = (state) => {
    try{
      const serializedState = JSON.stringify(state);
      localStorage.setItem('question',serializedState)
    } catch(e){
      console.log(e)
    }
  }

    const nextQuestion = () => {
        setQuestion('');
        if (totalLength === currentQuestion) {
            alert("Successfully Completed!");
            { history.push('/') }
            saveToLocalStorage(0);
            return true;
        }

        if (totalLength > currentQuestion && (test.questions[currentQuestion].questionSet.length - 1) > (currentSubQuestion)) {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubQuestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubQuestion].options.map(option => option.option))
            setCurrentSubQuestion(currentSubQuestion + 1);
            return true;
        }
        if ((test.questions[currentQuestion].questionSet.length - 1) == currentSubQuestion) {
            setParagraph(test.questions[currentQuestion].paragraph);
            setQuestion(test.questions[currentQuestion].questionSet[currentSubQuestion].question);
            setOptions(test.questions[currentQuestion].questionSet[currentSubQuestion].options.map(option => option.option))
            setCurrentSubQuestion(0);
            setCurrentQuestion(currentQuestion + 1)
            return true;
        }
        setParagraph(test.questions[currentQuestion].paragraph);
        setCurrentQuestion(currentQuestion + 1);




        // if (totalLength > currentTest && (tests[currentTest].questions.length - 1) > (currentQuestion)) {
        //     setQuestion(tests[currentTest].questions[currentQuestion].question);
        //     setTestName(tests[currentTest].assesmentType)
        //     setCurrentQuestion(currentQuestion + 1)
        //     return true;
        // }
        // if ((tests[currentTest].questions.length - 1) == currentQuestion) {
        //     setQuestion(tests[currentTest].questions[currentQuestion].question);
        //     setCurrentQuestion(0);
        //     setCurrentTest(currentTest + 1)
        //     return true;
        // }

        // setTestName(tests[currentTest].assesmentType);
        // setCurrentTest(currentTest + 1);
    
    }


    return (
        <>
            <div className="test__item">
                    <div>
                        {!!paragraph ? <h2 title={test.instructions} className='test__paragraph'>{paragraph}</h2> : <p>No questions yet</p>}
                    </div>
                    <div>
                        {!!question ? <h2 className="test__sub-question">{question}</h2> : <p>No questions yet</p>}
                    </div>
            </div>
            <div><ButtonList nextQuestion={nextQuestion} options={options}/></div>
            <div className="test__options">
                {/* <Options nextQuestion={nextQuestion}  /> */}
            </div>

        </>
    )

}

// export default connect(undefined, mapDispatchToProps)(Test);
export default TestA;