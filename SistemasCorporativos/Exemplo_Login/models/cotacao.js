const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Cotacao = sequelize.define('Cotacao', {
        produtoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Produtos',
                key: 'id'
            }
        },
        fornecedorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Fornecedores',
                key: 'id'
            }
        },
        precoProposto: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        dataCotacao: {
            type: Sequelize.DATE,
            allowNull: false
        },
        compradorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        dataValidade: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });

    Cotacao.associate = (models) => {
        // Definindo relacionamentos
        Cotacao.belongsTo(models.Produto, { foreignKey: 'produtoId' });
        Cotacao.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId' });
        Cotacao.belongsTo(models.User, { foreignKey: 'compradorId' });
    };

    return Cotacao;
};
