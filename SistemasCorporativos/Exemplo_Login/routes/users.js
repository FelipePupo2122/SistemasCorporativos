const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../Middleware/auth');
const db = require('../models');
const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const User = db.User;
const userController = require('../controllers/userController');

// Crie uma instância do serviço de usuário
const UserService = new userService(User);

// Rota para criar um novo usuário
router.post('/novoUsuario', async function(req, res, next) {
    const { nome, email, senha, departamento } = req.body;
    try {
        // Hash da senha usando bcrypt
        const hashedSenha = await bcrypt.hash(senha, 10);
        
        // Cria um novo usuário usando o serviço de usuário
        const novoUser = await UserService.create(nome, email, hashedSenha, departamento);
        
        // Retorna o novo usuário criado
        res.status(200).json(novoUser);
    } catch (error) {
        // Em caso de erro, retorna uma mensagem de erro
        res.status(500).json({ error: 'Erro ao inserir novo usuário.' });
    }
});

// Rota para login de usuário
router.post('/login', function(req, res, next) {
    userController.login(req, res);
});

// Rota para buscar todos os usuários
router.get('/localizaTodosUsuario', authenticateToken, function(req, res, next) {
    userController.localizaTodosUsuario(req, res);
});

module.exports = router;
