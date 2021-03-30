import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Bet } from './Bet';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column
  balance!: number;

  @Column
  @CreatedAt
  createdAt!: Date;

  @Column
  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => Bet)
  bets!: Bet[]
}
