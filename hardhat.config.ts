import './tasks/rename_entity';
import './tasks/scaffold_contract';
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
import { HardhatUserConfig } from 'hardhat/types';
import 'solidity-coverage';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.29',
    settings: {
      evmVersion: 'cancun',
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
    // do not export internal or test ABIs, including those generated by hardhat-exposed
    except: ['_.*', '.*Test$', '[$].*'],
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

export default config;
