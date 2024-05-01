class DepositoService {
    constructor(DepositoModel) {
        this.Deposito = DepositoModel;
    }

    async criarDeposito(nome, endereco) {
        try {
            const novoDeposito = await this.Deposito.create({ nome, endereco });
            return novoDeposito;
        } catch (error) {
            throw error;
        }
    }

    async listarDepositos() {
        try {
            const depositos = await this.Deposito.findAll();
            return depositos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DepositoService;
