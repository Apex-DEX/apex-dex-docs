import { Copy, ExternalLink, ShieldCheck, Zap, Cpu, Code2 } from 'lucide-react'

export function Contracts() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getTokenIcon = (symbol: string) => {
    const icons: Record<string, string> = {
      USDT: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      USDC: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      DAI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      WBTC: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      LINK: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
      WETH: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27ead9083C756Cc2/logo.png',
      UNI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
      AAVE: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2EEaE9/logo.png',
      MKR: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
      ARB: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB50721BCf8d4471391900f8d9F7f5597945d39C0/logo.png', // Arbitrum logo
      OP: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4200000000000000000000000000000000000042/logo.png', // Optimism logo
      SHIB: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x95aD61b0a150d79219dcf64E1E6Cc01f0B64C4cE/logo.png',
    };
    return icons[symbol] || '';
  };

  const coreContracts = [
    {
      name: 'Apex Factory',
      address: '0xC2E54EF993bD64c1e8c46d4d1695bEeA012d4DFD',
      role: 'Registry & Pair Creator',
      description: 'The Factory contract is the central registry of the Apex Protocol. It is responsible for creating and indexing individual liquidity pool contracts (Pairs).',
      logic: 'Implements the IApexFactory interface, compatible with IUniswapV2Factory. This ensures that any tool, aggregator, or dashboard designed for Uniswap V2 can automatically discover and index our pools using the standard getPair and allPairs methods.',
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
      logic: 'Implements the IApexRouter02 interface, inheriting from IUniswapV2Router02. This compatibility allows developers to use standard SDKs (like Uniswap SDK) to generate trade paths and call data. It handles safe token transfers and provides the essential "AmountOut" calculations.',
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
      logic: 'Implements the IApexPair interface, compliant with IUniswapV2Pair and ERC20. It manages the Constant Product (x * y = k) invariant and issues LP tokens to providers. Its compatibility ensures that external price oracles and analytics tools can read reserves directly.',
      methods: [
        { name: 'swap(amount0Out, amount1Out, ...)', desc: 'The core function that moves tokens in/out of the pool based on the Constant Product formula.' },
        { name: 'mint(to)', desc: 'Low-level function to mint LP tokens when liquidity is added.' },
        { name: 'sync()', desc: 'Forces reserves to match balances, ensuring price accuracy.' }
      ]
    }
  ];

  const testTokens = [
    { symbol: 'USDT', address: '0x7169D38820dfd117C3FA1f22a697dBA58d90BA06' },
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
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Smart Contracts</h1>
      <p className="text-gray-400 mb-12 text-lg leading-relaxed">
        Apex Protocol is built on a set of audited, modular smart contracts on the <strong>Sepolia Testnet</strong>. Our architecture ensures deterministic pool creation and secure trade execution.
      </p>

      {/* Core Contracts Section */}
      <div className="space-y-12 mb-20">
        {coreContracts.map((contract) => (
          <div key={contract.address} className="bg-[#131A2A] border border-white/5 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-8 border-b border-white/5 bg-linear-to-r from-[#1B2236] to-transparent flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">{contract.name}</h3>
                </div>
                <p className="text-sm font-medium text-purple-400/80 uppercase tracking-widest">{contract.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-[#0d111c] px-4 py-2 rounded-xl border border-white/10">
                  <code className="text-xs font-mono text-gray-400">{contract.address}</code>
                  <button 
                    onClick={() => copyToClipboard(contract.address)}
                    className="p-1.5 hover:bg-white/5 rounded-lg transition-all text-gray-500 hover:text-white"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <a 
                  href={`https://sepolia.etherscan.io/address/${contract.address}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-tighter flex items-center justify-center gap-1 transition-all"
                >
                  View on Etherscan <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
            
            <div className="p-8 grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Functional Description</h4>
                <p className="text-gray-400 leading-relaxed mb-6">{contract.description}</p>
                <div className="p-5 bg-purple-500/5 rounded-2xl border border-purple-500/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Uniswap V2 Interface</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {contract.logic}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Key Methods</h4>
                <div className="space-y-4">
                  {contract.methods.map(method => (
                    <div key={method.name} className="group">
                      <p className="text-sm font-mono text-pink-400 mb-1 group-hover:text-pink-300 transition-all">{method.name}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{method.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Test Tokens Section */}
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <Zap className="w-8 h-8 text-amber-400" /> Test Ecosystem Assets
      </h2>
      <p className="text-gray-400 mb-10 leading-relaxed max-w-3xl">
        We have deployed a suite of popular test tokens to facilitate easy liquidity provisioning and robust testing across various market conditions. These assets can be minted via the <a href="https://sepolia.etherscan.io/address/0x7169D38820dfd117C3FA1f22a697dBA58d90BA06#writeContract" target="_blank" rel="noreferrer" className="text-white underline decoration-amber-500/30">USDT Minting Guide</a>.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {testTokens.map(token => (
          <div key={token.address} className="bg-[#131A2A] border border-white/5 p-4 rounded-2xl hover:border-amber-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/30 transition-all">
                  {getTokenIcon(token.symbol) ? (
                    <img src={getTokenIcon(token.symbol)} alt={token.symbol} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-bold text-xs text-white">{token.symbol[0]}</span>
                  )}
                </div>
                <span className="font-bold text-white">{token.symbol}</span>
              </div>
              <a 
                href={`https://sepolia.etherscan.io/address/${token.address}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all text-gray-500 hover:text-white"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex items-center gap-2 bg-[#0d111c] px-3 py-1.5 rounded-xl border border-white/5">
              <code className="text-[10px] font-mono text-gray-500 truncate">{token.address}</code>
              <button 
                onClick={() => copyToClipboard(token.address)}
                className="flex-shrink-0 text-gray-600 hover:text-white"
              >
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Script Section */}
      <div className="bg-[#131A2A] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-all duration-1000"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <Code2 className="w-10 h-10 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Automated Ecosystem Bootstrapping</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              All pairs and their initial liquidity were seeded using our custom Foundry script. This script automates the deployment of pairs, approval of tokens, and addition of liquidity with pre-defined anchor prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Apex-DEX/apex-dex-contracts/blob/main/script/BootstrapAllPairsAndLiquidity.s.sol" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl text-sm font-bold border border-blue-500/20 transition-all flex items-center gap-2"
              >
                View Bootstrap Script <ExternalLink className="w-4 h-4" />
              </a>
              <div className="px-5 py-2.5 bg-white/5 rounded-xl text-xs font-mono text-gray-500 border border-white/5 flex items-center">
                path: script/BootstrapAllPairsAndLiquidity.s.sol
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
