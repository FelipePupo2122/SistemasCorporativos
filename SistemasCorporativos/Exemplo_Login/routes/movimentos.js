const express = require('express');
const router = express.Router();

const db = require('../models');
const MovimentoService = require('../services/movimentoService');
const MovimentoController = require('../controllers/movimentoController');
const Movimento = db.Movimento;
const Produto = db.Produto; // Adicionado para permitir a atualização da quantidade
const movimentoService = new MovimentoService(Movimento, Produto); // Passando o modelo de Produto
const movimentoController = new MovimentoController(movimentoService);

router.post('/novoMovimento', function(req, res, next) {
    movimentoController.novoMovimento(req, res);
});

router.get('/listarMovimentos', function(req, res, next) {
    movimentoController.listarMovimentos(req, res);
});

module.exports = router;
