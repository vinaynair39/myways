const router = require("express").Router();
const User = require('../model/User')

router.post("/setTestCompleted", async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOneAndUpdate({ _id: req.body._id }, {testStatus: req.body.testStatus },
            { useFindAndModify: false }, (err) => {
                if (err) {
                    console.log(err);
                    res.send('error')
                }
            });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
