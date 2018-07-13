const express = require("express");
const hbs = require("express-handlebars");
const fs = require("fs");
const bodyParser = require("body-parser")
const questionList = require("./questions.json");

let app = express();

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    let question = questionList[Math.floor(Math.random() * questionList.length)];
    res.render("home", {
        question
    })
});

app.get("/ask", (req, res) => {
    res.render("ask")
});

app.get("/question/:questionId", (req, res) => {
    let question = questionList[req.params.questionId];
    res.render("question", {
        question,
        totalVote: question.yes + question.no
    });
});

app.get("/answer/:questionId/:vote", (req, res) => {
    questionList[req.params.questionId][req.params.vote] += 1;
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));
    res.redirect("/question/" + req.params.questionId);
});

app.post("/question/add", (req, res) => {
    console.log(req.body);
    let newQuestion = {
        content: req.body.questionContent,
        yes: 0,
        no: 0,
        id: questionList.length
    };
    questionList.push(newQuestion);
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));
    res.redirect('/question/'+newQuestion.id);
});
app.use(express.static("./style.css"));
app.listen(9999, function (err) {
    if (err) console.log(err)
    else console.log("Server is listening at port: 9999");
});