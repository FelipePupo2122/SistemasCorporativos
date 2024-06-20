const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const DetalhesVenda = sequelize.define('DetalhesVenda', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        precoUnitario: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        // Outros atributos dos detalhes da venda, se necessário
    });

    DetalhesVenda.associate = (models) => {
        // Associação com o modelo RegistroVendas
        DetalhesVenda.belongsTo(models.RegistroVendas, { foreignKey: 'registroVendasId', as: 'registroVendas' });
        // Outras associações conforme necessário
    };

    return DetalhesVenda;
};
