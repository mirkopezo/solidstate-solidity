/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../common';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export interface MerkleProofMockInterface extends utils.Interface {
  functions: {
    'verify(bytes32[],bytes32,bytes32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'verify' | 'verify(bytes32[],bytes32,bytes32)',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'verify',
    values: [BytesLike[], BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'verify(bytes32[],bytes32,bytes32)',
    values: [BytesLike[], BytesLike, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'verify', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'verify(bytes32[],bytes32,bytes32)',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface MerkleProofMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleProofMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'verify(bytes32[],bytes32,bytes32)'(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  verify(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'verify(bytes32[],bytes32,bytes32)'(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  callStatic: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'verify(bytes32[],bytes32,bytes32)'(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'verify(bytes32[],bytes32,bytes32)'(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'verify(bytes32[],bytes32,bytes32)'(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
