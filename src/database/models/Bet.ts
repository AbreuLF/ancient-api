import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Bet extends Model<Bet> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @ForeignKey(() => User)
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @Column
  betAmount!: number;

  @Column
  chance!: number;

  @Column
  payout!: number;

  @Column
  win!: boolean;

  @Column
  @CreatedAt
  createdAt!: Date;

  @Column
  @UpdatedAt
  updatedAt!: Date;
}
