const jwt = require('jsonwebtoken');

const secret = 'your-secret-key'; 

function generateToken(userId) {
    return jwt.sign({ userId }, secret, { expiresIn: '1h' });
}

module.exports = { generateToken };
