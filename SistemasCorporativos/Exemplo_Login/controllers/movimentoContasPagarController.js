// controllers/movimentoContasPagarController.js

class MovimentoContasPagarController {
    constructor(movimentoContasPagarService) {
        this.movimentoContasPagarService = movimentoContasPagarService;
    }

    async criarMovimento(req, res) {
        const dadosMovimento = req.body;
        try {
            const novoMovimento = await this.movimentoContasPagarService.criarMovimento(dadosMovimento);
            return res.status(201).json(novoMovimento);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar novo movimento.' });
        }
    }

    async listarMovimentos(req, res) {
        try {
            const movimentos = await this.movimentoContasPagarService.listarMovimentos();
            return res.status(200).json(movimentos);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar movimentos.' });
        }
    }

    async buscarMovimento(req, res) {
        const { id } = req.params;
        try {
            const movimento = await this.movimentoContasPagarService.buscarMovimento(id);
            return res.status(200).json(movimento);
        } catch (error) {
            return res.status(404).json({ error: 'Movimento não encontrado.' });
        }
    }

    async atualizarMovimento(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const movimentoAtualizado = await this.movimentoContasPagarService.atualizarMovimento(id, dadosAtualizados);
            return res.status(200).json(movimentoAtualizado);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar movimento.' });
        }
    }

    async excluirMovimento(req, res) {
        const { id } = req.params;
        try {
            await this.movimentoContasPagarService.excluirMovimento(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir movimento.' });
        }
    }
}

module.exports = MovimentoContasPagarController;
