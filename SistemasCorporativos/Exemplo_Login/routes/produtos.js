const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth'); // Middleware para autenticação JWT

const db = require('../models');
const ProdutoService = require('../services/produtoService');
const ProdutoController = require('../controllers/produtoController');
const Produto = db.Produto;
const produtoService = new ProdutoService(Produto);
const produtoController = new ProdutoController(produtoService);

// Rota para criar um novo produto (autenticada)
router.post('/novoProduto', authenticateToken, (req, res) => produtoController.novoProduto(req, res));

// Rota para listar todos os produtos (autenticada)
router.get('/listarProdutos', authenticateToken, (req, res) => produtoController.listarProdutos(req, res));

module.exports = router;
