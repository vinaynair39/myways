const router = require('express').Router();

const ANSWERS = require('../seed/informationOrderingAnswers.json');

router.get('/informationOrdering', async (req, res) => {
    try {
        res.json(ANSWERS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;