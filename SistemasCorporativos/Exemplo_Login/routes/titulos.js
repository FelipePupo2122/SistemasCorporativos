const express = require('express');
const router = express.Router();
const TituloService = require('../services/tituloService');
const TituloController = require('../controllers/tituloController');
const db = require('../models');

// Inicializar o serviço e o controlador
const tituloService = new TituloService(db.Titulo, db.MovimentoContasPagar);
const tituloController = new TituloController(tituloService);

// Rota para criar um novo título
router.post('/novoTitulo', (req, res) => tituloController.criarTitulo(req, res));

// Rota para listar todos os títulos
router.get('/listarTitulos', (req, res) => tituloController.listarTitulos(req, res));

// Rota para buscar um título por ID
router.get('/buscarTitulo/:id', (req, res) => tituloController.buscarTitulo(req, res));

// Rota para atualizar um título por ID
router.put('/atualizarTitulo/:id', (req, res) => tituloController.atualizarTitulo(req, res));

// Rota para excluir um título por ID
router.delete('/excluirTitulo/:id', (req, res) => tituloController.excluirTitulo(req, res));

module.exports = router;
