import { Globe, Server, ArrowDown, ArrowRight, Droplet, Database, Repeat, Waves, Zap, Code2, ExternalLink } from 'lucide-react'

export function Architecture() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">System Architecture</h1>
      <p className="text-gray-400 mb-12 text-lg leading-relaxed">
        Apex DEX relies on a high-performance three-tier architecture to provide a seamless, real-time trading experience without compromising decentralization.
      </p>

      {/* Overview Diagram */}
      <div className="bg-[#131A2A] border border-white/10 rounded-3xl p-8 mb-20 overflow-x-auto shadow-2xl">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10 text-center">Ecosystem Overview</h3>
        <div className="min-w-[700px] flex flex-col items-center gap-6">
          <div className="flex gap-16 w-full justify-center">
            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-purple-500/30 rounded-2xl p-6 shadow-xl text-center relative">
              <Globe className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Frontend Client</h3>
              <p className="text-xs text-gray-400 leading-relaxed">React Router v7, Vite, FSD, TailwindCSS</p>
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex flex-col items-center text-purple-400/50">
                <div className="w-px h-6 bg-purple-500/30"></div>
                <ArrowDown className="w-4 h-4 -mt-1" />
              </div>
              <div className="absolute top-1/2 -right-16 -translate-y-1/2 flex items-center text-blue-400/50 w-16">
                <div className="flex-1 h-px bg-blue-500/30"></div>
                <ArrowRight className="w-4 h-4 -ml-1" />
              </div>
            </div>

            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-blue-500/30 rounded-2xl p-6 shadow-xl text-center relative">
              <Server className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Backend API</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Nest.js, REST API, Chart Data, Analytics</p>
            </div>
          </div>

          <div className="h-6"></div>

          <div className="flex gap-16 w-full justify-center">
            <div className="w-64 border border-white/5 bg-white/2 rounded-xl p-4 text-center">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">Wagmi / Viem (Direct RPC)</p>
            </div>

            <div className="w-64 border border-blue-500/20 bg-blue-500/5 rounded-xl p-4 text-center relative">
              <p className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter">High-Perf Go Indexer</p>
              <div className="absolute left-1/2 -top-6 -translate-x-1/2 flex flex-col items-center text-blue-400/50">
                <div className="w-px h-6 bg-blue-500/30"></div>
                <ArrowDown className="w-4 h-4 -mt-1 rotate-180" />
              </div>
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex flex-col items-center text-amber-400/50">
                <div className="w-px h-6 bg-amber-500/30"></div>
                <ArrowDown className="w-4 h-4 -mt-1" />
              </div>
            </div>
          </div>

          <div className="h-6"></div>

          <div className="flex gap-16 w-full justify-center relative">
            <div className="absolute top-1/2 left-[calc(50%+20px)] -translate-x-full -translate-y-1/2 flex items-center text-pink-400/30 w-32 -z-10">
              <div className="flex-1 h-px border-t border-dashed border-pink-500/50"></div>
              <ArrowRight className="w-4 h-4 -ml-1 rotate-180" />
            </div>

            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-pink-500/30 rounded-2xl p-6 shadow-xl text-center relative z-10">
              <Droplet className="w-10 h-10 text-pink-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Sepolia Chain</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Uniswap V2 Core & Periphery</p>
            </div>

            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-amber-500/30 rounded-2xl p-6 shadow-xl text-center z-10">
              <Database className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">PostgreSQL</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Indexed Swaps, Liquidity & TVL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Flow Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Repeat className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Swap Execution Flow</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#131A2A]/50 border border-white/5 rounded-3xl p-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-purple-400">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">Method: <code className="text-pink-400 text-sm">swapExactTokensForTokens</code></h4>
                <p className="text-sm text-gray-400">User submits a swap request through the UI. The Router contract calculates paths and executes the trade via the Pair contract.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-purple-400">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">Event: <code className="text-pink-400 text-sm">Swap(sender, amountIn, amountOut, to)</code></h4>
                <p className="text-sm text-gray-400">The Pair contract emits a Swap event. This is the source of truth for the trade recorded on-chain.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-purple-400">3</div>
              <div>
                <h4 className="font-bold text-white mb-1">Index: <span className="text-blue-400 uppercase text-xs font-bold">Go Observer</span></h4>
                <p className="text-sm text-gray-400">Our Go service picks up the event logs via RPC, decodes the transaction, and updates historical price charts in the database.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0d111c] rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-purple-500/20">
              <span className="text-xs font-bold text-purple-400 uppercase">Input</span>
              <span className="text-xs font-mono text-gray-400">1.0 WETH</span>
            </div>
            <div className="flex justify-center py-2">
              <ArrowDown className="w-4 h-4 text-gray-600 animate-bounce" />
            </div>
            <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30 text-center">
              <p className="text-[10px] text-purple-400 font-bold uppercase mb-2">Router V2</p>
              <div className="text-xs font-mono text-gray-300">swapExactTokensForTokens(...)</div>
            </div>
            <div className="flex justify-center py-2">
              <ArrowDown className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-emerald-500/20">
              <span className="text-xs font-bold text-emerald-400 uppercase">Output</span>
              <span className="text-xs font-mono text-gray-400">~2,450 USDC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Liquidity Flow Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Waves className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Liquidity Management</h2>
        </div>
        
        <div className="bg-[#131A2A]/50 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-[#0d111c] border border-white/10 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-blue-400 uppercase flex items-center gap-2">
              <Zap className="w-4 h-4" /> Providing
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3"><span className="text-white">→</span> Approve Token A & B</li>
              <li className="flex gap-3"><span className="text-white">→</span> Call <code className="text-blue-300">addLiquidity</code></li>
              <li className="flex gap-3"><span className="text-white">→</span> Pair emits <code className="text-blue-300">Mint</code> event</li>
              <li className="flex gap-3"><span className="text-white">→</span> User receives LP Tokens</li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-600 md:rotate-0 rotate-90" />
            </div>
          </div>
          
          <div className="flex-1 bg-[#0d111c] border border-white/10 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-amber-400 uppercase flex items-center gap-2">
              <Database className="w-4 h-4" /> Indexing
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3"><span className="text-white">→</span> Indexer detects <code className="text-amber-300">Mint</code></li>
              <li className="flex gap-3"><span className="text-white">→</span> Calculates USD value of TVL</li>
              <li className="flex gap-3"><span className="text-white">→</span> Updates Pool Reserves</li>
              <li className="flex gap-3"><span className="text-white">→</span> Frontend shows updated stats</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Indexer Technical Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Go Indexer Architecture</h2>
          </div>
          <a 
            href="https://github.com/Apex-DEX/apex-dex-indexer" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#1B2236] hover:bg-white/5 rounded-xl transition-all text-xs font-bold text-gray-400 hover:text-white"
          >
            <ExternalLink className="w-4 h-4" /> View Repo
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#131A2A] border border-white/5 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-3">Event Listener</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Written in Go for maximum concurrency. Subscribes to contract logs via WebSocket/RPC to ensure sub-second event capture.</p>
          </div>
          <div className="bg-[#131A2A] border border-white/5 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-3">Log Decoder</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Uses ABI unpacking to translate raw hex logs into structured data (prices, addresses, amounts).</p>
          </div>
          <div className="bg-[#131A2A] border border-white/5 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-3">Persistent Storage</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Efficiently batches database writes to PostgreSQL, ensuring TVL and Trading Volume stats are always live.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

