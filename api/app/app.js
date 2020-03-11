const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Usuario = require('./routes/usuario');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false })); //Esta linia hace que todo se pase en JSON

App.use('/usuario', Usuario);

module.exports = App;