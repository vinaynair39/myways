const router = require('express').Router();

const User = require("../model/User");
const QUESTIONS = require('../seed/tests.json');

const {
    generateToken
} = require('../services/generateToken');

router.get('/tests', async (req, res) => {
    try {
        res.json(QUESTIONS);

    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;