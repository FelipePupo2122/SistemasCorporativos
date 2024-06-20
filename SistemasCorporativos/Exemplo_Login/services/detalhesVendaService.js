class DetalhesVendaService {
    constructor(detalhesVendaModel) {
        this.DetalhesVenda = detalhesVendaModel;
    }

    async criarDetalhesVenda(quantidade, precoUnitario, registroVendasId) {
        try {
            // Criar um novo detalhe de venda no banco de dados
            const novoDetalhesVenda = await this.DetalhesVenda.create({ quantidade, precoUnitario, registroVendasId });
            return novoDetalhesVenda;
        } catch (error) {
            throw error;
        }
    }

    async listarDetalhesVenda() {
        try {
            // Listar todos os detalhes de venda do banco de dados
            const detalhesVenda = await this.DetalhesVenda.findAll();
            return detalhesVenda;
        } catch (error) {
            throw error;
        }
    }
    // Implemente outros métodos conforme necessário
}

module.exports = DetalhesVendaService;
