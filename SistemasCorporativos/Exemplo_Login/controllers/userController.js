// ./controllers/userController.js

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async create(req, res) {
        const { nome, email, senha, departamento } = req.body;
        try {
            const novoUser = await this.userService.create(nome, email, senha, departamento);
            res.status(200).json(novoUser);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao inserir novo usuário.' });
        }
    }

    async login(req, res) {
        const { id, senha } = req.body;
        try {
            const token = await this.userService.login(id, senha);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    async localizaTodosUsuario(req, res) {
        try {
            const allUsers = await this.userService.localizaTodosUsuario();
            res.status(200).json(allUsers);
        } catch {
            res.status(400).json({ error: "Erro ao buscar usuários." });
        }
    }

    async findOne(req, res) {
        const { id } = req.params;
        try {
            const user = await this.userService.findOne(id);
            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar usuário." });
        }
    }
}

module.exports = UserController;
