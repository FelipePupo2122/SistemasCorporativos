class TitulosReceberController {
    constructor(titulosReceberService) {
        this.titulosReceberService = titulosReceberService;
    }

    async novoTituloReceber(req, res) {
        const dadosTituloReceber = req.body;
        try {
            const novoTituloReceber = await this.titulosReceberService.criarTituloReceber(dadosTituloReceber);
            res.status(201).json(novoTituloReceber);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo título de contas a receber.' });
        }
    }

    async listarTitulosReceber(req, res) {
        try {
            const titulosReceber = await this.titulosReceberService.listarTitulosReceber();
            res.status(200).json(titulosReceber);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar títulos de contas a receber.' });
        }
    }
}

module.exports = TitulosReceberController;
