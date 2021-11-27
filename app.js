const express = require('express');
const app = express();
const path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');    //Extract data from Express

app.use(cors())

let test_api = require('./routes/test_api');
const usuariosRoutes = require('./routes/usuarios_controller')
const materialesRoutes = require('./routes/materiales_controller')
const salasRoutes = require('./routes/salas_controller')

//Sending a GET to localhost:8080/dummy should return this
app.get('/dummy', (req, res) => res.send('Response from Route of the Express Server!!'))

app.listen(8080);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 
app.use('/test_api', test_api);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/materiales', materialesRoutes);
app.use('/api/salas', salasRoutes);



console.log("Server running on 8080")


app.use(express.static('./public/index.html'));

module.exports = app;