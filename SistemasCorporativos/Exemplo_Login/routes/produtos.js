const express = require('express');
const router = express.Router();

const db = require('../models');
const ProdutoService = require('../services/produtoService');
const ProdutoController = require('../controllers/produtoController');
const Produto = db.Produto;
const produtoService = new ProdutoService(Produto);
const produtoController = new ProdutoController(produtoService);

router.post('/novoProduto', function(req, res, next) {
    produtoController.novoProduto(req, res);
});

router.get('/listarProdutos', function(req, res, next) {
    produtoController.listarProdutos(req, res);
});

module.exports = router;
