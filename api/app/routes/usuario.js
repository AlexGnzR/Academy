const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const Router = express.Router();

Router.get('/', usuarioController.index) //Leer api.com/usuario/
    .post('/', usuarioController.create) //Publicar api.com/usuario/
    .get('/:key/:value', usuarioController.find, usuarioController.show) //LeerUno api.com/usuario/nombre
    .put('/:key/:value', usuarioController.find, usuarioController.update) //Actualizar api.com/usuario/nombre
    .delete('/:key/:value', usuarioController.find, usuarioController.remove); //Eliminar api.com/usuario/nombre

module.exports = Router;