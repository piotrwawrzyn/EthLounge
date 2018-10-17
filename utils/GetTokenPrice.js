import axios from 'axios';

const getTokenPrice = async symbols => {
  let call = await axios(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols.map(
      curr => curr + ','
    )},&tsyms=USD,ETH`
  );

  return call;
};

export default getTokenPrice;
