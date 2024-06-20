class TituloService {
    constructor(tituloModel, movimentoContasPagarModel) {
        this.Titulo = tituloModel;
        this.MovimentoContasPagar = movimentoContasPagarModel;
    }

    async criarTitulo(dadosTitulo) {
        try {
            const novoTitulo = await this.Titulo.create(dadosTitulo);

            // Cria movimento de abertura
            await this.MovimentoContasPagar.create({
                tituloId: novoTitulo.id,
                dataMovimento: new Date(),
                tipoMoviment: 'Abertura',
                valorMovimento: dadosTitulo.valorOriginal
            });

            return novoTitulo;
        } catch (error) {
            throw error;
        }
    }

    async listarTitulos() {
        try {
            return await this.Titulo.findAll();
        } catch (error) {
            throw error;
        }
    }

    async buscarTitulo(id) {
        try {
            return await this.Titulo.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    async atualizarTitulo(id, dadosAtualizados) {
        try {
            const [linhasAfetadas, [tituloAtualizado]] = await this.Titulo.update(dadosAtualizados, {
                where: { id },
                returning: true
            });
            return tituloAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async excluirTitulo(id) {
        try {
            await this.Titulo.destroy({
                where: { id }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TituloService;
