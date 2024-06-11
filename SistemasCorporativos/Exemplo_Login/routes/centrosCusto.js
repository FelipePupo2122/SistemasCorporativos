const express = require('express');
const router = express.Router();
const CentroCustoService = require('../services/centroCustoService');
const CentroCustoController = require('../controllers/centroCustoController');
const db = require('../models');

// Inicializar o serviço e o controlador
const centroCustoService = new CentroCustoService(db.CentroCusto);
const centroCustoController = new CentroCustoController(centroCustoService);

// Rota para criar um novo Centro de Custo
router.post('/novoCentroCusto', (req, res) => {
    centroCustoController.criarCentroCusto(req, res);
});

// Rota para listar todos os Centros de Custo
router.get('/listarCentrosCusto', (req, res) => {
    centroCustoController.listarCentrosCusto(req, res);
});

// Rota para buscar um Centro de Custo por ID
router.get('/buscarCentroCusto/:id', (req, res) => {
    centroCustoController.buscarCentroCusto(req, res);
});

// Rota para atualizar um Centro de Custo por ID
router.put('/atualizarCentroCusto/:id', (req, res) => {
    centroCustoController.atualizarCentroCusto(req, res);
});


router.delete('/excluirCentroCusto/:id', (req, res) => {
    centroCustoController.excluirCentroCusto(req, res);
});

module.exports = router;