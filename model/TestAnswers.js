const mongoose = require('mongoose');

const testAnswer = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    answers: {
        type: Object
    }
});

module.exports = mongoose.model('TestAnswers', testAnswer);