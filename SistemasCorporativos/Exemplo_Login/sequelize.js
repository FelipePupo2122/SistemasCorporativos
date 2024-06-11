const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect
});

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
    // Defina as associações do modelo de Deposito conforme necessário
};

// Adicione outras associações conforme necessário para os demais modelos

// Sincronização dos modelos com o banco de dados
sequelize.sync({ force: true })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabelas:', error);
    });

module.exports = sequelize;
