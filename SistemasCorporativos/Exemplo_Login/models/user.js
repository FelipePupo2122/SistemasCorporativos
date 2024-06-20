// models/user.js
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
        },
        cliente: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false // Por padrão, o usuário não será considerado cliente
        }
    });

    User.associate = (models) => {
        User.belongsTo(models.Departamento, { foreignKey: 'departamento', as: 'department' });
        User.hasMany(models.Requisicao, { foreignKey: 'usuarioId' });
        User.hasMany(models.Cotacao, { foreignKey: 'compradorId' });
        User.hasMany(models.Compra, { foreignKey: 'compradorId' });
        // Adicione outras associações conforme necessário
    };

    return User;
};
