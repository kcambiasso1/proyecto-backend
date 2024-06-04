const authMiddleware = (req, res, next) => {
    // Verificar si el usuario esta
    if (!req.isAuthenticated()) {
      return res.status(401).send('No esta');
    }
  
    // Buscar el personaje en la base de datos
    const personaje = req.user.getPersonaje();
  
    if (!personaje) {
      return res.status(403).send('No tienes permisos suficientes');
    }
  
    // Verificar si el personaje es "Goku" o "Vegeta"
    if (personaje.nombre!== 'Goku' && personaje.nombre!== 'Vegeta') {
      return res.status(403).send('No tienes permisos suficientes');
    }
  
    // Lógica de autenticación exitosa
    next();
  };
  
  module.exports = authMiddleware;