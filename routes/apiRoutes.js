const express = require('express');
const axios = require('axios');
const router = express.Router();

// Ruta para obtener todos los personajes de la API externa
router.get('/personajes', async (req, res) => {
    try {
      const response = await axios.get('https://dragonball-api.com/api/characters');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener personajes' });
    }
  });

// Ruta para obtener un personaje por su ID de la API externa
router.get('/personajes/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener personaje' });
    }
  });

module.exports = router;