const eth = '0x0000000000000000000000000000000000000000';
const powr = '0x7f0C267ef144D319CcF1d724c222a59A50CD7B43';

const SupportedTokens = [eth, powr];

const DictionarryFull = new Map();
DictionarryFull.set(eth, 'Ethereum');
DictionarryFull.set(powr, 'Power Ledger');

const DictionarrySymbol = new Map();
DictionarrySymbol.set(eth, 'ETH');
DictionarrySymbol.set(powr, 'POWR');

const DictionarryDecimals = new Map();
DictionarryDecimals.set(eth, 18);
DictionarryDecimals.set(powr, 8);

export {
  SupportedTokens,
  DictionarryFull,
  DictionarrySymbol,
  DictionarryDecimals
};
