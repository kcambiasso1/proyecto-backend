const Personaje = require('../models/personajeModel');

exports.obtenerPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        res.json(personajes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los personajes' });
    }
};

exports.crearPersonaje = async (req, res) => {
    try {
        const nuevoPersonaje = new Personaje(req.body);
        await nuevoPersonaje.save();
        res.status(201).json({ mensaje: 'Personaje creado con éxito' });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear personaje' });
    }
};

exports.obtenerPersonaje = async (req, res) => {
    try {
        const personaje = await Personaje.findById(req.params.id);
        if (!personaje) {
            res.status(404).json({ mensaje: 'Personaje no encontrado' });
        } else {
            res.json(personaje);
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener personaje' });
    }
};

exports.actualizarPersonaje = async (req, res) => {
    try {
        const personaje = await Personaje.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!personaje) {
            res.status(404).json({ mensaje: 'Personaje no encontrado' });
        } else {
            res.json({ mensaje: 'Personaje actualizado con éxito' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar personaje' });
    }
};

exports.eliminarPersonaje = async (req, res) => {
    try {
        await Personaje.findByIdAndRemove(req.params.id);
        res.json({ mensaje: 'Personaje eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar personaje' });
    }
};

exports.obtenerPersonajePorNombre = async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const personaje = await Personaje.findOne({ nombre: nombre });
        if (!personaje) {
            res.status(404).json({ mensaje: 'Personaje no encontrado' });
        } else {
            res.json(personaje);
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener personaje por nombre' });
    }
};