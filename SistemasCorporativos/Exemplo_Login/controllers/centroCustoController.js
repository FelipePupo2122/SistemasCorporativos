class CentroCustoController {
    constructor(centroCustoService) {
        this.centroCustoService = centroCustoService;
    }

    async criarCentroCusto(req, res) {
        const { codigo, nome } = req.body;
        try {
            const novoCentroCusto = await this.centroCustoService.criarCentroCusto(codigo, nome);
            return res.status(201).json(novoCentroCusto);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar novo Centro de Custo.' });
        }
    }

    async listarCentrosCusto(req, res) {
        try {
            const centrosCusto = await this.centroCustoService.listarCentrosCusto();
            return res.status(200).json(centrosCusto);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar Centros de Custo.' });
        }
    }

    async buscarCentroCusto(req, res) {
        const { id } = req.params;
        try {
            const centroCusto = await this.centroCustoService.buscarCentroCusto(id);
            return res.status(200).json(centroCusto);
        } catch (error) {
            return res.status(404).json({ error: 'Centro de Custo não encontrado.' });
        }
    }

    async atualizarCentroCusto(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const centroCustoAtualizado = await this.centroCustoService.atualizarCentroCusto(id, dadosAtualizados);
            return res.status(200).json(centroCustoAtualizado);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar Centro de Custo.' });
        }
    }

    async excluirCentroCusto(req, res) {
        const { id } = req.params;
        try {
            await this.centroCustoService.excluirCentroCusto(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir Centro de Custo.' });
        }
    }
}

module.exports = CentroCustoController;
