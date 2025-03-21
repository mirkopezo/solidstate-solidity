import {
  $ERC1967Storage,
  $ERC1967Storage__factory,
  $ERC1967StorageTest,
  $ERC1967StorageTest__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('ERC1967Storage', () => {
  let instance: $ERC1967Storage;
  let testInstance: $ERC1967StorageTest;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();
    instance = await new $ERC1967Storage__factory(deployer).deploy();
    testInstance = await new $ERC1967StorageTest__factory(deployer).deploy();
  });

  describe('__internal', () => {
    describe('#IMPLEMENTATION_STORAGE_SLOT', () => {
      it('returns EIP-1967 implementation storage slot', async () => {
        expect(
          await instance.$IMPLEMENTATION_STORAGE_SLOT.staticCall(),
        ).to.equal(
          '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc',
        );
      });
    });
    describe('#BEACON_STORAGE_SLOT', () => {
      it('returns EIP-1967 beacon storage slot', async () => {
        expect(await instance.$BEACON_STORAGE_SLOT.staticCall()).to.equal(
          '0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50',
        );
      });
    });
    describe('#ADMIN_STORAGE_SLOT', () => {
      it('returns EIP-1967 admin storage slot', async () => {
        expect(await instance.$ADMIN_STORAGE_SLOT.staticCall()).to.equal(
          '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103',
        );
      });
    });

    describe('#layout()', () => {
      it('aligns properties with EIP-1967 standard slots', async () => {
        const implementationAddress = ethers.hexlify(ethers.randomBytes(20));
        const beaconAddress = ethers.hexlify(ethers.randomBytes(20));
        const adminAddress = ethers.hexlify(ethers.randomBytes(20));

        await testInstance.setImplementation(implementationAddress);
        await testInstance.setBeacon(beaconAddress);
        await testInstance.setAdmin(adminAddress);

        const address = await testInstance.getAddress();

        const implementationSlotContents = await ethers.provider.send(
          'eth_getStorageAt',
          [address, await instance.$IMPLEMENTATION_STORAGE_SLOT.staticCall()],
        );
        const beaconSlotContents = await ethers.provider.send(
          'eth_getStorageAt',
          [address, await instance.$BEACON_STORAGE_SLOT.staticCall()],
        );
        const adminSlotContents = await ethers.provider.send(
          'eth_getStorageAt',
          [address, await instance.$ADMIN_STORAGE_SLOT.staticCall()],
        );

        expect(implementationSlotContents).to.hexEqual(implementationAddress);
        expect(beaconSlotContents).to.hexEqual(beaconAddress);
        expect(adminSlotContents).to.hexEqual(adminAddress);
      });
    });
  });
});
