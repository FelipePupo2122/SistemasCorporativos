const express = require('express');
const router = express.Router();
const DetalhesVendaController = require('../controllers/detalhesVendaController');
const DetalhesVendaService = require('../services/detalhesVendaService');
const DetalhesVenda = require('../models/DetalhesVenda');

// Inicialize o controller e os serviços
const detalhesVendaService = new DetalhesVendaService(DetalhesVenda);
const detalhesVendaController = new DetalhesVendaController(detalhesVendaService);

// Rotas
router.post('/novoDetalhesVenda', (req, res) => detalhesVendaController.novoDetalhesVenda(req, res));
router.get('/listarDetalhesVenda', (req, res) => detalhesVendaController.listarDetalhesVenda(req, res));
// Adicione outras rotas conforme necessário

module.exports = router;
