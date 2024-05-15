const express = require('express');
const router = express.Router();
const FornecedorController = require('../controllers/fornecedorController');

// Inicializar o controlador
const fornecedorController = new FornecedorController();

// Rotas CRUD para fornecedores
router.post('/criar', fornecedorController.criarFornecedor);
router.get('/listar', fornecedorController.listarFornecedores);
router.get('/buscar/:id', fornecedorController.buscarFornecedor);
router.put('/atualizar/:id', fornecedorController.atualizarFornecedor);
router.delete('/excluir/:id', fornecedorController.excluirFornecedor);

module.exports = router;
