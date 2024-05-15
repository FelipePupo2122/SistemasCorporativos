const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Movimento = sequelize.define('Movimento', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipoMovimento: {
            type: Sequelize.ENUM('entrada', 'saida'),
            allowNull: false
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        data: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        produtoId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Produtos',
                key: 'id'
            },
            allowNull: false
        }
    });

    Movimento.associate = (models) => {
        Movimento.belongsTo(models.Produto, {
            foreignKey: 'produtoId',
            onDelete: 'CASCADE'
        });
    };

    return Movimento;
};
