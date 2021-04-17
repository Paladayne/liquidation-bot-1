/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Multicall } from "../Multicall";

export class Multicall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061053a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d146100e757806386d516e8146100ef578063a8b0574e146100f7578063ee82ac5e1461010c57610088565b80630f28c97d1461008d578063252dba42146100ab57806327e86d6e146100cc5780634d2301cc146100d4575b600080fd5b61009561011f565b6040516100a29190610427565b60405180910390f35b6100be6100b93660046102a9565b610123565b6040516100a2929190610430565b610095610246565b6100956100e2366004610288565b61024f565b61009561025c565b610095610260565b6100ff610264565b6040516100a29190610413565b61009561011a3660046103df565b610268565b4290565b8051439060609067ffffffffffffffff8111801561014057600080fd5b5060405190808252806020026020018201604052801561017457816020015b606081526020019060019003908161015f5790505b50905060005b8351811015610240576000606085838151811061019357fe5b6020026020010151600001516001600160a01b03168684815181106101b457fe5b6020026020010151602001516040516101cd91906103f7565b6000604051808303816000865af19150503d806000811461020a576040519150601f19603f3d011682016040523d82523d6000602084013e61020f565b606091505b50915091508161021e57600080fd5b8084848151811061022b57fe5b6020908102919091010152505060010161017a565b50915091565b60001943014090565b6001600160a01b03163190565b4490565b4590565b4190565b4090565b80356001600160a01b038116811461028357600080fd5b919050565b600060208284031215610299578081fd5b6102a28261026c565b9392505050565b600060208083850312156102bb578182fd5b67ffffffffffffffff80843511156102d1578283fd5b8335840185601f8201126102e3578384fd5b8035828111156102ef57fe5b6102fc84858302016104b0565b81815284810190838601875b848110156103d05781358601601f196040828e0382011215610328578a8bfd5b604051604081018181108b8211171561033d57fe5b60405261034b838c0161026c565b815260408301358a81111561035e578c8dfd5b8084019350508d603f840112610372578b8cfd5b8a8301358a81111561038057fe5b6103908c84601f840116016104b0565b92508083528e60408286010111156103a6578c8dfd5b80604085018d85013782018b018c9052808b01919091528552509287019290870190600101610308565b50909998505050505050505050565b6000602082840312156103f0578081fd5b5035919050565b600082516104098184602087016104d4565b9190910192915050565b6001600160a01b0391909116815260200190565b90815260200190565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b828110156104a257878603605f190184528151805180885261048381888a018985016104d4565b601f01601f19169690960185019550928401929084019060010161045c565b509398975050505050505050565b60405181810167ffffffffffffffff811182821017156104cc57fe5b604052919050565b60005b838110156104ef5781810151838201526020016104d7565b838111156104fe576000848401525b5050505056fea264697066735822122003b263af4ebc8c896a71be66f9ed3ed0d9a33ef1604b2805e47d3ff527d09b7e64736f6c63430007040033";
