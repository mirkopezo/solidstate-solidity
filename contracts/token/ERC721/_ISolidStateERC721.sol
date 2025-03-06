// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { _IERC165Base } from '../../introspection/ERC165/base/_IERC165Base.sol';
import { _IERC721Base } from './base/_IERC721Base.sol';
import { _IERC721Enumerable } from './enumerable/_IERC721Enumerable.sol';
import { _IERC721Metadata } from './metadata/_IERC721Metadata.sol';

interface _ISolidStateERC721 is
    _IERC721Base,
    _IERC721Enumerable,
    _IERC721Metadata,
    _IERC165Base
{
    error SolidStateERC721__PayableApproveNotSupported();
    error SolidStateERC721__PayableTransferNotSupported();
}
