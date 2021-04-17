/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BaseAdminUpgradeabilityProxy } from "../BaseAdminUpgradeabilityProxy";

export class BaseAdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BaseAdminUpgradeabilityProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<BaseAdminUpgradeabilityProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseAdminUpgradeabilityProxy {
    return super.attach(address) as BaseAdminUpgradeabilityProxy;
  }
  connect(signer: Signer): BaseAdminUpgradeabilityProxy__factory {
    return super.connect(signer) as BaseAdminUpgradeabilityProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseAdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseAdminUpgradeabilityProxy;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admn",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610670806100206000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100725780634f1ef286146100a55780635c60da1b146101255780638f28397014610156578063f851a440146101895761005d565b3661005d5761005b61019e565b005b34801561006957600080fd5b5061005b61019e565b34801561007e57600080fd5b5061005b6004803603602081101561009557600080fd5b50356001600160a01b03166101b8565b61005b600480360360408110156100bb57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100e657600080fd5b8201836020820111156100f857600080fd5b8035906020019184600183028401116401000000008311171561011a57600080fd5b5090925090506101f2565b34801561013157600080fd5b5061013a61029f565b604080516001600160a01b039092168252519081900360200190f35b34801561016257600080fd5b5061005b6004803603602081101561017957600080fd5b50356001600160a01b03166102dc565b34801561019557600080fd5b5061013a610396565b6101a66103c1565b6101b66101b1610421565b610446565b565b6101c061046a565b6001600160a01b0316336001600160a01b031614156101e7576101e28161048f565b6101ef565b6101ef61019e565b50565b6101fa61046a565b6001600160a01b0316336001600160a01b031614156102925761021c8361048f565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610279576040519150601f19603f3d011682016040523d82523d6000602084013e61027e565b606091505b505090508061028c57600080fd5b5061029a565b61029a61019e565b505050565b60006102a961046a565b6001600160a01b0316336001600160a01b031614156102d1576102ca610421565b90506102d9565b6102d961019e565b90565b6102e461046a565b6001600160a01b0316336001600160a01b031614156101e7576001600160a01b0381166103425760405162461bcd60e51b81526004018080602001828103825260368152602001806105ca6036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61036b61046a565b604080516001600160a01b03928316815291841660208301528051918290030190a16101e2816104cf565b60006103a061046a565b6001600160a01b0316336001600160a01b031614156102d1576102ca61046a565b6103c961046a565b6001600160a01b0316336001600160a01b031614156104195760405162461bcd60e51b81526004018080602001828103825260328152602001806105986032913960400191505060405180910390fd5b6101b66101b6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015610465573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610498816104f3565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6104fc8161055b565b6105375760405162461bcd60e51b815260040180806020018281038252603b815260200180610600603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061058f57508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a2646970667358221220dc5adb5cdcdddaca710616064d52d9d941ee89bbb4710e31baa219ac612ca52364736f6c63430007040033";