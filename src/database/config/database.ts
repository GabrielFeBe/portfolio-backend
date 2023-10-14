import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: 'railway',
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  dialect: 'mysql',
};

export = config;
