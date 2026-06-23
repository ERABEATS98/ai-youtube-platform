import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Comment extends Model {
  declare id: string;
  declare userId: string;
  declare videoId: string;
  declare text: string;
  declare likes: number;
}

Comment.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false },
    videoId: { type: DataTypes.UUID, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    likes: { type: DataTypes.INTEGER, defaultValue: 0 }
  },
  { sequelize, modelName: 'Comment', tableName: 'comments' }
);
