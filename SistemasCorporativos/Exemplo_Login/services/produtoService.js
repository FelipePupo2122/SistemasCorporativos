// services/produtoService.js

class ProdutoService {
    constructor(produtoModel) {
        this.Produto = produtoModel;
    }

    async criarProduto(nome, descricao, depositoId) {
        try {
            const novoProduto = await this.Produto.create({ nome, descricao, depositoId });
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

module.exports = ProdutoService;
