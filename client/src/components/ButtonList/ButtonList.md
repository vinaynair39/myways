# ButtonList 

used to render the options provided with the question. The options are passed as props from TestA component or TestB component

## Types of Options

1. smiley generator (when no options are passed. used for Interest Test)
2. 2 button
3. 4 button
2. 5 button


all the code for these are inside of ButtonList component itself.
Depending on the number of options passed, The associated buttons are rendered


## Other props passed into ButtonList

1. nextQuestion(): when this function is called, react renders the next question
1. prevQuestion(): when this function is called, react renders the previous question


I have used a npm library called useEventListener that listens keyboard events and I've written additional code to make the buttons work. the code is pretty readable. you will get a better understanding if you read the code.
