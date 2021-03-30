interface BetResult {
  payout: number;
  win: boolean;
}

export const startGame = ({
  betAmount,
  chance,
}: {
  betAmount: number;
  chance: number;
}): BetResult => {
  const randomNumber = Math.random();
  const win = randomNumber < chance / 100;

  const betResult: BetResult = {
    payout: win ? betAmount * ((100 - chance) / 100) : 0,
    win,
  };

  return betResult;
};
