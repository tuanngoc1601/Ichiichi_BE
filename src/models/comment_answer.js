'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment_Answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Comment_Answer.init({
        comment_detail_id: DataTypes.INTEGER,
        content: DataTypes.STRING(500)
    }, {
        sequelize,
        modelName: 'Comment_Answer',
        tableName: 'comments_answers'
    });
    return Comment_Answer;
};