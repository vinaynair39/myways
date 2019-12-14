const mongoose = require('mongoose');

const testAnswer = new mongoose.Schema({
    answers: {
        type: Object
    }
});

module.exports = mongoose.model('TestAnswers', testAnswer);