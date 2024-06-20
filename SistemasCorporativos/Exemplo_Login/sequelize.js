const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect
    }
);

// Importação dos modelos
const CentroCusto = require('./CentroCusto')(sequelize);
const Compra = require('./Compra')(sequelize);
const Cotacao = require('./Cotacao')(sequelize);
const Departamento = require('./Departamento')(sequelize);
const Deposito = require('./Deposito')(sequelize);
const Fornecedor = require('./Fornecedor')(sequelize);
const MovimentoContasPagar = require('./MovimentoContasPagar')(sequelize);
const Movimento = require('./Movimento')(sequelize);
const Produto = require('./Produto')(sequelize);
const Requisicao = require('./Requisicao')(sequelize);
const Titulo = require('./Titulo')(sequelize);
const User = require('./User')(sequelize);
const DetalhesVenda = require('./DetalhesVenda')(sequelize, Sequelize); // Adicione o modelo DetalhesVenda
const Cliente = require('./Cliente')(sequelize, Sequelize); // Adicione o modelo Cliente

// Definição dos relacionamentos entre modelos
Titulo.associate = (models) => {
    Titulo.hasMany(models.MovimentoContasPagar, {
        foreignKey: 'tituloId',
        onDelete: 'CASCADE'
    });
};

Fornecedor.associate = (models) => {
    Fornecedor.hasMany(models.Titulo, { foreignKey: 'fornecedorId' });
};

Departamento.associate = (models) => {
    Departamento.hasMany(models.User, { foreignKey: 'departamento', as: 'users' });
};

Deposito.associate = (models) => {
    Deposito.hasMany(models.Produto, { foreignKey: 'depositoId' });
    // Adicione outras associações do modelo de Deposito conforme necessário
};

Produto.associate = (models) => {
    Produto.hasMany(models.Movimento, { foreignKey: 'produtoId' });
    Produto.hasMany(models.Cotacao, { foreignKey: 'produtoId' });
    Produto.hasMany(models.Requisicao, { foreignKey: 'produtoId' });
};

Requisicao.associate = (models) => {
    Requisicao.belongsTo(models.Departamento, { foreignKey: 'departamentoId' });
};

Movimento.associate = (models) => {
    Movimento.belongsTo(models.Produto, { foreignKey: 'produtoId' });
};

MovimentoContasPagar.associate = (models) => {
    MovimentoContasPagar.belongsTo(models.Titulo, { foreignKey: 'tituloId' });
};

Cotacao.associate = (models) => {
    Cotacao.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    Cotacao.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId' });
};

Compra.associate = (models) => {
    Compra.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId' });
    Compra.belongsTo(models.Titulo, { foreignKey: 'tituloId' });
};

User.associate = (models) => {
    User.belongsTo(models.Departamento, { foreignKey: 'departamento' });
};

DetalhesVenda.associate = (models) => {
    // Adicione as associações do modelo DetalhesVenda conforme necessário
};

Cliente.associate = (models) => {
    // Adicione as associações do modelo Cliente conforme necessário
};

// Sincronização dos modelos com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabelas:', error);
    });

module.exports = sequelize;
