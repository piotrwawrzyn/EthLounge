import Optimize from './OptimizeTokenAmount';
import Big from 'big.js';

const getScientificNotation = decimals => {
  const number = decimals - 1;

  return `10e+${number}`;
};

export default (token, optimize = false) => {
  if (optimize)
    return `${Optimize(
      Big(token.amount)
        .div(getScientificNotation(token.decimals))
        .toFixed()
    )}`;

  return `${Big(token.amount)
    .div(getScientificNotation(token.decimals))
    .toFixed()}`;
};
