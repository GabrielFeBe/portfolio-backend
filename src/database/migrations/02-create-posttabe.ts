import { DataTypes, Model, QueryInterface } from 'sequelize';
import { TPostS } from '../../interfaces/Post';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<TPostS>>('posts', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'project_description'
      },
      projectImage: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'project_image'
      },
      repositoryLink: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'repository_link'
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_id',
      },
      isFavorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_favorite',
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'title',
      },
      mainLanguage: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'main_language'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      }, 
      deployLink: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'deploy_link'
      }

    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('posts');
  }
};
