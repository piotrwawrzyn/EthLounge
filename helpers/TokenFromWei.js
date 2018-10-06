import { DictionarrySymbol, DictionarryDecimals, DictionarryFull } from './SupportedTokens';
import Optimize from './OptimizeTokenAmount';
import Big from 'big.js';

const getScientificNotation = (decimals) => {
    const number = decimals - 1;

    return `10e+${number}`
}

export default (token, label = '', optimize = false) => {
    switch (label) {
        case '': {
            if (optimize)
            return `${Optimize(Big(token.amount).div(getScientificNotation(DictionarryDecimals.get(token.address))).toFixed())}`;
            
            return `${Big(token.amount).div(getScientificNotation(DictionarryDecimals.get(token.address))).toFixed()}`;
        }

        case 'symbol': {
            if (optimize)
            return `${Optimize(Big(token.amount).div(getScientificNotation(DictionarryDecimals.get(token.address))).toFixed())} ${DictionarrySymbol.get(token.address)}`;

            return `${Big(token.amount).div(getScientificNotation(DictionarryDecimals.get(token.address))).toFixed()} ${DictionarrySymbol.get(token.address)}`;
        }

        case 'full': {
            if (optimize)
            return `${Optimize(Big(token.amount).div(getScientificNotation(DictionarryDecimals.get(token.address))).toFixed())} ${DictionarryFull.get(token.address)}`;

            return `${Big(token.amount).div(getScientificNotation(DictionarryDecimals.get(token.address))).toFixed()} ${DictionarryFull.get(token.address)}`;
        }
    }



}