// routes/compras.js

const express = require('express');
const router = express.Router();
const CompraService = require('../services/compraService');
const CompraController = require('../controllers/compraController');
const db = require('../models');

// Inicializar o serviço e o controlador
const compraService = new CompraService(db.Compra);
const compraController = new CompraController(compraService);

// Rota para criar uma nova compra
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
