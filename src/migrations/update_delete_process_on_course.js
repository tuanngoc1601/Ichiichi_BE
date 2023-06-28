module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
        return Promise.all([
          queryInterface.removeColumn('courses', 'process', {
          }, { transaction: t })
        ]);
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
        return Promise.all([
          queryInterface.removeColumn('courses', 'process', {}),
        ]);
      });
    }
  };