const json = {
    "_format": "hh-sol-artifact-1",
    "contractName": "AaveOracle",
    "sourceName": "contracts/mocks/aave/misc/AaveOracle.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "contract IPoolAddressesProvider",
            "name": "provider",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "assets",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "sources",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "fallbackOracle",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "baseCurrency",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "baseCurrencyUnit",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "asset",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "source",
            "type": "address"
          }
        ],
        "name": "AssetSourceUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "baseCurrency",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "baseCurrencyUnit",
            "type": "uint256"
          }
        ],
        "name": "BaseCurrencySet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "fallbackOracle",
            "type": "address"
          }
        ],
        "name": "FallbackOracleUpdated",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "ADDRESSES_PROVIDER",
        "outputs": [
          {
            "internalType": "contract IPoolAddressesProvider",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "BASE_CURRENCY",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "BASE_CURRENCY_UNIT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
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
        "name": "getAssetPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "assets",
            "type": "address[]"
          }
        ],
        "name": "getAssetsPrices",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getFallbackOracle",
        "outputs": [
          {
            "internalType": "address",
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
            "name": "asset",
            "type": "address"
          }
        ],
        "name": "getSourceOfAsset",
        "outputs": [
          {
            "internalType": "address",
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
            "internalType": "address[]",
            "name": "assets",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "sources",
            "type": "address[]"
          }
        ],
        "name": "setAssetSources",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "fallbackOracle",
            "type": "address"
          }
        ],
        "name": "setFallbackOracle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60e06040523480156200001157600080fd5b506040516200122b3803806200122b83398101604081905262000034916200034e565b6001600160a01b0386166080526200004c83620000ab565b620000588585620000f5565b6001600160a01b03821660a081905260c08290526040518281527fe27c4c1372396a3d15a9922f74f9dfc7c72b1ad6d63868470787249c356454c19060200160405180910390a25050505050506200049a565b600180546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b8051825114604051806040016040528060028152602001611b9b60f11b815250906200013f5760405162461bcd60e51b815260040162000136919062000402565b60405180910390fd5b5060005b82518110156200025b578181815181106200016257620001626200045a565b60200260200101516000808584815181106200018257620001826200045a565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550818181518110620001e357620001e36200045a565b60200260200101516001600160a01b03168382815181106200020957620002096200045a565b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a380620002528162000470565b91505062000143565b505050565b6001600160a01b03811681146200027657600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b80516200029c8162000260565b919050565b600082601f830112620002b357600080fd5b815160206001600160401b0380831115620002d257620002d262000279565b8260051b604051601f19603f83011681018181108482111715620002fa57620002fa62000279565b6040529384528581018301938381019250878511156200031957600080fd5b83870191505b84821015620003435762000333826200028f565b835291830191908301906200031f565b979650505050505050565b60008060008060008060c087890312156200036857600080fd5b8651620003758162000260565b60208801519096506001600160401b03808211156200039357600080fd5b620003a18a838b01620002a1565b96506040890151915080821115620003b857600080fd5b50620003c789828a01620002a1565b9450506060870151620003da8162000260565b6080880151909350620003ed8162000260565b8092505060a087015190509295509295509295565b600060208083528351808285015260005b81811015620004315785810183015185820160400152820162000413565b8181111562000444576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200049357634e487b7160e01b600052601160045260246000fd5b5060010190565b60805160a05160c051610d4d620004de6000396000818161013101526103a50152600081816101e5015261037a01526000818160ad01526105a30152610d4d6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c806392bf2be011610076578063abfd53101161005b578063abfd5310146101ba578063b3596f07146101cd578063e19f4700146101e057600080fd5b806392bf2be0146101615780639d23d9f21461019a57600080fd5b80630542975c146100a8578063170aee73146100f95780636210308c1461010e5780638c89b64f1461012c575b600080fd5b6100cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61010c610107366004610a33565b610207565b005b60015473ffffffffffffffffffffffffffffffffffffffff166100cf565b6101537f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100f0565b6100cf61016f366004610a33565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152602081905260409020541690565b6101ad6101a8366004610a9c565b61021b565b6040516100f09190610ade565b61010c6101c8366004610b22565b6102d0565b6101536101db366004610a33565b61034b565b6100cf7f000000000000000000000000000000000000000000000000000000000000000081565b61020f61059f565b610218816107d0565b50565b606060008267ffffffffffffffff81111561023857610238610b8e565b604051908082528060200260200182016040528015610261578160200160208202803683370190505b50905060005b838110156102c85761029985858381811061028457610284610bbd565b90506020020160208101906101db9190610a33565b8282815181106102ab576102ab610bbd565b6020908102919091010152806102c081610bec565b915050610267565b509392505050565b6102d861059f565b6103458484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080880282810182019093528782529093508792508691829185019084908082843760009201919091525061083f92505050565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8082166000818152602081905260408120549092908116917f000000000000000000000000000000000000000000000000000000000000000090911614156103ca57507f000000000000000000000000000000000000000000000000000000000000000092915050565b73ffffffffffffffffffffffffffffffffffffffff8116610480576001546040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529091169063b3596f0790602401602060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104799190610c4c565b9392505050565b60008173ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f19190610c4c565b90506000811315610503579392505050565b6001546040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301529091169063b3596f0790602401602060405180830381865afa158015610573573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105979190610c4c565b949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106309190610c65565b6040517f13ee32e000000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff8216906313ee32e090602401602060405180830381865afa15801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c19190610c82565b8061075557506040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190610c82565b6040518060400160405280600181526020017f3500000000000000000000000000000000000000000000000000000000000000815250906107cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c39190610ca4565b60405180910390fd5b5050565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b80518251146040518060400160405280600281526020017f3736000000000000000000000000000000000000000000000000000000000000815250906108b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c39190610ca4565b5060005b8251811015610a0c578181815181106108d1576108d1610bbd565b60200260200101516000808584815181106108ee576108ee610bbd565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081818151811061098057610980610bbd565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168382815181106109b0576109b0610bbd565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a380610a0481610bec565b9150506108b6565b505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461021857600080fd5b600060208284031215610a4557600080fd5b813561047981610a11565b60008083601f840112610a6257600080fd5b50813567ffffffffffffffff811115610a7a57600080fd5b6020830191508360208260051b8501011115610a9557600080fd5b9250929050565b60008060208385031215610aaf57600080fd5b823567ffffffffffffffff811115610ac657600080fd5b610ad285828601610a50565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015610b1657835183529284019291840191600101610afa565b50909695505050505050565b60008060008060408587031215610b3857600080fd5b843567ffffffffffffffff80821115610b5057600080fd5b610b5c88838901610a50565b90965094506020870135915080821115610b7557600080fd5b50610b8287828801610a50565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c45577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610c5e57600080fd5b5051919050565b600060208284031215610c7757600080fd5b815161047981610a11565b600060208284031215610c9457600080fd5b8151801515811461047957600080fd5b600060208083528351808285015260005b81811015610cd157858101830151858201604001528201610cb5565b81811115610ce3576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220eae6791229c92ea34f5bf442f43bc4ca1510152f98fb64e391d3f394b22b97e764736f6c634300080a0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a35760003560e01c806392bf2be011610076578063abfd53101161005b578063abfd5310146101ba578063b3596f07146101cd578063e19f4700146101e057600080fd5b806392bf2be0146101615780639d23d9f21461019a57600080fd5b80630542975c146100a8578063170aee73146100f95780636210308c1461010e5780638c89b64f1461012c575b600080fd5b6100cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61010c610107366004610a33565b610207565b005b60015473ffffffffffffffffffffffffffffffffffffffff166100cf565b6101537f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100f0565b6100cf61016f366004610a33565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152602081905260409020541690565b6101ad6101a8366004610a9c565b61021b565b6040516100f09190610ade565b61010c6101c8366004610b22565b6102d0565b6101536101db366004610a33565b61034b565b6100cf7f000000000000000000000000000000000000000000000000000000000000000081565b61020f61059f565b610218816107d0565b50565b606060008267ffffffffffffffff81111561023857610238610b8e565b604051908082528060200260200182016040528015610261578160200160208202803683370190505b50905060005b838110156102c85761029985858381811061028457610284610bbd565b90506020020160208101906101db9190610a33565b8282815181106102ab576102ab610bbd565b6020908102919091010152806102c081610bec565b915050610267565b509392505050565b6102d861059f565b6103458484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080880282810182019093528782529093508792508691829185019084908082843760009201919091525061083f92505050565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8082166000818152602081905260408120549092908116917f000000000000000000000000000000000000000000000000000000000000000090911614156103ca57507f000000000000000000000000000000000000000000000000000000000000000092915050565b73ffffffffffffffffffffffffffffffffffffffff8116610480576001546040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529091169063b3596f0790602401602060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104799190610c4c565b9392505050565b60008173ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f19190610c4c565b90506000811315610503579392505050565b6001546040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301529091169063b3596f0790602401602060405180830381865afa158015610573573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105979190610c4c565b949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106309190610c65565b6040517f13ee32e000000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff8216906313ee32e090602401602060405180830381865afa15801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c19190610c82565b8061075557506040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190610c82565b6040518060400160405280600181526020017f3500000000000000000000000000000000000000000000000000000000000000815250906107cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c39190610ca4565b60405180910390fd5b5050565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b80518251146040518060400160405280600281526020017f3736000000000000000000000000000000000000000000000000000000000000815250906108b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c39190610ca4565b5060005b8251811015610a0c578181815181106108d1576108d1610bbd565b60200260200101516000808584815181106108ee576108ee610bbd565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081818151811061098057610980610bbd565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168382815181106109b0576109b0610bbd565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a380610a0481610bec565b9150506108b6565b505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461021857600080fd5b600060208284031215610a4557600080fd5b813561047981610a11565b60008083601f840112610a6257600080fd5b50813567ffffffffffffffff811115610a7a57600080fd5b6020830191508360208260051b8501011115610a9557600080fd5b9250929050565b60008060208385031215610aaf57600080fd5b823567ffffffffffffffff811115610ac657600080fd5b610ad285828601610a50565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015610b1657835183529284019291840191600101610afa565b50909695505050505050565b60008060008060408587031215610b3857600080fd5b843567ffffffffffffffff80821115610b5057600080fd5b610b5c88838901610a50565b90965094506020870135915080821115610b7557600080fd5b50610b8287828801610a50565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c45577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610c5e57600080fd5b5051919050565b600060208284031215610c7757600080fd5b815161047981610a11565b600060208284031215610c9457600080fd5b8151801515811461047957600080fd5b600060208083528351808285015260005b81811015610cd157858101830151858201604001528201610cb5565b81811115610ce3576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220eae6791229c92ea34f5bf442f43bc4ca1510152f98fb64e391d3f394b22b97e764736f6c634300080a0033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  };  

export default json;
