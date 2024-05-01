// models/movimento.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Movimento = sequelize.define('Movimento', {
        tipoMovimento: {
            type: Sequelize.ENUM('entrada', 'saida'),
            allowNull: false
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        data: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return Movimento;
};
