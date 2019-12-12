const router = require('express').Router();

router.post('/languageTest', async (req, res) => {
    try {
        console.log(req.body)
        res.json(req.body);
    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;