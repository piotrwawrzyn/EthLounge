import Big from 'big.js';

const optimizeTokenAmount = (amount, maximalDecimals = 8) => {
  const minimalAmountToDisplay = Big(`1e-${maximalDecimals}`);

  amount = Big(amount);

  if (
    amount.cmp(minimalAmountToDisplay) === 1 ||
    amount.cmp(minimalAmountToDisplay) === 0
  ) {
    return amount.round(maximalDecimals).toFixed();
  }

  return `< ${minimalAmountToDisplay.toFixed(maximalDecimals)}`;
};

export default optimizeTokenAmount;
