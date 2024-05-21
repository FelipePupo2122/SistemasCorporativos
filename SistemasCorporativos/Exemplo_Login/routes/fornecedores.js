const express = require('express');
const router = express.Router();
const FornecedorService = require('../services/fornecedorService');
const FornecedorController = require('../controllers/fornecedorController');
const db = require('../models');

// Inicializar o serviço e o controlador
const fornecedorService = new FornecedorService(db.Fornecedor);
const fornecedorController = new FornecedorController(fornecedorService);

// Rota para criar um novo fornecedor
router.post('/novoFornecedor', function(req, res, next) {
    fornecedorController.criarFornecedor(req, res);
});

// Rota para listar todos os fornecedores
router.get('/listarFornecedores', function(req, res, next) {
    fornecedorController.listarFornecedores(req, res);
});

// Rota para buscar um fornecedor por ID
router.get('/buscarFornecedor/:id', function(req, res, next) {
    fornecedorController.buscarFornecedor(req, res);
});

// Rota para atualizar um fornecedor por ID
router.put('/atualizarFornecedor/:id', function(req, res, next) {
    fornecedorController.atualizarFornecedor(req, res);
});

// Rota para excluir um fornecedor por ID
router.delete('/excluirFornecedor/:id', function(req, res, next) {
    fornecedorController.excluirFornecedor(req, res);
});

module.exports = router;
