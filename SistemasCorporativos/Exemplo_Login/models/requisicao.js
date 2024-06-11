// models/requisicao.js

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Requisicao = sequelize.define('Requisicao', {
        usuarioId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        produtoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Produtos',
                key: 'id'
            }
        },
        quantidadeRequerida: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        centroCustoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'CentrosCusto',
                key: 'id'
            }
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'Pendente'
        }
    });
    
    Requisicao.associate = (models) => {
        // Definindo relacionamentos
        Requisicao.belongsTo(models.User, { foreignKey: 'usuarioId' });
        Requisicao.belongsTo(models.Produto, { foreignKey: 'produtoId' });
        Requisicao.belongsTo(models.CentroCusto, { foreignKey: 'centroCustoId' });
    };

    return Requisicao;
};
