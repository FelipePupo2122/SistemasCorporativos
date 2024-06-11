// controllers/requisicaoController.js

class RequisicaoController {
    constructor(requisicaoService) {
        this.requisicaoService = requisicaoService;
    }

    async criarRequisicao(req, res) {
        const { usuarioId, produtoId, quantidadeRequerida, centroCustoId } = req.body;
        try {
            const novaRequisicao = await this.requisicaoService.criarRequisicao(usuarioId, produtoId, quantidadeRequerida, centroCustoId);
            return res.status(201).json(novaRequisicao);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar nova requisição.' });
        }
    }

    async listarRequisicoes(req, res) {
        try {
            const requisicoes = await this.requisicaoService.listarRequisicoes();
            return res.status(200).json(requisicoes);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar requisições.' });
        }
    }

    async buscarRequisicao(req, res) {
        const { id } = req.params;
        try {
            const requisicao = await this.requisicaoService.buscarRequisicao(id);
            return res.status(200).json(requisicao);
        } catch (error) {
            return res.status(404).json({ error: 'Requisição não encontrada.' });
        }
    }

    async atualizarRequisicao(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const requisicaoAtualizada = await this.requisicaoService.atualizarRequisicao(id, dadosAtualizados);
            return res.status(200).json(requisicaoAtualizada);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar requisição.' });
        }
    }

    async excluirRequisicao(req, res) {
        const { id } = req.params;
        try {
            await this.requisicaoService.excluirRequisicao(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir requisição.' });
        }
    }
}

module.exports = RequisicaoController;
