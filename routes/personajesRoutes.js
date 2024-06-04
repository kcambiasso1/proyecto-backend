const express = require('express');
const router = express.Router();
const personajesController = require('../controllers/personajesController');

// Ruta para obtener todos los personajes
router.get('/personajes', personajesController.obtenerPersonajes);

// Ruta para obtener un personaje por su ID
router.get('/personajes/:id', personajesController.obtenerPersonaje);

// Ruta para crear un nuevo personaje
router.post('/personajes', personajesController.crearPersonaje);

// Ruta para actualizar un personaje existente
router.put('/personajes/:id', personajesController.actualizarPersonaje);

// Ruta para eliminar un personaje existente
router.delete('/personajes/:id', personajesController.eliminarPersonaje);

// Ruta para obtener un personaje por su nombre
router.get('/personajes/nombre/:nombre', personajesController.obtenerPersonajePorNombre);

module.exports = router;