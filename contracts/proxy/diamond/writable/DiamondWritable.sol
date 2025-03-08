// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IERC2535DiamondCut } from '../../../interfaces/IERC2535DiamondCut.sol';
import { IDiamondWritable } from './IDiamondWritable.sol';
import { _DiamondWritable } from './_DiamondWritable.sol';

/**
 * @title EIP-2535 "Diamond" proxy update contract
 */
abstract contract DiamondWritable is IDiamondWritable, _DiamondWritable {
    /**
     * @inheritdoc IERC2535DiamondCut
     */
    function diamondCut(
        FacetCut[] calldata facetCuts,
        address target,
        bytes calldata data
    ) external {
        _diamondCutExternal(facetCuts, target, data);
    }
}
