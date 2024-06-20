const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const MovimentoContasPagar = sequelize.define('MovimentoContasPagar', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tituloId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Titulos',
                key: 'id'
            }
        },
        dataMovimento: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        tipoMovimento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        valorMovimento: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        vlrMulta: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true
        },
        vlrJuros: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true
        }
    });

    MovimentoContasPagar.associate = (models) => {
      // Definindo relacionamentos
      MovimentoContasPagar.belongsTo(models.Titulo, { foreignKey: 'tituloId', onDelete: 'CASCADE' });
  };

  return MovimentoContasPagar;
};
