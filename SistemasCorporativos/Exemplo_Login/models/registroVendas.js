// models/registroVendas.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const RegistroVendas = sequelize.define('RegistroVendas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        // Outros atributos do registro de vendas, como clienteId, totalVendas, etc.
    });

    RegistroVendas.associate = (models) => {
        // Associação com o modelo de User (Cliente)
        RegistroVendas.belongsTo(models.User, { foreignKey: 'clienteId', as: 'cliente' });
        // Associação com o modelo de Detalhes de Venda
        RegistroVendas.hasMany(models.DetalhesVenda, { foreignKey: 'registroVendasId' });
        // Adicione outras associações conforme necessário
    };

    return RegistroVendas;
};
