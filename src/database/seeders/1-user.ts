import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        email: 'hu3master.zord@hotmail.com',
        password: bcrypt.hashSync('Gnomos', SALT_ROUNDS),
      },
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('users', {});
  }
};
