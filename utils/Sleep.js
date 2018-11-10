const Sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default Sleep;
