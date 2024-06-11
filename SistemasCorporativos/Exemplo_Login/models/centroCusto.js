// models/CentroCusto.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const CentroCusto = sequelize.define('CentroCusto', {
        codigo: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return CentroCusto;
};