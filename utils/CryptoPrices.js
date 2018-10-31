import GetTokenPrice from './GetTokenPrice';

const data = async tokens => {
  const response = await GetTokenPrice(tokens.map(curr => curr.symbol));

  return response;
};

export default data;
