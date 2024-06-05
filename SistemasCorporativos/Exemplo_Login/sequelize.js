const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect
});

const Fornecedor = require('./models/fornecedor')(sequelize);
const Titulo = require('./models/titulo')(sequelize);
const MovimentoContasPagar = require('./models/movimentoContasPagar')(sequelize);
// Adicione aqui a importação dos outros modelos

sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
}).catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
});

module.exports = sequelize;