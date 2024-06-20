class RegistroVendasController {
    constructor(registroVendasService) {
        this.registroVendasService = registroVendasService;
    }

    async novoRegistroVendas(req, res) {
        const dadosRegistroVendas = req.body;
        try {
            const novoRegistroVendas = await this.registroVendasService.criarRegistroVendas(dadosRegistroVendas);
            res.status(201).json(novoRegistroVendas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo registro de vendas.' });
        }
    }

    async listarRegistrosVendas(req, res) {
        try {
            const registrosVendas = await this.registroVendasService.listarRegistrosVendas();
            res.status(200).json(registrosVendas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar registros de vendas.' });
        }
    }
}

module.exports = RegistroVendasController;
