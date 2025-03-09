// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IProxy } from '../../IProxy.sol';
import { _IDiamondBase } from './_IDiamondBase.sol';

interface IDiamondBase is _IDiamondBase, IProxy {}
