// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import { EnumerableMap } from './EnumerableMap.sol';

contract EnumerableMapUintToAddressMock {
    using EnumerableMap for EnumerableMap.UintToAddressMap;

    EnumerableMap.UintToAddressMap internal map;

    function at(uint256 index) external view returns (uint256, address) {
        return map.at(index);
    }

    function contains(uint256 key) external view returns (bool) {
        return map.contains(key);
    }

    function length() external view returns (uint256) {
        return map.length();
    }

    function get(uint256 key) external view returns (address) {
        return map.get(key);
    }

    function set(uint256 key, address value) external returns (bool) {
        return map.set(key, value);
    }

    function remove(uint256 key) external returns (bool) {
        return map.remove(key);
    }

    function toArray()
        external
        view
        returns (uint256[] memory keys, address[] memory values)
    {
        (keys, values) = map.toArray();
    }
}
