const express = require('express');
const router = express.Router();
const CotacaoService = require('../services/cotacaoService');
const CotacaoController = require('../controllers/cotacaoController');
const db = require('../models');

// Inicializar o serviço e o controlador
const cotacaoService = new CotacaoService(db.Cotacao);
const cotacaoController = new CotacaoController(cotacaoService);

// Rota para criar uma nova cotação
router.post('/novaCotacao', function(req, res, next) {
    cotacaoController.criarCotacao(req, res);
});

// Rota para listar todas as cotações
router.get('/listarCotas', function(req, res, next) {
    cotacaoController.listarCotas(req, res);
});

// Rota para buscar uma cotação por ID
router.get('/buscarCotacao/:id', function(req, res, next) {
    cotacaoController.buscarCotacao(req, res);
});

// Rota para atualizar uma cotação por ID
router.put('/atualizarCotacao/:id', function(req, res, next) {
    cotacaoController.atualizarCotacao(req, res);
});

// Rota para excluir uma cotação por ID
router.delete('/excluirCotacao/:id', function(req, res, next) {
    cotacaoController.excluirCotacao(req, res);
});

// Rota para buscar a cotação com o menor preço para um produto específico
router.get('/menorPreco/:produtoId', function(req, res, next) {
    cotacaoController.selecionarCotacaoMenorPreco(req, res);
});

module.exports = router;
