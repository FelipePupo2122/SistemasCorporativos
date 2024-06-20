const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth'); // Middleware para autenticação JWT

const FornecedorService = require('../services/fornecedorService');
const FornecedorController = require('../controllers/fornecedorController');
const db = require('../models');

// Inicializar o serviço e o controlador
const fornecedorService = new FornecedorService(db.Fornecedor);
const fornecedorController = new FornecedorController(fornecedorService);

// Rota para criar um novo fornecedor (autenticada)
router.post('/novoFornecedor', authenticateToken, (req, res) => {
    fornecedorController.criarFornecedor(req, res);
});

// Rota para listar todos os fornecedores (autenticada)
router.get('/listarFornecedores', authenticateToken, (req, res) => {
    fornecedorController.listarFornecedores(req, res);
});

// Rota para buscar um fornecedor por ID (autenticada)
router.get('/buscarFornecedor/:id', authenticateToken, (req, res) => {
    fornecedorController.buscarFornecedor(req, res);
});

// Rota para atualizar um fornecedor por ID (autenticada)
router.put('/atualizarFornecedor/:id', authenticateToken, (req, res) => {
    fornecedorController.atualizarFornecedor(req, res);
});

// Rota para excluir um fornecedor por ID (autenticada)
router.delete('/excluirFornecedor/:id', authenticateToken, (req, res) => {
    fornecedorController.excluirFornecedor(req, res);
});

module.exports = router;
