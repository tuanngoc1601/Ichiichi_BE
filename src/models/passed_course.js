'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Passed_Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Passed_Course.init({
        user_id: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Passed_Course',
    });
    return Passed_Course;
};