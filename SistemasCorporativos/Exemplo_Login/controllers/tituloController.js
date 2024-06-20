class TituloController {
    constructor(tituloService) {
        this.tituloService = tituloService;
    }

    async criarTitulo(req, res) {
        const dadosTitulo = req.body;
        try {
            const novoTitulo = await this.tituloService.criarTitulo(dadosTitulo);
            return res.status(201).json(novoTitulo);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar novo título.' });
        }
    }

    async listarTitulos(req, res) {
        try {
            const titulos = await this.tituloService.listarTitulos();
            return res.status(200).json(titulos);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar títulos.' });
        }
    }

    async buscarTitulo(req, res) {
        const { id } = req.params;
        try {
            const titulo = await this.tituloService.buscarTitulo(id);
            return res.status(200).json(titulo);
        } catch (error) {
            return res.status(404).json({ error: 'Título não encontrado.' });
        }
    }

    async atualizarTitulo(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const tituloAtualizado = await this.tituloService.atualizarTitulo(id, dadosAtualizados);
            return res.status(200).json(tituloAtualizado);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar título.' });
        }
    }

    async excluirTitulo(req, res) {
        const { id } = req.params;
        try {
            await this.tituloService.excluirTitulo(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir título.' });
        }
    }
}

module.exports = TituloController;
