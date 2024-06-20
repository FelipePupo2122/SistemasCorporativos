const jwt = require('jsonwebtoken');
const secret = 'your-secret-key'; 

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token inválido.' });
    }
}

module.exports = authenticateToken;
