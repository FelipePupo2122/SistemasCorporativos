const express = require('express');
const router = express.Router();
const RequisicaoService = require('../services/requisicaoService');
const RequisicaoController = require('../controllers/requisicaoController');
const db = require('../models');

// Inicializar o serviço e o controlador
const requisicaoService = new RequisicaoService(db.Requisicao);
const requisicaoController = new RequisicaoController(requisicaoService);

// Rota para criar uma nova requisição
router.post('/novaRequisicao', function(req, res, next) {
    requisicaoController.criarRequisicao(req, res);
});

// Rota para listar todas as requisições
router.get('/listarRequisicoes', function(req, res, next) {
    requisicaoController.listarRequisicoes(req, res);
});

// Rota para buscar uma requisição por ID
router.get('/buscarRequisicao/:id', function(req, res, next) {
    requisicaoController.buscarRequisicao(req, res);
});

// Rota para atualizar uma requisição por ID
router.put('/atualizarRequisicao/:id', function(req, res, next) {
    requisicaoController.atualizarRequisicao(req, res);
});

// Rota para excluir uma requisição por ID
router.delete('/excluirRequisicao/:id', function(req, res, next) {
    requisicaoController.excluirRequisicao(req, res);
});

module.exports = router;
