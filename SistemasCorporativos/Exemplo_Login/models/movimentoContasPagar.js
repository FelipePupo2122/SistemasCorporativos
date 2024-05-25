const { DataTypes } = require('sequelize');
const db = require('../config/db');

const MovimentoContasPagar = db.define('MovimentoContasPagar', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tituloId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Titulos',
            key: 'id'
        }
    },
    dataMovimento: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    tipoMovimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valorMovimento: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    vlrMulta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    vlrJuros: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    }
});

module.exports = MovimentoContasPagar;
