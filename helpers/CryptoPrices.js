import { SupportedTokens, DictionarrySymbol } from './SupportedTokens';
import GetTokenPrice from './GetTokenPrice';


const data = async () => {
    const response = await GetTokenPrice(SupportedTokens.map((curr) => DictionarrySymbol.get(curr)));

    return response;
}

export default data;