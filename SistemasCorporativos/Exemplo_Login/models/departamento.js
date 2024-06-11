const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Departamento = sequelize.define('Departamento', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Departamento.associate = (models) => {
    // Definindo relacionamentos
    Departamento.hasMany(models.User, { foreignKey: 'departamento', as: 'users' });
};

return Departamento;
};
