'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Content extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Content.belongsTo(models.Course, { foreignKey: 'course_id' });
            Content.hasMany(models.Detail, { foreignKey: 'content_id' });
        }
    };
    Content.init({
        content: DataTypes.STRING(500),
        type: DataTypes.STRING(45),
        mean: DataTypes.STRING(500),
        course_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Content',
        tableName: 'contents'
    });
    return Content;
};