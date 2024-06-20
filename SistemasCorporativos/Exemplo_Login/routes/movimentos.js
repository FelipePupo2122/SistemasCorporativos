const express = require('express');
const router = express.Router();
const MovimentoService = require('../services/movimentoService');
const MovimentoController = require('../controllers/movimentoController');
const db = require('../models');

const Movimento = db.Movimento;
const Produto = db.Produto;
const movimentoService = new MovimentoService(Movimento, Produto);
const movimentoController = new MovimentoController(movimentoService);

router.post('/novoMovimento', (req, res) => movimentoController.novoMovimento(req, res));
router.get('/listarMovimentos', (req, res) => movimentoController.listarMovimentos(req, res));

module.exports = router;
