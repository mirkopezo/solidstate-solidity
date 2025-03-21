// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _Proxy } from '../../_Proxy.sol';
import { BeaconProxy } from '../BeaconProxy.sol';
import { _BeaconProxy } from '../_BeaconProxy.sol';
import { ITransparentBeaconProxy } from './ITransparentBeaconProxy.sol';
import { _TransparentBeaconProxy } from './_TransparentBeaconProxy.sol';

// ITransparentBeaconProxy,
abstract contract TransparentBeaconProxy is
    _TransparentBeaconProxy,
    BeaconProxy
{
    function _getImplementation()
        internal
        view
        virtual
        override(_BeaconProxy, BeaconProxy)
        returns (address implementation)
    {
        implementation = super._getImplementation();
    }

    function _fallback()
        internal
        virtual
        override(_Proxy, _TransparentBeaconProxy)
    {
        super._fallback();
    }
}
