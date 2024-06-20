const express = require('express');
const router = express.Router();
const db = require('../models');
const ClienteService = require('../services/clienteService');
const ClienteController = require('../controllers/clienteController');

const clienteService = new ClienteService(db.Cliente);
const clienteController = new ClienteController(clienteService);

router.post('/novoCliente', (req, res) => clienteController.createCliente(req, res));

router.get('/listarClientes', (req, res) => clienteController.getAllClientes(req, res));

router.get('/cliente/:id', (req, res) => clienteController.getClienteById(req, res));

router.put('/editarCliente/:id', (req, res) => clienteController.updateCliente(req, res));

router.delete('/excluirCliente/:id', (req, res) => clienteController.deleteCliente(req, res));

module.exports = router;
