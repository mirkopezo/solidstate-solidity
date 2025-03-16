// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _Ownable } from '../../../access/ownable/_Ownable.sol';
import { DiamondBaseStorage } from '../../../storage/DiamondBaseStorage.sol';
import { _DiamondProxyExecutable } from '../executable/_DiamondProxyExecutable.sol';
import { _IDiamondProxyFallback } from './_IDiamondProxyFallback.sol';

abstract contract _DiamondProxyFallback is
    _IDiamondProxyFallback,
    _DiamondProxyExecutable,
    _Ownable
{
    /**
     * @inheritdoc _DiamondProxyExecutable
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
        fallbackAddress = DiamondBaseStorage
            .layout(DiamondBaseStorage.DEFAULT_STORAGE_SLOT)
            .fallbackAddress;
    }

    /**
     * TODO: standardize use of externally accessible functions with "External" suffix
     */
    function _setFallbackAddressExternal(
        address fallbackAddress
    ) internal virtual onlyOwner {
        _setFallbackAddress(fallbackAddress);
    }

    /**
     * @notice set the address of the fallback implementation
     * @param fallbackAddress address of fallback implementation
     */
    function _setFallbackAddress(address fallbackAddress) internal virtual {
        DiamondBaseStorage
            .layout(DiamondBaseStorage.DEFAULT_STORAGE_SLOT)
            .fallbackAddress = fallbackAddress;
    }
}
