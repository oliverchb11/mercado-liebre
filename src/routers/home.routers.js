const express = require('express');
const controllerHome = require('../controllers/home.controller')
const controllerRegister = require('../controllers/register.controller')
const routerHome = express.Router();

routerHome.get('/', controllerHome.get);



module.exports = routerHome;