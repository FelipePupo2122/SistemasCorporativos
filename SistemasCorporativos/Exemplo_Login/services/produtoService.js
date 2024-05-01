class produtoService {
    constructor(produtoModel) {
        this.Produto = produtoModel;
    }

    async criarProduto(nome, descricao, quantidade, depositoId) {
        try {
            const novoProduto = await this.Produto.create({ nome, descricao, quantidade, depositoId });
            return novoProduto;
        } catch (error) {
            throw error;
        }
    }

    async listarProdutos() {
        try {
            const produtos = await this.Produto.findAll();
            return produtos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = produtoService;
