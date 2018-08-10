const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");

const apiRouter= require("./routers/apiRouter")

let app = express();

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.use("/api",apiRouter);

mongoose.connect("mongodb://localhost/techkid-hotgirl",(err)=>{
    if(err) console.log(err)
    else console.log("DB connect success")
})
const port =9999;
app.listen(port,(err)=>{
    if(err) console.log(err)
    else console.log(`Server is listening at ${port}`)
})
