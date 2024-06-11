// models/fornecedor.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Fornecedor = sequelize.define('Fornecedor', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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

    Fornecedor.associate = (models) => {
        // Definindo relacionamentos
        Fornecedor.hasMany(models.Titulo, { foreignKey: 'fornecedorId' });
        Fornecedor.hasMany(models.Cotacao, { foreignKey: 'fornecedorId' });
    };

    return Fornecedor;
};
