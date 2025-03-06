// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IERC4626 } from '../../../interfaces/IERC4626.sol';
import { IERC20Base } from '../../ERC20/base/IERC20Base.sol';
import { IERC20Metadata } from '../../ERC20/metadata/IERC20Metadata.sol';
import { IERC4626BaseInternal } from './IERC4626BaseInternal.sol';

/**
 * @title ERC4626 base interface
 */
interface IERC4626Base is
    IERC4626BaseInternal,
    IERC20Base,
    IERC20Metadata,
    IERC4626
{}
