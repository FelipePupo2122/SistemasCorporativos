const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./models'); // Importe o arquivo do Sequelize atualizado

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
const centroCustoRouter = require('./routes/centrosCusto');
const cotacoesRouter = require('./routes/cotacoes');
const titulosReceberRouter = require('./routes/titulosReceber'); // Importe o roteador de Títulos de Contas a Receber
const registroVendasRouter = require('./routes/registroVendas'); // Importe o roteador de Registro de Vendas
const detalhesVendaRouter = require('./routes/detalhesVenda'); // Importe o roteador de Detalhes de Venda
const clientesRouter = require('./routes/clientes'); // Importe o roteador de Clientes

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
app.use('/centroCusto', centroCustoRouter);
app.use('/cotacoes', cotacoesRouter);
app.use('/titulosReceber', titulosReceberRouter); // Adicione o roteador de Títulos de Contas a Receber
app.use('/registroVendas', registroVendasRouter); // Adicione o roteador de Registro de Vendas
app.use('/detalhesVenda', detalhesVendaRouter); // Use o roteador de Detalhes de Venda
app.use('/clientes', clientesRouter); // Use o roteador de Clientes

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

// Sincronização do banco de dados com os modelos do Sequelize
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('Sincronização com o banco realizada');
    })
    .catch((error) => {
        console.log('Erro sincronizando o banco de dados', error);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});

module.exports = app;
