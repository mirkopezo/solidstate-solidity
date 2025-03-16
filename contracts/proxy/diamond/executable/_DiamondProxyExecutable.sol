// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _Proxy } from '../../_Proxy.sol';
import { _DiamondProxyCommon } from '../common/_DiamondProxyCommon.sol';
import { _IDiamondProxyExecutable } from './_IDiamondProxyExecutable.sol';
import { ERC2535Storage } from '../../../storage/ERC2535Storage.sol';

abstract contract _DiamondProxyExecutable is
    _IDiamondProxyExecutable,
    _DiamondProxyCommon,
    _Proxy
{
    /**
     * @inheritdoc _Proxy
     */
    function _getImplementation()
        internal
        view
        virtual
        override
        returns (address implementation)
    {
        // inline storage layout retrieval uses less gas
        ERC2535Storage.Layout storage $;
        bytes32 slot = ERC2535Storage.DEFAULT_STORAGE_SLOT;
        assembly {
            $.slot := slot
        }

        implementation = address(bytes20($.selectorInfo[msg.sig]));
    }
}
