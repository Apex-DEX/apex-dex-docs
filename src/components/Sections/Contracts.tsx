import { Copy, ExternalLink } from 'lucide-react'

export function Contracts() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Smart Contracts</h1>
      <p className="text-gray-400 mb-8 text-lg">
        All smart contracts for Apex DEX are deployed on the <strong>Sepolia Testnet</strong>. You can interact with them directly via Etherscan or your own Web3 scripts.
      </p>

      <div className="bg-[#131A2A] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1B2236] text-gray-400 border-b border-white/5">
            <tr>
              <th className="px-6 py-4 font-medium text-white">Contract</th>
              <th className="px-6 py-4 font-medium text-white">Address</th>
              <th className="px-6 py-4 font-medium text-white">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-gray-300">
            <tr className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 font-bold text-white">Apex Factory</td>
              <td className="px-6 py-4 font-mono text-purple-400 flex items-center gap-2">
                0xB27...1a3f
                <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
              </td>
              <td className="px-6 py-4">Creates new liquidity pools.</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 font-bold text-white">Apex Router</td>
              <td className="px-6 py-4 font-mono text-purple-400 flex items-center gap-2">
                0x4A1...c890
                <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
              </td>
              <td className="px-6 py-4">Handles swap routing and liquidity management.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Test Tokens</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {['USDC', 'WETH', 'LINK', 'UNI'].map(token => (
          <div key={token} className="bg-[#131A2A] border border-white/5 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs">{token[0]}</div>
              <span className="font-bold text-white">Test {token}</span>
            </div>
            <button className="text-xs bg-[#1B2236] hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 text-gray-300">
              View <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
