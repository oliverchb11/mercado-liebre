const { request, response } = require('express');
const path = require('path');
const controllerLogin = {}


controllerLogin.get = (req = request, res = response) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
}

module.exports = controllerLogin