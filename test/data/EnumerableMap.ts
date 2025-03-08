import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import { bigintToAddress } from '@solidstate/library';
import {
  __hh_exposed_EnumerableMap,
  __hh_exposed_EnumerableMap__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

// data structures can be defined at any storage slot
// it doesn't matter which slot is used as long as it's consistent
const STORAGE_SLOT = 0n;

describe('EnumerableMap', () => {
  describe('AddressToAddressMap', async () => {
    let instance: __hh_exposed_EnumerableMap;
    let deployer: SignerWithAddress;

    beforeEach(async () => {
      [deployer] = await ethers.getSigners();
      instance = await new __hh_exposed_EnumerableMap__factory(
        deployer,
      ).deploy();
    });

    describe('__internal', () => {
      const addressOne = bigintToAddress(100);
      const addressTwo = bigintToAddress(200);
      const addressThree = bigintToAddress(300);
      const addressFour = bigintToAddress(400);
      const addressFive = bigintToAddress(500);
      const addressSix = bigintToAddress(600);

      describe('#at(uint256)', () => {
        it('returns value coresponding to index provided', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );

          const [key, value] =
            await instance.__hh_exposed_at_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
              0n,
            );

          expect(key).to.equal(addressOne);
          expect(value).to.equal(addressFour);
        });

        describe('reverts if', () => {
          it('index is out of bounds', async () => {
            await expect(
              instance.__hh_exposed_at_EnumerableMap_AddressToAddressMap.staticCall(
                STORAGE_SLOT,
                0n,
              ),
            ).to.be.revertedWithCustomError(
              instance,
              'EnumerableMap__IndexOutOfBounds',
            );
          });
        });
      });

      describe('#contains(address)', () => {
        it('returns true if value has been added', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );

          expect(
            await instance['__hh_exposed_contains(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.be.true;
        });

        it('returns false if value has not been added', async () => {
          expect(
            await instance['__hh_exposed_contains(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressFour,
            ),
          ).to.be.false;
        });
      });

      describe('#length()', () => {
        it('returns length of enumerable map', async () => {
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(0);

          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(1);

          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressTwo,
            addressFive,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(2);

          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressThree,
            addressSix,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(3);

          await instance['__hh_exposed_remove(uint256,address)'](
            STORAGE_SLOT,
            addressThree,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(2);

          await instance['__hh_exposed_remove(uint256,address)'](
            STORAGE_SLOT,
            addressTwo,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(1);

          await instance['__hh_exposed_remove(uint256,address)'](
            STORAGE_SLOT,
            addressOne,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(0);
        });
      });

      describe('#get(address)', () => {
        it('returns address stored at key', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );

          expect(
            await instance['__hh_exposed_get(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.eq(addressFour);
        });

        describe('reverts if', () => {
          it('key does not exist', async () => {
            await expect(
              instance['__hh_exposed_get(uint256,address)'].staticCall(
                STORAGE_SLOT,
                addressOne,
              ),
            ).to.be.revertedWithCustomError(
              instance,
              'EnumerableMap__NonExistentKey',
            );
          });
        });
      });

      describe('#set(address,address)', () => {
        it('sets the address value at address key', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );

          expect(
            await instance['__hh_exposed_contains(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.be.true;
          expect(
            await instance['__hh_exposed_get(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.eq(addressFour);
        });

        it('does not increase length if overwriting value at already set key', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressThree,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(1);
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressTwo,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(1);
        });

        it('overwrites value if key already set', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressThree,
          );
          let [key, value] =
            await instance.__hh_exposed_at_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
              0n,
            );
          expect(key).to.eq(addressOne);
          expect(value).to.eq(addressThree);
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );
          [key, value] =
            await instance.__hh_exposed_at_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
              0n,
            );
          expect(key).to.eq(addressOne);
          expect(value).to.eq(addressFour);
        });

        it('returns true if address value is added at address key', async () => {
          expect(
            await instance[
              '__hh_exposed_set(uint256,address,address)'
            ].staticCall(STORAGE_SLOT, addressOne, addressFour),
          ).to.be.true;
        });

        it('returns false if address value is already added at address key', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );

          expect(
            await instance[
              '__hh_exposed_set(uint256,address,address)'
            ].staticCall(STORAGE_SLOT, addressOne, addressFour),
          ).to.be.false;
        });
      });

      describe('#remove(address)', () => {
        it('removes the address value at given address key', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );

          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(1);

          await instance['__hh_exposed_remove(uint256,address)'](
            STORAGE_SLOT,
            addressOne,
          );
          await expect(
            instance['__hh_exposed_get(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.be.revertedWithCustomError(
            instance,
            'EnumerableMap__NonExistentKey',
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(0);
        });

        it('returns true if address key removed', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );
          expect(
            await instance['__hh_exposed_remove(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.be.true;
        });
        it('returns false if address key does not exist', async () => {
          expect(
            await instance['__hh_exposed_remove(uint256,address)'].staticCall(
              STORAGE_SLOT,
              addressOne,
            ),
          ).to.be.false;
        });
      });

      describe('#toArray()', () => {
        it('returns arrays of keys and values in map', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressTwo,
            addressFive,
          );
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressThree,
            addressSix,
          );

          const [keys, values] =
            await instance.__hh_exposed_toArray_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            );

          expect(keys).to.deep.equal([addressOne, addressTwo, addressThree]);
          expect(values).to.deep.equal([addressFour, addressFive, addressSix]);
        });
      });

      describe('#keys()', () => {
        it('returns array of keys in map', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressTwo,
            addressFive,
          );
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressThree,
            addressSix,
          );

          const keys =
            await instance.__hh_exposed_keys_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            );

          expect(keys).to.deep.equal([addressOne, addressTwo, addressThree]);
        });
      });

      describe('#values()', () => {
        it('returns array of values in map', async () => {
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressOne,
            addressFour,
          );
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressTwo,
            addressFive,
          );
          await instance['__hh_exposed_set(uint256,address,address)'](
            STORAGE_SLOT,
            addressThree,
            addressSix,
          );

          const values =
            await instance.__hh_exposed_values_EnumerableMap_AddressToAddressMap.staticCall(
              STORAGE_SLOT,
            );

          expect(values).to.deep.equal([addressFour, addressFive, addressSix]);
        });
      });
    });
  });

  describe('UintToAddressMap', async () => {
    let instance: __hh_exposed_EnumerableMap;
    let deployer: SignerWithAddress;

    beforeEach(async () => {
      [deployer] = await ethers.getSigners();
      instance = await new __hh_exposed_EnumerableMap__factory(
        deployer,
      ).deploy();
    });

    describe('__internal', () => {
      const uintOne = 1;
      const uintTwo = 2;
      const uintThree = 3;
      const addressOne = bigintToAddress(100);
      const addressTwo = bigintToAddress(200);
      const addressThree = bigintToAddress(300);

      describe('#at(uint256)', () => {
        it('returns value coresponding to index provided', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );

          const [key, value] =
            await instance.__hh_exposed_at_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
              0n,
            );

          expect(key).to.equal(uintOne);
          expect(value).to.equal(addressOne);
        });

        describe('reverts if', () => {
          it('index is out of bounds', async () => {
            await expect(
              instance.__hh_exposed_at_EnumerableMap_UintToAddressMap.staticCall(
                STORAGE_SLOT,
                0n,
              ),
            ).to.be.revertedWithCustomError(
              instance,
              'EnumerableMap__IndexOutOfBounds',
            );
          });
        });
      });

      describe('#contains(uint256)', () => {
        it('returns true if value has been added', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );

          expect(
            await instance['__hh_exposed_contains(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.be.true;
        });

        it('returns false if value has not been added', async () => {
          expect(
            await instance['__hh_exposed_contains(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.be.false;
        });
      });

      describe('#length()', () => {
        it('returns length of enumerable map', async () => {
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(0);

          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(1);

          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintTwo,
            addressTwo,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(2);

          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintThree,
            addressThree,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(3);

          await instance['__hh_exposed_remove(uint256,uint256)'](
            STORAGE_SLOT,
            uintOne,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(2);

          await instance['__hh_exposed_remove(uint256,uint256)'](
            STORAGE_SLOT,
            uintTwo,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(1);

          await instance['__hh_exposed_remove(uint256,uint256)'](
            STORAGE_SLOT,
            uintThree,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.equal(0);
        });
      });

      describe('#get(uint256)', () => {
        it('returns address stored at key', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );

          expect(
            await instance['__hh_exposed_get(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.eq(addressOne);
        });

        describe('reverts if', () => {
          it('key does not exist', async () => {
            await expect(
              instance['__hh_exposed_get(uint256,uint256)'].staticCall(
                STORAGE_SLOT,
                uintOne,
              ),
            ).to.be.revertedWithCustomError(
              instance,
              'EnumerableMap__NonExistentKey',
            );
          });
        });
      });

      describe('#set(uint256,address)', () => {
        it('sets the address value at uint256 key', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );

          expect(
            await instance['__hh_exposed_contains(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.be.true;
          expect(
            await instance['__hh_exposed_get(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.eq(addressOne);
        });

        it('does not increase length if overwriting value at already set key', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressThree,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(1);
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressTwo,
          );
          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(1);
        });

        it('overwrites value if key already set', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressThree,
          );
          let [key, value] =
            await instance.__hh_exposed_at_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
              0n,
            );
          expect(key).to.eq(uintOne);
          expect(value).to.eq(addressThree);
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressTwo,
          );
          [key, value] =
            await instance.__hh_exposed_at_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
              0n,
            );
          expect(key).to.eq(uintOne);
          expect(value).to.eq(addressTwo);
        });

        it('returns true if address value is added at uint256 key', async () => {
          expect(
            await instance[
              '__hh_exposed_set(uint256,uint256,address)'
            ].staticCall(STORAGE_SLOT, uintOne, addressOne),
          ).to.be.true;
        });

        it('returns false if address value is already added at uint256 key', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );

          expect(
            await instance[
              '__hh_exposed_set(uint256,uint256,address)'
            ].staticCall(STORAGE_SLOT, uintOne, addressOne),
          ).to.be.false;
        });
      });

      describe('#remove(uint256)', () => {
        it('removes the address value at given uint256 key', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );

          expect(
            await instance.__hh_exposed_length_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            ),
          ).to.eq(1);

          await instance['__hh_exposed_remove(uint256,uint256)'](
            STORAGE_SLOT,
            uintOne,
          );
          await expect(
            instance['__hh_exposed_get(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.be.revertedWithCustomError(
            instance,
            'EnumerableMap__NonExistentKey',
          );
        });

        it('returns true if uint256 key removed', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );
          expect(
            await instance['__hh_exposed_remove(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.be.true;
        });
        it('returns false if uint256 key does not exist', async () => {
          expect(
            await instance['__hh_exposed_remove(uint256,uint256)'].staticCall(
              STORAGE_SLOT,
              uintOne,
            ),
          ).to.be.false;
        });
      });

      describe('#toArray()', () => {
        it('returns arrays of keys and values in map', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintTwo,
            addressTwo,
          );
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintThree,
            addressThree,
          );

          const [keys, values] =
            await instance.__hh_exposed_toArray_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            );

          expect(keys).to.deep.equal([uintOne, uintTwo, uintThree]);
          expect(values).to.deep.equal([addressOne, addressTwo, addressThree]);
        });
      });

      describe('#keys()', () => {
        it('returns array of keys in map', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintTwo,
            addressTwo,
          );
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintThree,
            addressThree,
          );

          const keys =
            await instance.__hh_exposed_keys_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            );

          expect(keys).to.deep.equal([uintOne, uintTwo, uintThree]);
        });
      });

      describe('#values()', () => {
        it('returns array of values in map', async () => {
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintOne,
            addressOne,
          );
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintTwo,
            addressTwo,
          );
          await instance['__hh_exposed_set(uint256,uint256,address)'](
            STORAGE_SLOT,
            uintThree,
            addressThree,
          );

          const values =
            await instance.__hh_exposed_values_EnumerableMap_UintToAddressMap.staticCall(
              STORAGE_SLOT,
            );

          expect(values).to.deep.equal([addressOne, addressTwo, addressThree]);
        });
      });
    });
  });
});
