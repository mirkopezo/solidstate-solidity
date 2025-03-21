import { describeBehaviorOfProxy, ProxyBehaviorArgs } from '../Proxy.behavior';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import { deployMockContract } from '@solidstate/library';
import { describeFilter } from '@solidstate/library';
import {
  ITransparentProxy,
  ITransparentProxyWithAdminFunctions,
  ITransparentProxyWithAdminFunctions__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

interface TransparentProxyArgs extends ProxyBehaviorArgs {
  getOwner: () => Promise<SignerWithAddress>;
  getNonOwner: () => Promise<SignerWithAddress>;
}

export function describeBehaviorOfTransparentProxy(
  deploy: () => Promise<ITransparentProxy>,
  args: TransparentProxyArgs,
  skips?: string[],
) {
  const describe = describeFilter(skips);

  describe('::TransparentProxy', () => {
    let instance: ITransparentProxy;
    let instanceWithAdminFunctions: ITransparentProxyWithAdminFunctions;
    let owner: SignerWithAddress;
    let nonOwner: SignerWithAddress;

    beforeEach(async () => {
      instance = await deploy();
      instanceWithAdminFunctions =
        ITransparentProxyWithAdminFunctions__factory.connect(
          await instance.getAddress(),
          instance.runner,
        );

      owner = await args.getOwner();
      nonOwner = await args.getNonOwner();
    });

    describeBehaviorOfProxy(deploy, args, skips);

    describe('#setAdmin(address', () => {
      it('updates the admin address', async () => {
        await instanceWithAdminFunctions
          .connect(owner)
          .setAdmin(await nonOwner.getAddress());

        const adminSlotContents = await ethers.provider.send(
          'eth_getStorageAt',
          [
            await instanceWithAdminFunctions.getAddress(),
            '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103',
          ],
        );

        expect(adminSlotContents).to.hexEqual(await nonOwner.getAddress());
      });

      it('emits AdminChanged event', async () => {
        await expect(
          instanceWithAdminFunctions
            .connect(owner)
            .setAdmin(await nonOwner.getAddress()),
        )
          .to.emit(instanceWithAdminFunctions, 'AdminChanged')
          .withArgs(await owner.getAddress(), await nonOwner.getAddress());
      });

      it('falls back to implementation if sender is not admin', async () => {
        await instanceWithAdminFunctions
          .connect(owner)
          .setImplementation(ethers.ZeroAddress);

        await expect(
          instanceWithAdminFunctions
            .connect(nonOwner)
            .setAdmin(ethers.ZeroAddress),
        ).to.be.revertedWithCustomError(
          instance,
          'Proxy__ImplementationIsNotContract',
        );
      });
    });

    describe('#setImplementation(address)', () => {
      it('updates implementation address', async () => {
        const implementationFunction = 'fn';
        const abi = [
          `function ${implementationFunction} () external view returns (bool)`,
        ];

        const implementation = await deployMockContract(owner, abi);

        const contract = new ethers.Contract(
          await instance.getAddress(),
          abi,
          owner,
        );

        await expect(
          contract[implementationFunction].staticCall(),
        ).not.to.be.revertedWith('Mock on the method is not initialized');

        await instanceWithAdminFunctions
          .connect(owner)
          .setImplementation(implementation.address);

        // call reverts, but with mock-specific message
        await expect(
          contract[implementationFunction].staticCall(),
        ).to.be.revertedWith('Mock on the method is not initialized');
      });

      it('emits Upgraded event', async () => {
        await expect(
          instanceWithAdminFunctions
            .connect(owner)
            .setImplementation(ethers.ZeroAddress),
        )
          .to.emit(instanceWithAdminFunctions, 'Upgraded')
          .withArgs(ethers.ZeroAddress);
      });

      it('falls back to implementation if sender is not admin', async () => {
        await instanceWithAdminFunctions
          .connect(owner)
          .setImplementation(ethers.ZeroAddress);

        await expect(
          instanceWithAdminFunctions
            .connect(nonOwner)
            .setImplementation(ethers.ZeroAddress),
        ).to.be.revertedWithCustomError(
          instance,
          'Proxy__ImplementationIsNotContract',
        );
      });
    });
  });
}
