'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(50)
            },
            detail: {
                type: Sequelize.TEXT
            },
            right_answer: {
                type: Sequelize.INTEGER
            },
            wrong_answer_first: {
                type: Sequelize.INTEGER
            },
            wrong_answer_second: {
                type: Sequelize.INTEGER
            },
            wrong_answer_third: {
                type: Sequelize.INTEGER
            },
            course_id: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('tests');
    }
};
