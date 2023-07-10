'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('passed_courses', 'process', {
                    type: Sequelize.DataTypes.FLOAT
                }, { transaction: t }),
                queryInterface.addColumn('passed_courses', 'score', {
                    type: Sequelize.DataTypes.INTEGER
                }, { transaction: t })
            ]);
        });
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('passed_courses', 'process', {
                    type: Sequelize.DataTypes.FLOAT
                }, { transaction: t }),
                queryInterface.removeColumn('passed_courses', 'score', {
                    type: Sequelize.DataTypes.INTEGER
                }, { transaction: t })
            ]);
        });
    }
};
