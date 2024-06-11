const jwt = require('jsonwebtoken');

// Função para gerar um token JWT
function generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

module.exports = { generateToken };
