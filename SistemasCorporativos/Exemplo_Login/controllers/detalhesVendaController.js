class DetalhesVendaController {
    constructor(detalhesVendaService) {
        this.detalhesVendaService = detalhesVendaService;
    }

    async novoDetalhesVenda(req, res) {
        try {
            // Extrair dados do corpo da requisição
            const { quantidade, precoUnitario, registroVendasId } = req.body;
            // Chamar o serviço para criar um novo detalhe de venda
            const novoDetalhesVenda = await this.detalhesVendaService.criarDetalhesVenda(quantidade, precoUnitario, registroVendasId);
            // Retornar o novo detalhe de venda como resposta
            res.status(201).json(novoDetalhesVenda);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo detalhe de venda.' });
        }
    }

    async listarDetalhesVenda(req, res) {
        try {
            // Chamar o serviço para listar todos os detalhes de venda
            const detalhesVenda = await this.detalhesVendaService.listarDetalhesVenda();
            // Retornar os detalhes de venda como resposta
            res.status(200).json(detalhesVenda);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar detalhes de venda.' });
        }
    }
    // Implemente outros métodos conforme necessário
}

module.exports = DetalhesVendaController;
