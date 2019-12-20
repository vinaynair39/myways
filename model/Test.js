const mongoose = require('mongoose');

const test = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    answers: {
        type: Object
    }
});

module.exports = mongoose.model('Test', test);