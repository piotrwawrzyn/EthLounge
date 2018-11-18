import Big from 'big.js';
import TokenFromWei from './tokenFromWei';
import store from '../redux/store';
import { updateEstimateBet } from '../redux/match/actions';

const EstimateBetValue = (tokensToBet, dispatch = true) => {
  let sum = tokensToBet.reduce((sum, token) => {
    return (
      sum +
      parseFloat(
        Big(TokenFromWei(token))
          .mul(token.price.USD)
          .toFixed(2)
      )
    );
  }, 0);

  if (sum === '00.00') sum = '0';

  if (dispatch) store.dispatch(updateEstimateBet(sum));

  return sum;
};

export default EstimateBetValue;
