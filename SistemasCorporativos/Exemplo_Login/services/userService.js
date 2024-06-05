class userService {
    constructor(userModel) {
        this.User = userModel;
    }
    
    async create(nome, email, senha, departamento) {
        try {
            const hashedSenha = await bcrypt.hash(senha, 10);
            const novoUser = await this.User.create({
                nome: nome,
                email: email,
                senha: hashedSenha,
                departamento: departamento
            });
            return novoUser ? novoUser : null;
        } catch (error) {
            throw error;
        }
    }

    async localizaTodosUsuario() {
        try {
            const AllUsers = await this.User.findAll();
            return AllUsers ? AllUsers : null;
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

    async login(id, senha) {
        try {
            const user = await this.User.findByPk(id);
            if (!user) {
                throw new Error('Usuário não encontrado.');
            }
            const senhaCorreta = await bcrypt.compare(senha, user.senha);
            if (!senhaCorreta) {
                throw new Error('Credenciais inválidas.');
            }
            const token = generateToken(user.id);
            return token;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userService;