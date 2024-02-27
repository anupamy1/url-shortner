const mongoose = require("mongoose");
async function connectmongodb(url){
    return mongoose.connect(url).then(()=>{
        console.log("mongodb connected");
    })
    .catch((err)=>{
        console.log("err ",err);
    })
}
module.exports={
    connectmongodb,
};