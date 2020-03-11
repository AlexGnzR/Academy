var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    terminos: {
        type: Boolean,
        required: true
    },
    create_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);