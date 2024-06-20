class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }

    async novoProduto(req, res) {
        const { nome, descricao, depositoId } = req.body;
        try {
            const novoProduto = await this.produtoService.criarProduto(nome, descricao, depositoId);
            res.status(201).json(novoProduto); // Alterado status para 201 (Criado)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo produto.' });
        }
    }

    async listarProdutos(req, res) {
        try {
            const produtos = await this.produtoService.listarProdutos();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar produtos.' });
        }
    }
}

module.exports = ProdutoController;
