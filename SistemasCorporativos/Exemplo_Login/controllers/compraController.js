class CompraController {
    constructor(compraService) {
        this.compraService = compraService;
    }

    async criarCompra(req, res) {
        const { fornecedorId, cotacaoId, compradorId, produtoId, quantidade, custoUnitario, numeroParcelas } = req.body;
        try {
            const novaCompra = await this.compraService.criarCompra(fornecedorId, cotacaoId, compradorId, produtoId, quantidade, custoUnitario, numeroParcelas);
            return res.status(201).json(novaCompra);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar nova compra.' });
        }
    }

    async listarCompras(req, res) {
        try {
            const compras = await this.compraService.listarCompras();
            return res.status(200).json(compras);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar compras.' });
        }
    }

    async editarCompra(req, res) {
        const { id } = req.params;
        try {
            const compraAtualizada = await this.compraService.atualizarCompra(id, req.body);
            return res.status(200).json(compraAtualizada);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar compra.' });
        }
    }

    async excluirCompra(req, res) {
        const { id } = req.params;
        try {
            await this.compraService.excluirCompra(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir compra.' });
        }
    }
}

module.exports = CompraController;
