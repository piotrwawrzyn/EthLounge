import Big from 'big.js';
import tokenFromWei from './tokenFromWei';

export default balances => {
  let total = new Big(0);

  for (let i = 0; i < balances.length; i++) {
    const { balance, decimals, price } = balances[i];
    const value = Big(tokenFromWei(balances[i])).mul(price.USD);
    total = total.add(value);
  }

  return total.toFixed(2);
};
