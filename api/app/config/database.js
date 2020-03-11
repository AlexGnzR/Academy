const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    connection: null,
    connect: function() {
        if (this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(connection => {
            this.connection = connection;
            console.log('La conexión a la Base de Datos ha sido un exito');
        }).catch(error => console.log(error));
    }
};