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

const deductiveReasoningAnswers = require('./routes/deductiveReasoningAnswers');
const informationOrderingAnswers = require('./routes/informationOrderingAnswers');
const languageTestAnswers = require('./routes/languageTestAnswers');
const problemSensitivityAnswers = require('./routes/problemSensitivityAnswers');
const mathematicalReasoningAnswers = require('./routes/mathematicalReasoningAnswers');

const deductiveReasoningResult = require('./routes/deductiveReasoningResult');
const informationOrderingResult = require('./routes/informationOrderingResult');
const languageTestResult = require('./routes/languageTestResult');
const problemSensitivityResult = require('./routes/problemSensitivityResult');
const mathematicalReasoningResult = require('./routes/mathematicalReasoningResult');


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

app.use('/api/answers', deductiveReasoningAnswers);
app.use('/api/answers', informationOrderingAnswers);
app.use('/api/answers', languageTestAnswers);
app.use('/api/answers', problemSensitivityAnswers);
app.use('/api/answers', mathematicalReasoningAnswers);



app.use('/api/result', deductiveReasoningResult);
app.use('/api/result', informationOrderingResult);
app.use('/api/result', languageTestResult);
app.use('/api/result', problemSensitivityResult);
app.use('/api/result', mathematicalReasoningResult);



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
