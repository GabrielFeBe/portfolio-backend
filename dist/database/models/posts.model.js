"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const user_model_1 = __importDefault(require("./user.model"));
const sequelize = index_1.default;
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    projectDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    projectImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    repositoryLink: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    isFavorite: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_favorite',
    }
}, {
    sequelize,
    tableName: 'posts',
    timestamps: false,
    underscored: true,
});
Post.belongsTo(user_model_1.default, { foreignKey: { allowNull: false, name: 'userId' } });
user_model_1.default.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
exports.default = Post;
//# sourceMappingURL=posts.model.js.map