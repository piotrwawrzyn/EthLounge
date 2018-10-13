const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const contractName = 'EthLounge';

const contractSource = require(`./build/${contractName}.json`);

const provider = new HDWalletProvider(
  'someone chief upon clean bachelor physical hint betray remove detect drift steak',
  'https://rinkeby.infura.io/v3/6e6283bc1a354b07b064b06356766315'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from account: ${accounts[0]}`);

  const contract = await new web3.eth.Contract(
    JSON.parse(contractSource.interface)
  )
    .deploy({ data: '0x' + contractSource.bytecode })
    .send({ from: accounts[0] });

  console.log(
    `Contract deployed successfuly. Address: ${contract.options.address}`
  );
};

deploy();
