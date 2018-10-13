import EthLounge from "./build/EthLounge";
import web3 from "./web3";

const instance = new web3.eth.Contract(
  JSON.parse(EthLounge.interface),
  "0x814b1c601dcdC8275C2f7ECDD2DbFB4767C8ED8C"
);

export default instance;
