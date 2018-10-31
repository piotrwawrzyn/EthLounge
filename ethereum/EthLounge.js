import compiledContract from './build/EthLounge';
import web3 from './web3';

const EthLounge = new web3.eth.Contract(
  JSON.parse(compiledContract.interface),
  '0x524c3f19Ab62706343a118b286f5aF2323B99758'
);

export default EthLounge;
