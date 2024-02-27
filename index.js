const express = require("express");
const app=express();
const mongoose = require('mongoose');
const port=8001;
const {connectmongodb}=require("./connection");
const {URLs}=require("./models/schema");
const urlRouter=require("./routers/router");
connectmongodb("mongodb://127.0.0.1:27017/url-shortner");
const {logReqRes}=require("./middleware/middleware");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

app.use("/url",urlRouter);
app.get("/:shortId",async (req,res)=>{
    const shortId=req.params.shortId;
    console.log("gewg")
    const entry = await URLs.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory:{
                    timestamp:Date.now()
                },
            },
        }
        
    );
    res.redirect(entry.reDirectUrl);
});

app.listen(port,()=>console.log(`server is started at port ${port}`));