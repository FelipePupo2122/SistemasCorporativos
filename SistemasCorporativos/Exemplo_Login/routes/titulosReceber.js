const express = require('express');
const router = express.Router();
const TitulosReceberController = require('../controllers/titulosReceberController');

module.exports = (titulosReceberService) => {
    const titulosReceberController = new TitulosReceberController(titulosReceberService);

    router.post('/novoTituloReceber', (req, res) => titulosReceberController.novoTituloReceber(req, res));
    router.get('/listarTitulosReceber', (req, res) => titulosReceberController.listarTitulosReceber(req, res));

    return router;
};
