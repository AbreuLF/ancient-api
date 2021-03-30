import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  return await queryInterface.createTable('Bets', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    betAmount: {
      type: DataTypes.DECIMAL(18, 2),
    },
    payout: {
      type: DataTypes.DECIMAL(18, 2),
    },
    chance: {
      type: DataTypes.DECIMAL(18, 2),
    },
    win: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export function down(queryInterface: QueryInterface): Promise<void> {
  return queryInterface.dropTable('Bets');
}
