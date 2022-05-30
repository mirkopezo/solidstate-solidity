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
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export declare namespace ECDSAMultisigWallet {
  export type ParametersStruct = {
    target: string;
    data: BytesLike;
    value: BigNumberish;
    delegate: boolean;
  };

  export type ParametersStructOutput = [string, string, BigNumber, boolean] & {
    target: string;
    data: string;
    value: BigNumber;
    delegate: boolean;
  };

  export type SignatureStruct = { data: BytesLike; nonce: BigNumberish };

  export type SignatureStructOutput = [string, BigNumber] & {
    data: string;
    nonce: BigNumber;
  };
}

export interface ECDSAMultisigWalletMockInterface extends utils.Interface {
  functions: {
    'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'verifyAndExecute'
      | 'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'verifyAndExecute',
    values: [
      ECDSAMultisigWallet.ParametersStruct,
      ECDSAMultisigWallet.SignatureStruct[],
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])',
    values: [
      ECDSAMultisigWallet.ParametersStruct,
      ECDSAMultisigWallet.SignatureStruct[],
    ],
  ): string;

  decodeFunctionResult(
    functionFragment: 'verifyAndExecute',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface ECDSAMultisigWalletMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ECDSAMultisigWalletMockInterface;

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
    verifyAndExecute(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])'(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  verifyAndExecute(
    parameters: ECDSAMultisigWallet.ParametersStruct,
    signatures: ECDSAMultisigWallet.SignatureStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])'(
    parameters: ECDSAMultisigWallet.ParametersStruct,
    signatures: ECDSAMultisigWallet.SignatureStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    verifyAndExecute(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: CallOverrides,
    ): Promise<string>;

    'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])'(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    verifyAndExecute(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])'(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyAndExecute(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'verifyAndExecute((address,bytes,uint256,bool),(bytes,uint256)[])'(
      parameters: ECDSAMultisigWallet.ParametersStruct,
      signatures: ECDSAMultisigWallet.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
