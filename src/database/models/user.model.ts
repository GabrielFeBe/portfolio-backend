import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from './index';

const sequelize = db;

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
    type: DataTypes.STRING,
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

export default User;
