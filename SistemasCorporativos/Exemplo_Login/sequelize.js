// sequelize.js

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definir modelos
const Fornecedor = require('./models/fornecedor')(sequelize);
const Titulo = require('./models/titulo')(sequelize);
const MovimentoContasPagar = require('./models/movimentoContasPagar')(sequelize);
// Adicione aqui a importação dos outros modelos

// Sincronizar modelos com o banco de dados
sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
}).catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
});

module.exports = sequelize;
