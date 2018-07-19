const express = require("express");
const router = express.Router();
const QuestionModel = require("../models/questionModel")

router.get("/:questionId", (req, res) => {
    // let question = questionList[req.params.questionId];
    QuestionModel.findById(req.params.questionId, (err, resFind) => {
        if (err) console.log(err)
        else {
            let question=resFind;
            res.render("question", {
                question,
                totalVote: question.yes + question.no
            });
        }
    });

});

router.post("/add", (req, res) => {
    console.log(req.body);
    let newQuestion = {
        content: req.body.questionContent,
    };
    QuestionModel.create(newQuestion, function (err, questionCreated) {
        if (err) console.log(err)
        else res.redirect("/question/" + questionCreated._id);
    })
});
module.exports = router