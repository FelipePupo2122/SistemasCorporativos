// models/compra.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Compra = sequelize.define('Compra', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fornecedorId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cotacaoId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        compradorId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        produtoId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        custoUnitario: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        situacao: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'pendente'
        },
        numeroParcelas: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Compra;
};