
const Home = require('../models/home');
exports.addHome = (req,res,next)=>{
  console.log("In add home get");
  res.render('addHome', { currPage: 'add_home' });
};
exports.postAddHome = (req,res,next)=>{
  console.log("In add home post");
  // console.log(req.body);
  const {houseName,location,description,price,bedrooms,bathrooms} = req.body;
  const newHome = new Home(houseName,location,description,price,bedrooms,bathrooms);
  newHome.save();
  res.render('homeAdded');
};

exports.getHomes = (req,res,next)=>{
  const registerHomes = Home.fetchAll();
  console.log("In user router");
  // console.log(registerHomes);
  res.render('home', { homes: registerHomes, currPage: 'home' });
};

