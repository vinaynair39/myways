const router = require("express").Router();
const Answers = require("../model/TestAnswers");

router.post("/deductiveReasoning", async (req, res) => {
  try {
    console.log(req.body);
    const ans = new Answers({
      answers: req.body
    });
    await ans.save();
    res.status(200).json(req.body);
  } catch (error) {
    res.send(400).send(error);
  }
});

module.exports = router;
