'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        name: DataTypes.STRING(45),
        role: DataTypes.STRING(45),
        image: DataTypes.STRING(500),
        username: DataTypes.STRING(50),
        password: DataTypes.STRING(50),
        email: DataTypes.STRING(50)
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });
    return User;
};