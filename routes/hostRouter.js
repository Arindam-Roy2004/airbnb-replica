const express = require('express');


// const path = require('path');
// const rootDir = require('../utils/pathUtils');
const {addHome} = require('../controllers/homes');
const {postAddHome} = require('../controllers/homes');

const hostRouter = express.Router();

hostRouter.get("/add_home", addHome);
hostRouter.post("/add_home", postAddHome);

exports.hostRouter = hostRouter;