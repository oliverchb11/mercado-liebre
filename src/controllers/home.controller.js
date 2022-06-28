const { request, response } = require('express');
const path = require('path');
const controllerHome = {}


controllerHome.get = (req = request, res = response) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
}

module.exports = controllerHome