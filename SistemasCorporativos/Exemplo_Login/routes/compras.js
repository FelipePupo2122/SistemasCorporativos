const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../Middleware/auth');
const db = require('../models');
const Compra = db.Compra;
const CompraService = require('../services/compraService');
const CompraController = require('../controllers/compraController');

const compraService = new CompraService(Compra);
const compraController = new CompraController(compraService);

router.post('/novaCompra', function(req, res, next) {
    compraController.criarCompra(req, res);
});

router.get('/listarCompras', function(req, res, next) {
    compraController.listarCompras(req, res);
});

router.put('/editarCompra/:id', function(req, res, next) {
    compraController.editarCompra(req, res);
});

router.delete('/excluirCompra/:id', function(req, res, next) {
    compraController.excluirCompra(req, res);
});

module.exports = router;