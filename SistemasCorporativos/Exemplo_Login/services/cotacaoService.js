class CotacaoService {
    constructor(cotacaoModel) {
        this.Cotacao = cotacaoModel;
    }

    async criarCotacao(produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade) {
        try {
            const novaCotacao = await this.Cotacao.create({
                produtoId,
                fornecedorId,
                precoProposto,
                dataCotacao,
                compradorId,
                dataValidade
            });
            return novaCotacao;
        } catch (error) {
            throw error;
        }
    }

    async listarCotas() {
        try {
            const cotas = await this.Cotacao.findAll();
            return cotas;
        } catch (error) {
            throw error;
        }
    }

    async buscarCotacao(id) {
        try {
            const cotacao = await this.Cotacao.findByPk(id);
            if (!cotacao) throw new Error('Cotação não encontrada');
            return cotacao;
        } catch (error) {
            throw error;
        }
    }

    async atualizarCotacao(id, dadosAtualizados) {
        try {
            const [linhasAfetadas, [cotacaoAtualizada]] = await this.Cotacao.update(dadosAtualizados, {
                where: { id },
                returning: true
            });
            return cotacaoAtualizada;
        } catch (error) {
            throw error;
        }
    }

    async excluirCotacao(id) {
        try {
            await this.Cotacao.destroy({
                where: { id }
            });
        } catch (error) {
            throw error;
        }
    }

    async cotacaoComMenorPreco(produtoId) {
        try {
            const menorCotacao = await this.Cotacao.findOne({
                where: { produtoId },
                order: [['precoProposto', 'ASC']]
            });
            return menorCotacao;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CotacaoService;
