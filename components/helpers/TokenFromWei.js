import { DictionarrySymbol, DictionarryDecimals } from './SupportedTokens';
import Optimize from './OptimizeTokenAmount';
import Big from 'big.js';

const getScientificNotation = (decimals) => {
    const number = decimals - 1;

    return `10e+${number}`
}

export default (item, label = '', optimize = false) => {
    switch (label) {
        case '': {
            if (optimize)
            return `${Optimize(Big(item.amount).div(getScientificNotation(DictionarryDecimals.get(item.token))).toFixed())}`;
            
            return `${Big(item.amount).div(getScientificNotation(DictionarryDecimals.get(item.token))).toFixed()}`;
        }

        case 'symbol': {
            if (optimize)
            return `${Optimize(Big(item.amount).div(getScientificNotation(DictionarryDecimals.get(item.token))).toFixed())} ${DictionarrySymbol.get(item.token)}`;

            return `${Big(item.amount).div(getScientificNotation(DictionarryDecimals.get(item.token))).toFixed()} ${DictionarrySymbol.get(item.token)}`;
        }

        case 'full': {
            if (optimize)
            return `${Optimize(Big(item.amount).div(getScientificNotation(DictionarryDecimals.get(item.token))).toFixed())} ${dictionarryFull.get(item.token)}`;

            return `${Big(item.amount).div(getScientificNotation(DictionarryDecimals.get(item.token))).toFixed()} ${dictionarryFull.get(item.token)}`;
        }
    }



}