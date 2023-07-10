'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users_Tests extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Users_Tests.belongsTo(models.Test, { foreignKey: 'test_id' });
        }
    };
    Users_Tests.init({
        user_id: DataTypes.INTEGER,
        test_id: DataTypes.INTEGER,
        is_correct: DataTypes.BOOLEAN,
        answer: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Users_Tests',
        tableName: 'users_tests'
    });
    return Users_Tests;
};