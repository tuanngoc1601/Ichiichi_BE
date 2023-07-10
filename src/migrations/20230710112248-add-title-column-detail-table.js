'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn(
            'details', // table name
            'title', // new field name
            {
                type: Sequelize.STRING,
                allowNull: false,
            },
        );
    },

    down: async (queryInterface, Sequelize) => {
        // logic for reverting the changes
        await queryInterface.removeColumn('details', 'title');
    }
};
