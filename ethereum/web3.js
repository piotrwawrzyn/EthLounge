import Web3 from 'web3';

let web3;

if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
// We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider)
} else {
// We are out of the browser OR user has no metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/6e6283bc1a354b07b064b06356766315'
    );

    web3 = new Web3(provider);
}

export default web3;