const express = require('express');

const userRouter = express.Router();
const { registerHomes } = require('./hostRouter');

const path = require('path');
const rootDir = require('../utils/pathUtils');

userRouter.get("/",(req,res,next)=>{
  console.log("In user router");
  console.log(registerHomes);
  res.render('home', { homes: registerHomes, currPage: 'home' });
})

module.exports = userRouter;