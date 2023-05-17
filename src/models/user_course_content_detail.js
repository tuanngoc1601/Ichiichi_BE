'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_Course_Content_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User_Course_Content_Detail.init({
        user_id: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER,
        content_id: DataTypes.INTEGER,
        detail_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User_Course_Content_Detail',
    });
    return User_Course_Content_Detail;
};