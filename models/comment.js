const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id",
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "posts",
                key: "id",
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "comments",
    }
);

module.exports = Comment;
