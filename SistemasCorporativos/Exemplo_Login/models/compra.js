const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Compra = db.define('Compra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fornecedorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cotacaoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    compradorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    custoUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    situacao: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pendente'
    },
    numeroParcelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Compra;
