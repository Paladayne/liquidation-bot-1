/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IFactoryInterface extends ethers.utils.Interface {
  functions: {
    "getAllLendables()": FunctionFragment;
    "getAllTradables()": FunctionFragment;
    "getOrCreatePool(address,address)": FunctionFragment;
    "getOrCreateReserve(address)": FunctionFragment;
    "getPool(address,address)": FunctionFragment;
    "getReserve(address)": FunctionFragment;
    "isPool(address)": FunctionFragment;
    "parseTokens(address,address)": FunctionFragment;
    "poolBytecodeHash()": FunctionFragment;
    "registerLendable(address)": FunctionFragment;
    "registerLendables(address[])": FunctionFragment;
    "registerTradable(address)": FunctionFragment;
    "registerTradables(address[])": FunctionFragment;
    "reserveBytecodeHash()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAllLendables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTradables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreatePool",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "getReserve", values: [string]): string;
  encodeFunctionData(functionFragment: "isPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "parseTokens",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolBytecodeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerLendable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerLendables",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTradable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTradables",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveBytecodeHash",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllLendables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTradables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreatePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReserve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolBytecodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerLendable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerLendables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTradable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTradables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveBytecodeHash",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IFactoryInterface;

  functions: {
    getAllLendables(overrides?: Overrides): Promise<ContractTransaction>;

    "getAllLendables()"(overrides?: Overrides): Promise<ContractTransaction>;

    getAllTradables(overrides?: Overrides): Promise<ContractTransaction>;

    "getAllTradables()"(overrides?: Overrides): Promise<ContractTransaction>;

    getOrCreatePool(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getOrCreatePool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getOrCreateReserve(
      lendable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getOrCreateReserve(address)"(
      lendable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPool(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getPool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getReserve(lendable: string, overrides?: CallOverrides): Promise<[string]>;

    "getReserve(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isPool(pool: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    parseTokens(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "parseTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    poolBytecodeHash(overrides?: CallOverrides): Promise<[string]>;

    "poolBytecodeHash()"(overrides?: CallOverrides): Promise<[string]>;

    registerLendable(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerLendable(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    registerLendables(
      token: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerLendables(address[])"(
      token: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    registerTradable(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerTradable(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    registerTradables(
      tokens: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerTradables(address[])"(
      tokens: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reserveBytecodeHash(overrides?: CallOverrides): Promise<[string]>;

    "reserveBytecodeHash()"(overrides?: CallOverrides): Promise<[string]>;
  };

  getAllLendables(overrides?: Overrides): Promise<ContractTransaction>;

  "getAllLendables()"(overrides?: Overrides): Promise<ContractTransaction>;

  getAllTradables(overrides?: Overrides): Promise<ContractTransaction>;

  "getAllTradables()"(overrides?: Overrides): Promise<ContractTransaction>;

  getOrCreatePool(
    lendable: string,
    tradable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getOrCreatePool(address,address)"(
    lendable: string,
    tradable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getOrCreateReserve(
    lendable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getOrCreateReserve(address)"(
    lendable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPool(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPool(address,address)"(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getReserve(lendable: string, overrides?: CallOverrides): Promise<string>;

  "getReserve(address)"(
    lendable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  isPool(pool: string, overrides?: CallOverrides): Promise<boolean>;

  "isPool(address)"(pool: string, overrides?: CallOverrides): Promise<boolean>;

  parseTokens(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "parseTokens(address,address)"(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  poolBytecodeHash(overrides?: CallOverrides): Promise<string>;

  "poolBytecodeHash()"(overrides?: CallOverrides): Promise<string>;

  registerLendable(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerLendable(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  registerLendables(
    token: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerLendables(address[])"(
    token: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  registerTradable(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerTradable(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  registerTradables(
    tokens: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerTradables(address[])"(
    tokens: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reserveBytecodeHash(overrides?: CallOverrides): Promise<string>;

  "reserveBytecodeHash()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAllLendables(overrides?: CallOverrides): Promise<string[]>;

    "getAllLendables()"(overrides?: CallOverrides): Promise<string[]>;

    getAllTradables(overrides?: CallOverrides): Promise<string[]>;

    "getAllTradables()"(overrides?: CallOverrides): Promise<string[]>;

    getOrCreatePool(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getOrCreatePool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateReserve(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getOrCreateReserve(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPool(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getReserve(lendable: string, overrides?: CallOverrides): Promise<string>;

    "getReserve(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    isPool(pool: string, overrides?: CallOverrides): Promise<boolean>;

    "isPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    parseTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    "parseTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    poolBytecodeHash(overrides?: CallOverrides): Promise<string>;

    "poolBytecodeHash()"(overrides?: CallOverrides): Promise<string>;

    registerLendable(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "registerLendable(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerLendables(
      token: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "registerLendables(address[])"(
      token: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerTradable(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "registerTradable(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerTradables(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "registerTradables(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    reserveBytecodeHash(overrides?: CallOverrides): Promise<string>;

    "reserveBytecodeHash()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAllLendables(overrides?: Overrides): Promise<BigNumber>;

    "getAllLendables()"(overrides?: Overrides): Promise<BigNumber>;

    getAllTradables(overrides?: Overrides): Promise<BigNumber>;

    "getAllTradables()"(overrides?: Overrides): Promise<BigNumber>;

    getOrCreatePool(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getOrCreatePool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getOrCreateReserve(
      lendable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getOrCreateReserve(address)"(
      lendable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getPool(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserve(lendable: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getReserve(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPool(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseTokens(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "parseTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    poolBytecodeHash(overrides?: CallOverrides): Promise<BigNumber>;

    "poolBytecodeHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerLendable(token: string, overrides?: Overrides): Promise<BigNumber>;

    "registerLendable(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    registerLendables(
      token: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerLendables(address[])"(
      token: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    registerTradable(token: string, overrides?: Overrides): Promise<BigNumber>;

    "registerTradable(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    registerTradables(
      tokens: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerTradables(address[])"(
      tokens: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    reserveBytecodeHash(overrides?: CallOverrides): Promise<BigNumber>;

    "reserveBytecodeHash()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllLendables(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getAllLendables()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getAllTradables(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getAllTradables()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getOrCreatePool(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getOrCreatePool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getOrCreateReserve(
      lendable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getOrCreateReserve(address)"(
      lendable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getPool(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPool(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserve(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserve(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPool(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseTokens(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "parseTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    poolBytecodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolBytecodeHash()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerLendable(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerLendable(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    registerLendables(
      token: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerLendables(address[])"(
      token: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    registerTradable(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerTradable(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    registerTradables(
      tokens: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerTradables(address[])"(
      tokens: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reserveBytecodeHash(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "reserveBytecodeHash()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
