"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const sequelize = index_1.default;
// type UserInputtableTypes = Optional<User, 'id'>;
// type UserSequelizeModelCreator = ModelDefined<User, UserInputtableTypes>;
// export type UserSequelizeModel = Model<User, UserInputtableTypes>;
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    underscored: true,
});
// UserModel.hasMany(Posts, { foreignKey: 'userId', as: 'posts' })
exports.default = User;
//# sourceMappingURL=user.model.js.map