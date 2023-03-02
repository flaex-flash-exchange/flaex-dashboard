const eventsDefinition = [
  "event OrderOpened(address indexed trader, address baseToken, address quoteToken, uint256 baseMarginAmount, uint256 marginLevel, uint256 baseTokenAmount, uint256 quoteTokenAmount)",
  "event OrderClosed(address indexed trader, address baseToken, address quoteToken, uint256 baseTokenAmount, uint256 quoteTokenAmount)",
  "event repayPartialDebt(address indexed trader, address baseToken, address quoteToken, uint256 quoteTokenAmount)",
  "event liquidation(address indexed liquidatedUser, address baseToken, address quoteToken, uint256 baseTokenLiquidated, uint256 quoteTokenRepaid, uint256 liquidationIncentives)",

  "event AssetProvided(address indexed investor, address acceptedAsset, uint256 amount)",
  "event yieldClaimed(address indexed claimer, address[] yieldTokenAddress, uint256[] amount)",
  "event assetWithdrawn(address indexed withdrawer, address acceptedAsset, uint256 amount)",

  "event Transfer(address indexed from, address indexed to, uint256 amount)",
  "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
];

export default eventsDefinition;
