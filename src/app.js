const express = require('express');
const app = express();
const port = 3000;
const routerHome = require('./routers/home.routers')



//static files
console.log(__dirname);
app.use('/', express.static(__dirname + '/public'))
    //routers
app.use('/', routerHome)


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})