export const APEX_CONFIG = {
  contracts: [
    {
      name: 'Apex Factory',
      address: '0xC2E54EF993bD64c1e8c46d4d1695bEeA012d4DFD',
      role: 'Registry & Pair Creator',
      description: 'The Factory contract is the central registry of the Apex Protocol. It is responsible for creating and indexing individual liquidity pool contracts (Pairs).',
      methods: [
        { name: 'createPair(tokenA, tokenB)', desc: 'Deploys a new Pair contract for a token duo using CREATE2 for deterministic addressing.' },
        { name: 'getPair(tokenA, tokenB)', desc: 'Returns the address of the Pair contract for the specified tokens.' },
        { name: 'allPairs(index)', desc: 'Allows iteration over all pools created by the protocol.' }
      ]
    },
    {
      name: 'Apex Router',
      address: '0xf1026084F75375070e71442387896CA1314bC6e0',
      role: 'Trading Interface',
      description: 'The Router is the primary entry point for users. It simplifies interactions by handling complex logic like multi-hop swaps and liquidity calculations.',
      methods: [
        { name: 'addLiquidity(...)', desc: 'Adds liquidity to a pool, handling token transfers and LP token minting.' },
        { name: 'swapExactTokensForTokens(...)', desc: 'Executes a swap while ensuring the output meet the users slippage requirements.' },
        { name: 'removeLiquidity(...)', desc: 'Burns LP tokens and returns the underlying assets to the user.' }
      ]
    },
    {
      name: 'USDT/USDC Pair',
      address: '0xa07f21c1e27989ae329adf4e41498e65258955da',
      role: 'Liquidity Pool (AMM)',
      description: 'The Pair contract implements the Automated Market Maker (AMM) logic. Every pair of tokens (e.g., USDT/USDC) has its own unique Pair contract deployed by the Factory.',
      methods: [
        { name: 'swap(amount0Out, amount1Out, ...)', desc: 'The core function that moves tokens in/out of the pool based on the Constant Product formula.' },
        { name: 'mint(to)', desc: 'Low-level function to mint LP tokens when liquidity is added.' },
        { name: 'sync()', desc: 'Forces reserves to match balances, ensuring price accuracy.' }
      ]
    }
  ],
  tokens: [
    { symbol: 'USDT', address: '0x7169D38820dfd117C3FA1f22a697DBA58d90BA06' },
    { symbol: 'USDC', address: '0xbD8Fd2f19412D8a5C457610302cA4407275eeeba' },
    { symbol: 'DAI', address: '0x0Fb79AA07c51b79fE27e92a590dBFb18F938A595' },
    { symbol: 'WBTC', address: '0x4ddCaA27435CB1E8f0B5b47dD6884f6Daf94A7e4' },
    { symbol: 'LINK', address: '0x2cEbD8A8b4D177F8c3c272aC692ac432A367E56C' },
    { symbol: 'WETH', address: '0xDe14B6a54B3F586D67855572f22771e14aa91C30' },
    { symbol: 'UNI', address: '0x7A9569Df60618e2dE406d09eeD65365157423e15' },
    { symbol: 'AAVE', address: '0x9b5c2663cAcea468aB2B1Af1065F6DaE16C795a7' },
    { symbol: 'MKR', address: '0xF78507dc1598438D9158E8F50F2a61e3Fdd7e6c3' },
    { symbol: 'ARB', address: '0x518490EA062b188397BfC4861179236b51d45EA2' },
    { symbol: 'OP', address: '0xB6b09726a791A9CC873CD8261119dcBFEB59aDd1' },
    { symbol: 'SHIB', address: '0xDeC2b6A8EF19bBeCd2736F3de49bC46426200eB5' },
  ],
  links: {
    github: {
      indexer: 'https://github.com/Apex-DEX/apex-dex-indexer',
      backend: 'https://github.com/Apex-DEX/apex-dex-backend',
      frontend: 'https://github.com/Apex-DEX/apex-dex-interface',
      contracts: 'https://github.com/Apex-DEX/apex-dex-contracts',
    },
    explorer: 'https://sepolia.etherscan.io',
  }
};
