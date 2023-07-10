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
            Passed_Course.belongsTo(models.Course, { foreignKey: 'course_id' });
        }
    };
    Passed_Course.init({
        user_id: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER,
        process: DataTypes.FLOAT,
        score: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Passed_Course',
        tableName: 'passed_courses'
    });
    return Passed_Course;
};