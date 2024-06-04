const express = require('express');
const app = express();
const personajesRoutes = require('./routes/personajesRoutes');
const apiRoutes = require('./routes/apiRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Configurar middlewares
app.use(express.json());
app.use(authMiddleware);

// Configurar rutas
app.use('/api/personajes', apiRoutes);
app.use('/personajes', personajesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});