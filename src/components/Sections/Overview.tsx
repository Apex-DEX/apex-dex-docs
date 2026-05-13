import { Layers, Code2 } from 'lucide-react'

interface OverviewProps {
  setSection: (id: string) => void
}

export function Overview({ setSection }: OverviewProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
        Welcome to Apex DEX
      </h1>
      <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl">
        Apex DEX is a demonstration decentralized exchange built on the Sepolia Testnet. It showcases modern Web3 architecture, utilizing Uniswap V2 contracts, a custom backend indexer, and a highly responsive FSD frontend.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-16">
        <button 
          onClick={() => setSection('architecture')} 
          className="text-left cursor-pointer bg-[#131A2A] hover:bg-[#1B2236] border border-white/5 hover:border-purple-500/30 rounded-[20px] p-6 transition-all group w-full"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
            <Layers className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Architecture</h3>
          <p className="text-sm text-gray-400">Explore how the Frontend, Indexer, and Smart Contracts interact.</p>
        </button>

        <button 
          onClick={() => setSection('contracts')} 
          className="text-left cursor-pointer bg-[#131A2A] hover:bg-[#1B2236] border border-white/5 hover:border-pink-500/30 rounded-[20px] p-6 transition-all group w-full"
        >
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6">
            <Code2 className="w-6 h-6 text-pink-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Smart Contracts</h3>
          <p className="text-sm text-gray-400">View deployed addresses for Factory, Router, and Test Tokens.</p>
        </button>
      </div>
    </div>
  )
}
