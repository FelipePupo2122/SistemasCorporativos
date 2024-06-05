const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    },
    departamento: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Departamentos',
        key: 'id'
      }
    }
  });

  User.associate = (models) => {
    User.belongsTo(models.Departamento, { foreignKey: 'departamento', as: 'department' });
  };

  return User;
};
