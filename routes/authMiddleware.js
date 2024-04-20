const authMiddleware = (req, res, next) => {
    // lógica de autenticación
    next();
};

module.exports = authMiddleware;
