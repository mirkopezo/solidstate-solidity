// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { OwnableInternal } from '../../../access/ownable/OwnableInternal.sol';
import { DiamondBaseInternal } from '../base/DiamondBaseInternal.sol';
import { DiamondBaseStorage } from '../base/DiamondBaseStorage.sol';
import { IDiamondFallbackInternal } from './IDiamondFallbackInternal.sol';

abstract contract DiamondFallbackInternal is
    IDiamondFallbackInternal,
    DiamondBaseInternal,
    OwnableInternal
{
    /**
     * @inheritdoc DiamondBaseInternal
     * @notice query custom fallback address is no implementation is found
     */
    function _getImplementation()
        internal
        view
        virtual
        override
        returns (address implementation)
    {
        implementation = super._getImplementation();

        if (implementation == address(0)) {
            implementation = _getFallbackAddress();
        }
    }

    /**
     * @notice query the address of the fallback implementation
     * @return fallbackAddress address of fallback implementation
     */
    function _getFallbackAddress()
        internal
        view
        virtual
        returns (address fallbackAddress)
    {
        fallbackAddress = DiamondBaseStorage.layout().fallbackAddress;
    }

    /**
     * @notice set the address of the fallback implementation
     * @param fallbackAddress address of fallback implementation
     */
    function _setFallbackAddress(address fallbackAddress) internal virtual {
        DiamondBaseStorage.layout().fallbackAddress = fallbackAddress;
    }
}
