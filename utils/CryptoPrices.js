import axios from 'axios';

const CryptoPrices = async tokens => {
  const symbols = tokens.map(curr => curr.symbol);
  const response = await axios(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols.map(
      curr => curr + ','
    )},&tsyms=USD,ETH`
  );

  return response.data;
};

export default CryptoPrices;
