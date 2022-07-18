const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerHome = require('./routers/home.routers')
const routerRegister = require('./routers/register.router')
const routerLogin = require('./routers/login.router')



//static files
console.log(__dirname);
app.use('/', express.static(__dirname + '/public'))
    //routers
app.use('/', routerHome)
app.use('/', routerRegister)
app.use('/', routerLogin)


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})