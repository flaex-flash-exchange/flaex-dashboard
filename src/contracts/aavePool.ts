const json = {
    "_format": "hh-sol-artifact-1",
    "contractName": "L2Pool",
    "sourceName": "contracts/mocks/aave/protocol/pool/L2Pool.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "contract IPoolAddressesProvider",
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
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "backer",
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
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          }
        ],
        "name": "BackUnbacked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "onBehalfOf",
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
            "internalType": "enum DataTypes.InterestRateMode",
            "name": "interestRateMode",
            "type": "uint8"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "borrowRate",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "Borrow",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "target",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "initiator",
            "type": "address"
          },
          {
            "indexed": true,
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
            "internalType": "enum DataTypes.InterestRateMode",
            "name": "interestRateMode",
            "type": "uint8"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "premium",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "FlashLoan",
        "type": "event"
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
            "indexed": false,
            "internalType": "uint256",
            "name": "totalDebt",
            "type": "uint256"
          }
        ],
        "name": "IsolationModeTotalDebtUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "collateralAsset",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "debtAsset",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "debtToCover",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "liquidatedCollateralAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "liquidator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "receiveAToken",
            "type": "bool"
          }
        ],
        "name": "LiquidationCall",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "MintUnbacked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amountMinted",
            "type": "uint256"
          }
        ],
        "name": "MintedToTreasury",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "RebalanceStableBorrowRate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "repayer",
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
            "name": "useATokens",
            "type": "bool"
          }
        ],
        "name": "Repay",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "liquidityRate",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "stableBorrowRate",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "variableBorrowRate",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "liquidityIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "variableBorrowIndex",
            "type": "uint256"
          }
        ],
        "name": "ReserveDataUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "ReserveUsedAsCollateralDisabled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "ReserveUsedAsCollateralEnabled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "Supply",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "enum DataTypes.InterestRateMode",
            "name": "interestRateMode",
            "type": "uint8"
          }
        ],
        "name": "SwapBorrowRateMode",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "categoryId",
            "type": "uint8"
          }
        ],
        "name": "UserEModeSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reserve",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Withdraw",
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
        "name": "BRIDGE_PROTOCOL_FEE",
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
        "inputs": [],
        "name": "FLASHLOAN_PREMIUM_TOTAL",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "FLASHLOAN_PREMIUM_TO_PROTOCOL",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MAX_NUMBER_RESERVES",
        "outputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
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
        "inputs": [],
        "name": "POOL_REVISION",
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
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          }
        ],
        "name": "backUnbacked",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
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
            "internalType": "uint256",
            "name": "interestRateMode",
            "type": "uint256"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "id",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "uint16",
                "name": "ltv",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "liquidationThreshold",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "liquidationBonus",
                "type": "uint16"
              },
              {
                "internalType": "address",
                "name": "priceSource",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "label",
                "type": "string"
              }
            ],
            "internalType": "struct DataTypes.EModeCategory",
            "name": "category",
            "type": "tuple"
          }
        ],
        "name": "configureEModeCategory",
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
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "deposit",
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
        "name": "dropReserve",
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
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balanceFromBefore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balanceToBefore",
            "type": "uint256"
          }
        ],
        "name": "finalizeTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiverAddress",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "assets",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "interestRateModes",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "params",
            "type": "bytes"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "flashLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiverAddress",
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
          },
          {
            "internalType": "bytes",
            "name": "params",
            "type": "bytes"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "flashLoanSimple",
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
        "name": "getConfiguration",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
              }
            ],
            "internalType": "struct DataTypes.ReserveConfigurationMap",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "id",
            "type": "uint8"
          }
        ],
        "name": "getEModeCategoryData",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint16",
                "name": "ltv",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "liquidationThreshold",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "liquidationBonus",
                "type": "uint16"
              },
              {
                "internalType": "address",
                "name": "priceSource",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "label",
                "type": "string"
              }
            ],
            "internalType": "struct DataTypes.EModeCategory",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "id",
            "type": "uint16"
          }
        ],
        "name": "getReserveAddressById",
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
        "name": "getReserveData",
        "outputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "data",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct DataTypes.ReserveConfigurationMap",
                "name": "configuration",
                "type": "tuple"
              },
              {
                "internalType": "uint128",
                "name": "liquidityIndex",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "currentLiquidityRate",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "variableBorrowIndex",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "currentVariableBorrowRate",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "currentStableBorrowRate",
                "type": "uint128"
              },
              {
                "internalType": "uint40",
                "name": "lastUpdateTimestamp",
                "type": "uint40"
              },
              {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
              },
              {
                "internalType": "address",
                "name": "aTokenAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "stableDebtTokenAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "variableDebtTokenAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "interestRateStrategyAddress",
                "type": "address"
              },
              {
                "internalType": "uint128",
                "name": "accruedToTreasury",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "unbacked",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "isolationModeTotalDebt",
                "type": "uint128"
              }
            ],
            "internalType": "struct DataTypes.ReserveData",
            "name": "",
            "type": "tuple"
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
        "name": "getReserveNormalizedIncome",
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
        "name": "getReserveNormalizedVariableDebt",
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
        "inputs": [],
        "name": "getReservesList",
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
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getUserAccountData",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalCollateralBase",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalDebtBase",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availableBorrowsBase",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "currentLiquidationThreshold",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ltv",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "healthFactor",
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
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getUserConfiguration",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
              }
            ],
            "internalType": "struct DataTypes.UserConfigurationMap",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getUserEMode",
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
          },
          {
            "internalType": "address",
            "name": "aTokenAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "stableDebtAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "variableDebtAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "interestRateStrategyAddress",
            "type": "address"
          }
        ],
        "name": "initReserve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IPoolAddressesProvider",
            "name": "provider",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "collateralAsset",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "debtAsset",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "debtToCover",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "receiveAToken",
            "type": "bool"
          }
        ],
        "name": "liquidationCall",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "args2",
            "type": "bytes32"
          }
        ],
        "name": "liquidationCall",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "mintToTreasury",
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
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "mintUnbacked",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "rebalanceStableBorrowRate",
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
            "name": "user",
            "type": "address"
          }
        ],
        "name": "rebalanceStableBorrowRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "repay",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
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
            "internalType": "uint256",
            "name": "interestRateMode",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          }
        ],
        "name": "repay",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
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
            "internalType": "uint256",
            "name": "interestRateMode",
            "type": "uint256"
          }
        ],
        "name": "repayWithATokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "repayWithATokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "repayWithPermit",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
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
            "internalType": "uint256",
            "name": "interestRateMode",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "permitV",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "permitR",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "permitS",
            "type": "bytes32"
          }
        ],
        "name": "repayWithPermit",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "rescueTokens",
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
        "name": "resetIsolationModeTotalDebt",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
              }
            ],
            "internalType": "struct DataTypes.ReserveConfigurationMap",
            "name": "configuration",
            "type": "tuple"
          }
        ],
        "name": "setConfiguration",
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
            "name": "rateStrategyAddress",
            "type": "address"
          }
        ],
        "name": "setReserveInterestRateStrategyAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "categoryId",
            "type": "uint8"
          }
        ],
        "name": "setUserEMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "setUserUseReserveAsCollateral",
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
            "internalType": "bool",
            "name": "useAsCollateral",
            "type": "bool"
          }
        ],
        "name": "setUserUseReserveAsCollateral",
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
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          }
        ],
        "name": "supply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "supply",
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
            "internalType": "address",
            "name": "onBehalfOf",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "referralCode",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "permitV",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "permitR",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "permitS",
            "type": "bytes32"
          }
        ],
        "name": "supplyWithPermit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "supplyWithPermit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "swapBorrowRateMode",
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
            "name": "interestRateMode",
            "type": "uint256"
          }
        ],
        "name": "swapBorrowRateMode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protocolFee",
            "type": "uint256"
          }
        ],
        "name": "updateBridgeProtocolFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint128",
            "name": "flashLoanPremiumTotal",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "flashLoanPremiumToProtocol",
            "type": "uint128"
          }
        ],
        "name": "updateFlashloanPremiums",
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
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "withdraw",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "args",
            "type": "bytes32"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60a0604052600080553480156200001557600080fd5b50604051620054f1380380620054f183398101604081905262000038916200004a565b6001600160a01b03166080526200007c565b6000602082840312156200005d57600080fd5b81516001600160a01b03811681146200007557600080fd5b9392505050565b6080516153f7620000fa600039600081816103cf01528181610b2301528181610bfb015281816110aa0152818161167f015281816119ea015281816120890152818161214d0152818161236c015281816126400152818161289201528181612e57015281816134bb01528181613755015261395d01526153f76000f3fe608060405234801561001057600080fd5b50600436106103825760003560e01c80637a708e92116101de578063d1946dbc1161010f578063e82fec2f116100ad578063f51e435b1161007c578063f51e435b14610a56578063f7a7384014610a69578063f8119d5114610a7c578063fd21ecff14610a8b57600080fd5b8063e82fec2f14610a05578063e8eda9df1461076b578063eddf1b7914610a17578063ee3e210b14610a4357600080fd5b8063d5eed868116100e9578063d5eed868146109b9578063d65dc7a1146109cc578063dc7c0bff146109df578063e43e88a1146109f257600080fd5b8063d1946dbc1461097e578063d579ea7d14610993578063d5ed3933146109a657600080fd5b8063bcb6e5221161017c578063c4d66de811610156578063c4d66de814610932578063cd11238214610945578063cea9d26f14610958578063d15e00531461096b57600080fd5b8063bcb6e5221461089d578063bf92857c146108b0578063c44b11f7146108f057600080fd5b806394ba89a2116101b857806394ba89a2146108515780639cd1999614610864578063a415bcad14610877578063ab9c4b5d1461088a57600080fd5b80637a708e92146108185780638e19899e1461082b57806394b576de1461083e57600080fd5b806342b0b77c116102b8578063617ba0371161025657806369328dec1161023057806369328dec146107a457806369a933a5146107b75780636a99c036146107ca5780636c6f6ae1146107f857600080fd5b8063617ba0371461076b57806363c9b8601461077e578063680dd47c1461079157600080fd5b806352751797116102925780635275179714610705578063563dd61314610732578063573ade81146107455780635a3b74b91461075857600080fd5b806342b0b77c1461068e5780634417a583146106a15780634d013f03146106f257600080fd5b8063272d9072116103255780633036b439116102ff5780633036b4391461049457806335ea6a75146104a7578063386497fd14610668578063427da1771461067b57600080fd5b8063272d90721461046657806328530a471461046e5780632dad97d41461048157600080fd5b80630542975c116103615780630542975c146103ca578063074b2e43146104095780631d2118f9146104405780631fe3c6f31461045357600080fd5b8062a718a9146103875780630148170e1461039c57806302c205f0146103b7575b600080fd5b61039a610395366004613e7c565b610a9e565b005b6103a4600181565b6040519081526020015b60405180910390f35b61039a6103c5366004613f07565b610ccb565b6103f17f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103ae565b603a546fffffffffffffffffffffffffffffffff165b6040516fffffffffffffffffffffffffffffffff90911681526020016103ae565b61039a61044e366004613f86565b610e61565b61039a610461366004613fbf565b61101b565b6039546103a4565b61039a61047c366004613fd8565b61103c565b6103a461048f366004613ff3565b6111da565b61039a6104a2366004613fbf565b6112f7565b61065b6104b5366004614028565b604080516102008101825260006101e08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c0810191909152506001600160a01b0390811660009081526034602090815260409182902082516102008101845281546101e08201908152815260018201546fffffffffffffffffffffffffffffffff80821694830194909452700100000000000000000000000000000000908190048416948201949094526002820154808416606083015284900483166080820152600382015480841660a083015284810464ffffffffff1660c08301527501000000000000000000000000000000000000000000900461ffff1660e0820152600482015485166101008201526005820154851661012082015260068201548516610140820152600782015490941661016085015260088101548083166101808601529290920481166101a0840152600990910154166101c082015290565b6040516103ae9190614045565b6103a4610676366004614028565b611304565b61039a610689366004613fbf565b61132b565b61039a61069c3660046141f7565b61135b565b6106e36106af366004614028565b60408051602080820183526000918290526001600160a01b0393909316815260358352819020815192830190915254815290565b604051905181526020016103ae565b61039a610700366004613fbf565b6114ae565b6103f1610713366004614279565b61ffff166000908152603660205260409020546001600160a01b031690565b6103a4610740366004613fbf565b6114dd565b6103a4610753366004614294565b611509565b61039a6107663660046142de565b611625565b61039a61077936600461430c565b6117c6565b61039a61078c366004614028565b6118bc565b61039a61079f36600461435d565b61192b565b6103a46107b2366004614389565b611958565b61039a6107c536600461430c565b611b29565b603a5470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1661041f565b61080b610806366004613fd8565b611bc9565b6040516103ae9190614436565b61039a61082636600461448c565b611cf6565b61039a610839366004613fbf565b611e41565b6103a461084c36600461435d565b611e64565b61039a61085f3660046144ef565b611e9f565b61039a610872366004614560565b611f13565b61039a6108853660046145a2565b611f68565b61039a6108983660046145e1565b6121e6565b61039a6108ab3660046146fb565b61255e565b6108c36108be366004614028565b612595565b604080519687526020870195909552938501929092526060840152608083015260a082015260c0016103ae565b6106e36108fe366004614028565b60408051602080820183526000918290526001600160a01b0393909316815260348352819020815192830190915254815290565b61039a610940366004614028565b6127aa565b61039a610953366004613f86565b612998565b61039a61096636600461472e565b612a14565b6103a4610979366004614028565b612ab4565b610986612ad5565b6040516103ae919061476f565b61039a6109a1366004614863565b612bdd565b61039a6109b436600461499b565b612d3c565b61039a6109c7366004613fbf565b612f75565b6103a46109da366004613ff3565b612fdf565b6103a46109ed366004613fbf565b613072565b61039a610a00366004614028565b613094565b603b5467ffffffffffffffff166103a4565b6103a4610a25366004614028565b6001600160a01b031660009081526038602052604090205460ff1690565b6103a4610a51366004614a00565b6130fc565b61039a610a64366004614a46565b6132b0565b61039a610a77366004613fbf565b61343b565b604051608081526020016103ae565b61039a610a99366004614aa5565b613484565b73__$5f6afe971b683fcb49567b8c037ac31316$__6383c1087d6034603660356037604051806101200160405280603b60089054906101000a900461ffff1661ffff1681526020018981526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160a01b0316815260200188151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba39190614ac7565b6001600160a01b0390811682528b81166000908152603860209081526040918290205460ff168185015281517f5eb88d3d000000000000000000000000000000000000000000000000000000008152825192909401937f000000000000000000000000000000000000000000000000000000000000000090931692635eb88d3d92600480830193928290030181865afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c689190614ac7565b6001600160a01b03168152506040518663ffffffff1660e01b8152600401610c94959493929190614ae4565b60006040518083038186803b158015610cac57600080fd5b505af4158015610cc0573d6000803e3d6000fd5b505050505050505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810185905260ff8416608482015260a4810183905260c481018290526001600160a01b0389169063d505accf9060e401600060405180830381600087803b158015610d5057600080fd5b505af1158015610d64573d6000803e3d6000fd5b505050506001600160a01b0386811660008181526035602090815260409182902082516080810184528d861681529182018c815282840194855261ffff8b81166060850190815294517f1913f16100000000000000000000000000000000000000000000000000000000815260346004820152603660248201526044810193909352925186166064830152516084820152925190931660a48301525190911660c482015273__$f789c39aae91ace14fd54a1fb26061942e$__90631913f1619060e40160006040518083038186803b158015610e3f57600080fd5b505af4158015610e53573d6000803e3d6000fd5b505050505050505050505050565b610e696134af565b60408051808201909152600281527f373700000000000000000000000000000000000000000000000000000000000060208201526001600160a01b038316610ee7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b60405180910390fd5b506001600160a01b0382166000908152603460205260409020600301547501000000000000000000000000000000000000000000900461ffff16151580610f6357506000805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b6040518060400160405280600281526020017f383200000000000000000000000000000000000000000000000000000000000081525090610fd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b506001600160a01b03918216600090815260346020526040902060070180547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b6000806110296036846135b6565b915091506110378282611e9f565b505050565b73__$1da199377bbe9e695813523ee712a12e1f$__635d5dc313603460366037603860356000336001600160a01b03166001600160a01b031681526020019081526020016000206040518060600160405280603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611106573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112a9190614ac7565b6001600160a01b031681526020018960ff168152506040518763ffffffff1660e01b81526004016111a79695949392919095865260208087019590955260408087019490945260608601929092526080850152805160a0850152918201516001600160a01b031660c0840152015160ff1660e08201526101000190565b60006040518083038186803b1580156111bf57600080fd5b505af41580156111d3573d6000803e3d6000fd5b5050505050565b600073__$8dc5844a8fbaebe55a1de06b448991a058$__6340e95de66034603660356000336001600160a01b03166001600160a01b031681526020019081526020016000206040518060a001604052808a6001600160a01b0316815260200189815260200188600281111561125157611251614bb1565b600281111561126257611262614bb1565b81523360208201526001604091820152517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526112ac9493929190600401614c1b565b602060405180830381865af41580156112c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ed9190614c81565b90505b9392505050565b6112ff6134af565b603955565b6001600160a01b0381166000908152603460205260408120611325906135e3565b92915050565b61ffff81166000908152603660205260409020546001600160a01b0390811690601083901c166110378282612998565b60006040518060e00160405280886001600160a01b03168152602001876001600160a01b0316815260200186815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250505061ffff8516602080840191909152603a546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811660408087019190915291166060909401939093526001600160a01b038a1682526034905281902090517fa1fe0e8d00000000000000000000000000000000000000000000000000000000815291925073__$ec751e974387b3dc9b7f5e60bd459dabe6$__9163a1fe0e8d91611475918590600401614c9a565b60006040518083038186803b15801561148d57600080fd5b505af41580156114a1573d6000803e3d6000fd5b5050505050505050505050565b61ffff81166000908152603660205260409020546001600160a01b0316601082901c6001166110378282611625565b6000806000806114ee603686613673565b92509250925061150083838333611509565b95945050505050565b600073__$8dc5844a8fbaebe55a1de06b448991a058$__6340e95de66034603660356000876001600160a01b03166001600160a01b031681526020019081526020016000206040518060a001604052808b6001600160a01b031681526020018a815260200189600281111561158057611580614bb1565b600281111561159157611591614bb1565b81526001600160a01b03891660208201526000604091820152517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526115e49493929190600401614c1b565b602060405180830381865af4158015611601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115009190614c81565b73__$f789c39aae91ace14fd54a1fb26061942e$__63bf697a2660346036603760356000336001600160a01b03166001600160a01b031681526020019081526020016000208787603b60089054906101000a900461ffff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ff9190614ac7565b336000908152603860205260409081902054905160e08b901b7fffffffff0000000000000000000000000000000000000000000000000000000016815260048101999099526024890197909752604488019590955260648701939093526001600160a01b039182166084870152151560a486015261ffff90911660c48501521660e483015260ff16610104820152610124015b60006040518083038186803b1580156117aa57600080fd5b505af41580156117be573d6000803e3d6000fd5b505050505050565b6001600160a01b038281166000818152603560209081526040918290208251608081018452898616815291820188815282840194855261ffff8781166060850190815294517f1913f16100000000000000000000000000000000000000000000000000000000815260346004820152603660248201526044810193909352925186166064830152516084820152925190931660a48301525190911660c482015273__$f789c39aae91ace14fd54a1fb26061942e$__90631913f1619060e4015b60006040518083038186803b15801561189e57600080fd5b505af41580156118b2573d6000803e3d6000fd5b5050505050505050565b6118c46134af565b6040517f9cf5702300000000000000000000000000000000000000000000000000000000815260346004820152603660248201526001600160a01b038216604482015273__$2419f7430a7f293818c4ce661e75cb3bda$__90639cf57023906064016111a7565b600080600080600061193e6036896136d6565b945094509450945094506118b28585338686868d8d610ccb565b600073__$f789c39aae91ace14fd54a1fb26061942e$__63186dea4460346036603760356000336001600160a01b03166001600160a01b031681526020019081526020016000206040518060c001604052808b6001600160a01b031681526020018a8152602001896001600160a01b03168152602001603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6a9190614ac7565b6001600160a01b039081168252336000908152603860209081526040918290205460ff90811694820194909452815160e08b901b7fffffffff0000000000000000000000000000000000000000000000000000000016815260048101999099526024890197909752604488019590955260648701939093528151831660848701529381015160a486015291820151811660c4850152606082015160e485015260808201511661010484015260a0015116610124820152610144016112ac565b611b31613753565b6001600160a01b038281166000818152603560205260409081902090517f0413c86f0000000000000000000000000000000000000000000000000000000081526034600482015260366024820152604481019190915291861660648301526084820185905260a482015261ffff821660c482015273__$b185253dcc5c843f690a8b39f0a499b4eb$__90630413c86f9060e401611886565b6040805160a081018252600080825260208201819052918101829052606080820192909252608081019190915260ff8216600090815260376020908152604091829020825160a081018452815461ffff808216835262010000820481169483019490945264010000000081049093169381019390935266010000000000009091046001600160a01b03166060830152600181018054608084019190611c6d90614d18565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9990614d18565b8015611ce65780601f10611cbb57610100808354040283529160200191611ce6565b820191906000526020600020905b815481529060010190602001808311611cc957829003601f168201915b5050505050815250509050919050565b611cfe6134af565b73__$2419f7430a7f293818c4ce661e75cb3bda$__6369fc1bdf603460366040518060e001604052808a6001600160a01b03168152602001896001600160a01b03168152602001886001600160a01b03168152602001876001600160a01b03168152602001866001600160a01b03168152602001603b60089054906101000a900461ffff1661ffff168152602001611d94608090565b61ffff168152506040518463ffffffff1660e01b8152600401611db993929190614d66565b602060405180830381865af4158015611dd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dfa9190614de9565b156111d357603b805468010000000000000000900461ffff16906008611e1f83614e35565b91906101000a81548161ffff021916908361ffff160217905550505050505050565b600080611e4f6036846138c6565b91509150611e5e828233611958565b50505050565b600080600080600080611e7860368a61391b565b94509450945094509450611e928585853386868e8e6130fc565b9998505050505050505050565b6001600160a01b0382166000908152603460209081526040808320338452603590925290912073__$8dc5844a8fbaebe55a1de06b448991a058$__9163eac4d7039185856002811115611ef457611ef4614bb1565b6040518563ffffffff1660e01b81526004016117929493929190614e57565b6040517f48c2ca8c00000000000000000000000000000000000000000000000000000000815273__$2419f7430a7f293818c4ce661e75cb3bda$__906348c2ca8c906117929060349086908690600401614e81565b73__$8dc5844a8fbaebe55a1de06b448991a058$__631e6473f960346036603760356000876001600160a01b03166001600160a01b031681526020019081526020016000206040518061018001604052808c6001600160a01b03168152602001336001600160a01b03168152602001886001600160a01b031681526020018b81526020018a6002811115611ffe57611ffe614bb1565b600281111561200f5761200f614bb1565b815261ffff808b166020808401919091526001604080850191909152603b5467ffffffffffffffff81166060860152680100000000000000009004909216608084015281517ffca513a8000000000000000000000000000000000000000000000000000000008152915160a0909301926001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263fca513a89260048083019391928290030181865afa1580156120d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120f59190614ac7565b6001600160a01b0390811682528981166000908152603860209081526040918290205460ff168185015281517f5eb88d3d000000000000000000000000000000000000000000000000000000008152825192909401937f000000000000000000000000000000000000000000000000000000000000000090931692635eb88d3d92600480830193928290030181865afa158015612196573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ba9190614ac7565b6001600160a01b03168152506040518663ffffffff1660e01b8152600401610c94959493929190614ed9565b6000604051806101c001604052808d6001600160a01b031681526020018c8c808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506040805160208c810282810182019093528c82529283019290918d918d9182918501908490808284376000920191909152505050908252506040805160208a810282810182019093528a82529283019290918b918b9182918501908490808284376000920191909152505050908252506001600160a01b03871660208083019190915260408051601f88018390048302810183018252878152920191908790879081908401838280828437600092018290525093855250505061ffff808616602080850191909152603a546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811660408088019190915291166060860152603b5467ffffffffffffffff8116608087015268010000000000000000900490921660a08501526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660c08601819052908b16845260388252928290205460ff1660e085015281517f707cd71600000000000000000000000000000000000000000000000000000000815291516101009094019363707cd7169260048082019392918290030181865afa1580156123ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124239190614ac7565b6040517ffa50f2970000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03919091169063fa50f29790602401602060405180830381865afa158015612482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124a69190614de9565b151590526001600160a01b0386166000908152603560205260409081902090517f2e7263ea00000000000000000000000000000000000000000000000000000000815291925073__$ec751e974387b3dc9b7f5e60bd459dabe6$__91632e7263ea9161252091603491603691603791908890600401615041565b60006040518083038186803b15801561253857600080fd5b505af415801561254c573d6000803e3d6000fd5b50505050505050505050505050505050565b6125666134af565b6fffffffffffffffffffffffffffffffff90811670010000000000000000000000000000000002911617603a55565b604080516001600160a01b0383811660008181526035602090815285822060c0860187525460a086019081528552603b5468010000000000000000900461ffff16818601528486019290925284517ffca513a8000000000000000000000000000000000000000000000000000000008152945190948594859485948594859473__$2419f7430a7f293818c4ce661e75cb3bda$__946326ec273f9460349460369460379460608501937f0000000000000000000000000000000000000000000000000000000000000000169263fca513a8926004808401938290030181865afa158015612686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126aa9190614ac7565b6001600160a01b0390811682528e81166000908152603860209081526040918290205460ff90811694820194909452815160e08a901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019890985260248801969096526044870194909452825151606487015293820151608486015291810151831660a4850152606081015190921660c48401526080909101511660e48201526101040160c060405180830381865af4158015612772573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061279691906151c0565b949c939b5091995097509550909350915050565b6001805460ff16806127bb5750303b155b806127c7575060005481115b612853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a65640000000000000000000000000000000000006064820152608401610ede565b60015460ff1615801561289057600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316146040518060400160405280600281526020017f313200000000000000000000000000000000000000000000000000000000000081525090612933576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b50603b80547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166109c41790556009603a55801561103757600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055505050565b6001600160a01b038281166000818152603460205260409081902090517f6973f74400000000000000000000000000000000000000000000000000000000815260048101919091526024810191909152908216604482015273__$8dc5844a8fbaebe55a1de06b448991a058$__90636973f74490606401611792565b612a1c61395b565b6040517f87b322b20000000000000000000000000000000000000000000000000000000081526001600160a01b038085166004830152831660248201526044810182905273__$2419f7430a7f293818c4ce661e75cb3bda$__906387b322b29060640160006040518083038186803b158015612a9757600080fd5b505af4158015612aab573d6000803e3d6000fd5b50505050505050565b6001600160a01b038116600090815260346020526040812061132590613ace565b603b5460609068010000000000000000900461ffff166000808267ffffffffffffffff811115612b0757612b076147bc565b604051908082528060200260200182016040528015612b30578160200160208202803683370190505b50905060005b83811015612bd3576000818152603660205260409020546001600160a01b031615612bb3576000818152603660205260409020546001600160a01b031682612b7e858461520a565b81518110612b8e57612b8e615221565b60200260200101906001600160a01b031690816001600160a01b031681525050612bc1565b82612bbd81615250565b9350505b80612bcb81615250565b915050612b36565b5091038152919050565b612be56134af565b60408051808201909152600281527f3136000000000000000000000000000000000000000000000000000000000000602082015260ff8316612c54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b5060ff821660009081526037602090815260409182902083518154838601519486015160608701516001600160a01b03166601000000000000027fffffffffffff0000000000000000000000000000000000000000ffffffffffff61ffff92831664010000000002167fffffffffffff00000000000000000000000000000000000000000000ffffffff97831662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009094169290941691909117919091179490941617929092178255608083015180518493926111d3926001850192910190613db0565b6001600160a01b03868116600090815260346020908152604091829020600401548251808401909352600283527f3131000000000000000000000000000000000000000000000000000000000000918301919091529091163314612dcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b5073__$f789c39aae91ace14fd54a1fb26061942e$__638a5dadd160346036603760356040518061012001604052808d6001600160a01b031681526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a8152602001898152602001888152602001603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015612eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ed79190614ac7565b6001600160a01b0390811682528d166000908152603860209081526040918290205460ff16920191909152517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152612f3d95949392919060040161526b565b60006040518083038186803b158015612f5557600080fd5b505af4158015612f69573d6000803e3d6000fd5b50505050505050505050565b600080600080612fca60368661ffff81811660009081526020939093526040909220546001600160a01b0316926fffffffffffffffffffffffffffffffff601083901c169260ff609084901c169260981c1690565b93509350935093506111d38484848433611f68565b6000612fe9613753565b6001600160a01b0384166000818152603460205260409081902060395491517f8e743248000000000000000000000000000000000000000000000000000000008152600481019190915260248101929092526044820185905260648201849052608482015273__$b185253dcc5c843f690a8b39f0a499b4eb$__90638e7432489060a4016112ac565b600080600080613083603686613673565b9250925092506115008383836111da565b61309c6134af565b6040517f1e3b4145000000000000000000000000000000000000000000000000000000008152603460048201526001600160a01b038216602482015273__$2419f7430a7f293818c4ce661e75cb3bda$__90631e3b4145906044016111a7565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810185905260ff8416608482015260a4810183905260c481018290526000906001600160a01b038a169063d505accf9060e401600060405180830381600087803b15801561318457600080fd5b505af1158015613198573d6000803e3d6000fd5b5050505060006040518060a001604052808b6001600160a01b031681526020018a81526020018960028111156131d0576131d0614bb1565b60028111156131e1576131e1614bb1565b81526001600160a01b0389166020808301829052600060409384018190529182526035905281902090517f40e95de600000000000000000000000000000000000000000000000000000000815291925073__$8dc5844a8fbaebe55a1de06b448991a058$__916340e95de691613261916034916036918790600401614c1b565b602060405180830381865af415801561327e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132a29190614c81565b9a9950505050505050505050565b6132b86134af565b60408051808201909152600281527f373700000000000000000000000000000000000000000000000000000000000060208201526001600160a01b03831661332d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b506001600160a01b0382166000908152603460205260409020600301547501000000000000000000000000000000000000000000900461ffff161515806133a957506000805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b6040518060400160405280600281526020017f383200000000000000000000000000000000000000000000000000000000000081525090613417576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b506001600160a01b0382166000908152603460205260409020813581558190611e5e565b61ffff8181166000908152603660205260409020546001600160a01b031690601083901c6fffffffffffffffffffffffffffffffff1690609084901c16611e5e838333846117c6565b600080600080600061349860368888613b52565b94509450945094509450612aab8585858585610a9e565b336001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663631adfca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613517573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061353b9190614ac7565b6001600160a01b0316146040518060400160405280600281526020017f3130000000000000000000000000000000000000000000000000000000000000815250906135b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b50565b61ffff81166000908152602083905260409020546001600160a01b0316601082901c60ff165b9250929050565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613629575050600201546fffffffffffffffffffffffffffffffff1690565b60028301546112f0906fffffffffffffffffffffffffffffffff80821691613667917001000000000000000000000000000000009091041684613bde565b90613beb565b50919050565b6000808061ffff84166fffffffffffffffffffffffffffffffff601086901c81169060ff609088901c16908214156136ab5760001991505b61ffff9092166000908152602088905260409020546001600160a01b03169450925090509250925092565b60008080808060a086901c63ffffffff1660c087901c60ff1682808061373b8c8c61ffff8181166000908152602084905260409020546001600160a01b031690601083901c6fffffffffffffffffffffffffffffffff1690609084901c169250925092565b919e909d50909b509499509297509295505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156137b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906137d59190614ac7565b6040517f726600ce0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03919091169063726600ce90602401602060405180830381865afa158015613834573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138589190614de9565b6040518060400160405280600181526020017f3600000000000000000000000000000000000000000000000000000000000000815250906135b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b60008061ffff83166fffffffffffffffffffffffffffffffff601085901c8116908114156138f357506000195b61ffff9190911660009081526020959095526040909420546001600160a01b03169492505050565b6000806000806000806000806000806139348c8c613673565b919e909d50909b609881901c63ffffffff169b5060b81c60ff169950975050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156139b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139dd9190614ac7565b6040517f7be53ca10000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039190911690637be53ca190602401602060405180830381865afa158015613a3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a609190614de9565b6040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250906135b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613b14575050600101546fffffffffffffffffffffffffffffffff1690565b60018301546112f0906fffffffffffffffffffffffffffffffff80821691613667917001000000000000000000000000000000009091041684613c42565b60008080808061ffff87811690601089901c16602089901c6001600160a01b03166fffffffffffffffffffffffffffffffff8981169060808b901c60011690821415613b9e5760001991505b61ffff948516600090815260209d909d526040808e2054949095168d5293909b20546001600160a01b039283169c92169a90995097509095509350505050565b60006112f0838342613c87565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517613c2057600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600080613c5664ffffffffff84164261520a565b613c609085615320565b6301e1338090049050613c7f816b033b2e3c9fd0803ce800000061536e565b949350505050565b600080613c9b64ffffffffff85168461520a565b905080613cb7576b033b2e3c9fd0803ce80000009150506112f0565b60001981016000808060028511613ccf576000613cd4565b600285035b925066038882915c4000613ce88a80613beb565b81613cf557613cf561533f565b0491506301e13380613d07838b613beb565b81613d1457613d1461533f565b049050600082613d248688615320565b613d2e9190615320565b60029004905060008285613d42888a615320565b613d4c9190615320565b613d569190615320565b60069004905080826301e13380613d6d8a8f615320565b613d779190615386565b613d8d906b033b2e3c9fd0803ce800000061536e565b613d97919061536e565b613da1919061536e565b9b9a5050505050505050505050565b828054613dbc90614d18565b90600052602060002090601f016020900481019282613dde5760008555613e24565b82601f10613df757805160ff1916838001178555613e24565b82800160010185558215613e24579182015b82811115613e24578251825591602001919060010190613e09565b50613e30929150613e34565b5090565b5b80821115613e305760008155600101613e35565b6001600160a01b03811681146135b357600080fd5b8035613e6981613e49565b919050565b80151581146135b357600080fd5b600080600080600060a08688031215613e9457600080fd5b8535613e9f81613e49565b94506020860135613eaf81613e49565b93506040860135613ebf81613e49565b9250606086013591506080860135613ed681613e6e565b809150509295509295909350565b803561ffff81168114613e6957600080fd5b803560ff81168114613e6957600080fd5b600080600080600080600080610100898b031215613f2457600080fd5b8835613f2f81613e49565b9750602089013596506040890135613f4681613e49565b9550613f5460608a01613ee4565b945060808901359350613f6960a08a01613ef6565b925060c0890135915060e089013590509295985092959890939650565b60008060408385031215613f9957600080fd5b8235613fa481613e49565b91506020830135613fb481613e49565b809150509250929050565b600060208284031215613fd157600080fd5b5035919050565b600060208284031215613fea57600080fd5b6112f082613ef6565b60008060006060848603121561400857600080fd5b833561401381613e49565b95602085013595506040909401359392505050565b60006020828403121561403a57600080fd5b81356112f081613e49565b81515181526101e08101602083015161407260208401826fffffffffffffffffffffffffffffffff169052565b50604083015161409660408401826fffffffffffffffffffffffffffffffff169052565b5060608301516140ba60608401826fffffffffffffffffffffffffffffffff169052565b5060808301516140de60808401826fffffffffffffffffffffffffffffffff169052565b5060a083015161410260a08401826fffffffffffffffffffffffffffffffff169052565b5060c083015161411b60c084018264ffffffffff169052565b5060e083015161413160e084018261ffff169052565b50610100838101516001600160a01b039081169184019190915261012080850151821690840152610140808501518216908401526101608085015190911690830152610180808401516fffffffffffffffffffffffffffffffff908116918401919091526101a0808501518216908401526101c09384015116929091019190915290565b60008083601f8401126141c757600080fd5b50813567ffffffffffffffff8111156141df57600080fd5b6020830191508360208285010111156135dc57600080fd5b60008060008060008060a0878903121561421057600080fd5b863561421b81613e49565b9550602087013561422b81613e49565b945060408701359350606087013567ffffffffffffffff81111561424e57600080fd5b61425a89828a016141b5565b909450925061426d905060808801613ee4565b90509295509295509295565b60006020828403121561428b57600080fd5b6112f082613ee4565b600080600080608085870312156142aa57600080fd5b84356142b581613e49565b9350602085013592506040850135915060608501356142d381613e49565b939692955090935050565b600080604083850312156142f157600080fd5b82356142fc81613e49565b91506020830135613fb481613e6e565b6000806000806080858703121561432257600080fd5b843561432d81613e49565b935060208501359250604085013561434481613e49565b915061435260608601613ee4565b905092959194509250565b60008060006060848603121561437257600080fd5b505081359360208301359350604090920135919050565b60008060006060848603121561439e57600080fd5b83356143a981613e49565b92506020840135915060408401356143c081613e49565b809150509250925092565b6000815180845260005b818110156143f1576020818501810151868301820152016143d5565b81811115614403576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061ffff808451166020840152806020850151166040840152806040850151166060840152506001600160a01b036060840151166080830152608083015160a080840152613c7f60c08401826143cb565b600080600080600060a086880312156144a457600080fd5b85356144af81613e49565b945060208601356144bf81613e49565b935060408601356144cf81613e49565b925060608601356144df81613e49565b91506080860135613ed681613e49565b6000806040838503121561450257600080fd5b823561450d81613e49565b946020939093013593505050565b60008083601f84011261452d57600080fd5b50813567ffffffffffffffff81111561454557600080fd5b6020830191508360208260051b85010111156135dc57600080fd5b6000806020838503121561457357600080fd5b823567ffffffffffffffff81111561458a57600080fd5b6145968582860161451b565b90969095509350505050565b600080600080600060a086880312156145ba57600080fd5b85356145c581613e49565b945060208601359350604086013592506144df60608701613ee4565b600080600080600080600080600080600060e08c8e03121561460257600080fd5b61460b8c613e5e565b9a5067ffffffffffffffff8060208e0135111561462757600080fd5b6146378e60208f01358f0161451b565b909b50995060408d013581101561464d57600080fd5b61465d8e60408f01358f0161451b565b909950975060608d013581101561467357600080fd5b6146838e60608f01358f0161451b565b909750955061469460808e01613e5e565b94508060a08e013511156146a757600080fd5b506146b88d60a08e01358e016141b5565b90935091506146c960c08d01613ee4565b90509295989b509295989b9093969950565b80356fffffffffffffffffffffffffffffffff81168114613e6957600080fd5b6000806040838503121561470e57600080fd5b614717836146db565b9150614725602084016146db565b90509250929050565b60008060006060848603121561474357600080fd5b833561474e81613e49565b9250602084013561475e81613e49565b929592945050506040919091013590565b6020808252825182820181905260009190848201906040850190845b818110156147b05783516001600160a01b03168352928401929184019160010161478b565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561480e5761480e6147bc565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561485b5761485b6147bc565b604052919050565b6000806040838503121561487657600080fd5b61487f83613ef6565b915060208084013567ffffffffffffffff8082111561489d57600080fd5b9085019060a082880312156148b157600080fd5b6148b96147eb565b6148c283613ee4565b81526148cf848401613ee4565b848201526148df60408401613ee4565b604082015260608301356148f281613e49565b606082015260808301358281111561490957600080fd5b80840193505087601f84011261491e57600080fd5b823582811115614930576149306147bc565b614960857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601614814565b9250808352888582860101111561497657600080fd5b8085850186850137600085828501015250816080820152809450505050509250929050565b60008060008060008060c087890312156149b457600080fd5b86356149bf81613e49565b955060208701356149cf81613e49565b945060408701356149df81613e49565b959894975094956060810135955060808101359460a0909101359350915050565b600080600080600080600080610100898b031215614a1d57600080fd5b8835614a2881613e49565b975060208901359650604089013595506060890135613f5481613e49565b6000808284036040811215614a5a57600080fd5b8335614a6581613e49565b925060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215614a9757600080fd5b506020830190509250929050565b60008060408385031215614ab857600080fd5b50508035926020909101359150565b600060208284031215614ad957600080fd5b81516112f081613e49565b60006101a08201905086825285602083015284604083015283606083015282516080830152602083015160a083015260408301516001600160a01b0380821660c08501528060608601511660e085015250506080830151610100614b52818501836001600160a01b03169052565b60a0850151151561012085015260c08501516001600160a01b0390811661014086015260e086015160ff166101608601529085015190811661018085015290505b509695505050505050565b6020815260006112f060208301846143cb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614c17577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508582528460208301528360408301526001600160a01b03808451166060840152602084015160808401526040840151614c6060a0850182614be0565b5060608401511660c0830152608090920151151560e0909101529392505050565b600060208284031215614c9357600080fd5b5051919050565b8281526040602082015260006001600160a01b038084511660408401528060208501511660608401525060408301516080830152606083015160e060a0840152614ce86101208401826143cb565b905061ffff60808501511660c084015260a084015160e084015260c0840151610100840152809150509392505050565b600181811c90821680614d2c57607f821691505b6020821081141561366d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000610120820190508482528360208301526001600160a01b038084511660408401528060208501511660608401528060408501511660808401528060608501511660a08401528060808501511660c08401525060a0830151614dcf60e084018261ffff169052565b5060c083015161ffff811661010084015250949350505050565b600060208284031215614dfb57600080fd5b81516112f081613e6e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061ffff80831681811415614e4d57614e4d614e06565b6001019392505050565b848152602081018490526001600160a01b0383166040820152608081016115006060830184614be0565b83815260406020808301829052908201839052600090849060608401835b86811015614ecd578335614eb281613e49565b6001600160a01b031682529282019290820190600101614e9f565b50979650505050505050565b85815260208101859052604081018490526060810183905281516001600160a01b03166080820152610200810160208301516001600160a01b03811660a08401525060408301516001600160a01b03811660c084015250606083015160e08301526080830151610100614f4e81850183614be0565b60a08501519150610120614f678186018461ffff169052565b60c08601519250610140614f7e8187018515159052565b60e08701516101608781019190915292870151610180870152908601516001600160a01b039081166101a08701529086015160ff166101c0860152908501519081166101e08501529050614b93565b600081518084526020808501945080840160005b838110156150065781516001600160a01b031687529582019590820190600101614fe1565b509495945050505050565b600081518084526020808501945080840160005b8381101561500657815187529582019590820190600101615025565b85815284602082015283604082015282606082015260a0608082015261507360a0820183516001600160a01b03169052565b600060208301516101c08060c0850152615091610260850183614fcd565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60808685030160e08701526150cd8483615011565b9350606087015191506101008187860301818801526150ec8584615011565b94506080880151925061012061510c818901856001600160a01b03169052565b60a089015193506101408389880301818a015261512987866143cb565b965060c08a015194506101609350615146848a018661ffff169052565b60e08a0151945061018085818b0152838b015195506101a0935085848b0152828b0151878b0152818b01516101e08b0152848b015196506151936102008b01886001600160a01b03169052565b8a015160ff81166102208b015295506151aa915050565b8701518015156102408801529250614ecd915050565b60008060008060008060c087890312156151d957600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b60008282101561521c5761521c614e06565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060001982141561526457615264614e06565b5060010190565b60006101a0820190508682528560208301528460408301528360608301526001600160a01b038084511660808401528060208501511660a08401525060408301516152c160c08401826001600160a01b03169052565b50606083015160e08301526080830151610100818185015260a085015161012085015260c085015161014085015260e0850151915061530c6101608501836001600160a01b03169052565b84015160ff81166101808501529050614b93565b600081600019048311821515161561533a5761533a614e06565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000821982111561538157615381614e06565b500190565b6000826153bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220019b55ffabc525325e97653bee8fe08d7af4e61acad2a9ce09e391e3ace6bab964736f6c634300080a0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106103825760003560e01c80637a708e92116101de578063d1946dbc1161010f578063e82fec2f116100ad578063f51e435b1161007c578063f51e435b14610a56578063f7a7384014610a69578063f8119d5114610a7c578063fd21ecff14610a8b57600080fd5b8063e82fec2f14610a05578063e8eda9df1461076b578063eddf1b7914610a17578063ee3e210b14610a4357600080fd5b8063d5eed868116100e9578063d5eed868146109b9578063d65dc7a1146109cc578063dc7c0bff146109df578063e43e88a1146109f257600080fd5b8063d1946dbc1461097e578063d579ea7d14610993578063d5ed3933146109a657600080fd5b8063bcb6e5221161017c578063c4d66de811610156578063c4d66de814610932578063cd11238214610945578063cea9d26f14610958578063d15e00531461096b57600080fd5b8063bcb6e5221461089d578063bf92857c146108b0578063c44b11f7146108f057600080fd5b806394ba89a2116101b857806394ba89a2146108515780639cd1999614610864578063a415bcad14610877578063ab9c4b5d1461088a57600080fd5b80637a708e92146108185780638e19899e1461082b57806394b576de1461083e57600080fd5b806342b0b77c116102b8578063617ba0371161025657806369328dec1161023057806369328dec146107a457806369a933a5146107b75780636a99c036146107ca5780636c6f6ae1146107f857600080fd5b8063617ba0371461076b57806363c9b8601461077e578063680dd47c1461079157600080fd5b806352751797116102925780635275179714610705578063563dd61314610732578063573ade81146107455780635a3b74b91461075857600080fd5b806342b0b77c1461068e5780634417a583146106a15780634d013f03146106f257600080fd5b8063272d9072116103255780633036b439116102ff5780633036b4391461049457806335ea6a75146104a7578063386497fd14610668578063427da1771461067b57600080fd5b8063272d90721461046657806328530a471461046e5780632dad97d41461048157600080fd5b80630542975c116103615780630542975c146103ca578063074b2e43146104095780631d2118f9146104405780631fe3c6f31461045357600080fd5b8062a718a9146103875780630148170e1461039c57806302c205f0146103b7575b600080fd5b61039a610395366004613e7c565b610a9e565b005b6103a4600181565b6040519081526020015b60405180910390f35b61039a6103c5366004613f07565b610ccb565b6103f17f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103ae565b603a546fffffffffffffffffffffffffffffffff165b6040516fffffffffffffffffffffffffffffffff90911681526020016103ae565b61039a61044e366004613f86565b610e61565b61039a610461366004613fbf565b61101b565b6039546103a4565b61039a61047c366004613fd8565b61103c565b6103a461048f366004613ff3565b6111da565b61039a6104a2366004613fbf565b6112f7565b61065b6104b5366004614028565b604080516102008101825260006101e08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c0810191909152506001600160a01b0390811660009081526034602090815260409182902082516102008101845281546101e08201908152815260018201546fffffffffffffffffffffffffffffffff80821694830194909452700100000000000000000000000000000000908190048416948201949094526002820154808416606083015284900483166080820152600382015480841660a083015284810464ffffffffff1660c08301527501000000000000000000000000000000000000000000900461ffff1660e0820152600482015485166101008201526005820154851661012082015260068201548516610140820152600782015490941661016085015260088101548083166101808601529290920481166101a0840152600990910154166101c082015290565b6040516103ae9190614045565b6103a4610676366004614028565b611304565b61039a610689366004613fbf565b61132b565b61039a61069c3660046141f7565b61135b565b6106e36106af366004614028565b60408051602080820183526000918290526001600160a01b0393909316815260358352819020815192830190915254815290565b604051905181526020016103ae565b61039a610700366004613fbf565b6114ae565b6103f1610713366004614279565b61ffff166000908152603660205260409020546001600160a01b031690565b6103a4610740366004613fbf565b6114dd565b6103a4610753366004614294565b611509565b61039a6107663660046142de565b611625565b61039a61077936600461430c565b6117c6565b61039a61078c366004614028565b6118bc565b61039a61079f36600461435d565b61192b565b6103a46107b2366004614389565b611958565b61039a6107c536600461430c565b611b29565b603a5470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1661041f565b61080b610806366004613fd8565b611bc9565b6040516103ae9190614436565b61039a61082636600461448c565b611cf6565b61039a610839366004613fbf565b611e41565b6103a461084c36600461435d565b611e64565b61039a61085f3660046144ef565b611e9f565b61039a610872366004614560565b611f13565b61039a6108853660046145a2565b611f68565b61039a6108983660046145e1565b6121e6565b61039a6108ab3660046146fb565b61255e565b6108c36108be366004614028565b612595565b604080519687526020870195909552938501929092526060840152608083015260a082015260c0016103ae565b6106e36108fe366004614028565b60408051602080820183526000918290526001600160a01b0393909316815260348352819020815192830190915254815290565b61039a610940366004614028565b6127aa565b61039a610953366004613f86565b612998565b61039a61096636600461472e565b612a14565b6103a4610979366004614028565b612ab4565b610986612ad5565b6040516103ae919061476f565b61039a6109a1366004614863565b612bdd565b61039a6109b436600461499b565b612d3c565b61039a6109c7366004613fbf565b612f75565b6103a46109da366004613ff3565b612fdf565b6103a46109ed366004613fbf565b613072565b61039a610a00366004614028565b613094565b603b5467ffffffffffffffff166103a4565b6103a4610a25366004614028565b6001600160a01b031660009081526038602052604090205460ff1690565b6103a4610a51366004614a00565b6130fc565b61039a610a64366004614a46565b6132b0565b61039a610a77366004613fbf565b61343b565b604051608081526020016103ae565b61039a610a99366004614aa5565b613484565b73__$5f6afe971b683fcb49567b8c037ac31316$__6383c1087d6034603660356037604051806101200160405280603b60089054906101000a900461ffff1661ffff1681526020018981526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160a01b0316815260200188151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba39190614ac7565b6001600160a01b0390811682528b81166000908152603860209081526040918290205460ff168185015281517f5eb88d3d000000000000000000000000000000000000000000000000000000008152825192909401937f000000000000000000000000000000000000000000000000000000000000000090931692635eb88d3d92600480830193928290030181865afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c689190614ac7565b6001600160a01b03168152506040518663ffffffff1660e01b8152600401610c94959493929190614ae4565b60006040518083038186803b158015610cac57600080fd5b505af4158015610cc0573d6000803e3d6000fd5b505050505050505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810185905260ff8416608482015260a4810183905260c481018290526001600160a01b0389169063d505accf9060e401600060405180830381600087803b158015610d5057600080fd5b505af1158015610d64573d6000803e3d6000fd5b505050506001600160a01b0386811660008181526035602090815260409182902082516080810184528d861681529182018c815282840194855261ffff8b81166060850190815294517f1913f16100000000000000000000000000000000000000000000000000000000815260346004820152603660248201526044810193909352925186166064830152516084820152925190931660a48301525190911660c482015273__$f789c39aae91ace14fd54a1fb26061942e$__90631913f1619060e40160006040518083038186803b158015610e3f57600080fd5b505af4158015610e53573d6000803e3d6000fd5b505050505050505050505050565b610e696134af565b60408051808201909152600281527f373700000000000000000000000000000000000000000000000000000000000060208201526001600160a01b038316610ee7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b60405180910390fd5b506001600160a01b0382166000908152603460205260409020600301547501000000000000000000000000000000000000000000900461ffff16151580610f6357506000805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b6040518060400160405280600281526020017f383200000000000000000000000000000000000000000000000000000000000081525090610fd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b506001600160a01b03918216600090815260346020526040902060070180547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b6000806110296036846135b6565b915091506110378282611e9f565b505050565b73__$1da199377bbe9e695813523ee712a12e1f$__635d5dc313603460366037603860356000336001600160a01b03166001600160a01b031681526020019081526020016000206040518060600160405280603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611106573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112a9190614ac7565b6001600160a01b031681526020018960ff168152506040518763ffffffff1660e01b81526004016111a79695949392919095865260208087019590955260408087019490945260608601929092526080850152805160a0850152918201516001600160a01b031660c0840152015160ff1660e08201526101000190565b60006040518083038186803b1580156111bf57600080fd5b505af41580156111d3573d6000803e3d6000fd5b5050505050565b600073__$8dc5844a8fbaebe55a1de06b448991a058$__6340e95de66034603660356000336001600160a01b03166001600160a01b031681526020019081526020016000206040518060a001604052808a6001600160a01b0316815260200189815260200188600281111561125157611251614bb1565b600281111561126257611262614bb1565b81523360208201526001604091820152517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526112ac9493929190600401614c1b565b602060405180830381865af41580156112c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ed9190614c81565b90505b9392505050565b6112ff6134af565b603955565b6001600160a01b0381166000908152603460205260408120611325906135e3565b92915050565b61ffff81166000908152603660205260409020546001600160a01b0390811690601083901c166110378282612998565b60006040518060e00160405280886001600160a01b03168152602001876001600160a01b0316815260200186815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250505061ffff8516602080840191909152603a546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811660408087019190915291166060909401939093526001600160a01b038a1682526034905281902090517fa1fe0e8d00000000000000000000000000000000000000000000000000000000815291925073__$ec751e974387b3dc9b7f5e60bd459dabe6$__9163a1fe0e8d91611475918590600401614c9a565b60006040518083038186803b15801561148d57600080fd5b505af41580156114a1573d6000803e3d6000fd5b5050505050505050505050565b61ffff81166000908152603660205260409020546001600160a01b0316601082901c6001166110378282611625565b6000806000806114ee603686613673565b92509250925061150083838333611509565b95945050505050565b600073__$8dc5844a8fbaebe55a1de06b448991a058$__6340e95de66034603660356000876001600160a01b03166001600160a01b031681526020019081526020016000206040518060a001604052808b6001600160a01b031681526020018a815260200189600281111561158057611580614bb1565b600281111561159157611591614bb1565b81526001600160a01b03891660208201526000604091820152517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526115e49493929190600401614c1b565b602060405180830381865af4158015611601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115009190614c81565b73__$f789c39aae91ace14fd54a1fb26061942e$__63bf697a2660346036603760356000336001600160a01b03166001600160a01b031681526020019081526020016000208787603b60089054906101000a900461ffff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ff9190614ac7565b336000908152603860205260409081902054905160e08b901b7fffffffff0000000000000000000000000000000000000000000000000000000016815260048101999099526024890197909752604488019590955260648701939093526001600160a01b039182166084870152151560a486015261ffff90911660c48501521660e483015260ff16610104820152610124015b60006040518083038186803b1580156117aa57600080fd5b505af41580156117be573d6000803e3d6000fd5b505050505050565b6001600160a01b038281166000818152603560209081526040918290208251608081018452898616815291820188815282840194855261ffff8781166060850190815294517f1913f16100000000000000000000000000000000000000000000000000000000815260346004820152603660248201526044810193909352925186166064830152516084820152925190931660a48301525190911660c482015273__$f789c39aae91ace14fd54a1fb26061942e$__90631913f1619060e4015b60006040518083038186803b15801561189e57600080fd5b505af41580156118b2573d6000803e3d6000fd5b5050505050505050565b6118c46134af565b6040517f9cf5702300000000000000000000000000000000000000000000000000000000815260346004820152603660248201526001600160a01b038216604482015273__$2419f7430a7f293818c4ce661e75cb3bda$__90639cf57023906064016111a7565b600080600080600061193e6036896136d6565b945094509450945094506118b28585338686868d8d610ccb565b600073__$f789c39aae91ace14fd54a1fb26061942e$__63186dea4460346036603760356000336001600160a01b03166001600160a01b031681526020019081526020016000206040518060c001604052808b6001600160a01b031681526020018a8152602001896001600160a01b03168152602001603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6a9190614ac7565b6001600160a01b039081168252336000908152603860209081526040918290205460ff90811694820194909452815160e08b901b7fffffffff0000000000000000000000000000000000000000000000000000000016815260048101999099526024890197909752604488019590955260648701939093528151831660848701529381015160a486015291820151811660c4850152606082015160e485015260808201511661010484015260a0015116610124820152610144016112ac565b611b31613753565b6001600160a01b038281166000818152603560205260409081902090517f0413c86f0000000000000000000000000000000000000000000000000000000081526034600482015260366024820152604481019190915291861660648301526084820185905260a482015261ffff821660c482015273__$b185253dcc5c843f690a8b39f0a499b4eb$__90630413c86f9060e401611886565b6040805160a081018252600080825260208201819052918101829052606080820192909252608081019190915260ff8216600090815260376020908152604091829020825160a081018452815461ffff808216835262010000820481169483019490945264010000000081049093169381019390935266010000000000009091046001600160a01b03166060830152600181018054608084019190611c6d90614d18565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9990614d18565b8015611ce65780601f10611cbb57610100808354040283529160200191611ce6565b820191906000526020600020905b815481529060010190602001808311611cc957829003601f168201915b5050505050815250509050919050565b611cfe6134af565b73__$2419f7430a7f293818c4ce661e75cb3bda$__6369fc1bdf603460366040518060e001604052808a6001600160a01b03168152602001896001600160a01b03168152602001886001600160a01b03168152602001876001600160a01b03168152602001866001600160a01b03168152602001603b60089054906101000a900461ffff1661ffff168152602001611d94608090565b61ffff168152506040518463ffffffff1660e01b8152600401611db993929190614d66565b602060405180830381865af4158015611dd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dfa9190614de9565b156111d357603b805468010000000000000000900461ffff16906008611e1f83614e35565b91906101000a81548161ffff021916908361ffff160217905550505050505050565b600080611e4f6036846138c6565b91509150611e5e828233611958565b50505050565b600080600080600080611e7860368a61391b565b94509450945094509450611e928585853386868e8e6130fc565b9998505050505050505050565b6001600160a01b0382166000908152603460209081526040808320338452603590925290912073__$8dc5844a8fbaebe55a1de06b448991a058$__9163eac4d7039185856002811115611ef457611ef4614bb1565b6040518563ffffffff1660e01b81526004016117929493929190614e57565b6040517f48c2ca8c00000000000000000000000000000000000000000000000000000000815273__$2419f7430a7f293818c4ce661e75cb3bda$__906348c2ca8c906117929060349086908690600401614e81565b73__$8dc5844a8fbaebe55a1de06b448991a058$__631e6473f960346036603760356000876001600160a01b03166001600160a01b031681526020019081526020016000206040518061018001604052808c6001600160a01b03168152602001336001600160a01b03168152602001886001600160a01b031681526020018b81526020018a6002811115611ffe57611ffe614bb1565b600281111561200f5761200f614bb1565b815261ffff808b166020808401919091526001604080850191909152603b5467ffffffffffffffff81166060860152680100000000000000009004909216608084015281517ffca513a8000000000000000000000000000000000000000000000000000000008152915160a0909301926001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263fca513a89260048083019391928290030181865afa1580156120d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120f59190614ac7565b6001600160a01b0390811682528981166000908152603860209081526040918290205460ff168185015281517f5eb88d3d000000000000000000000000000000000000000000000000000000008152825192909401937f000000000000000000000000000000000000000000000000000000000000000090931692635eb88d3d92600480830193928290030181865afa158015612196573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ba9190614ac7565b6001600160a01b03168152506040518663ffffffff1660e01b8152600401610c94959493929190614ed9565b6000604051806101c001604052808d6001600160a01b031681526020018c8c808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506040805160208c810282810182019093528c82529283019290918d918d9182918501908490808284376000920191909152505050908252506040805160208a810282810182019093528a82529283019290918b918b9182918501908490808284376000920191909152505050908252506001600160a01b03871660208083019190915260408051601f88018390048302810183018252878152920191908790879081908401838280828437600092018290525093855250505061ffff808616602080850191909152603a546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811660408088019190915291166060860152603b5467ffffffffffffffff8116608087015268010000000000000000900490921660a08501526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660c08601819052908b16845260388252928290205460ff1660e085015281517f707cd71600000000000000000000000000000000000000000000000000000000815291516101009094019363707cd7169260048082019392918290030181865afa1580156123ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124239190614ac7565b6040517ffa50f2970000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03919091169063fa50f29790602401602060405180830381865afa158015612482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124a69190614de9565b151590526001600160a01b0386166000908152603560205260409081902090517f2e7263ea00000000000000000000000000000000000000000000000000000000815291925073__$ec751e974387b3dc9b7f5e60bd459dabe6$__91632e7263ea9161252091603491603691603791908890600401615041565b60006040518083038186803b15801561253857600080fd5b505af415801561254c573d6000803e3d6000fd5b50505050505050505050505050505050565b6125666134af565b6fffffffffffffffffffffffffffffffff90811670010000000000000000000000000000000002911617603a55565b604080516001600160a01b0383811660008181526035602090815285822060c0860187525460a086019081528552603b5468010000000000000000900461ffff16818601528486019290925284517ffca513a8000000000000000000000000000000000000000000000000000000008152945190948594859485948594859473__$2419f7430a7f293818c4ce661e75cb3bda$__946326ec273f9460349460369460379460608501937f0000000000000000000000000000000000000000000000000000000000000000169263fca513a8926004808401938290030181865afa158015612686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126aa9190614ac7565b6001600160a01b0390811682528e81166000908152603860209081526040918290205460ff90811694820194909452815160e08a901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019890985260248801969096526044870194909452825151606487015293820151608486015291810151831660a4850152606081015190921660c48401526080909101511660e48201526101040160c060405180830381865af4158015612772573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061279691906151c0565b949c939b5091995097509550909350915050565b6001805460ff16806127bb5750303b155b806127c7575060005481115b612853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a65640000000000000000000000000000000000006064820152608401610ede565b60015460ff1615801561289057600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316146040518060400160405280600281526020017f313200000000000000000000000000000000000000000000000000000000000081525090612933576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b50603b80547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166109c41790556009603a55801561103757600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055505050565b6001600160a01b038281166000818152603460205260409081902090517f6973f74400000000000000000000000000000000000000000000000000000000815260048101919091526024810191909152908216604482015273__$8dc5844a8fbaebe55a1de06b448991a058$__90636973f74490606401611792565b612a1c61395b565b6040517f87b322b20000000000000000000000000000000000000000000000000000000081526001600160a01b038085166004830152831660248201526044810182905273__$2419f7430a7f293818c4ce661e75cb3bda$__906387b322b29060640160006040518083038186803b158015612a9757600080fd5b505af4158015612aab573d6000803e3d6000fd5b50505050505050565b6001600160a01b038116600090815260346020526040812061132590613ace565b603b5460609068010000000000000000900461ffff166000808267ffffffffffffffff811115612b0757612b076147bc565b604051908082528060200260200182016040528015612b30578160200160208202803683370190505b50905060005b83811015612bd3576000818152603660205260409020546001600160a01b031615612bb3576000818152603660205260409020546001600160a01b031682612b7e858461520a565b81518110612b8e57612b8e615221565b60200260200101906001600160a01b031690816001600160a01b031681525050612bc1565b82612bbd81615250565b9350505b80612bcb81615250565b915050612b36565b5091038152919050565b612be56134af565b60408051808201909152600281527f3136000000000000000000000000000000000000000000000000000000000000602082015260ff8316612c54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b5060ff821660009081526037602090815260409182902083518154838601519486015160608701516001600160a01b03166601000000000000027fffffffffffff0000000000000000000000000000000000000000ffffffffffff61ffff92831664010000000002167fffffffffffff00000000000000000000000000000000000000000000ffffffff97831662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009094169290941691909117919091179490941617929092178255608083015180518493926111d3926001850192910190613db0565b6001600160a01b03868116600090815260346020908152604091829020600401548251808401909352600283527f3131000000000000000000000000000000000000000000000000000000000000918301919091529091163314612dcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b5073__$f789c39aae91ace14fd54a1fb26061942e$__638a5dadd160346036603760356040518061012001604052808d6001600160a01b031681526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a8152602001898152602001888152602001603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015612eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ed79190614ac7565b6001600160a01b0390811682528d166000908152603860209081526040918290205460ff16920191909152517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152612f3d95949392919060040161526b565b60006040518083038186803b158015612f5557600080fd5b505af4158015612f69573d6000803e3d6000fd5b50505050505050505050565b600080600080612fca60368661ffff81811660009081526020939093526040909220546001600160a01b0316926fffffffffffffffffffffffffffffffff601083901c169260ff609084901c169260981c1690565b93509350935093506111d38484848433611f68565b6000612fe9613753565b6001600160a01b0384166000818152603460205260409081902060395491517f8e743248000000000000000000000000000000000000000000000000000000008152600481019190915260248101929092526044820185905260648201849052608482015273__$b185253dcc5c843f690a8b39f0a499b4eb$__90638e7432489060a4016112ac565b600080600080613083603686613673565b9250925092506115008383836111da565b61309c6134af565b6040517f1e3b4145000000000000000000000000000000000000000000000000000000008152603460048201526001600160a01b038216602482015273__$2419f7430a7f293818c4ce661e75cb3bda$__90631e3b4145906044016111a7565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810185905260ff8416608482015260a4810183905260c481018290526000906001600160a01b038a169063d505accf9060e401600060405180830381600087803b15801561318457600080fd5b505af1158015613198573d6000803e3d6000fd5b5050505060006040518060a001604052808b6001600160a01b031681526020018a81526020018960028111156131d0576131d0614bb1565b60028111156131e1576131e1614bb1565b81526001600160a01b0389166020808301829052600060409384018190529182526035905281902090517f40e95de600000000000000000000000000000000000000000000000000000000815291925073__$8dc5844a8fbaebe55a1de06b448991a058$__916340e95de691613261916034916036918790600401614c1b565b602060405180830381865af415801561327e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132a29190614c81565b9a9950505050505050505050565b6132b86134af565b60408051808201909152600281527f373700000000000000000000000000000000000000000000000000000000000060208201526001600160a01b03831661332d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b506001600160a01b0382166000908152603460205260409020600301547501000000000000000000000000000000000000000000900461ffff161515806133a957506000805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b6040518060400160405280600281526020017f383200000000000000000000000000000000000000000000000000000000000081525090613417576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b506001600160a01b0382166000908152603460205260409020813581558190611e5e565b61ffff8181166000908152603660205260409020546001600160a01b031690601083901c6fffffffffffffffffffffffffffffffff1690609084901c16611e5e838333846117c6565b600080600080600061349860368888613b52565b94509450945094509450612aab8585858585610a9e565b336001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663631adfca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613517573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061353b9190614ac7565b6001600160a01b0316146040518060400160405280600281526020017f3130000000000000000000000000000000000000000000000000000000000000815250906135b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b50565b61ffff81166000908152602083905260409020546001600160a01b0316601082901c60ff165b9250929050565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613629575050600201546fffffffffffffffffffffffffffffffff1690565b60028301546112f0906fffffffffffffffffffffffffffffffff80821691613667917001000000000000000000000000000000009091041684613bde565b90613beb565b50919050565b6000808061ffff84166fffffffffffffffffffffffffffffffff601086901c81169060ff609088901c16908214156136ab5760001991505b61ffff9092166000908152602088905260409020546001600160a01b03169450925090509250925092565b60008080808060a086901c63ffffffff1660c087901c60ff1682808061373b8c8c61ffff8181166000908152602084905260409020546001600160a01b031690601083901c6fffffffffffffffffffffffffffffffff1690609084901c169250925092565b919e909d50909b509499509297509295505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156137b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906137d59190614ac7565b6040517f726600ce0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03919091169063726600ce90602401602060405180830381865afa158015613834573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138589190614de9565b6040518060400160405280600181526020017f3600000000000000000000000000000000000000000000000000000000000000815250906135b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b60008061ffff83166fffffffffffffffffffffffffffffffff601085901c8116908114156138f357506000195b61ffff9190911660009081526020959095526040909420546001600160a01b03169492505050565b6000806000806000806000806000806139348c8c613673565b919e909d50909b609881901c63ffffffff169b5060b81c60ff169950975050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156139b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139dd9190614ac7565b6040517f7be53ca10000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039190911690637be53ca190602401602060405180830381865afa158015613a3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a609190614de9565b6040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250906135b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9190614b9e565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613b14575050600101546fffffffffffffffffffffffffffffffff1690565b60018301546112f0906fffffffffffffffffffffffffffffffff80821691613667917001000000000000000000000000000000009091041684613c42565b60008080808061ffff87811690601089901c16602089901c6001600160a01b03166fffffffffffffffffffffffffffffffff8981169060808b901c60011690821415613b9e5760001991505b61ffff948516600090815260209d909d526040808e2054949095168d5293909b20546001600160a01b039283169c92169a90995097509095509350505050565b60006112f0838342613c87565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517613c2057600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600080613c5664ffffffffff84164261520a565b613c609085615320565b6301e1338090049050613c7f816b033b2e3c9fd0803ce800000061536e565b949350505050565b600080613c9b64ffffffffff85168461520a565b905080613cb7576b033b2e3c9fd0803ce80000009150506112f0565b60001981016000808060028511613ccf576000613cd4565b600285035b925066038882915c4000613ce88a80613beb565b81613cf557613cf561533f565b0491506301e13380613d07838b613beb565b81613d1457613d1461533f565b049050600082613d248688615320565b613d2e9190615320565b60029004905060008285613d42888a615320565b613d4c9190615320565b613d569190615320565b60069004905080826301e13380613d6d8a8f615320565b613d779190615386565b613d8d906b033b2e3c9fd0803ce800000061536e565b613d97919061536e565b613da1919061536e565b9b9a5050505050505050505050565b828054613dbc90614d18565b90600052602060002090601f016020900481019282613dde5760008555613e24565b82601f10613df757805160ff1916838001178555613e24565b82800160010185558215613e24579182015b82811115613e24578251825591602001919060010190613e09565b50613e30929150613e34565b5090565b5b80821115613e305760008155600101613e35565b6001600160a01b03811681146135b357600080fd5b8035613e6981613e49565b919050565b80151581146135b357600080fd5b600080600080600060a08688031215613e9457600080fd5b8535613e9f81613e49565b94506020860135613eaf81613e49565b93506040860135613ebf81613e49565b9250606086013591506080860135613ed681613e6e565b809150509295509295909350565b803561ffff81168114613e6957600080fd5b803560ff81168114613e6957600080fd5b600080600080600080600080610100898b031215613f2457600080fd5b8835613f2f81613e49565b9750602089013596506040890135613f4681613e49565b9550613f5460608a01613ee4565b945060808901359350613f6960a08a01613ef6565b925060c0890135915060e089013590509295985092959890939650565b60008060408385031215613f9957600080fd5b8235613fa481613e49565b91506020830135613fb481613e49565b809150509250929050565b600060208284031215613fd157600080fd5b5035919050565b600060208284031215613fea57600080fd5b6112f082613ef6565b60008060006060848603121561400857600080fd5b833561401381613e49565b95602085013595506040909401359392505050565b60006020828403121561403a57600080fd5b81356112f081613e49565b81515181526101e08101602083015161407260208401826fffffffffffffffffffffffffffffffff169052565b50604083015161409660408401826fffffffffffffffffffffffffffffffff169052565b5060608301516140ba60608401826fffffffffffffffffffffffffffffffff169052565b5060808301516140de60808401826fffffffffffffffffffffffffffffffff169052565b5060a083015161410260a08401826fffffffffffffffffffffffffffffffff169052565b5060c083015161411b60c084018264ffffffffff169052565b5060e083015161413160e084018261ffff169052565b50610100838101516001600160a01b039081169184019190915261012080850151821690840152610140808501518216908401526101608085015190911690830152610180808401516fffffffffffffffffffffffffffffffff908116918401919091526101a0808501518216908401526101c09384015116929091019190915290565b60008083601f8401126141c757600080fd5b50813567ffffffffffffffff8111156141df57600080fd5b6020830191508360208285010111156135dc57600080fd5b60008060008060008060a0878903121561421057600080fd5b863561421b81613e49565b9550602087013561422b81613e49565b945060408701359350606087013567ffffffffffffffff81111561424e57600080fd5b61425a89828a016141b5565b909450925061426d905060808801613ee4565b90509295509295509295565b60006020828403121561428b57600080fd5b6112f082613ee4565b600080600080608085870312156142aa57600080fd5b84356142b581613e49565b9350602085013592506040850135915060608501356142d381613e49565b939692955090935050565b600080604083850312156142f157600080fd5b82356142fc81613e49565b91506020830135613fb481613e6e565b6000806000806080858703121561432257600080fd5b843561432d81613e49565b935060208501359250604085013561434481613e49565b915061435260608601613ee4565b905092959194509250565b60008060006060848603121561437257600080fd5b505081359360208301359350604090920135919050565b60008060006060848603121561439e57600080fd5b83356143a981613e49565b92506020840135915060408401356143c081613e49565b809150509250925092565b6000815180845260005b818110156143f1576020818501810151868301820152016143d5565b81811115614403576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061ffff808451166020840152806020850151166040840152806040850151166060840152506001600160a01b036060840151166080830152608083015160a080840152613c7f60c08401826143cb565b600080600080600060a086880312156144a457600080fd5b85356144af81613e49565b945060208601356144bf81613e49565b935060408601356144cf81613e49565b925060608601356144df81613e49565b91506080860135613ed681613e49565b6000806040838503121561450257600080fd5b823561450d81613e49565b946020939093013593505050565b60008083601f84011261452d57600080fd5b50813567ffffffffffffffff81111561454557600080fd5b6020830191508360208260051b85010111156135dc57600080fd5b6000806020838503121561457357600080fd5b823567ffffffffffffffff81111561458a57600080fd5b6145968582860161451b565b90969095509350505050565b600080600080600060a086880312156145ba57600080fd5b85356145c581613e49565b945060208601359350604086013592506144df60608701613ee4565b600080600080600080600080600080600060e08c8e03121561460257600080fd5b61460b8c613e5e565b9a5067ffffffffffffffff8060208e0135111561462757600080fd5b6146378e60208f01358f0161451b565b909b50995060408d013581101561464d57600080fd5b61465d8e60408f01358f0161451b565b909950975060608d013581101561467357600080fd5b6146838e60608f01358f0161451b565b909750955061469460808e01613e5e565b94508060a08e013511156146a757600080fd5b506146b88d60a08e01358e016141b5565b90935091506146c960c08d01613ee4565b90509295989b509295989b9093969950565b80356fffffffffffffffffffffffffffffffff81168114613e6957600080fd5b6000806040838503121561470e57600080fd5b614717836146db565b9150614725602084016146db565b90509250929050565b60008060006060848603121561474357600080fd5b833561474e81613e49565b9250602084013561475e81613e49565b929592945050506040919091013590565b6020808252825182820181905260009190848201906040850190845b818110156147b05783516001600160a01b03168352928401929184019160010161478b565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561480e5761480e6147bc565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561485b5761485b6147bc565b604052919050565b6000806040838503121561487657600080fd5b61487f83613ef6565b915060208084013567ffffffffffffffff8082111561489d57600080fd5b9085019060a082880312156148b157600080fd5b6148b96147eb565b6148c283613ee4565b81526148cf848401613ee4565b848201526148df60408401613ee4565b604082015260608301356148f281613e49565b606082015260808301358281111561490957600080fd5b80840193505087601f84011261491e57600080fd5b823582811115614930576149306147bc565b614960857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601614814565b9250808352888582860101111561497657600080fd5b8085850186850137600085828501015250816080820152809450505050509250929050565b60008060008060008060c087890312156149b457600080fd5b86356149bf81613e49565b955060208701356149cf81613e49565b945060408701356149df81613e49565b959894975094956060810135955060808101359460a0909101359350915050565b600080600080600080600080610100898b031215614a1d57600080fd5b8835614a2881613e49565b975060208901359650604089013595506060890135613f5481613e49565b6000808284036040811215614a5a57600080fd5b8335614a6581613e49565b925060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215614a9757600080fd5b506020830190509250929050565b60008060408385031215614ab857600080fd5b50508035926020909101359150565b600060208284031215614ad957600080fd5b81516112f081613e49565b60006101a08201905086825285602083015284604083015283606083015282516080830152602083015160a083015260408301516001600160a01b0380821660c08501528060608601511660e085015250506080830151610100614b52818501836001600160a01b03169052565b60a0850151151561012085015260c08501516001600160a01b0390811661014086015260e086015160ff166101608601529085015190811661018085015290505b509695505050505050565b6020815260006112f060208301846143cb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614c17577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508582528460208301528360408301526001600160a01b03808451166060840152602084015160808401526040840151614c6060a0850182614be0565b5060608401511660c0830152608090920151151560e0909101529392505050565b600060208284031215614c9357600080fd5b5051919050565b8281526040602082015260006001600160a01b038084511660408401528060208501511660608401525060408301516080830152606083015160e060a0840152614ce86101208401826143cb565b905061ffff60808501511660c084015260a084015160e084015260c0840151610100840152809150509392505050565b600181811c90821680614d2c57607f821691505b6020821081141561366d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000610120820190508482528360208301526001600160a01b038084511660408401528060208501511660608401528060408501511660808401528060608501511660a08401528060808501511660c08401525060a0830151614dcf60e084018261ffff169052565b5060c083015161ffff811661010084015250949350505050565b600060208284031215614dfb57600080fd5b81516112f081613e6e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061ffff80831681811415614e4d57614e4d614e06565b6001019392505050565b848152602081018490526001600160a01b0383166040820152608081016115006060830184614be0565b83815260406020808301829052908201839052600090849060608401835b86811015614ecd578335614eb281613e49565b6001600160a01b031682529282019290820190600101614e9f565b50979650505050505050565b85815260208101859052604081018490526060810183905281516001600160a01b03166080820152610200810160208301516001600160a01b03811660a08401525060408301516001600160a01b03811660c084015250606083015160e08301526080830151610100614f4e81850183614be0565b60a08501519150610120614f678186018461ffff169052565b60c08601519250610140614f7e8187018515159052565b60e08701516101608781019190915292870151610180870152908601516001600160a01b039081166101a08701529086015160ff166101c0860152908501519081166101e08501529050614b93565b600081518084526020808501945080840160005b838110156150065781516001600160a01b031687529582019590820190600101614fe1565b509495945050505050565b600081518084526020808501945080840160005b8381101561500657815187529582019590820190600101615025565b85815284602082015283604082015282606082015260a0608082015261507360a0820183516001600160a01b03169052565b600060208301516101c08060c0850152615091610260850183614fcd565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60808685030160e08701526150cd8483615011565b9350606087015191506101008187860301818801526150ec8584615011565b94506080880151925061012061510c818901856001600160a01b03169052565b60a089015193506101408389880301818a015261512987866143cb565b965060c08a015194506101609350615146848a018661ffff169052565b60e08a0151945061018085818b0152838b015195506101a0935085848b0152828b0151878b0152818b01516101e08b0152848b015196506151936102008b01886001600160a01b03169052565b8a015160ff81166102208b015295506151aa915050565b8701518015156102408801529250614ecd915050565b60008060008060008060c087890312156151d957600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b60008282101561521c5761521c614e06565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060001982141561526457615264614e06565b5060010190565b60006101a0820190508682528560208301528460408301528360608301526001600160a01b038084511660808401528060208501511660a08401525060408301516152c160c08401826001600160a01b03169052565b50606083015160e08301526080830151610100818185015260a085015161012085015260c085015161014085015260e0850151915061530c6101608501836001600160a01b03169052565b84015160ff81166101808501529050614b93565b600081600019048311821515161561533a5761533a614e06565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000821982111561538157615381614e06565b500190565b6000826153bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220019b55ffabc525325e97653bee8fe08d7af4e61acad2a9ce09e391e3ace6bab964736f6c634300080a0033",
    "linkReferences": {
      "contracts/mocks/aave/protocol/libraries/logic/BorrowLogic.sol": {
        "BorrowLogic": [
          {
            "length": 20,
            "start": 4824
          },
          {
            "length": 20,
            "start": 5639
          },
          {
            "length": 20,
            "start": 8129
          },
          {
            "length": 20,
            "start": 8292
          },
          {
            "length": 20,
            "start": 10988
          },
          {
            "length": 20,
            "start": 13101
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/BridgeLogic.sol": {
        "BridgeLogic": [
          {
            "length": 20,
            "start": 7329
          },
          {
            "length": 20,
            "start": 12618
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/EModeLogic.sol": {
        "EModeLogic": [
          {
            "length": 20,
            "start": 4408
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/FlashLoanLogic.sol": {
        "FlashLoanLogic": [
          {
            "length": 20,
            "start": 5447
          },
          {
            "length": 20,
            "start": 9704
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/LiquidationLogic.sol": {
        "LiquidationLogic": [
          {
            "length": 20,
            "start": 2970
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/PoolLogic.sol": {
        "PoolLogic": [
          {
            "length": 20,
            "start": 6659
          },
          {
            "length": 20,
            "start": 7674
          },
          {
            "length": 20,
            "start": 8245
          },
          {
            "length": 20,
            "start": 10000
          },
          {
            "length": 20,
            "start": 11100
          },
          {
            "length": 20,
            "start": 12756
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/SupplyLogic.sol": {
        "SupplyLogic": [
          {
            "length": 20,
            "start": 3844
          },
          {
            "length": 20,
            "start": 5921
          },
          {
            "length": 20,
            "start": 6498
          },
          {
            "length": 20,
            "start": 6742
          },
          {
            "length": 20,
            "start": 11978
          }
        ]
      }
    },
    "deployedLinkReferences": {
      "contracts/mocks/aave/protocol/libraries/logic/BorrowLogic.sol": {
        "BorrowLogic": [
          {
            "length": 20,
            "start": 4574
          },
          {
            "length": 20,
            "start": 5389
          },
          {
            "length": 20,
            "start": 7879
          },
          {
            "length": 20,
            "start": 8042
          },
          {
            "length": 20,
            "start": 10738
          },
          {
            "length": 20,
            "start": 12851
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/BridgeLogic.sol": {
        "BridgeLogic": [
          {
            "length": 20,
            "start": 7079
          },
          {
            "length": 20,
            "start": 12368
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/EModeLogic.sol": {
        "EModeLogic": [
          {
            "length": 20,
            "start": 4158
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/FlashLoanLogic.sol": {
        "FlashLoanLogic": [
          {
            "length": 20,
            "start": 5197
          },
          {
            "length": 20,
            "start": 9454
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/LiquidationLogic.sol": {
        "LiquidationLogic": [
          {
            "length": 20,
            "start": 2720
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/PoolLogic.sol": {
        "PoolLogic": [
          {
            "length": 20,
            "start": 6409
          },
          {
            "length": 20,
            "start": 7424
          },
          {
            "length": 20,
            "start": 7995
          },
          {
            "length": 20,
            "start": 9750
          },
          {
            "length": 20,
            "start": 10850
          },
          {
            "length": 20,
            "start": 12506
          }
        ]
      },
      "contracts/mocks/aave/protocol/libraries/logic/SupplyLogic.sol": {
        "SupplyLogic": [
          {
            "length": 20,
            "start": 3594
          },
          {
            "length": 20,
            "start": 5671
          },
          {
            "length": 20,
            "start": 6248
          },
          {
            "length": 20,
            "start": 6492
          },
          {
            "length": 20,
            "start": 11728
          }
        ]
      }
    }
  };
  export default json;
  