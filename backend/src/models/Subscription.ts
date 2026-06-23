import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Subscription extends Model {
  declare id: string;
  declare subscriberId: string;
  declare channelId: string;
}

Subscription.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    subscriberId: { type: DataTypes.UUID, allowNull: false },
    channelId: { type: DataTypes.UUID, allowNull: false }
  },
  { sequelize, modelName: 'Subscription', tableName: 'subscriptions', timestamps: true, updatedAt: false }
);
