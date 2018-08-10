const express = require("express")
const userRouter = express.Router();
const UserModel = require("../models/userModel");

userRouter.get("/",(req,res)=>{
    UserModel.find({},(err,users)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,users})
    })
})

userRouter.post("/",(req,res)=>{
    const {userName,email,password,avataUrl,name}= req.body;
    UserModel.create(
        {userName,email,password,avataUrl,name},
        (err,userCreated)=>{
            if(err) res.status(500).send({success:0,err})
            else res.status(201).send({success:1, userCreated})
        }
    )
})
userRouter.get("/:userId",(req,res)=>{
    UserModel.findById(req.params.userId,(err,users)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,users})
    })
})

userRouter.delete("/:userId",(req,res)=>{
    UserModel.findByIdAndRemove(req.params.userId,(err,users)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,users})
    })
})

userRouter.put("/:userId",(req,res)=>{
    const {userName,email,password}= req.body;
    UserModel.findByIdAndUpdate(req.params.userId,{userName,email,password} ,(err,users)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,users})
    })
})
module.exports =userRouter;