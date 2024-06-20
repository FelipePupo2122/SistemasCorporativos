class ClienteService {
    constructor(clienteModel) {
        this.Cliente = clienteModel;
    }

    async createCliente(clienteData) {
        try {
            const cliente = await this.Cliente.create(clienteData);
            return cliente;
        } catch (error) {
            throw new Error('Erro ao criar cliente: ' + error.message);
        }
    }

    async getAllClientes() {
        try {
            const clientes = await this.Cliente.findAll();
            return clientes;
        } catch (error) {
            throw new Error('Erro ao buscar clientes: ' + error.message);
        }
    }

    async getClienteById(clienteId) {
        try {
            const cliente = await this.Cliente.findByPk(clienteId);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }
            return cliente;
        } catch (error) {
            throw new Error('Erro ao buscar cliente por ID: ' + error.message);
        }
    }

    async updateCliente(clienteId, clienteData) {
        try {
            const cliente = await this.Cliente.findByPk(clienteId);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }
            await cliente.update(clienteData);
            return cliente;
        } catch (error) {
            throw new Error('Erro ao atualizar cliente: ' + error.message);
        }
    }

    async deleteCliente(clienteId) {
        try {
            const cliente = await this.Cliente.findByPk(clienteId);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }
            await cliente.destroy();
        } catch (error) {
            throw new Error('Erro ao excluir cliente: ' + error.message);
        }
    }
}

module.exports = ClienteService;
