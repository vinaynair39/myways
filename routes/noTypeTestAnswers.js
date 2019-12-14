const router = require('express').Router();

const ANSWERS = require('../seed/noTypeTestAnswers.json');

router.get('/noTypeTest', async (req, res) => {
    try {
        res.json(ANSWERS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;