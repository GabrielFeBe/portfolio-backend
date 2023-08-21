import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '0epjbTpMQvPc5MYOkGqG',
  database: 'railway',
  host: process.env.DB_HOST || 'containers-us-west-63.railway.app',
  port: Number(process.env.DB_PORT) || 5808,
  dialect: 'mysql',
};

export = config;
