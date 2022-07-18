const { request, response } = require('express');
const path = require('path');
const controllerRegister = {}


controllerRegister.get = (req = request, res = response) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
}

module.exports = controllerRegister