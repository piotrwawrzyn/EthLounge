import Big from 'big.js';
import GetTokenPrice from './GetTokenPrice';
import { DictionarrySymbol } from './SupportedTokens';
import TokenFromWei from './TokenFromWei';
import store from '../redux/store';
import { updateEstimateBet } from '../redux/actions';

const EstimateBetValue = (itemsToBet, prices, dispatch = true) => {
    const symbols = itemsToBet.map((curr) => {
        return DictionarrySymbol.get(curr.token);
    })   

    const values = symbols.map((curr) => {
        return prices.data[curr].USD;
    });

    let sum = values.reduce((sum, curr, index) => {
        console.log(`${Big(TokenFromWei(itemsToBet[index]))} * ${curr} = ${Big(TokenFromWei(itemsToBet[index])).mul(curr)}`);
        return sum + parseFloat((Big(TokenFromWei(itemsToBet[index])).mul(curr).toFixed(2)));
    }, 0)

    if (sum === '00.00') sum = '0'

    if (dispatch) store.dispatch(updateEstimateBet(sum));

    return sum;
}

export default EstimateBetValue;