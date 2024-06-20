const express = require('express');
const router = express.Router();
const MovimentoContasPagarService = require('../services/movimentoContasPagarService');
const MovimentoContasPagarController = require('../controllers/movimentoContasPagarController');
const db = require('../models');

const movimentoContasPagarService = new MovimentoContasPagarService(db.MovimentoContasPagar);
const movimentoContasPagarController = new MovimentoContasPagarController(movimentoContasPagarService);

// Rota para criar um novo movimento
router.post('/novoMovimento', (req, res) => movimentoContasPagarController.criarMovimento(req, res));

// Rota para listar todos os movimentos
router.get('/listarMovimentos', (req, res) => movimentoContasPagarController.listarMovimentos(req, res));

// Rota para buscar um movimento por ID
router.get('/buscarMovimento/:id', (req, res) => movimentoContasPagarController.buscarMovimento(req, res));

// Rota para atualizar um movimento por ID
router.put('/atualizarMovimento/:id', (req, res) => movimentoContasPagarController.atualizarMovimento(req, res));

// Rota para excluir um movimento por ID
router.delete('/excluirMovimento/:id', (req, res) => movimentoContasPagarController.excluirMovimento(req, res));

module.exports = router;
