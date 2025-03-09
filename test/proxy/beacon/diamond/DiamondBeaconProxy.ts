import { deployMockContract } from '@solidstate/library';
import { describeBehaviorOfDiamondBeaconProxy } from '@solidstate/spec';
import {
  __hh_exposed_DiamondBeaconProxy,
  __hh_exposed_DiamondBeaconProxy__factory,
  __hh_exposed_Ownable__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('DiamondBeaconProxy', () => {
  let beacon: any;
  let implementation: any;
  let instance: __hh_exposed_DiamondBeaconProxy;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();

    implementation = await new __hh_exposed_Ownable__factory(deployer).deploy();

    beacon = await deployMockContract((await ethers.getSigners())[0], [
      'function facetAddress (bytes4) external view returns (address)',
    ]);

    await beacon.mock.facetAddress.returns(await implementation.getAddress());

    instance = await new __hh_exposed_DiamondBeaconProxy__factory(
      deployer,
    ).deploy();

    await instance.__hh_exposed__setBeacon(await beacon.getAddress());
  });

  describeBehaviorOfDiamondBeaconProxy(async () => instance, {
    implementationFunction: 'owner()',
    implementationFunctionArgs: [],
  });

  describe('__internal', () => {
    describe('#_getImplementation()', () => {
      it('returns implementation address', async () => {
        expect(
          await instance['__hh_exposed__getImplementation()'].staticCall(),
        ).to.eq(await implementation.getAddress());
      });

      describe('reverts if', () => {
        it('beacon is non-contract address', async () => {
          await instance.__hh_exposed__setBeacon(ethers.ZeroAddress);

          await expect(
            instance['__hh_exposed__getImplementation()'].staticCall(),
          ).to.be.reverted;
        });
      });
    });

    describe('#_getImplementation(bytes4)', () => {
      it('returns implementation address', async () => {
        expect(
          await instance['__hh_exposed__getImplementation(bytes4)'].staticCall(
            ethers.randomBytes(4),
          ),
        ).to.eq(await implementation.getAddress());
      });

      describe('reverts if', () => {
        it('beacon is non-contract address', async () => {
          await instance.__hh_exposed__setBeacon(ethers.ZeroAddress);

          await expect(
            instance['__hh_exposed__getImplementation(bytes4)'].staticCall(
              ethers.randomBytes(4),
            ),
          ).to.be.reverted;
        });
      });
    });
  });
});
