// controllers/compraController.js

const CompraService = require('../services/compraService');

class CompraController {
    constructor() {
        this.compraService = new CompraService();
    }

    async criarCompra(req, res) {
        try {
            const novaCompra = await this.compraService.criarCompra(req.body);
            res.status(201).json(novaCompra);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar compra.' });
        }
    }

    async listarCompras(req, res) {
        try {
            const compras = await this.compraService.listarCompras();
            res.status(200).json(compras);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar compras.' });
        }
    }

    async atualizarCompra(req, res) {
        const { id } = req.params;
        try {
            const compraAtualizada = await this.compraService.atualizarCompra(id, req.body);
            res.status(200).json(compraAtualizada);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar compra.' });
        }
    }

    async excluirCompra(req, res) {
        const { id } = req.params;
        try {
            await this.compraService.excluirCompra(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir compra.' });
        }
    }
}

module.exports = CompraController;