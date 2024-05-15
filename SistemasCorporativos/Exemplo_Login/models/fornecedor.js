const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Fornecedor = sequelize.define('Fornecedor', {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        localidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cnpj: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        responsavel: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Fornecedor;
};
