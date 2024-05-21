class FornecedorController {
    constructor(fornecedorService) {
        this.fornecedorService = fornecedorService;
    }

    async criarFornecedor(req, res) {
        const { nome, localidade, cnpj, responsavel } = req.body;
        try {
            const novoFornecedor = await this.fornecedorService.criarFornecedor(nome, localidade, cnpj, responsavel);
            return res.status(201).json(novoFornecedor);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar novo fornecedor.' });
        }
    }

    async listarFornecedores(req, res) {
        try {
            const fornecedores = await this.fornecedorService.listarFornecedores();
            return res.status(200).json(fornecedores);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar fornecedores.' });
        }
    }

    async buscarFornecedor(req, res) {
        const { id } = req.params;
        try {
            const fornecedor = await this.fornecedorService.buscarFornecedor(id);
            return res.status(200).json(fornecedor);
        } catch (error) {
            return res.status(404).json({ error: 'Fornecedor não encontrado.' });
        }
    }

    async atualizarFornecedor(req, res) {
        const { id } = req.params;
        const { nome, localidade, cnpj, responsavel } = req.body;
        try {
            const fornecedorAtualizado = await this.fornecedorService.atualizarFornecedor(id, { nome, localidade, cnpj, responsavel });
            return res.status(200).json(fornecedorAtualizado);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar fornecedor.' });
        }
    }

    async excluirFornecedor(req, res) {
        const { id } = req.params;
        try {
            await this.fornecedorService.excluirFornecedor(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir fornecedor.' });
        }
    }
}

module.exports = FornecedorController;
