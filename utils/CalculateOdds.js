const CalculateOdds = teams => {
  const totalDollarsBet = teams.map(team => team.totalDollarsBet);

  const feeMultiplier = 0.98;
  const oddsMap = new Map();

  for (let i = 0; i < 2; i++) {
    let odds, percentage;
    const sumDollars = totalDollarsBet[0] + totalDollarsBet[1];

    if (sumDollars === 0) {
      percentage = 50;
      odds = (2.0 * feeMultiplier).toFixed(2);
    } else {
      percentage = (totalDollarsBet[i] / sumDollars) * 100;

      switch (percentage) {
        case 100: {
          odds = (100 * feeMultiplier).toFixed(2);
          break;
        }

        case 0: {
          odds = (1).toFixed(2);
          break;
        }

        default: {
          odds = 1 / (percentage / 100);

          odds = (odds * feeMultiplier).toFixed(2);
        }
      }
    }

    oddsMap.set(teams[i].id, odds);
  }

  return oddsMap;
};

export default CalculateOdds;
