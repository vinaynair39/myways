if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const User = require('./model/User')
// Important external libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


// Connect to DB 
mongoose.connect(
    process.env.MONGO_URL,
    { useUnifiedTopology: true },
    () => console.log('connected to db')
);

// Setting up PORT 
const port = process.env.PORT || 5000;

// Setting up Express
const app = express();

// Importing Routes
const tests = require('./routes/tests');
const userRoute = require('./routes/user');

const languageTest = require('./routes/languageTest');
const problemSensitivity = require('./routes/problemSensitivity');
const deductiveReasoning = require('./routes/deductiveReasoning');
const informationOrdering = require('./routes/informationOrdering');
const mathematicalReasoning = require('./routes/mathematicalReasoning');
const interestTest = require('./routes/interestTest');
const personalityTest = require('./routes/personalityTest');


const deductiveReasoningAnswers = require('./routes/deductiveReasoningAnswers');
const informationOrderingAnswers = require('./routes/informationOrderingAnswers');
const languageTestAnswers = require('./routes/languageTestAnswers');
const problemSensitivityAnswers = require('./routes/problemSensitivityAnswers');
const mathematicalReasoningAnswers = require('./routes/mathematicalReasoningAnswers');
const interestTestAnswers = require('./routes/interestTestAnswers');
const personalityTestAnswers = require('./routes/personalityTestAnswers');


const answers= require('./routes/answers');


// Adding middleware to express
app.use(bodyParser.json());
app.use(cors());
// Route Middlewares
app.use('/api/user', userRoute);
app.use('/api/test', tests);
app.use('/api/test', problemSensitivity);
app.use('/api/test', deductiveReasoning);
app.use('/api/test', languageTest);
app.use('/api/test', informationOrdering);
app.use('/api/test', mathematicalReasoning);
app.use('/api/test', interestTest);
app.use('/api/test', personalityTest);



app.use('/api/answers', deductiveReasoningAnswers);
app.use('/api/answers', informationOrderingAnswers);
app.use('/api/answers', languageTestAnswers);
app.use('/api/answers', problemSensitivityAnswers);
app.use('/api/answers', mathematicalReasoningAnswers);
app.use('/api/answers', interestTestAnswers);
app.use('/api/answers', personalityTestAnswers);




app.use('/api/result', answers);





// For Production: Delivering built client for all incoming requests
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

// Starting Server
app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log('Server running on port:' + port); 
});
