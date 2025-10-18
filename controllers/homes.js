
const Home = require('../models/home');
exports.addHome = (req,res,next)=>{
  console.log("In add home get");
  res.render('host/addHome', { currPage: 'add_home' });
};
exports.postAddHome = (req,res,next)=>{
  console.log("In add home post");
  // console.log(req.body);
  const {houseName,location,description,price,bedrooms,bathrooms} = req.body;
  const newHome = new Home(houseName, location, description, price, bedrooms, bathrooms);
  newHome.save();
  res.render('host/homeAdded');
};

exports.getHomes = (req,res,next)=>{
  Home.fetchAll((registerHomes)=>{
    res.render('store/home-list', { homes: registerHomes, currPage: 'home' });
  });
  console.log("In user router");
  // console.log(registerHomes);
};

