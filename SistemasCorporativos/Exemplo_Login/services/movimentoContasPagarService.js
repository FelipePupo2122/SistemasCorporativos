// services/movimentoContasPagarService.js

class MovimentoContasPagarService {
    constructor(movimentoContasPagarModel) {
        this.MovimentoContasPagar = movimentoContasPagarModel;
    }

    async criarMovimento(dadosMovimento) {
        try {
            return await this.MovimentoContasPagar.create(dadosMovimento);
        } catch (error) {
            throw error;
        }
    }

    async listarMovimentos() {
        try {
            return await this.MovimentoContasPagar.findAll();
        } catch (error) {
            throw error;
        }
    }

    async buscarMovimento(id) {
        try {
            const movimento = await this.MovimentoContasPagar.findByPk(id);
            return movimento ? movimento : null;
        } catch (error) {
            throw error;
        }
    }

    async atualizarMovimento(id, dadosAtualizados) {
        try {
            const [linhasAfetadas, [movimentoAtualizado]] = await this.MovimentoContasPagar.update(dadosAtualizados, {
                where: { id },
                returning: true
            });
            return movimentoAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async excluirMovimento(id) {
        try {
            await this.MovimentoContasPagar.destroy({
                where: { id }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MovimentoContasPagarService;
