class CotacaoController {
    constructor(cotacaoService) {
        this.cotacaoService = cotacaoService;
    }

    async criarCotacao(req, res) {
        const { produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade } = req.body;
        try {
            const novaCotacao = await this.cotacaoService.criarCotacao(produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade);
            return res.status(201).json(novaCotacao);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar nova cotação.' });
        }
    }

    async listarCotas(req, res) {
        try {
            const cotas = await this.cotacaoService.listarCotas();
            return res.status(200).json(cotas);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar cotações.' });
        }
    }

    async buscarCotacao(req, res) {
        const { id } = req.params;
        try {
            const cotacao = await this.cotacaoService.buscarCotacao(id);
            return res.status(200).json(cotacao);
        } catch (error) {
            return res.status(404).json({ error: 'Cotação não encontrada.' });
        }
    }

    async atualizarCotacao(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const cotacaoAtualizada = await this.cotacaoService.atualizarCotacao(id, dadosAtualizados);
            return res.status(200).json(cotacaoAtualizada);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar cotação.' });
        }
    }

    async excluirCotacao(req, res) {
        const { id } = req.params;
        try {
            await this.cotacaoService.excluirCotacao(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir cotação.' });
        }
    }

    async cotacaoComMenorPreco(req, res) {
        const { produtoId } = req.params;
        try {
            const menorCotacao = await this.cotacaoService.cotacaoComMenorPreco(produtoId);
            return res.status(200).json(menorCotacao);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar cotação com menor preço.' });
        }
    }

    async selecionarCotacaoMenorPreco(req, res) {
        const { produtoId } = req.params;
        try {
            const menorCotacao = await this.cotacaoService.cotacaoComMenorPreco(produtoId);
            return res.status(200).json(menorCotacao);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar cotação com menor preço.' });
        }
    }
}

module.exports = CotacaoController;
