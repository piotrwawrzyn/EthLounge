const CalculatePercentages = teams => {
  const totalDollarsBet = teams.map(team => team.totalDollarsBet);
  const percentagesMap = new Map();

  for (let i = 0; i < 2; i++) {
    let percentage;
    const sumDollars = totalDollarsBet[0] + totalDollarsBet[1];

    if (sumDollars === 0) {
      percentage = 50;
    } else {
      percentage = Math.round((totalDollarsBet[i] / sumDollars) * 100);
    }

    percentagesMap.set(teams[i], percentage);
  }

  return percentagesMap;
};

export default CalculatePercentages;
