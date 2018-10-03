const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const contractName = "EthLounge"

// Delete build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// Compile contracts
const contractPath = path.resolve(__dirname, 'contracts', `${contractName}.sol`);
const source = fs.readFileSync(contractPath, 'UTF-8');
const output = solc.compile(source, 1).contracts;


// Create build folder
fs.ensureDirSync(buildPath);

// Save contracts to build folder
for (let contract in output) {
    fs.outputJSONSync(path.resolve(buildPath, `${contract.replace(':', '')}.json`), output[contract]);
}