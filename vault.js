import web3 from './web3';

const address = '0x2E470F5E83a4528888e2B590af8594994E87bFC5';

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'username',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'Deposit',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'username',
        type: 'string'
      }
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
];

export default new web3.eth.Contract(abi, address);
