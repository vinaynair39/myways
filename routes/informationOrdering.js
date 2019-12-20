const router = require('express').Router();

const QUESTIONS = require('../seed/informationOrdering.json');


router.get('/informationOrdering', async (req, res) => {
    try {
        res.json(QUESTIONS);
    } catch (error) {
        res.send(400).send(error);
    }
});

router.get('/informationOrdering', async (req, res) => {
    try {
        res.json(QUESTIONS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;