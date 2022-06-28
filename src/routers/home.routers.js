const express = require('express');
const controllerHome = require('../controllers/home.controller')
const routerHome = express.Router();

routerHome.get('/', controllerHome.get);


module.exports = routerHome;