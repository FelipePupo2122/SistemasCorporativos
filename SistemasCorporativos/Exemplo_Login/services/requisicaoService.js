// services/requisicaoService.js

class RequisicaoService {
    constructor(requisicaoModel) {
        this.Requisicao = requisicaoModel;
    }

    async criarRequisicao(usuarioId, produtoId, quantidadeRequerida, centroCustoId) {
        try {
            const novaRequisicao = await this.Requisicao.create({
                usuarioId,
                produtoId,
                quantidadeRequerida,
                centroCustoId
            });
            return novaRequisicao;
        } catch (error) {
            throw error;
        }
    }

    async listarRequisicoes() {
        try {
            const requisicoes = await this.Requisicao.findAll();
            return requisicoes;
        } catch (error) {
            throw error;
        }
    }

    async buscarRequisicao(id) {
        try {
            const requisicao = await this.Requisicao.findByPk(id);
            if (!requisicao) throw new Error('Requisição não encontrada');
            return requisicao;
        } catch (error) {
            throw error;
        }
    }

    async atualizarRequisicao(id, dadosAtualizados) {
        try {
            const [linhasAfetadas, [requisicaoAtualizada]] = await this.Requisicao.update(dadosAtualizados, {
                where: { id },
                returning: true
            });
            return requisicaoAtualizada;
        } catch (error) {
            throw error;
        }
    }

    async excluirRequisicao(id) {
        try {
            await this.Requisicao.destroy({
                where: { id }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RequisicaoService;
