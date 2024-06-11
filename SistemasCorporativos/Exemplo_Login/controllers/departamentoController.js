class DepartamentoController {
    constructor(departamentoService) {
        this.departamentoService = departamentoService;
    }

    async criarDepartamento(req, res) {
        const { codigo, nome } = req.body;
        try {
            const novoDepartamento = await this.departamentoService.criarDepartamento(codigo, nome);
            res.status(201).json(novoDepartamento);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar novo departamento.' });
        }
    }

    async listarDepartamentos(req, res) {
        try {
            const departamentos = await this.departamentoService.listarDepartamentos();
            res.status(200).json(departamentos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar departamentos.' });
        }
    }

    async buscarDepartamentoPorId(req, res) {
        const id = req.params.id;
        try {
            const departamento = await this.departamentoService.buscarDepartamentoPorId(id);
            res.status(200).json(departamento);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar departamento.' });
        }
    }

    async atualizarDepartamento(req, res) {
        const id = req.params.id;
        const { codigo, nome } = req.body;
        try {
            const departamentoAtualizado = await this.departamentoService.atualizarDepartamento(id, codigo, nome);
            res.status(200).json(departamentoAtualizado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar departamento.' });
        }
    }

    async deletarDepartamento(req, res) {
        const id = req.params.id;
        try {
            await this.departamentoService.deletarDepartamento(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar departamento.' });
        }
    }
}

module.exports = DepartamentoController;
