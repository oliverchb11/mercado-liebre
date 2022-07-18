const express = require('express');
const cors = require('cors');
const app = express();
const routerHome = require('./routers/home.routers')
const routerRegister = require('./routers/register.router')
const routerLogin = require('./routers/login.router')

app.use(cors());
app.set('puerto', process.env.PORT || 3000)
    //static files
console.log(__dirname);
app.use('/', express.static(__dirname + '/public'))
    //routers
app.use('/', routerHome)
app.use('/', routerRegister)
app.use('/', routerLogin)


app.listen(app.get('puerto'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('puerto')}`);
})