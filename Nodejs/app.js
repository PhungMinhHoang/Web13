const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser")
const questionList = require("./questions.json");
const mongoose = require("mongoose");
const questionModel = require("./models/questionModel");
const questionRouter = require("./router/questionRouter")
const askRouter = require("./router/askRouter")
const answerRouter = require("./router/answerRouter")
let app = express();

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/question", questionRouter);
app.use("/ask", askRouter);
app.use("/answer", answerRouter);

app.get("/", function (req, res) {
    questionModel.find({}, function (err, resFind) {
        if (err) console.log(err)
        else {
            let question = resFind[Math.floor(Math.random() * resFind.length)];
            res.render("home", {
                question
            });
        }
    });
});


mongoose.connect("mongodb://localhost:27017/quyetde", { useNewUrlParser: true }, function (err) {
    if (err) console.log(err)
    else console.log("DB connect success");
})
app.use(express.static("./style.css"));

app.listen(9999, function (err) {
    if (err) console.log(err)
    else console.log("Server is listening at port: 9999");
});