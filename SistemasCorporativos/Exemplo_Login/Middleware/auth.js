const jwt = require('jsonwebtoken');
const SECRET_KEY = 'seu_secret_key_aqui';  // Lembre-se de armazenar isso em variáveis de ambiente

// Função para gerar o token JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '24h' });
};

// Middleware para autenticar o token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Se não há token, retorna não autorizado

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Retorna acesso proibido se houver erro

        req.user = user;
        next(); // Prossegue para a próxima função no pipeline do middleware
    });
};

module.exports = { generateToken, authenticateToken };