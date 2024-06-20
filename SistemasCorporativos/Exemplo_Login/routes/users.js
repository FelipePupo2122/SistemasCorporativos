const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');
const { User } = require('../models');
const authMiddleware = require('../middlewares/auth');

const userService = new UserService(User);

// Rotas sem autenticação
router.post('/register', async (req, res) => {
    const { nome, email, senha, departamento } = req.body;
    try {
        const { user, token } = await userService.create(nome, email, senha, departamento);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { token } = req.body;
    try {
        const user = await userService.login(token);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Rotas autenticadas
router.get('/', authMiddleware, async (req, res) => {
    try {
        const users = await userService.localizaTodosUsuario();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const user = await userService.findOne(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
