import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'ai_youtube',
  process.env.DATABASE_USER || 'user',
  process.env.DATABASE_PASSWORD || 'password',
  {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    dialect: 'postgres',
    logging: false
  }
);
