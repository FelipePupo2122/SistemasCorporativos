class MovimentoController {
    constructor(movimentoService) {
        this.movimentoService = movimentoService;
    }

    async novoMovimento(req, res) {
        const { tipoMovimento, quantidade, produtoId } = req.body;
        try {
            const novoMovimento = await this.movimentoService.criarMovimento(tipoMovimento, quantidade, produtoId);
            res.status(200).json(novoMovimento);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo movimento.' });
        }
    }

    async listarMovimentos(req, res) {
        try {
            const movimentos = await this.movimentoService.listarMovimentos();
            res.status(200).json(movimentos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar movimentos.' });
        }
    }
}

module.exports = MovimentoController;
