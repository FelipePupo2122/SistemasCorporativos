const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const TitulosReceber = sequelize.define('TitulosReceber', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dataEmissao: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        valor: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        // Outros atributos dos títulos de contas a receber
    });

    TitulosReceber.associate = (models) => {
        // Associação com Cliente
        TitulosReceber.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
        // Remova a associação com MovimentoContasReceber
    };

    return TitulosReceber;
};
