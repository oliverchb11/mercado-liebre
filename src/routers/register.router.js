const express = require('express');

const controllerRegister = require('../controllers/register.controller')
const routerRegister = express.Router();

routerRegister.get('/register', controllerRegister.get);


module.exports = routerRegister;