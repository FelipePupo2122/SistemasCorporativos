// routes/depositos.js

const express = require('express');
const router = express.Router();

const db = require('../models');
const DepositoService = require('../services/depositoService');
const DepositoController = require('../controllers/depositoController');
const Deposito = db.Deposito;
const depositoService = new DepositoService(Deposito);
const depositoController = new DepositoController(depositoService);

router.post('/novoDeposito', function(req, res, next) {
    depositoController.novoDeposito(req, res);
});

router.get('/listarDepositos', function(req, res, next) {
    depositoController.listarDepositos(req, res);
});

module.exports = router;
