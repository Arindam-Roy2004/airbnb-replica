const express = require('express');

const hostRouter = express.Router();

const path = require('path');
const rootDir = require('../utils/pathUtils');


hostRouter.get("/add_home",(req,res,next)=>{
  console.log("In add home get");
  res.sendFile(path.join(rootDir,"views","addHome.html"));
});

hostRouter.post("/add_home",(req,res,next)=>{
  console.log("In add home post");
  console.log(req.body);
  res.sendFile(path.join(rootDir,"views","homeAdded.html"));
});

module.exports = hostRouter;