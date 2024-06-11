class CentroCustoService {
    constructor(centroCustoModel) {
        this.CentroCusto = centroCustoModel;
    }

    async criarCentroCusto(codigo, nome) {
        try {
            const novoCentroCusto = await this.CentroCusto.create({ codigo, nome });
            return novoCentroCusto;
        } catch (error) {
            throw error;
        }
    }

    async listarCentrosCusto() {
        try {
            const centrosCusto = await this.CentroCusto.findAll();
            return centrosCusto;
        } catch (error) {
            throw error;
        }
    }

    async buscarCentroCusto(id) {
        try {
            const centroCusto = await this.CentroCusto.findByPk(id);
            if (!centroCusto) throw new Error('Centro de Custo não encontrado');
            return centroCusto;
        } catch (error) {
            throw error;
        }
    }

    async atualizarCentroCusto(id, dadosAtualizados) {
        try {
            const [linhasAfetadas, [centroCustoAtualizado]] = await this.CentroCusto.update(dadosAtualizados, {
                where: { id },
                returning: true
            });
            return centroCustoAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async excluirCentroCusto(id) {
        try {
            await this.CentroCusto.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CentroCustoService;
