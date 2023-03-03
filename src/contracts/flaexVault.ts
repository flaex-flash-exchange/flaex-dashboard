const json = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Vault",
    "sourceName": "contracts/protocol/Vault.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "contract IAddressesProvider",
            "name": "provider",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "assetWithdrawn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "isShareable",
            "type": "bool"
          }
        ],
        "name": "feeToVault",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "FLAEX_PROVIDER",
        "outputs": [
          {
            "internalType": "contract IAddressesProvider",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "debtToken",
            "type": "address"
          }
        ],
        "name": "approveDelagationMain",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "approveInvestor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "claimer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "claimYieldToInvestor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getActiveAssets",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset",
            "type": "address"
          }
        ],
        "name": "getYieldInfo",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "flIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "prototolAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shareableAmount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "initVault",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "Assets",
            "type": "address[]"
          }
        ],
        "name": "setActiveAssets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset",
            "type": "address"
          }
        ],
        "name": "setUsedAsCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isShareable",
            "type": "bool"
          }
        ],
        "name": "transferFeeToVault",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdrawFromVault",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdrawToInvestor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60a060405234801561001057600080fd5b50604051611f28380380611f2883398101604081905261002f91610045565b60016004556001600160a01b0316608052610075565b60006020828403121561005757600080fd5b81516001600160a01b038116811461006e57600080fd5b9392505050565b608051611e446100e4600039600081816101ba015281816102330152818161040b0152818161057c015281816107c5015281816109ab01528181610abb01528181610c7801528181610d7b015281816110380152818161125a0152818161134c01526114390152611e446000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806333bf772211610081578063c67a32141161005b578063c67a3214146101b5578063c7722eb7146101f4578063ec9fd72e1461020757600080fd5b806333bf7722146101875780637c65f5031461019a578063b2bf8794146101a257600080fd5b8063134dc69e116100b2578063134dc69e146101595780631c51b50e1461016157806321116f4e1461017457600080fd5b80630225a132146100d95780630c5f54dc146100ee5780630fd8aee814610144575b600080fd5b6100ec6100e73660046119d0565b61021a565b005b6101246100fc3660046119d0565b6001600160a01b03166000908152600360205260409020805460018201546002909201549092565b604080519384526020840192909252908201526060015b60405180910390f35b61014c61034d565b60405161013b91906119f4565b6100ec6103af565b6100ec61016f366004611a70565b610549565b6100ec610182366004611b53565b610568565b6100ec610195366004611b7f565b610754565b6100ec610779565b6100ec6101b0366004611b7f565b6107b1565b6101dc7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161013b565b6100ec6102023660046119d0565b61099f565b6100ec610215366004611bce565b610bff565b610222610c76565b806001600160a01b031663c04a8a107f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634dec95fc6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190611c10565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b0390911660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6024820152604401600060405180830381600087803b15801561033257600080fd5b505af1158015610346573d6000803e3d6000fd5b5050505050565b606060008054806020026020016040519081016040528092919081815260200182805480156103a557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610387575b5050505050905090565b6103b7610c76565b60005b60005460ff821610156105465760008160ff16815481106103dd576103dd611c2d565b9060005260206000200160009054906101000a90046001600160a01b03166001600160a01b031663095ea7b37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663796c89026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610467573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048b9190611c10565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b0390911660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248201526044016020604051808303816000875af115801561050f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105339190611c5c565b508061053e81611ca8565b9150506103ba565b50565b610551610c76565b8051610564906000906020840190611919565b5050565b610570610d79565b610578610e75565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635e8707486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fc9190611c10565b6001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190611c10565b6040517f69328dec0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018590523360448301529192506000918316906369328dec906064016020604051808303816000875af11580156106d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f59190611cc8565b905082811461070657610706611ce1565b604080516001600160a01b0386168152602081018590527f3f66860600ddcb4b904ecda40ec3f4ecb4f5873124af611ac45938a665ef2a53910160405180910390a150506105646001600455565b6107686001600160a01b0384168383610ee9565b61077483826000610fb5565b505050565b610781610c76565b610fa0600255600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000169055565b6107b9611036565b6107c1610e75565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635e8707486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610821573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108459190611c10565b6001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610882573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a69190611c10565b6040517f69328dec0000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301526024820185905286811660448301529192506000918316906369328dec906064016020604051808303816000875af115801561091c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109409190611cc8565b905082811461095157610951611ce1565b604080516001600160a01b0386168152602081018590527f3f66860600ddcb4b904ecda40ec3f4ecb4f5873124af611ac45938a665ef2a53910160405180910390a150506107746001600455565b6109a7610c76565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663135ec50a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b9190611c10565b6040517ffc0eed850000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260016024830152919091169063fc0eed8590604401602060405180830381865afa158015610a93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab79190611cc8565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635e8707486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3b9190611c10565b6001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9c9190611c10565b6001600160a01b0316634d013f03826040518263ffffffff1660e01b8152600401610bc991815260200190565b600060405180830381600087803b158015610be357600080fd5b505af1158015610bf7573d6000803e3d6000fd5b505050505050565b610c07610d79565b610c1c6001600160a01b038416333085611132565b610c27838383611200565b604080516001600160a01b0385168152602081018490528215158183015290517f338dc6cc2a8d5e8b271210fbedded38a5cc4ebc1854aa5bdb415bef2ca2607679181900360600190a1505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638204c3266040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf89190611c10565b6001600160a01b0316336001600160a01b031614610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69645f41646d696e0000000000000000000000000000000000000060448201526064015b60405180910390fd5b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634dec95fc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfb9190611c10565b6001600160a01b0316336001600160a01b031614610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c69645f4d61696e00000000000000000000000000000000000000006044820152606401610d6e565b60026004541415610ee2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d6e565b6002600455565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008082526001600160a01b0384166004830152602482018390529060008060448382895af1610f3f573d6000803e3d6000fd5b50610f4984611719565b610faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f475076323a206661696c6564207472616e7366657200000000000000000000006044820152606401610d6e565b50505050565b6001600160a01b03831660009081526003602052604090206001810154600290910154821561100957610fe88483611d10565b6001600160a01b038616600090815260036020526040902060010155610346565b6110138482611d10565b6001600160a01b0386166000908152600360205260409020600201555050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663796c89026040518163ffffffff1660e01b8152600401602060405180830381865afa158015611094573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b89190611c10565b6001600160a01b0316336001600160a01b031614610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e76616c69645f496e766573746f72000000000000000000000000000000006044820152606401610d6e565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008082526001600160a01b038581166004840152841660248301526044820183905290600080606483828a5af1611190573d6000803e3d6000fd5b5061119a85611719565b610346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610d6e565b6001600160a01b0380841660009081526003602090815260408083208054600182015460029092015483517f0e94e3a0000000000000000000000000000000000000000000000000000000008152935191969295909490937f000000000000000000000000000000000000000000000000000000000000000090931692630e94e3a092600480830193928290030181865afa1580156112a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c79190611c10565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611304573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113289190611cc8565b11156116b857611432604051806060016040528060338152602001611dbb603391397f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630e94e3a06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cc9190611c10565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d9190611cc8565b6117e5565b60006115217f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630e94e3a06040518163ffffffff1660e01b8152600401602060405180830381865afa158015611495573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b99190611c10565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151a9190611cc8565b8790611876565b61152b9085611d27565b905060008061156f6040518060400160405280600a81526020017f6e6577466c496e64657800000000000000000000000000000000000000000000815250846117e5565b8615611648576115b46040518060400160405280600681526020017f616d6f756e740000000000000000000000000000000000000000000000000000815250896117e5565b6115de604051806060016040528060218152602001611dee6021913960025461142d908b906118b5565b611612604051806060016040528060218152602001611dee60219139600254611608908b906118b5565b61142d908b611d10565b6002546116209089906118b5565b9150611637600254896118b590919063ffffffff16565b6116419089611d10565b905061164f565b5086905060005b6040518060600160405280848152602001868461166c9190611d27565b815260200161167b8684611d27565b90526001600160a01b038a166000908152600360209081526040918290208351815590830151600182015591015160029091015550610bf7915050565b60405180606001604052806000815260200186846116d69190611d27565b815260209081018390526001600160a01b038816600090815260038252604090819020835181559183015160018301559190910151600290910155505050505050565b6000611759565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d801561179857602081146117d2576117937f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611720565b6117df565b823b6117c9576117c97f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611720565b600191506117df565b3d6000803e600051151591505b50919050565b61056482826040516024016117fb929190611d3f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb60e72cc000000000000000000000000000000000000000000000000000000001790526118f8565b600081156b033b2e3c9fd0803ce80000006002840419048411171561189a57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec77839004841115176118ea57600080fd5b506127109102611388010490565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054828255906000526020600020908101928215611986579160200282015b8281111561198657825182547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03909116178255602090920191600190910190611939565b50611992929150611996565b5090565b5b808211156119925760008155600101611997565b6001600160a01b038116811461054657600080fd5b80356119cb816119ab565b919050565b6000602082840312156119e257600080fd5b81356119ed816119ab565b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015611a355783516001600160a01b031683529284019291840191600101611a10565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020808385031215611a8357600080fd5b823567ffffffffffffffff80821115611a9b57600080fd5b818501915085601f830112611aaf57600080fd5b813581811115611ac157611ac1611a41565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715611b0457611b04611a41565b604052918252848201925083810185019188831115611b2257600080fd5b938501935b82851015611b4757611b38856119c0565b84529385019392850192611b27565b98975050505050505050565b60008060408385031215611b6657600080fd5b8235611b71816119ab565b946020939093013593505050565b600080600060608486031215611b9457600080fd5b8335611b9f816119ab565b92506020840135611baf816119ab565b929592945050506040919091013590565b801515811461054657600080fd5b600080600060608486031215611be357600080fd5b8335611bee816119ab565b9250602084013591506040840135611c0581611bc0565b809150509250925092565b600060208284031215611c2257600080fd5b81516119ed816119ab565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611c6e57600080fd5b81516119ed81611bc0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff821660ff811415611cbf57611cbf611c79565b60010192915050565b600060208284031215611cda57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600082821015611d2257611d22611c79565b500390565b60008219821115611d3a57611d3a611c79565b500190565b604081526000835180604084015260005b81811015611d6d5760208187018101516060868401015201611d50565b81811115611d7f576000606083860101525b50602083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160600191905056fe49466c546f6b656e28464c4145585f50524f56494445522e676574466c546f6b656e2829292e746f74616c537570706c792829616d6f756e742e70657263656e744d756c285f70726f746f636f6c536861726529a2646970667358221220da3b4a7b74f7dd4d03e0b3dce78df43131766da3c0df27b04888b0d3e1853bfb64736f6c634300080a0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100d45760003560e01c806333bf772211610081578063c67a32141161005b578063c67a3214146101b5578063c7722eb7146101f4578063ec9fd72e1461020757600080fd5b806333bf7722146101875780637c65f5031461019a578063b2bf8794146101a257600080fd5b8063134dc69e116100b2578063134dc69e146101595780631c51b50e1461016157806321116f4e1461017457600080fd5b80630225a132146100d95780630c5f54dc146100ee5780630fd8aee814610144575b600080fd5b6100ec6100e73660046119d0565b61021a565b005b6101246100fc3660046119d0565b6001600160a01b03166000908152600360205260409020805460018201546002909201549092565b604080519384526020840192909252908201526060015b60405180910390f35b61014c61034d565b60405161013b91906119f4565b6100ec6103af565b6100ec61016f366004611a70565b610549565b6100ec610182366004611b53565b610568565b6100ec610195366004611b7f565b610754565b6100ec610779565b6100ec6101b0366004611b7f565b6107b1565b6101dc7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161013b565b6100ec6102023660046119d0565b61099f565b6100ec610215366004611bce565b610bff565b610222610c76565b806001600160a01b031663c04a8a107f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634dec95fc6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190611c10565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b0390911660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6024820152604401600060405180830381600087803b15801561033257600080fd5b505af1158015610346573d6000803e3d6000fd5b5050505050565b606060008054806020026020016040519081016040528092919081815260200182805480156103a557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610387575b5050505050905090565b6103b7610c76565b60005b60005460ff821610156105465760008160ff16815481106103dd576103dd611c2d565b9060005260206000200160009054906101000a90046001600160a01b03166001600160a01b031663095ea7b37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663796c89026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610467573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048b9190611c10565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b0390911660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248201526044016020604051808303816000875af115801561050f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105339190611c5c565b508061053e81611ca8565b9150506103ba565b50565b610551610c76565b8051610564906000906020840190611919565b5050565b610570610d79565b610578610e75565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635e8707486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fc9190611c10565b6001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190611c10565b6040517f69328dec0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018590523360448301529192506000918316906369328dec906064016020604051808303816000875af11580156106d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f59190611cc8565b905082811461070657610706611ce1565b604080516001600160a01b0386168152602081018590527f3f66860600ddcb4b904ecda40ec3f4ecb4f5873124af611ac45938a665ef2a53910160405180910390a150506105646001600455565b6107686001600160a01b0384168383610ee9565b61077483826000610fb5565b505050565b610781610c76565b610fa0600255600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000169055565b6107b9611036565b6107c1610e75565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635e8707486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610821573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108459190611c10565b6001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610882573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a69190611c10565b6040517f69328dec0000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301526024820185905286811660448301529192506000918316906369328dec906064016020604051808303816000875af115801561091c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109409190611cc8565b905082811461095157610951611ce1565b604080516001600160a01b0386168152602081018590527f3f66860600ddcb4b904ecda40ec3f4ecb4f5873124af611ac45938a665ef2a53910160405180910390a150506107746001600455565b6109a7610c76565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663135ec50a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b9190611c10565b6040517ffc0eed850000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260016024830152919091169063fc0eed8590604401602060405180830381865afa158015610a93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab79190611cc8565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635e8707486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3b9190611c10565b6001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9c9190611c10565b6001600160a01b0316634d013f03826040518263ffffffff1660e01b8152600401610bc991815260200190565b600060405180830381600087803b158015610be357600080fd5b505af1158015610bf7573d6000803e3d6000fd5b505050505050565b610c07610d79565b610c1c6001600160a01b038416333085611132565b610c27838383611200565b604080516001600160a01b0385168152602081018490528215158183015290517f338dc6cc2a8d5e8b271210fbedded38a5cc4ebc1854aa5bdb415bef2ca2607679181900360600190a1505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638204c3266040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf89190611c10565b6001600160a01b0316336001600160a01b031614610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69645f41646d696e0000000000000000000000000000000000000060448201526064015b60405180910390fd5b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634dec95fc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfb9190611c10565b6001600160a01b0316336001600160a01b031614610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c69645f4d61696e00000000000000000000000000000000000000006044820152606401610d6e565b60026004541415610ee2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d6e565b6002600455565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008082526001600160a01b0384166004830152602482018390529060008060448382895af1610f3f573d6000803e3d6000fd5b50610f4984611719565b610faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f475076323a206661696c6564207472616e7366657200000000000000000000006044820152606401610d6e565b50505050565b6001600160a01b03831660009081526003602052604090206001810154600290910154821561100957610fe88483611d10565b6001600160a01b038616600090815260036020526040902060010155610346565b6110138482611d10565b6001600160a01b0386166000908152600360205260409020600201555050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663796c89026040518163ffffffff1660e01b8152600401602060405180830381865afa158015611094573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b89190611c10565b6001600160a01b0316336001600160a01b031614610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e76616c69645f496e766573746f72000000000000000000000000000000006044820152606401610d6e565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008082526001600160a01b038581166004840152841660248301526044820183905290600080606483828a5af1611190573d6000803e3d6000fd5b5061119a85611719565b610346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610d6e565b6001600160a01b0380841660009081526003602090815260408083208054600182015460029092015483517f0e94e3a0000000000000000000000000000000000000000000000000000000008152935191969295909490937f000000000000000000000000000000000000000000000000000000000000000090931692630e94e3a092600480830193928290030181865afa1580156112a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c79190611c10565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611304573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113289190611cc8565b11156116b857611432604051806060016040528060338152602001611dbb603391397f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630e94e3a06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cc9190611c10565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d9190611cc8565b6117e5565b60006115217f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630e94e3a06040518163ffffffff1660e01b8152600401602060405180830381865afa158015611495573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b99190611c10565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151a9190611cc8565b8790611876565b61152b9085611d27565b905060008061156f6040518060400160405280600a81526020017f6e6577466c496e64657800000000000000000000000000000000000000000000815250846117e5565b8615611648576115b46040518060400160405280600681526020017f616d6f756e740000000000000000000000000000000000000000000000000000815250896117e5565b6115de604051806060016040528060218152602001611dee6021913960025461142d908b906118b5565b611612604051806060016040528060218152602001611dee60219139600254611608908b906118b5565b61142d908b611d10565b6002546116209089906118b5565b9150611637600254896118b590919063ffffffff16565b6116419089611d10565b905061164f565b5086905060005b6040518060600160405280848152602001868461166c9190611d27565b815260200161167b8684611d27565b90526001600160a01b038a166000908152600360209081526040918290208351815590830151600182015591015160029091015550610bf7915050565b60405180606001604052806000815260200186846116d69190611d27565b815260209081018390526001600160a01b038816600090815260038252604090819020835181559183015160018301559190910151600290910155505050505050565b6000611759565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d801561179857602081146117d2576117937f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611720565b6117df565b823b6117c9576117c97f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611720565b600191506117df565b3d6000803e600051151591505b50919050565b61056482826040516024016117fb929190611d3f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb60e72cc000000000000000000000000000000000000000000000000000000001790526118f8565b600081156b033b2e3c9fd0803ce80000006002840419048411171561189a57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec77839004841115176118ea57600080fd5b506127109102611388010490565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054828255906000526020600020908101928215611986579160200282015b8281111561198657825182547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03909116178255602090920191600190910190611939565b50611992929150611996565b5090565b5b808211156119925760008155600101611997565b6001600160a01b038116811461054657600080fd5b80356119cb816119ab565b919050565b6000602082840312156119e257600080fd5b81356119ed816119ab565b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015611a355783516001600160a01b031683529284019291840191600101611a10565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020808385031215611a8357600080fd5b823567ffffffffffffffff80821115611a9b57600080fd5b818501915085601f830112611aaf57600080fd5b813581811115611ac157611ac1611a41565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715611b0457611b04611a41565b604052918252848201925083810185019188831115611b2257600080fd5b938501935b82851015611b4757611b38856119c0565b84529385019392850192611b27565b98975050505050505050565b60008060408385031215611b6657600080fd5b8235611b71816119ab565b946020939093013593505050565b600080600060608486031215611b9457600080fd5b8335611b9f816119ab565b92506020840135611baf816119ab565b929592945050506040919091013590565b801515811461054657600080fd5b600080600060608486031215611be357600080fd5b8335611bee816119ab565b9250602084013591506040840135611c0581611bc0565b809150509250925092565b600060208284031215611c2257600080fd5b81516119ed816119ab565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611c6e57600080fd5b81516119ed81611bc0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff821660ff811415611cbf57611cbf611c79565b60010192915050565b600060208284031215611cda57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600082821015611d2257611d22611c79565b500390565b60008219821115611d3a57611d3a611c79565b500190565b604081526000835180604084015260005b81811015611d6d5760208187018101516060868401015201611d50565b81811115611d7f576000606083860101525b50602083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160600191905056fe49466c546f6b656e28464c4145585f50524f56494445522e676574466c546f6b656e2829292e746f74616c537570706c792829616d6f756e742e70657263656e744d756c285f70726f746f636f6c536861726529a2646970667358221220da3b4a7b74f7dd4d03e0b3dce78df43131766da3c0df27b04888b0d3e1853bfb64736f6c634300080a0033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  };
export default json;