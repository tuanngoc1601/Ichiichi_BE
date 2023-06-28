module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
        return Promise.all([
            queryInterface.addColumn('passed_courses', 'result', {
                type: Sequelize.DataTypes.INTEGER
              }, { transaction: t }),
            queryInterface.addColumn('passed_courses', 'process', {
                type: Sequelize.DataTypes.FLOAT
              }, { transaction: t }),
        ]);
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
        return Promise.all([
          queryInterface.addColumn('passed_courses', 'result', {
            type: Sequelize.DataTypes.INTEGER
          }, { transaction: t }),
          queryInterface.addColumn('passed_courses', 'process', {
            type: Sequelize.DataTypes.FLOAT
          }, { transaction: t }),
        ]);
      });
    }
  };
