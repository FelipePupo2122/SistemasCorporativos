const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Titulo = sequelize.define('Titulo', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    notaFiscal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nParcela: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    valorOriginal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    dtVcto: {
      type: Sequelize.DATE,
      allowNull: false
    },
    situacao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    noNotaFiscal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    numeroParcelas: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  Titulo.associate = (models) => {
    Titulo.hasMany(models.MovimentoContasPagar, {
      foreignKey: 'tituloId',
      onDelete: 'CASCADE'
    });
  };

  return Titulo;
};
