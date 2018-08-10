const express = require("express")
const ApiRouter = express.Router();
const userRouter= require("./userRouter")

ApiRouter.get("/",(req,res)=>{
    res.send("Techkid hotgirl api")
})
ApiRouter.use("/users",userRouter);
module.exports = ApiRouter;