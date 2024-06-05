const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config.json');

const Titulo = sequelize.define('Titulo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    notaFiscal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nParcela: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorOriginal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    dtVcto: {
        type: DataTypes.DATE,
        allowNull: false
    },
    situacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noNotaFiscal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroParcelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Titulo;
