const express = require("express");
const router = express.Router();
const questionModel = require("../models/questionModel")

router.get("/:questionId/:vote", (req, res) => {
    questionModel.findOne({ _id: req.params.questionId }, function (err, resFind) {
        let countYes = resFind.yes;
        let countNo = resFind.no;
        if (req.params.vote == "yes") {
            questionModel.updateOne({ _id: req.params.questionId }, { yes: countYes + 1 }, function (err, resUpdate) {
            });
        } else if (req.params.vote == "no") {
            questionModel.updateOne({ _id: req.params.questionId }, { no: countNo + 1 }, function (err, resUpdate) {
            })
        }
        res.redirect("/question/" + resFind.id);
    });
    
});
module.exports = router 