// services/departamentoService.js
class DepartamentoService {
    constructor(departamentoModel) {
        this.Departamento = departamentoModel;
    }

    async criarDepartamento(codigo, nome) {
        try {
            const novoDepartamento = await this.Departamento.create({ codigo, nome });
            return novoDepartamento;
        } catch (error) {
            throw error;
        }
    }

    async listarDepartamentos() {
        try {
            const departamentos = await this.Departamento.findAll();
            return departamentos;
        } catch (error) {
            throw error;
        }
    }

    async buscarDepartamentoPorId(id) {
        try {
            const departamento = await this.Departamento.findByPk(id);
            if (!departamento) {
                throw new Error('Departamento não encontrado');
            }
            return departamento;
        } catch (error) {
            throw error;
        }
    }

    async atualizarDepartamento(id, codigo, nome) {
        try {
            const departamento = await this.buscarDepartamentoPorId(id);
            if (departamento) {
                departamento.codigo = codigo;
                departamento.nome = nome;
                await departamento.save();
                return departamento;
            }
        } catch (error) {
            throw error;
        }
    }

    async deletarDepartamento(id) {
        try {
            const departamento = await this.buscarDepartamentoPorId(id);
            if (departamento) {
                await departamento.destroy();
                return { message: 'Departamento deletado com sucesso' };
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DepartamentoService;
