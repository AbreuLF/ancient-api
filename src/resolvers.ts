import { IResolvers } from 'graphql-tools';
import { Sequelize } from 'sequelize-typescript';
import { Bet } from './database/models/Bet';
import { User } from './database/models/User';
import { startGame } from './utils/game';

const resolvers: IResolvers = {
  Query: {
    getUser: (parent, { id }, { db }) => User.findByPk(id, {
      include: [Bet],
    }),
    getUserList: (parent, args, { db }) => User.findAll({
      include: [Bet],
    }),
    getBet: (parent, { id }, { db }) => Bet.findByPk(id),
    getBetList: (parent, args, { db }) => Bet.findAll(),
    getBestBetPerUser: async (parent, { limit = 1 }, { db }) => {
      const bets = await Bet.findAll({
        include: [User],
        limit: limit,
        attributes: [[Sequelize.fn('max', Sequelize.col('betAmount')), 'betAmount']],
        group: ['user.id']
      })

      return bets;
    },
  },
  Mutation: {
    createBet: async (parent, { userId, betAmount, chance }, { db }, info) => {
      const user = await User.findByPk(userId);
      if (!user) return;

      if (user.balance < betAmount)
        throw Error('User does not have enough funds');

      const { payout, win } = startGame({ betAmount, chance });

      await User.update(
        {
          balance: win ? user.balance + payout : user.balance - betAmount,
        },
        {
          where: {
            id: user.id,
          },
        },
      );

      return Bet.create({
        userId,
        betAmount,
        chance,
        payout,
        win,
      });
    },
  },
};

export default resolvers;
