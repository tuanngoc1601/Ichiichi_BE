'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('courses', 'title', {
                    type: Sequelize.DataTypes.STRING(100)
                }, { transaction: t })
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('courses', 'title', { transaction: t }),
            ]);
        });
    }
};
