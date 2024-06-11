const express = require('express');
const router = express.Router();

const db = require('../models');
const DepartamentoService = require('../services/departamentoService');
const DepartamentoController = require('../controllers/departamentoController');
const Departamento = db.Departamento;
const departamentoService = new DepartamentoService(Departamento);
const departamentoController = new DepartamentoController(departamentoService);

router.post('/', (req, res) => {
    departamentoController.criarDepartamento(req, res);
});

router.get('/', (req, res) => {
    departamentoController.listarDepartamentos(req, res);
});

router.get('/:id', (req, res) => {
    departamentoController.buscarDepartamentoPorId(req, res);
});

router.put('/:id', (req, res) => {
    departamentoController.atualizarDepartamento(req, res);
});

router.delete('/:id', (req, res) => {
    departamentoController.deletarDepartamento(req, res);
});

module.exports = router;
