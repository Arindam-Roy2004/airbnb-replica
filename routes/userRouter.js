const express = require('express');

const userRouter = express.Router();

// const path = require('path');
// const rootDir = require('../utils/pathUtils');
const { registerHomes } = require('../controllers/homes');
const {getHomes} = require('../controllers/homes');

userRouter.get("/", getHomes);

module.exports = userRouter;