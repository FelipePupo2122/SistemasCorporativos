class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }

    async criarCliente(req, res) {
        const { nome, email, telefone } = req.body;
        try {
            const novoCliente = await this.clienteService.criarCliente(nome, email, telefone);
            return res.status(201).json(novoCliente);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar novo cliente.' });
        }
    }

    async listarClientes(req, res) {
        try {
            const clientes = await this.clienteService.listarClientes();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar clientes.' });
        }
    }

    async buscarCliente(req, res) {
        const { id } = req.params;
        try {
            const cliente = await this.clienteService.buscarCliente(id);
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar cliente.' });
        }
    }

    async atualizarCliente(req, res) {
        const { id } = req.params;
        try {
            const clienteAtualizado = await this.clienteService.atualizarCliente(id, req.body);
            return res.status(200).json(clienteAtualizado);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar cliente.' });
        }
    }

    async excluirCliente(req, res) {
        const { id } = req.params;
        try {
            await this.clienteService.excluirCliente(id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir cliente.' });
        }
    }
}

module.exports = ClienteController;
