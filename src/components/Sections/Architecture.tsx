import { Globe, Server, ArrowDown, ArrowRight, Droplet, Database } from 'lucide-react'

export function Architecture() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">System Architecture</h1>
      <p className="text-gray-400 mb-12 text-lg">
        Apex DEX relies on a three-tier architecture to provide a seamless, real-time trading experience without compromising decentralization.
      </p>

      <div className="bg-[#131A2A] border border-white/10 rounded-2xl p-8 mb-12 overflow-x-auto">
        <div className="min-w-[700px] flex flex-col items-center gap-6">
          <div className="flex gap-16 w-full justify-center">
            <div className="w-64 bg-[#1B2236] border border-purple-500/30 rounded-xl p-5 shadow-lg shadow-purple-900/20 text-center relative">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">Frontend Client</h3>
              <p className="text-xs text-gray-400">React Router v7, Vite, FSD, TailwindCSS</p>
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex flex-col items-center text-purple-400">
                <div className="w-px h-6 bg-purple-500/50"></div>
                <ArrowDown className="w-4 h-4 -mt-1" />
              </div>
              <div className="absolute top-1/2 -right-16 -translate-y-1/2 flex items-center text-blue-400 w-16">
                <div className="flex-1 h-px bg-blue-500/50"></div>
                <ArrowRight className="w-4 h-4 -ml-1" />
              </div>
            </div>

            <div className="w-64 bg-[#1B2236] border border-blue-500/30 rounded-xl p-5 shadow-lg shadow-blue-900/20 text-center relative">
              <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">Backend API</h3>
              <p className="text-xs text-gray-400">Nest.js, REST API, Chart Data, Token List</p>
            </div>
          </div>

          <div className="h-6"></div>

          <div className="flex gap-16 w-full justify-center">
            <div className="w-64 border border-white/5 bg-white/5 rounded-xl p-3 text-center">
              <p className="text-xs font-mono text-gray-400">Wagmi / Viem (RPC Calls & TXs)</p>
            </div>

            <div className="w-64 border border-white/5 bg-white/5 rounded-xl p-3 text-center relative">
              <p className="text-xs font-mono text-gray-400">TypeORM Indexer Service</p>
              <div className="absolute left-1/2 -top-6 -translate-x-1/2 flex flex-col items-center text-blue-400">
                <div className="w-px h-6 bg-blue-500/50"></div>
                <ArrowDown className="w-4 h-4 -mt-1 rotate-180" />
              </div>
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex flex-col items-center text-amber-400">
                <div className="w-px h-6 bg-amber-500/50"></div>
                <ArrowDown className="w-4 h-4 -mt-1" />
              </div>
            </div>
          </div>

          <div className="h-6"></div>

          <div className="flex gap-16 w-full justify-center relative">
            <div className="absolute top-1/2 left-[calc(50%+20px)] -translate-x-full -translate-y-1/2 flex items-center text-pink-400 w-32 -z-10 opacity-50">
              <div className="flex-1 h-px bg-pink-500 border-dashed border-t"></div>
              <ArrowRight className="w-4 h-4 -ml-1 rotate-180" />
            </div>

            <div className="w-64 bg-[#1B2236] border border-pink-500/30 rounded-xl p-5 shadow-lg shadow-pink-900/20 text-center relative z-10">
              <Droplet className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">Sepolia Blockchain</h3>
              <p className="text-xs text-gray-400">Uniswap V2 Factory, Router, Pairs</p>
            </div>

            <div className="w-64 bg-[#1B2236] border border-amber-500/30 rounded-xl p-5 shadow-lg shadow-amber-900/20 text-center z-10">
              <Database className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">PostgreSQL</h3>
              <p className="text-xs text-gray-400">Indexed Swaps, Mints, Burns, TVL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">1. Frontend (The Interface)</h3>
          <p>
            Built with <strong>React Router v7</strong> and <strong>Vite</strong>, following <strong>Feature-Sliced Design (FSD)</strong>. 
            The frontend communicates directly with the blockchain via <strong>Wagmi</strong> and <strong>Viem</strong> to submit transactions (swaps, adding liquidity).
            It also fetches rich historical data from the Backend API.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3">2. Backend Indexer (The Observer)</h3>
          <p>
            A Node.js service that acts as an "Indexer". It continuously listens to the Sepolia blockchain for events.
            When an event occurs, the Indexer decodes it, calculates values, and saves to <strong>PostgreSQL</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
