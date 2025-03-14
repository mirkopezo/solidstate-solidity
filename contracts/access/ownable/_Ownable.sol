// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IERC173 } from '../../interfaces/IERC173.sol';
import { AddressUtils } from '../../utils/AddressUtils.sol';
import { _IOwnable } from './_IOwnable.sol';
import { OwnableStorage } from './OwnableStorage.sol';

abstract contract _Ownable is _IOwnable {
    using AddressUtils for address;

    modifier onlyOwner() {
        if (msg.sender != _owner()) revert Ownable__NotOwner();
        _;
    }

    modifier onlyTransitiveOwner() {
        if (msg.sender != _transitiveOwner())
            revert Ownable__NotTransitiveOwner();
        _;
    }

    function _owner() internal view virtual returns (address) {
        return OwnableStorage.layout(OwnableStorage.DEFAULT_STORAGE_SLOT).owner;
    }

    function _transitiveOwner() internal view virtual returns (address owner) {
        owner = _owner();

        while (owner.isContract()) {
            try IERC173(owner).owner() returns (address transitiveOwner) {
                owner = transitiveOwner;
            } catch {
                break;
            }
        }
    }

    function _transferOwnership(address account) internal virtual onlyOwner {
        _setOwner(account);
    }

    function _setOwner(address account) internal virtual {
        OwnableStorage.Layout storage $ = OwnableStorage.layout(
            OwnableStorage.DEFAULT_STORAGE_SLOT
        );
        emit OwnershipTransferred($.owner, account);
        $.owner = account;
    }
}
