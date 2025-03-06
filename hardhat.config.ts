import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-ethers';
import '@solidstate/hardhat-4byte-uploader';
import '@typechain/hardhat';
import 'hardhat-abi-exporter';
import 'hardhat-contract-sizer';
import 'hardhat-exposed';
import 'hardhat-gas-reporter';
import 'hardhat-linearization';
import 'hardhat-spdx-license-identifier';
import 'solidity-coverage';

export default {
  solidity: {
    version: '0.8.28',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  abiExporter: {
    runOnCompile: true,
    clear: true,
    flat: true,
    except: ['.*Mock$', 'EXPOSED.*'],
  },

  exposed: {
    include: ['**/_*.sol'],
    // the default $ prefix appears to conflict with typechain
    prefix: 'EXPOSED',
  },

  gasReporter: {
    enabled: true,
    reportPureAndViewMethods: true,
  },

  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
};
