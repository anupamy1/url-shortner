const express = require("express");
const mongoose = require("mongoose");

const {handleGenerateNewShortURL,handleGetAnalytics}=require("../controllers/controller");
const router= express.Router();
router.post("/",handleGenerateNewShortURL);
router.get("/analytics/:shortId",handleGetAnalytics);
// router.route("/:shortId")
//     .get()
//     .patch()
//     .delete();

module.exports=router;