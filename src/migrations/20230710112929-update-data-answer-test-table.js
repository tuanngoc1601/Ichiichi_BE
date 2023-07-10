'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.changeColumn('tests', 'right_answer', {
                    type: Sequelize.DataTypes.STRING
                }),
                queryInterface.changeColumn('tests', 'wrong_answer_first', {
                    type: Sequelize.DataTypes.STRING
                }),
                queryInterface.changeColumn('tests', 'wrong_answer_second', {
                    type: Sequelize.DataTypes.STRING
                }),
                queryInterface.changeColumn('tests', 'wrong_answer_third', {
                    type: Sequelize.DataTypes.STRING
                })
            ]);
        });
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.changeColumn('tests', 'right_answer', {
                    type: Sequelize.DataTypes.STRING
                }),
                queryInterface.changeColumn('tests', 'wrong_answer_first', {
                    type: Sequelize.DataTypes.STRING
                }),
                queryInterface.changeColumn('tests', 'wrong_answer_second', {
                    type: Sequelize.DataTypes.STRING
                }),
                queryInterface.changeColumn('tests', 'wrong_answer_third', {
                    type: Sequelize.DataTypes.STRING
                }),
            ]);
        });
    }
};
