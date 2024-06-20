class RegistroVendasService {
    constructor(registroVendasModel) {
        this.RegistroVendas = registroVendasModel;
    }

    async criarRegistroVendas(dadosRegistroVendas) {
        try {
            const novoRegistroVendas = await this.RegistroVendas.create(dadosRegistroVendas);
            return novoRegistroVendas;
        } catch (error) {
            throw error;
        }
    }

    async listarRegistrosVendas() {
        try {
            const registrosVendas = await this.RegistroVendas.findAll({ include: [{ all: true }] });
            return registrosVendas;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RegistroVendasService;
