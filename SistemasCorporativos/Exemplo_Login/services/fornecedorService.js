class FornecedorService {
    constructor(fornecedorModel) {
        this.Fornecedor = fornecedorModel;
    }

    async criarFornecedor(nome, localidade, cnpj, responsavel) {
        try {
            const novoFornecedor = await this.Fornecedor.create({
                nome,
                localidade,
                cnpj,
                responsavel
            });
            return novoFornecedor;
        } catch (error) {
            throw error;
        }
    }

    async listarFornecedores() {
        try {
            const fornecedores = await this.Fornecedor.findAll();
            return fornecedores;
        } catch (error) {
            throw error;
        }
    }

    async buscarFornecedor(id) {
        try {
            const fornecedor = await this.Fornecedor.findByPk(id);
            if (!fornecedor) throw new Error('Fornecedor não encontrado');
            return fornecedor;
        } catch (error) {
            throw error;
        }
    }

    async atualizarFornecedor(id, dadosAtualizados) {
        try {
            const [linhasAfetadas, [fornecedorAtualizado]] = await this.Fornecedor.update(dadosAtualizados, {
                where: { id },
                returning: true // Retorna o registro atualizado
            });
            return fornecedorAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async excluirFornecedor(id) {
        try {
            await this.Fornecedor.destroy({
                where: { id }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FornecedorService;
