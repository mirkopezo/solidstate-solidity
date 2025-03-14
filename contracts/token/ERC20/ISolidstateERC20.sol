// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IERC20Base } from './base/IERC20Base.sol';
import { IERC20Extended } from './extended/IERC20Extended.sol';
import { IERC20Metadata } from './metadata/IERC20Metadata.sol';
import { IERC20Permit } from './permit/IERC20Permit.sol';
import { _ISolidstateERC20 } from './_ISolidstateERC20.sol';

interface ISolidstateERC20 is
    _ISolidstateERC20,
    IERC20Base,
    IERC20Extended,
    IERC20Metadata,
    IERC20Permit
{}
