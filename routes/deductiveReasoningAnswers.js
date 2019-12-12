const router = require('express').Router();

const ANSWERS = require('../seed/deductiveReasoningAnswers.json');

router.get('/deductiveReasoning', async (req, res) => {
    try {
        res.json(ANSWERS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;