# TestA

This component is used to render test questions sequentially. The test here has a question structure like the following 

```
{
    "questionNumber": "2",
    "paragraph": "Should university-level education be free to all students?",
    "questionSet": [
        {
            "questionNumber": "1",
            "question": "Argument One: No, too much education can lead to over-qualification, and therefore unemployment.",
            "options": [
                {
                    "optionNumber": "1",
                    "option": "Strong Argument"
                },
                {
                    "optionNumber": "2",
                    "option": "Weak Argument"
                }
            ]
        }
    ]
}
```

## Working

In order to sequentially parse through each question, we make use of 2 states of type number:

1.currentQuestion

2.currentSubquestion

These indices are used to fetch only the required paragraph, questions and its options from the json file that we get from the backend on starting a test.

both of them start at 0. we increment the currentSubquestion when a user submits the answer to a question. we also check if the length of the subquestion is equal to currentSubquestion. if yes, then we increment CurrentQuestion and reset the value of currentSubquestion state to 0.


Other Components used Inside:

1. ButtonList (used to render the options provided with the question)
