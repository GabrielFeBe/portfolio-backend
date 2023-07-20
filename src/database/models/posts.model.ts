import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from './index';
import User from './user.model'



const sequelize = db;

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
  declare id: CreationOptional<number>;
  declare projectDescription: string;
  declare projectImage: string;
  declare repositoryLink: string;
  declare userId: ForeignKey<User['id']>;
}

Post.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  projectDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repositoryLink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'

  }
}, {
  sequelize,
  tableName: 'posts',
  timestamps: false,
  underscored: true,
});

Post.belongsTo(User, { foreignKey: { allowNull: false, name: 'userId' } })
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' })


export default Post;
