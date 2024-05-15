const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING
        }
    });

    Produto.associate = (models) => {
        Produto.hasMany(models.Movimento, {
            foreignKey: 'produtoId',
            onDelete: 'CASCADE'
        });
    };

    return Produto;
};
