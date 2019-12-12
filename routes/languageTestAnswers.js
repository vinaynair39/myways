const router = require('express').Router();

const QUESTIONS = require('../seed/languageTestAnswers.json');

router.get('/languageTest', async (req, res) => {
    try {
        res.json(QUESTIONS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;