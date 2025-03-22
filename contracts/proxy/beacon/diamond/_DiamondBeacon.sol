// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _Ownable } from '../../../access/ownable/_Ownable.sol';
import { _DiamondProxyWritable } from '../../diamond/writable/_DiamondProxyWritable.sol';
import { _DiamondProxy } from '../../diamond/_DiamondProxy.sol';
import { _IDiamondBeacon } from './_IDiamondBeacon.sol';

abstract contract _DiamondBeacon is
    _IDiamondBeacon,
    _Ownable,
    _DiamondProxyWritable
{
    /**
     * @notice query the address of the implementation that should be used by IERC1967Proxy instances
     * @param selector function selector whose implementation to query
     * @return implementation address of the implementation contract
     */
    function _implementation(
        bytes4 selector
    ) internal view virtual returns (address implementation) {
        implementation = _facetAddress(selector);
    }

    /**
     * @inheritdoc _DiamondProxy
     * @param target unused (input must be zero address)
     * @param data unused (input must be zero bytes)
     */
    function _diamondCut(
        FacetCut[] memory facetCuts,
        address target,
        bytes memory data
    ) internal virtual override {
        if (target != address(0) || data.length != 0)
            revert DiamondBeacon__InvalidInput();
        super._diamondCut(facetCuts, target, data);
    }
}
