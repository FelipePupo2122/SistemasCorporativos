// models/produto.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING
        },
        quantidade: {
            type: Sequelize.INTEGER
        }
    });

    Produto.associate = (models) => {
        Produto.belongsTo(models.Deposito, {
            foreignKey: 'depositoId',
            onDelete: 'CASCADE'
        });
    };

    return Produto;
};
