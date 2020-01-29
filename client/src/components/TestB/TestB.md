# TestB

This component is used to render test questions sequentially. The test here has a question structure like the following 

```
 "questions":[
       {
          "questionNumber":1,
          "question":"In your dealings you : ",
          "options":[
             {
                "optionNumber":1,
                "option":"Overcome your personal terms and follow principles to do what is right"
             },
             {
                "optionNumber":2,
                "option":"Prefer personal terms, sometimes not going by principles"
             }
          ]
       },
       {
          "questionNumber":2,
          "question":"Your drive to improve comes from:",
          "options":[
             {
                "optionNumber":1,
                "option":"Inner critic to do what is judged as right"
             },
             {
                "optionNumber":2,
                "option":"Drive to succeed and be recognized for your accomplishments"
             }
          ]
       },
```

## Working

In order to sequentially parse through each question, we make use a state "currentQuestion"

This index is used to fetch only the required paragraph, questions and its options from the json file that we get from the backend on starting a test.

it start at 0. we increment the currentQuestion when a user submits the answer to a question.

Other Components used Inside:

1. ButtonList (used to render the options provided with the question)

