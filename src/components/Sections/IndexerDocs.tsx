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


      {/* Deep Technical Deep-Dive */}
      <div className="space-y-16 mt-24">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">1. The Concurrent Event Loop</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-[#131A2A]/40 border border-white/5 rounded-3xl">
              <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">A. Initialization Sequence</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                On startup, the Indexer performs a "Catch-up Sync". It queries PostgreSQL for the <code>last_processed_block</code> and then fetches all missed events from the RPC node using <code>eth_getLogs</code>.
              </p>
              <div className="bg-black/20 p-4 rounded-xl font-mono text-[10px] text-gray-500 border border-white/5">
                // Sync Logic <br/>
                fromBlock := db.GetLastBlock() + 1 <br/>
                toBlock := rpc.GetCurrentBlock() <br/>
                indexer.Backfill(fromBlock, toBlock)
              </div>
            </div>
            <div className="p-8 bg-[#131A2A]/40 border border-white/5 rounded-3xl">
              <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">B. Live Subscription</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Once synced, it opens a <code>eth_subscribe</code> WebSocket channel. Every new block header triggers a worker to check for events related to our Factory and Pair addresses.
              </p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                  <span>Zero-latency event capture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                  <span>Automatic reconnection logic</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">2. USD Pricing Discovery Engine</h2>
          <div className="bg-linear-to-r from-blue-900/10 to-transparent p-10 border border-blue-500/10 rounded-[2.5rem]">
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Raw blockchain data only contains token amounts (e.g., "100 USDT for 0.05 ETH"). To provide meaningful analytics, the Indexer must calculate the USD value at the <strong>exact moment</strong> of the trade.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-blue-400 font-bold text-xs uppercase">Step 1: Anchor Search</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">Indexer identifies if one of the tokens is a "Stable Anchor" (USDT, USDC, DAI).</p>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-8">
                <div className="text-blue-400 font-bold text-xs uppercase">Step 2: Path Tracing</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">If no direct stable pair exists, it traces a path through WETH (e.g., TOKEN → WETH → USDT).</p>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-8">
                <div className="text-blue-400 font-bold text-xs uppercase">Step 3: Multi-Pool Sync</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">It cross-references reserves from multiple pools to ensure price accuracy and prevent outliers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">3. Data Integrity & Re-orgs</h2>
          <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
               <Activity className="w-4 h-4" /> Handling Chain Forks
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              On Sepolia (and Ethereum), the last few blocks can be "re-organized". The Indexer maintains a 20-block deep local cache. If it detects a block hash mismatch, it <strong>automatically rolls back</strong> the database state and re-processes the affected blocks to ensure 100% data accuracy.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
