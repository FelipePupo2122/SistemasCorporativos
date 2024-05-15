// services/movimentoService.js
class MovimentoService {
    constructor(movimentoModel, produtoModel) {
        this.Movimento = movimentoModel;
        this.Produto = produtoModel;
    }

    async criarMovimento(tipoMovimento, quantidade, produtoId) {
        try {
            const novoMovimento = await this.Movimento.create({ tipoMovimento, quantidade, produtoId });

            // Atualizar a quantidade do produto após cada movimento
            const produto = await this.Produto.findByPk(produtoId);
            if (tipoMovimento === 'entrada') {
                produto.quantidade += quantidade;
            } else if (tipoMovimento === 'saida') {
                produto.quantidade -= quantidade;
            }
            await produto.save();

            return novoMovimento;
        } catch (error) {
            throw error;
        }
    }

    async listarMovimentos() {
        try {
            const movimentos = await this.Movimento.findAll();
            return movimentos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MovimentoService;
