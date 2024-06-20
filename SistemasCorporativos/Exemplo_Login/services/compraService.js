const Compra = require('../models/compra');

class CompraService {
    constructor(compraModel) {
        this.Compra = compraModel;
    }

    async criarCompra(fornecedorId, cotacaoId, compradorId, produtoId, quantidade, custoUnitario, numeroParcelas) {
        try {
            const novaCompra = await this.Compra.create({
                fornecedorId,
                cotacaoId,
                compradorId,
                produtoId,
                quantidade,
                custoUnitario,
                numeroParcelas
            });
            return novaCompra;
        } catch (error) {
            throw error;
        }
    }

    async listarCompras() {
        try {
            const compras = await Compra.findAll();
            return compras;
        } catch (error) {
            throw error;
        }
    }

    async atualizarCompra(id, dadosAtualizados) {
        try {
            await Compra.update(dadosAtualizados, {
                where: { id: id }
            });
            const compraAtualizada = await Compra.findByPk(id);
            return compraAtualizada;
        } catch (error) {
            throw error;
        }
    }

    async excluirCompra(id) {
        try {
            await Compra.destroy({
                where: { id: id }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CompraService;
