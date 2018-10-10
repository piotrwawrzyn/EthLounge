import EthLounge from './build/EthLounge'
import web3 from './web3';

const instance = new web3.eth.Contract(
    JSON.parse(EthLounge.interface),
    '0x091116F767cfA2d9D7490883A8f7E5baf1318e3b');


export default instance;
