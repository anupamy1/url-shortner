const shortid = require("shortid");
const {URLs} = require("../models/schema");
async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    console.log(body);
    if(!body.url) return res.status(400).json({error:"url is required"});
    const shortID=shortid(8);
    await URLs.create({
        shortId:shortID,
        reDirectUrl:body.url,
        visitHistory:[],
    });
    return res.json({id:shortID});
}
async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URLs.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics : result.visitHistory,
    });
}
module.exports={
    handleGenerateNewShortURL,handleGetAnalytics,
};