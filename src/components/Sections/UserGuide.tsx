import { Rocket, Droplet, Wallet, ExternalLink, ArrowRight, Zap } from 'lucide-react'

export function UserGuide() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
        How to Trade on Apex
      </h1>
      <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl">
        New to DeFi or Apex DEX? Follow this guide to set up your wallet and start trading on the Sepolia Testnet.
      </p>

      {/* Step 1: Wallet */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">1. Connect Your Wallet</h2>
        </div>
        <div className="bg-[#131A2A] border border-white/5 rounded-2xl p-6">
          <p className="text-gray-400 mb-4">
            Apex DEX currently supports MetaMask and other EIP-1193 compatible wallets. Switch your network to <strong>Sepolia Testnet</strong> in your wallet settings.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-gray-300">Network: Sepolia</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-gray-300">Chain ID: 11155111</span>
          </div>
        </div>
      </section>

      {/* Step 2: Faucets */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Droplet className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">2. Get Sepolia ETH</h2>
        </div>
        <p className="text-gray-400 mb-6 leading-relaxed">
          You need Sepolia ETH to pay for gas fees. You can get free test ETH from the following faucets:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a href="https://sepoliafaucet.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#131A2A] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
            <span className="font-semibold text-white">Alchemy Faucet</span>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
          </a>
          <a href="https://www.infura.io/faucet/sepolia" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#131A2A] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
            <span className="font-semibold text-white">Infura Faucet</span>
          </a>
        </div>
      </section>

      {/* Step 3: Test USDT */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">3. Mint Test USDT</h2>
        </div>
        <p className="text-gray-400 mb-6 leading-relaxed">
          To trade on Apex, you can mint test USDT directly from the contract.
        </p>
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
          <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
            Contract: 0x7169d38820dfd117c3fa1f22a697dba58d90ba06
          </h4>
          <ol className="space-y-4 text-gray-300">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">1</span>
              <span>Go to the <a href="https://sepolia.etherscan.io/address/0x7169d38820dfd117c3fa1f22a697dba58d90ba06#writeContract" target="_blank" rel="noreferrer" className="text-white underline decoration-emerald-500/50 hover:decoration-emerald-500">Etherscan Write Contract</a> tab.</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">2</span>
              <span>Connect your Web3 wallet (Connect to Web3).</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">3</span>
              <span>Find the <code>mint</code> function. Enter your wallet address and the amount (e.g., 1000000000 for 1000 USDT).</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">4</span>
              <span>Click "Write" and confirm the transaction.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-8 rounded-3xl bg-linear-to-r from-purple-600 to-indigo-600 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to trade?</h3>
          <p className="text-purple-100">Now that you have assets, head over to the Swap page.</p>
        </div>
        <a 
          href="https://apex-dex.onrender.com/swap" 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:bg-purple-50 transition-all flex items-center gap-2"
        >
          Go to Swap <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
