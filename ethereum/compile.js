const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const contractName = 'EthLounge';

// Both EthLounge and EthLoungeAPI need one copy of ABI
const paths = ['build', '../../EthLoungeAPI/ethereum/build'];

paths.forEach(path_string => {
  const buildPath = path.resolve(__dirname, path_string);

  // Delete build folder
  fs.removeSync(buildPath);

  // Compile contracts
  const contractPath = path.resolve(
    __dirname,
    'contracts',
    `${contractName}.sol`
  );
  const source = fs.readFileSync(contractPath, 'UTF-8');
  const output = solc.compile(source, 1).contracts;

  // Create build folder
  fs.ensureDirSync(buildPath);

  // Save contracts to build folder
  for (let contract in output) {
    fs.outputJSONSync(
      path.resolve(buildPath, `${contract.replace(':', '')}.json`),
      output[contract]
    );
  }
});
