const mongoose=require("mongoose");
const urlSchema=new mongoose.Schema(
    {
        shortId :{
            type : String,
            required:true,
            unique:true,
        },
        reDirectUrl :{
            type: String,
            required:true,
        },
        visitHistory:[{timestamp:{time:Number}}],
    },
    {timestamps:true}
);
const URLs=mongoose.model("url",urlSchema)
module.exports={URLs};