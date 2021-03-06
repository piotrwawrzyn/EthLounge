import Optimize from './optimizeTokenAmount';
import Big from 'big.js';

const getScientificNotation = decimals => {
  const number = decimals - 1;

  return `10e+${number}`;
};

export default (token, optimize = false, maximalDecimals = undefined) => {
  const amount = token.balance ? token.balance : token.amount;

  const { decimals } = token;

  if (optimize)
    return `${Optimize(
      Big(amount).div(getScientificNotation(decimals)).toFixed(),
      maximalDecimals
    )}`;

  return `${Big(amount).div(getScientificNotation(decimals)).toFixed()}`;
};
