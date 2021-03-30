# Ancient Games Backend Technical Assessment

Looking for usage (required):
- TypeScript
- Sequelize
- GraphQL

Not looking for:
- Frontend/UI. Can be purely via GraphQL Playground

Important:
- Clean/readable code
2 models:
- User (id: int, name: string, balance: float)
- Bet (id: int, userId: int, betAmount: float, chance: float, payout: float, win: boolean)

Queries:
- getUser(id: Int): User
- getUserList: [User!] # just return all
- getBet(id: Int): Bet
- getBetList: [Bet!] # just return all bets
- getBestBetPerUser(limit: Int): [Bet!] # return a distinct list of the best bet each user has made. Allow limiting the result set

Mutations:
- createBet(userId: Int, betAmount: Float, chance: Float): Bet

Functionality:
- Bet takes the chance passed, decrease balance for bet, payout increases balance if it's a win
- Can query for the best bet per user and limit the results

## Run

```
yarn db:migrat
yarn db:seed

yarn start
```
PS.: make sure to edit the `.env` file as needed

## GraphQL Playground
http://localhost:4000/graphql
