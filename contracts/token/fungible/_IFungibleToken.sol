// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _IERC20 } from '../../interfaces/_IERC20.sol';

/**
 * @title FungibleToken base interface
 */
interface _IFungibleToken is _IERC20 {
    error FungibleToken__ApproveFromZeroAddress();
    error FungibleToken__ApproveToZeroAddress();
    error FungibleToken__BurnExceedsBalance();
    error FungibleToken__BurnFromZeroAddress();
    error FungibleToken__InsufficientAllowance();
    error FungibleToken__MintToZeroAddress();
    error FungibleToken__TransferExceedsBalance();
    error FungibleToken__TransferFromZeroAddress();
    error FungibleToken__TransferToZeroAddress();
}
