const express = require('express');

const controllerLogin = require('../controllers/login.controller')
const routerLogin = express.Router();

routerLogin.get('/login', controllerLogin.get);


module.exports = routerLogin;