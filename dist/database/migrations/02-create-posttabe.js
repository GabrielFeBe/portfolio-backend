"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('posts', {
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            projectDescription: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                field: 'project_description'
            },
            projectImage: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'project_image'
            },
            repositoryLink: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'repository_link'
            },
            userId: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'user_id',
            },
            isFavorite: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                field: 'is_favorite',
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('posts');
    }
};
//# sourceMappingURL=02-create-posttabe.js.map