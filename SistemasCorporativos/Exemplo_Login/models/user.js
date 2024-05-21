const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: Sequelize.CHAR(60),
            allowNull: false
        },
        departamento: {
            type: Sequelize.STRING, // Adicionando o campo departamento
            allowNull: true // Permitindo que seja nulo para usuários que ainda não têm departamento definido
        }
    });

    return User;
};
