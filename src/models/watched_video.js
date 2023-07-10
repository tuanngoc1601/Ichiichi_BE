'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Watched_Video extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Watched_Video.init({
        user_id: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER,
        content_id: DataTypes.INTEGER,
        detail_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Watched_Video',
        tableName: 'watched_videos'
    });
    return Watched_Video;
};