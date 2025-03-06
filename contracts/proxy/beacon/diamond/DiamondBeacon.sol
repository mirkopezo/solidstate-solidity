// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _Ownable } from '../../../access/ownable/Ownable.sol';
import { Ownable } from '../../../access/ownable/Ownable.sol';
import { DiamondReadable } from '../../diamond/readable/DiamondReadable.sol';
import { DiamondWritable } from '../../diamond/writable/DiamondWritable.sol';
import { _DiamondWritable } from '../../diamond/writable/_DiamondWritable.sol';
import { IDiamondBeacon } from './IDiamondBeacon.sol';
import { _DiamondBeacon } from './_DiamondBeacon.sol';

/**
 * @title Beacon contract which imitates the upgrade mechanism of an EIP-2535 diamond proxy.
 * @dev Configure this beacon using diamondCut as if it were a diamond proxy.  Proxies can fetch their implementations by calling facetAddress.
 */
contract DiamondBeacon is
    IDiamondBeacon,
    _DiamondBeacon,
    DiamondReadable,
    DiamondWritable,
    Ownable
{
    /**
     * @inheritdoc _DiamondBeacon
     */
    function _diamondCut(
        FacetCut[] memory facetCuts,
        address target,
        bytes memory data
    ) internal virtual override(_DiamondWritable, _DiamondBeacon) {
        super._diamondCut(facetCuts, target, data);
    }
}
