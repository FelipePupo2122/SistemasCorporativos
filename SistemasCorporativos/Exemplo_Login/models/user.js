const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Importe a instância sequelize do config/db

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;