import { Code2, Zap, Database, Search, ArrowRight, Share2, Cpu, Filter, Activity, Terminal } from 'lucide-react'

export function IndexerDocs() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Go Indexer Architecture
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            A high-performance event-driven engine designed to synchronize blockchain state with sub-second precision.
          </p>
        </div>
        <a 
          href="https://github.com/Apex-DEX/apex-dex-indexer" 
          target="_blank" 
          rel="noreferrer"
          className="flex-shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl transition-all text-sm font-bold text-white flex items-center gap-2 shadow-lg shadow-blue-900/20"
        >
          <Code2 className="w-4 h-4" /> View Source Code
        </a>
      </div>

      {/* Technical Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cpu className="w-12 h-12 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Concurrency</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Written in <strong>Go</strong> to leverage <strong>Goroutines</strong>. Each contract event type is processed in a separate thread pool.
          </p>
        </div>
        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity className="w-12 h-12 text-emerald-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Reliability</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Includes a <strong>Reorganization Handler</strong> that detects and fixes data inconsistencies caused by chain forks.
          </p>
        </div>
        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Database className="w-12 h-12 text-amber-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Efficiency</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Batch-processing for PostgreSQL inserts reduces DB overhead by up to 90% during high trading volume.
          </p>
        </div>
      </div>

      {/* Deep Dive Pipeline Diagram */}
      <div className="bg-[#131A2A] border border-white/10 rounded-[2rem] p-8 lg:p-12 mb-20 shadow-2xl relative overflow-x-auto">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-12 text-center opacity-50">Data Pipeline Flowchart</h3>
        
        <div className="flex items-center justify-between relative scale-[0.85] lg:scale-100 origin-center">
          
          {/* Node 1: RPC */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1B2236] to-[#131A2A] border border-white/10 flex items-center justify-center mb-4 shadow-xl group-hover:border-blue-500/50 transition-all duration-500">
              <Terminal className="w-8 h-8 text-gray-400 group-hover:text-blue-400" />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-xs mb-1">RPC Node</p>
            </div>
          </div>

          <div className="flex flex-col items-center opacity-20 px-2">
             <ArrowRight className="w-4 h-4 text-blue-500" />
          </div>

          {/* Node 2: Listener */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 shadow-xl shadow-blue-500/5 group-hover:bg-blue-500/20 transition-all duration-500">
              <Search className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-xs mb-1">Listener</p>
            </div>
          </div>

          <div className="flex flex-col items-center opacity-20 px-2">
             <ArrowRight className="w-4 h-4 text-blue-500" />
          </div>

          {/* Node 3: Filter & Decoder */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-xl shadow-emerald-500/5 group-hover:bg-emerald-500/20 transition-all duration-500">
              <Filter className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-xs mb-1">Decode</p>
            </div>
          </div>

          <div className="flex flex-col items-center opacity-20 px-2">
             <ArrowRight className="w-4 h-4 text-emerald-500" />
          </div>

          {/* Node 4: Calc Engine */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 shadow-xl shadow-amber-500/5 group-hover:bg-amber-500/20 transition-all duration-500">
              <Zap className="w-8 h-8 text-amber-400" />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-xs mb-1">Logic</p>
            </div>
          </div>

          <div className="flex flex-col items-center opacity-20 px-2">
             <ArrowRight className="w-4 h-4 text-amber-500" />
          </div>

          {/* Node 5: Persistence */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 shadow-xl shadow-purple-500/5 group-hover:bg-purple-500/20 transition-all duration-500">
              <Database className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-xs mb-1">Store</p>
            </div>
          </div>
          
        </div>
      </div>
          
        </div>
      </div>

      {/* Internal Architecture Details */}
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Share2 className="w-6 h-6 text-blue-400" /> Worker Pool Strategy
          </h2>
          <div className="p-8 bg-[#131A2A]/50 border border-white/5 rounded-3xl leading-relaxed text-gray-400">
            <p className="mb-4">
              To handle massive amounts of data during market volatility, the indexer implements a <strong>Dynamic Worker Pool</strong>. Each specific event type (Swap, Mint, Burn) has its own dedicated queue.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm"><strong>Parallel Processing:</strong> Multiple blocks are processed simultaneously while maintaining causal ordering.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm"><strong>Back-pressure Handling:</strong> If the database is under load, the indexer slows down RPC polling automatically.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm"><strong>Checkpointing:</strong> The service saves its "last scanned block" to PostgreSQL, allowing it to resume instantly after a restart.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-emerald-400" /> Pricing Engine Logic
          </h2>
          <div className="bg-linear-to-r from-[#1B2236] to-[#131A2A] border border-white/5 p-8 rounded-3xl">
             <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">On-Chain Discovery</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">
                      The indexer identifies pricing by tracing paths back to stablecoin pairs (USDT/USDC). It solves a multi-variable price equation for each token in real-time, providing the frontend with accurate USD valuations for charts.
                   </p>
                </div>
                <div className="bg-[#0d111c] border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
                   <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-4 uppercase">
                      <span>Live Price Calculation</span>
                      <span className="text-emerald-400">Stable Pool Anchor</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="flex-1 h-12 bg-white/2 rounded-xl flex items-center justify-center font-mono text-xs text-white border border-white/5">TOKEN / ETH</div>
                      <ArrowRight className="w-4 h-4 text-gray-700" />
                      <div className="flex-1 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center font-mono text-xs text-emerald-400 border border-emerald-500/20">ETH / USDT</div>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  )
}
