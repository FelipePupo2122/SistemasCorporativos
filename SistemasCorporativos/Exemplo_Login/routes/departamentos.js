// routes/departamentos.js
const express = require('express');
const router = express.Router();

const db = require('../models');
const DepartamentoService = require('../services/departamentoService');
const DepartamentoController = require('../controllers/departamentoController');
const Departamento = db.Departamento;
const departamentoService = new DepartamentoService(Departamento);
const departamentoController = new DepartamentoController(departamentoService);

router.post('/', function(req, res, next) {
    departamentoController.criarDepartamento(req, res);
});

router.get('/', function(req, res, next) {
    departamentoController.listarDepartamentos(req, res);
});

router.get('/:id', function(req, res, next) {
    departamentoController.buscarDepartamentoPorId(req, res);
});

router.put('/:id', function(req, res, next) {
    departamentoController.atualizarDepartamento(req, res);
});

router.delete('/:id', function(req, res, next) {
    departamentoController.deletarDepartamento(req, res);
});

module.exports = router;
