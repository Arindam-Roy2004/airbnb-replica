const express = require('express');

const hostRouter = express.Router();

const path = require('path');
const rootDir = require('../utils/pathUtils');


hostRouter.get("/add_home",(req,res,next)=>{
  console.log("In add home get");
  res.render('addHome', { currPage: 'add_home' });
});
const registerHomes = [];
hostRouter.post("/add_home",(req,res,next)=>{
  console.log("In add home post");
  console.log(req.body);
  const { houseName,location,description,price,bedrooms,bathrooms } = req.body;
  const newHome = { houseName, location, description, price, bedrooms,bathrooms };
  registerHomes.push(newHome);
  res.render('homeAdded');
});

exports.hostRouter = hostRouter;
exports.registerHomes = registerHomes;