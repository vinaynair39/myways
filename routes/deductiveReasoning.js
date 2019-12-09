const router = require('express').Router();

const QUESTIONS = require('../seed/deductiveReasoning.json');
const ANSWERS = require('../seed/sat-answers.json');


router.get('/deductiveReasoning', async (req, res) => {
    try {
        const instructions = QUESTIONS.instructions

        res.json(QUESTIONS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;