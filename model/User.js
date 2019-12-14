const mongoose = require('mongoose');
const Answers = require('./TestAnswers');

const scoreSchema = new mongoose.Schema({
    informationOrdering: {
        type: Number,
        required: true,
        min: 0,
        max: 300
    },

    deductiveReasoning: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    inductiveReasoning: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    problemSensitivity: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },


    languageTest: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    personalityTest: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    interestTest: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    }
});


const testStatus = new mongoose.Schema({
    informationOrdering: {
        type: Boolean

    },
    deductiveReasoning: {
        type: Boolean

    },
    inductiveReasoning: {
        type: Boolean

    },
    problemSensitivity: {
        type: Boolean

    },
    personalityTest: {
        type: Boolean

    },
    languageTest: {
        type: Boolean
    },
    interestTest: {
        type: Boolean
    }

});




const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    school: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    class: {
        type: String
    },
    city: {
        type: String
    },
    phone: {
        type: String,
        required: true,
        max: 10,
        min: 0
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    score: {
        type: scoreSchema,
    },
    testStatus: {
        type: testStatus,
    },
    testAnswersId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('User', userSchema);