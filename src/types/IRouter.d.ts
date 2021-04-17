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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IRouterInterface extends ethers.utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "calculateBalance(address,address,address,uint256)": FunctionFragment;
    "calculateOpenPosition(address,address,uint256,uint256)": FunctionFragment;
    "closePosition(uint256,uint256,address,address,address,uint256)": FunctionFragment;
    "closePositionETH(uint256,uint256,address,address,uint256)": FunctionFragment;
    "deposit(address,uint256,address)": FunctionFragment;
    "depositETH(address)": FunctionFragment;
    "liquidatePosition(address,address,address)": FunctionFragment;
    "openPosition(uint256,uint256,uint256,address,address,address,uint256)": FunctionFragment;
    "openPositionETH(uint256,uint256,address,address,uint256)": FunctionFragment;
    "pairFactory()": FunctionFragment;
    "reserveFactory()": FunctionFragment;
    "swapFactory()": FunctionFragment;
    "swapRouter()": FunctionFragment;
    "sweepFee(address,address)": FunctionFragment;
    "withdraw(address,uint256,address)": FunctionFragment;
    "withdrawETH(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateBalance",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOpenPosition",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [BigNumberish, BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePositionETH",
    values: [BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "depositETH", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidatePosition",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openPositionETH",
    values: [BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pairFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sweepFee",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateOpenPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePositionETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPositionETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweepFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRouter extends Contract {
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

  interface: IRouterInterface;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    "WETH()"(overrides?: CallOverrides): Promise<[string]>;

    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    "calculateBalance(address,address,address,uint256)"(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    "calculateOpenPosition(address,address,uint256,uint256)"(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    closePosition(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closePosition(uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    closePositionETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closePositionETH(uint256,uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deposit(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositETH(
      to: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "depositETH(address)"(
      to: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    liquidatePosition(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidatePosition(address,address,address)"(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    openPosition(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "openPosition(uint256,uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    openPositionETH(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "openPositionETH(uint256,uint256,address,address,uint256)"(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    pairFactory(overrides?: Overrides): Promise<ContractTransaction>;

    "pairFactory()"(overrides?: Overrides): Promise<ContractTransaction>;

    reserveFactory(overrides?: Overrides): Promise<ContractTransaction>;

    "reserveFactory()"(overrides?: Overrides): Promise<ContractTransaction>;

    swapFactory(overrides?: Overrides): Promise<ContractTransaction>;

    "swapFactory()"(overrides?: Overrides): Promise<ContractTransaction>;

    swapRouter(overrides?: Overrides): Promise<ContractTransaction>;

    "swapRouter()"(overrides?: Overrides): Promise<ContractTransaction>;

    sweepFee(
      lendable: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sweepFee(address,address)"(
      lendable: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawETH(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawETH(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  "WETH()"(overrides?: CallOverrides): Promise<string>;

  calculateBalance(
    lendable: string,
    tradable: string,
    trader: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      profit: BigNumber;
      debtPayable: BigNumber;
      protocolFee: BigNumber;
    }
  >;

  "calculateBalance(address,address,address,uint256)"(
    lendable: string,
    tradable: string,
    trader: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      profit: BigNumber;
      debtPayable: BigNumber;
      protocolFee: BigNumber;
    }
  >;

  calculateOpenPosition(
    lendable: string,
    tradable: string,
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      maxAmountIn: BigNumber;
      borrowAmount: BigNumber;
      borrowRate: BigNumber;
      liquidationCost: BigNumber;
    }
  >;

  "calculateOpenPosition(address,address,uint256,uint256)"(
    lendable: string,
    tradable: string,
    amount: BigNumberish,
    leverageFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      maxAmountIn: BigNumber;
      borrowAmount: BigNumber;
      borrowRate: BigNumber;
      liquidationCost: BigNumber;
    }
  >;

  closePosition(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    lendable: string,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closePosition(uint256,uint256,address,address,address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    lendable: string,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  closePositionETH(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closePositionETH(uint256,uint256,address,address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deposit(
    lendable: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(address,uint256,address)"(
    lendable: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositETH(
    to: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "depositETH(address)"(
    to: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  liquidatePosition(
    lendable: string,
    tradable: string,
    trader: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidatePosition(address,address,address)"(
    lendable: string,
    tradable: string,
    trader: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  openPosition(
    amountIn: BigNumberish,
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
    lendable: string,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "openPosition(uint256,uint256,uint256,address,address,address,uint256)"(
    amountIn: BigNumberish,
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
    lendable: string,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  openPositionETH(
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "openPositionETH(uint256,uint256,address,address,uint256)"(
    leverageFactor: BigNumberish,
    amountOutMin: BigNumberish,
    tradable: string,
    trader: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  pairFactory(overrides?: Overrides): Promise<ContractTransaction>;

  "pairFactory()"(overrides?: Overrides): Promise<ContractTransaction>;

  reserveFactory(overrides?: Overrides): Promise<ContractTransaction>;

  "reserveFactory()"(overrides?: Overrides): Promise<ContractTransaction>;

  swapFactory(overrides?: Overrides): Promise<ContractTransaction>;

  "swapFactory()"(overrides?: Overrides): Promise<ContractTransaction>;

  swapRouter(overrides?: Overrides): Promise<ContractTransaction>;

  "swapRouter()"(overrides?: Overrides): Promise<ContractTransaction>;

  sweepFee(
    lendable: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sweepFee(address,address)"(
    lendable: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    lendable: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256,address)"(
    lendable: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawETH(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawETH(uint256,address)"(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    "WETH()"(overrides?: CallOverrides): Promise<string>;

    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    "calculateBalance(address,address,address,uint256)"(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        profit: BigNumber;
        debtPayable: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    "calculateOpenPosition(address,address,uint256,uint256)"(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        maxAmountIn: BigNumber;
        borrowAmount: BigNumber;
        borrowRate: BigNumber;
        liquidationCost: BigNumber;
      }
    >;

    closePosition(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "closePosition(uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePositionETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "closePositionETH(uint256,uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(to: string, overrides?: CallOverrides): Promise<void>;

    "depositETH(address)"(to: string, overrides?: CallOverrides): Promise<void>;

    liquidatePosition(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "liquidatePosition(address,address,address)"(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: CallOverrides
    ): Promise<void>;

    openPosition(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "openPosition(uint256,uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openPositionETH(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "openPositionETH(uint256,uint256,address,address,uint256)"(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairFactory(overrides?: CallOverrides): Promise<string>;

    "pairFactory()"(overrides?: CallOverrides): Promise<string>;

    reserveFactory(overrides?: CallOverrides): Promise<string>;

    "reserveFactory()"(overrides?: CallOverrides): Promise<string>;

    swapFactory(overrides?: CallOverrides): Promise<string>;

    "swapFactory()"(overrides?: CallOverrides): Promise<string>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    "swapRouter()"(overrides?: CallOverrides): Promise<string>;

    sweepFee(
      lendable: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepFee(address,address)"(
      lendable: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETH(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawETH(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    "WETH()"(overrides?: CallOverrides): Promise<BigNumber>;

    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateBalance(address,address,address,uint256)"(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateOpenPosition(address,address,uint256,uint256)"(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closePosition(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closePosition(uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    closePositionETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closePositionETH(uint256,uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deposit(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deposit(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositETH(to: string, overrides?: PayableOverrides): Promise<BigNumber>;

    "depositETH(address)"(
      to: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    liquidatePosition(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "liquidatePosition(address,address,address)"(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    openPosition(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "openPosition(uint256,uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    openPositionETH(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "openPositionETH(uint256,uint256,address,address,uint256)"(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    pairFactory(overrides?: Overrides): Promise<BigNumber>;

    "pairFactory()"(overrides?: Overrides): Promise<BigNumber>;

    reserveFactory(overrides?: Overrides): Promise<BigNumber>;

    "reserveFactory()"(overrides?: Overrides): Promise<BigNumber>;

    swapFactory(overrides?: Overrides): Promise<BigNumber>;

    "swapFactory()"(overrides?: Overrides): Promise<BigNumber>;

    swapRouter(overrides?: Overrides): Promise<BigNumber>;

    "swapRouter()"(overrides?: Overrides): Promise<BigNumber>;

    sweepFee(
      lendable: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sweepFee(address,address)"(
      lendable: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawETH(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawETH(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WETH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateBalance(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateBalance(address,address,address,uint256)"(
      lendable: string,
      tradable: string,
      trader: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateOpenPosition(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateOpenPosition(address,address,uint256,uint256)"(
      lendable: string,
      tradable: string,
      amount: BigNumberish,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closePosition(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closePosition(uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    closePositionETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closePositionETH(uint256,uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deposit(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositETH(
      to: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "depositETH(address)"(
      to: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    liquidatePosition(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidatePosition(address,address,address)"(
      lendable: string,
      tradable: string,
      trader: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    openPosition(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "openPosition(uint256,uint256,uint256,address,address,address,uint256)"(
      amountIn: BigNumberish,
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      lendable: string,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    openPositionETH(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "openPositionETH(uint256,uint256,address,address,uint256)"(
      leverageFactor: BigNumberish,
      amountOutMin: BigNumberish,
      tradable: string,
      trader: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    pairFactory(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pairFactory()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    reserveFactory(overrides?: Overrides): Promise<PopulatedTransaction>;

    "reserveFactory()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    swapFactory(overrides?: Overrides): Promise<PopulatedTransaction>;

    "swapFactory()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    swapRouter(overrides?: Overrides): Promise<PopulatedTransaction>;

    "swapRouter()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    sweepFee(
      lendable: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sweepFee(address,address)"(
      lendable: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256,address)"(
      lendable: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawETH(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
