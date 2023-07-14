import { DataTypes, InferAttributes, InferCreationAttributes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import Posts from './posts.model'

const sequelize = db;

// type UserInputtableTypes = Optional<User, 'id'>;
// type UserSequelizeModelCreator = ModelDefined<User, UserInputtableTypes>;
// export type UserSequelizeModel = Model<User, UserInputtableTypes>;

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
  declare id: number;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

// UserModel.hasMany(Posts, { foreignKey: 'userId', as: 'posts' })


export default User;
