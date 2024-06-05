const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');

// Importe os roteadores
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const produtosRouter = require('./routes/produtos');
const depositosRouter = require('./routes/depositos');
const movimentosRouter = require('./routes/movimentos');
const departamentosRouter = require('./routes/departamentos');
const fornecedoresRouter = require('./routes/fornecedores');
const requisicoesRouter = require('./routes/requisicoes');
const comprasRouter = require('./routes/compras');
const titulosRouter = require('./routes/titulos');
const movimentoContasPagarRouter = require('./routes/movimentoContasPagar');

// Configuração de middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definição de rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', produtosRouter);
app.use('/depositos', depositosRouter);
app.use('/movimentos', movimentosRouter);
app.use('/departamentos', departamentosRouter);
app.use('/fornecedores', fornecedoresRouter);
app.use('/requisicoes', requisicoesRouter);
app.use('/compras', comprasRouter);
app.use('/titulos', titulosRouter);
app.use('/movimentosContasPagar', movimentoContasPagarRouter);

const { sequelize } = require('./models');

// Função para criptografar a senha antes de criar um novo usuário
async function hashPassword(req, res, next) {
    if (req.body.senha) {
        try {
            const hashedSenha = await bcrypt.hash(req.body.senha, 10);
            req.body.senha = hashedSenha;
            next();
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criptografar a senha.' });
        }
    } else {
        next();
    }
}

// Rota para criar novo usuário
app.post('/users/novoUsuario', hashPassword);

// Aplicar migrações e sincronizar o banco de dados
async function applyMigrations() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Sincronização com o banco realizada');
    } catch (error) {
        console.log('Erro sincronizando o banco de dados', error);
    }
}

applyMigrations();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});

module.exports = app;
