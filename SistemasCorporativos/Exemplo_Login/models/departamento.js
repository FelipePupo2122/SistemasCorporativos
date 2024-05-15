// models/departamento.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Departamento = sequelize.define('Departamento', {
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

    return Departamento;
};
