const express = require('express');
const router = express.Router();

const db = require('../models');
const DepositoService = require('../services/depositoService');
const DepositoController = require('../controllers/depositoController');
const Deposito = db.Deposito;
const depositoService = new DepositoService(Deposito);
const depositoController = new DepositoController(depositoService);

router.post('/novoDeposito', (req, res) => {
    depositoController.novoDeposito(req, res);
});

router.get('/listarDepositos', (req, res) => {
    depositoController.listarDepositos(req, res);
});

module.exports = router;
