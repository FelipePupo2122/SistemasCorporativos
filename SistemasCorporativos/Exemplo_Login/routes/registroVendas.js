const express = require('express');
const router = express.Router();
const RegistroVendasController = require('../controllers/registroVendasController');

module.exports = (registroVendasService) => {
    const registroVendasController = new RegistroVendasController(registroVendasService);

    router.post('/novoRegistroVendas', (req, res) => registroVendasController.novoRegistroVendas(req, res));
    router.get('/listarRegistrosVendas', (req, res) => registroVendasController.listarRegistrosVendas(req, res));

    return router;
};
