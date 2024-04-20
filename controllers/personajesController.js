const Personaje = require('../models/personajeModel');

exports.obtenerPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        res.json(personajes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los personajes' });
    }
};

// Implementar el resto de las funciones para crear, actualizar y eliminar personajes
