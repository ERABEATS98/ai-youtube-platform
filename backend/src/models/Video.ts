import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';

export class Video extends Model {
  declare id: string;
  declare userId: string;
  declare title: string;
  declare description: string;
  declare videoUrl: string;
  declare thumbnailUrl: string | null;
  declare duration: number;
  declare views: number;
  declare likes: number;
  declare isPublished: boolean;
  declare tags: string[];
  declare aiSummary: string | null;
  declare aiCaption: string | null;
}

Video.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    videoUrl: { type: DataTypes.STRING, allowNull: false },
    thumbnailUrl: { type: DataTypes.STRING, allowNull: true },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    views: { type: DataTypes.INTEGER, defaultValue: 0 },
    likes: { type: DataTypes.INTEGER, defaultValue: 0 },
    isPublished: { type: DataTypes.BOOLEAN, defaultValue: false },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
    aiSummary: { type: DataTypes.TEXT, allowNull: true },
    aiCaption: { type: DataTypes.TEXT, allowNull: true }
  },
  { sequelize, modelName: 'Video', tableName: 'videos' }
);

Video.belongsTo(User, { foreignKey: 'userId', as: 'creator' });
