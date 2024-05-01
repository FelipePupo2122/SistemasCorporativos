class DepositoController {
    constructor(depositoService) {
        this.depositoService = depositoService;
    }

    async novoDeposito(req, res) {
        const { nome, endereco } = req.body;
        try {
            const novoDeposito = await this.depositoService.criarDeposito(nome, endereco);
            res.status(200).json(novoDeposito);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo depósito.' });
        }
    }

    async listarDepositos(req, res) {
        try {
            const depositos = await this.depositoService.listarDepositos();
            res.status(200).json(depositos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar depósitos.' });
        }
    }
}

module.exports = DepositoController;
