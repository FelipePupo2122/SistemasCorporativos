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

    return Requisicao;
};
