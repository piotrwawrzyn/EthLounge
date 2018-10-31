import Big from 'big.js';
import GetTokenPrice from './GetTokenPrice';
import TokenFromWei from './TokenFromWei';
import store from '../redux/store';
import { updateEstimateBet } from '../redux/match/actions';

const EstimateBetValue = (tokensToBet, prices, dispatch = true) => {
  const symbols = tokensToBet.map(curr => {
    return curr.symbol;
  });

  const values = symbols.map(curr => {
    return prices.data[curr].USD;
  });

  let sum = values.reduce((sum, curr, index) => {
    console.log(
      `${Big(TokenFromWei(tokensToBet[index]))} * ${curr} = ${Big(
        TokenFromWei(tokensToBet[index])
      ).mul(curr)}`
    );
    return (
      sum +
      parseFloat(
        Big(TokenFromWei(tokensToBet[index]))
          .mul(curr)
          .toFixed(2)
      )
    );
  }, 0);

  if (sum === '00.00') sum = '0';

  if (dispatch) store.dispatch(updateEstimateBet(sum));

  return sum;
};

export default EstimateBetValue;
