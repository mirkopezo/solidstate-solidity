import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import {
  $Bool,
  $Bool__factory,
  BoolTest__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Bool', async () => {
  let instance: $Bool;
  let deployer: SignerWithAddress;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    instance = await new $Bool__factory(deployer).deploy();
  });

  describe('#toBytes32(bool)', () => {
    it('returns a bytes32 representation of bool', async () => {
      expect(await instance.$toBytes32.staticCall(true)).to.eq(
        ethers.zeroPadValue('0x01', 32),
      );

      expect(await instance.$toBytes32.staticCall(false)).to.eq(
        ethers.zeroPadValue('0x00', 32),
      );
    });

    it('sanitizes higher-order bits as true', async () => {
      const testInstance = await new BoolTest__factory(deployer).deploy();

      expect(
        await testInstance.sanitizeBytes32Test.staticCall(false),
      ).to.hexEqual('0x01');
      expect(
        await testInstance.sanitizeBytes32Test.staticCall(true),
      ).to.hexEqual('0x01');
    });
  });

  describe('#toUint256(bool)', () => {
    it('returns a uint256 representation of bool', async () => {
      expect(await instance.$toUint256.staticCall(true)).to.eq(1n);

      expect(await instance.$toUint256.staticCall(false)).to.eq(0n);
    });

    it('sanitizes higher-order bits as true', async () => {
      const testInstance = await new BoolTest__factory(deployer).deploy();

      expect(await testInstance.sanitizeUint256Test.staticCall(false)).to.eq(
        1n,
      );
      expect(await testInstance.sanitizeUint256Test.staticCall(true)).to.eq(1n);
    });
  });
});
