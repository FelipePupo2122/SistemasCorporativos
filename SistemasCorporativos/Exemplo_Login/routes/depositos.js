const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth'); // Middleware para autenticação JWT

const db = require('../models');
const DepositoService = require('../services/depositoService');
const DepositoController = require('../controllers/depositoController');
const Deposito = db.Deposito;
const depositoService = new DepositoService(Deposito);
const depositoController = new DepositoController(depositoService);

// Rota para criar um novo depósito (autenticada)
router.post('/novoDeposito', authenticateToken, (req, res) => {
    depositoController.novoDeposito(req, res);
});

// Rota para listar todos os depósitos (autenticada)
router.get('/listarDepositos', authenticateToken, (req, res) => {
    depositoController.listarDepositos(req, res);
});

module.exports = router;
