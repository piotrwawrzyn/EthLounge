import Big from 'big.js';

const optimize = amount => {
  const minimalAmountToDisplay = 0.0001;

  amount = Big(amount);

  if (
    amount.cmp(minimalAmountToDisplay) === 1 ||
    amount.cmp(minimalAmountToDisplay) === 0
  ) {
    return amount.round(4);
  }

  return `< ${minimalAmountToDisplay}`;
};

export default optimize;
