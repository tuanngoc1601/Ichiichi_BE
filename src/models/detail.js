'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Detail.belongsTo(models.Content, { foreignKey: 'content_id' });
        }
    };
    Detail.init({
        link: DataTypes.STRING(500),
        content_id: DataTypes.STRING,
        description: DataTypes.STRING(500),
        title: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Detail',
        tableName: 'details'
    });
    return Detail;
};