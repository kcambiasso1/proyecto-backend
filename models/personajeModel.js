const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    raza: { type: String },
    planeta: { type: String },
    poder: { type: Number },
    imagen: { type: String },
});

module.exports = mongoose.model('Personaje', personajeSchema);
