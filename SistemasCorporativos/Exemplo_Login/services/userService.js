const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');  // Certifique-se de que você tem um utilitário para gerar tokens

class UserService {
    constructor(userModel) {
        this.User = userModel;
    }

    async create(nome, email, senha, departamento) {
        try {
            const hashedSenha = await bcrypt.hash(senha, 10);
            const novoUser = await this.User.create({
                nome,
                email,
                senha: hashedSenha,
                departamento
            });
            const token = generateToken(novoUser.id);
            return { user: novoUser, token }; // Retorna o usuário e o token
        } catch (error) {
            throw error;
        }
    }

    async localizaTodosUsuario() {
        try {
            const allUsers = await this.User.findAll();
            return allUsers ? allUsers : null;
        } catch (error) {
            throw error;
        }
    }

    async findOne(id) {
        try {
            const user = await this.User.findByPk(id);
            return user ? user : null;
        } catch (error) {
            throw error;
        }
    }

    async login(email, senha) {
        try {
            const user = await this.User.findOne({ where: { email } });
            if (!user) {
                throw new Error('Usuário não encontrado.');
            }
            const senhaCorreta = await bcrypt.compare(senha, user.senha);
            if (!senhaCorreta) {
                throw new Error('Credenciais inválidas.');
            }
            const token = generateToken(user.id);
            return { user, token }; // Retorna o usuário e o token
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;
