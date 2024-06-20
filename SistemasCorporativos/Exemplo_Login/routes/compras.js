const express = require('express');
const router = express.Router();
const db = require('../models');
const CompraService = require('../services/compraService');
const CompraController = require('../controllers/compraController');

const compraService = new CompraService(db.Compra);
const compraController = new CompraController(compraService);

router.post('/novaCompra', (req, res) => compraController.criarCompra(req, res));

router.get('/listarCompras', (req, res) => compraController.listarCompras(req, res));

router.put('/editarCompra/:id', (req, res) => compraController.editarCompra(req, res));

router.delete('/excluirCompra/:id', (req, res) => compraController.excluirCompra(req, res));

module.exports = router;
