import { Code2, Zap, Database, Search, ArrowRight, Share2, Cpu, Filter, Activity, Terminal, ArrowDown, ArrowUp } from 'lucide-react'

export function IndexerDocs() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Go Indexer Pipeline
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            A precise mapping of how raw blockchain logs are transformed into structured financial analytics.
          </p>
        </div>
        <a 
          href="https://github.com/Apex-DEX/apex-dex-indexer" 
          target="_blank" 
          rel="noreferrer"
          className="flex-shrink-0 px-6 py-3 bg-[#1B2236] hover:bg-white/5 border border-white/10 rounded-2xl transition-all text-sm font-bold text-gray-300 hover:text-white flex items-center gap-2 shadow-lg"
        >
          <Code2 className="w-4 h-4" /> View Repository
        </a>
      </div>

      {/* Main Pipeline Logic Diagram */}
      <div className="bg-[#0d111c] border border-white/5 rounded-[2.5rem] p-10 lg:p-16 mb-20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        
        <div className="flex flex-col gap-12 relative max-w-4xl mx-auto">
          
          {/* Top Stage: Connection */}
          <div className="flex justify-center">
            <div className="w-72 p-6 bg-[#131A2A] border border-blue-500/30 rounded-2xl text-center relative z-10 shadow-xl shadow-blue-500/5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-1">Blockchain Connector</h4>
              <p className="text-[10px] text-gray-500 uppercase font-mono">WSS / JSON-RPC Listener</p>
              
              {/* Arrow Down */}
              <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-10 bg-blue-500/30"></div>
                <ArrowDown className="w-3 h-3 text-blue-400 -mt-1" />
              </div>
            </div>
          </div>

          {/* Middle Stage: Parallel Processing */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="w-48 p-5 bg-[#131A2A] border border-white/5 rounded-2xl text-center relative shadow-lg">
              <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <h5 className="text-xs font-bold text-white mb-1">Swap Decoder</h5>
              <p className="text-[9px] text-gray-500">Worker Group A</p>
            </div>
            
            <div className="w-48 p-5 bg-[#131A2A] border border-emerald-500/20 rounded-2xl text-center relative shadow-lg">
              <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-3 animate-pulse" />
              <h5 className="text-xs font-bold text-white mb-1">Price Calculation</h5>
              <p className="text-[9px] text-gray-500">USD Logic Engine</p>
            </div>

            <div className="w-48 p-5 bg-[#131A2A] border border-white/5 rounded-2xl text-center relative shadow-lg">
              <Filter className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <h5 className="text-xs font-bold text-white mb-1">Mint/Burn Parser</h5>
              <p className="text-[9px] text-gray-500">Worker Group B</p>
            </div>

            {/* Connecting Lines from Top */}
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[400px] h-20 border-x border-t border-dashed border-white/10 -z-10 rounded-t-[40px] opacity-50"></div>
          </div>

          {/* Bottom Stage: Database */}
          <div className="flex justify-center mt-8">
            <div className="w-72 p-6 bg-linear-to-b from-[#131A2A] to-[#0d111c] border border-amber-500/30 rounded-2xl text-center relative z-10 shadow-xl shadow-amber-500/5">
              
              {/* Arrows from workers */}
              <div className="absolute left-1/2 -top-12 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-12 bg-amber-500/30"></div>
                <ArrowDown className="w-3 h-3 text-amber-500 -mt-1" />
              </div>

              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                <Database className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="font-bold text-white mb-1">Persistent Storage</h4>
              <p className="text-[10px] text-gray-500 uppercase font-mono">PostgreSQL Batch Write</p>
            </div>
          </div>

        </div>
      </div>

      {/* Internal Worker Logic */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 bg-[#131A2A]/50 border border-white/5 rounded-3xl group hover:border-blue-500/20 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Event Coordinator</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            The <strong>Coordinator</strong> manages the current block state. It ensures that events are processed in order and handles re-orgs by rolling back the local state and re-indexing affected blocks.
          </p>
        </div>

        <div className="p-8 bg-[#131A2A]/50 border border-white/5 rounded-3xl group hover:border-emerald-500/20 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Price Discovery Logic</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Every swap triggers a price update. The indexer solves the liquidity path back to stable pairs to assign a <strong>USD value</strong> to each trade, enabling accurate volume and TVL tracking.
          </p>
        </div>
      </div>
    </div>
  )
}
