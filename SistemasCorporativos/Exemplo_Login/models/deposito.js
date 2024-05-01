// models/deposito.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Deposito = sequelize.define('Deposito', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        endereco: {
            type: Sequelize.STRING
        }
    });

    return Deposito;
};
