const router = require("express").Router();
const Answers = require("../model/TestAnswers");

router.post("/answers", async (req, res) => {
  try {
    console.log(req.body)
    const ans = await Answers.findOneAndUpdate({ userId: req.body.id }, {
     $addToSet: { answers: req.body.answers }
    },{useFindAndModify: false}, (err) => {
      if (err) {
        console.log(err);
        res.send('error')
      }
      else{
        console.log(req.body.id)
      }
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
