const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Departamento = sequelize.define('Departamento', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Departamento.associate = (models) => {
    Departamento.hasMany(models.User, { foreignKey: 'departamento', as: 'users' });
  };

  return Departamento;
};
