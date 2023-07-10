'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Course.hasMany(models.Passed_Course, { foreignKey: 'course_id' });
            Course.hasMany(models.Content, { foreignKey: 'course_id' });
            Course.hasMany(models.Test, { foreignKey: 'course_id' });
        }
    };
    Course.init({
        title: DataTypes.STRING(100),
        description: DataTypes.TEXT,
        image: DataTypes.STRING(500)
    }, {
        sequelize,
        modelName: 'Course',
        tableName: 'courses'
    });
    return Course;
};