const express = require('express');
const router = express.Router();
const RequisicaoService = require('../services/requisicaoService');
const RequisicaoController = require('../controllers/requisicaoController');
const db = require('../models');

const authenticateToken = require('../middlewares/auth');

const requisicaoService = new RequisicaoService(db.Requisicao);
const requisicaoController = new RequisicaoController(requisicaoService);

router.post('/novaRequisicao', authenticateToken, (req, res) => requisicaoController.criarRequisicao(req, res));

router.get('/listarRequisicoes', authenticateToken, (req, res) => requisicaoController.listarRequisicoes(req, res));

router.get('/buscarRequisicao/:id', authenticateToken, (req, res) => requisicaoController.buscarRequisicao(req, res));

router.put('/atualizarRequisicao/:id', authenticateToken, (req, res) => requisicaoController.atualizarRequisicao(req, res));

router.delete('/excluirRequisicao/:id', authenticateToken, (req, res) => requisicaoController.excluirRequisicao(req, res));

module.exports = router;
