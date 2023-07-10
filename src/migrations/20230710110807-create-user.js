'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(45)
            },
            role: {
                type: Sequelize.STRING(45)
            },
            image: {
                type: Sequelize.STRING(500)
            },
            username: {
                type: Sequelize.STRING(50)
            },
            password: {
                type: Sequelize.STRING(50)
            },
            email: {
                type: Sequelize.STRING(50)
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
