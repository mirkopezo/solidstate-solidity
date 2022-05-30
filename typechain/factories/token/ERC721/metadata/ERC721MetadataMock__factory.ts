/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC721MetadataMock,
  ERC721MetadataMockInterface,
} from '../../../../token/ERC721/metadata/ERC721MetadataMock';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'baseURI',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000a2f38038062000a2f833981016040819052620000349162000234565b60006200004b6200009d60201b620003c11760201c565b8451909150620000629082906020870190620000c1565b5082516200007a9060018301906020860190620000c1565b508151620000929060028301906020850190620000c1565b505050505062000302565b7f99574a7094154bb123ae6ae102096f0bf9679b85a5cd1e727aaa0ae5f132e6b190565b828054620000cf90620002c5565b90600052602060002090601f016020900481019282620000f357600085556200013e565b82601f106200010e57805160ff19168380011785556200013e565b828001600101855582156200013e579182015b828111156200013e57825182559160200191906001019062000121565b506200014c92915062000150565b5090565b5b808211156200014c576000815560010162000151565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018f57600080fd5b81516001600160401b0380821115620001ac57620001ac62000167565b604051601f8301601f19908116603f01168101908282118183101715620001d757620001d762000167565b81604052838152602092508683858801011115620001f457600080fd5b600091505b83821015620002185785820183015181830184015290820190620001f9565b838211156200022a5760008385830101525b9695505050505050565b6000806000606084860312156200024a57600080fd5b83516001600160401b03808211156200026257600080fd5b62000270878388016200017d565b945060208601519150808211156200028757600080fd5b62000295878388016200017d565b93506040860151915080821115620002ac57600080fd5b50620002bb868287016200017d565b9150509250925092565b600181811c90821680620002da57607f821691505b60208210811415620002fc57634e487b7160e01b600052602260045260246000fd5b50919050565b61071d80620003126000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a71461005157806306fdde03146100b257806395d89b41146100c7578063c87b56dd146100cf575b600080fd5b61009d61005f36600461050d565b6001600160e01b03191660009081527f326d0c59a7612f6a9919e2a8ee333c80ba689d8ba2634de89c85cbb04832e705602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100ba6100e2565b6040516100a99190610567565b6100ba61017a565b6100ba6100dd36600461059a565b610192565b60606100ec6103c1565b80546100f7906105b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610123906105b3565b80156101705780601f1061014557610100808354040283529160200191610170565b820191906000526020600020905b81548152906001019060200180831161015357829003601f168201915b5050505050905090565b60606101846103c1565b60010180546100f7906105b3565b60606101be7f3c7bf052874fa81625121783266a03507bd2cd48b16e571c01a04e8dd3fb07a6836103e5565b6102265760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840160405180910390fd5b60006102306103c1565b6000848152600382016020526040812080549293509091610250906105b3565b80601f016020809104026020016040519081016040528092919081815260200182805461027c906105b3565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b5050505050905060008260020180546102e1906105b3565b80601f016020809104026020016040519081016040528092919081815260200182805461030d906105b3565b801561035a5780601f1061032f5761010080835404028352916020019161035a565b820191906000526020600020905b81548152906001019060200180831161033d57829003601f168201915b5050505050905080516000141561037357509392505050565b8151156103a657808260405160200161038d9291906105ee565b6040516020818303038152906040529350505050919050565b806103b086610407565b60405160200161038d9291906105ee565b7f99574a7094154bb123ae6ae102096f0bf9679b85a5cd1e727aaa0ae5f132e6b190565b60006104008383600081815260018301602052604081205415155b9392505050565b60608161042b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610455578061043f81610633565b915061044e9050600a83610664565b915061042f565b60008167ffffffffffffffff81111561047057610470610678565b6040519080825280601f01601f19166020018201604052801561049a576020820181803683370190505b5090505b8415610505576104af60018361068e565b91506104bc600a866106a5565b6104c79060306106b9565b60f81b8183815181106104dc576104dc6106d1565b60200101906001600160f81b031916908160001a9053506104fe600a86610664565b945061049e565b949350505050565b60006020828403121561051f57600080fd5b81356001600160e01b03198116811461040057600080fd5b60005b8381101561055257818101518382015260200161053a565b83811115610561576000848401525b50505050565b6020815260008251806020840152610586816040850160208701610537565b601f01601f19169190910160400192915050565b6000602082840312156105ac57600080fd5b5035919050565b600181811c908216806105c757607f821691505b602082108114156105e857634e487b7160e01b600052602260045260246000fd5b50919050565b60008351610600818460208801610537565b835190830190610614818360208801610537565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156106475761064761061d565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826106735761067361064e565b500490565b634e487b7160e01b600052604160045260246000fd5b6000828210156106a0576106a061061d565b500390565b6000826106b4576106b461064e565b500690565b600082198211156106cc576106cc61061d565b500190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212201f88864305d9b232d9de60df4286bc0ff391508457ee1da30d5c62c11ed622bf64736f6c634300080a0033';

type ERC721MetadataMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MetadataMockConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721MetadataMock__factory extends ContractFactory {
  constructor(...args: ERC721MetadataMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ERC721MetadataMock> {
    return super.deploy(
      name,
      symbol,
      baseURI,
      overrides || {},
    ) as Promise<ERC721MetadataMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, baseURI, overrides || {});
  }
  override attach(address: string): ERC721MetadataMock {
    return super.attach(address) as ERC721MetadataMock;
  }
  override connect(signer: Signer): ERC721MetadataMock__factory {
    return super.connect(signer) as ERC721MetadataMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MetadataMockInterface {
    return new utils.Interface(_abi) as ERC721MetadataMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ERC721MetadataMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721MetadataMock;
  }
}
