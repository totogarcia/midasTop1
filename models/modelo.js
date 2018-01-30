'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccionSchema = Schema({
    alto: Number,
    stop: Number,
    nombre: String,

    espanol: String,
    catalan: String,
    vasco: String,
    gallego: String,

    ingles: String,
    chino: String,
    arabe: String,
    italiano: String,
    aleman: String,
    frances: String,
    portugues: String,
    ruso: String,
    hindi: String,
    japones: String
});

module.exports = mongoose.model('Accion', AccionSchema);