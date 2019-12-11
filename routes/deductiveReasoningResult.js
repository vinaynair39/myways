const router = require('express').Router();

router.post('/deductiveReasoningResult', async (req, res) => {
    try {
        console.log(req.body.answers)
        res.json(req.body.result);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;