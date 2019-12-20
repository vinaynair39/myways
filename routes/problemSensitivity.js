const router = require('express').Router();

const QUESTIONS = require('../seed/problemSensitivity.json');


router.get('/problemSensitivity', async (req, res) => {
    try {
        res.json(QUESTIONS);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;