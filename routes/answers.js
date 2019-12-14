const router = require("express").Router();
const Answers = require("../model/TestAnswers");
const User = require('../model/User')

router.post("/answers", async (req, res) => {
  try {
    const ans = await Answers.findOneAndUpdate({ _id: req.body.id }, {
      $push: { answers: req.body.answers }
    },{useFindAndModify: false}, (err) => {
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
