import { Globe, Server, ArrowDown, ArrowRight, Droplet, Database, Repeat, Waves, Zap, Code2, ExternalLink, Box, Activity, Layers, ArrowUp, MousePointer2 } from 'lucide-react'

export function Architecture() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Full Stack Architecture</h1>
      <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-2xl">
        A comprehensive map of the Apex DEX infrastructure, showing how data flows from the blockchain to your screen through our high-performance backend layers.
      </p>

      {/* Vertical Connected Diagram */}
      <div className="bg-[#0d111c] border border-white/5 rounded-[3rem] p-8 lg:p-16 mb-20 shadow-2xl relative">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12 relative">
          
          {/* Layer 1: Frontend */}
          <div className="w-full flex flex-col items-center group">
            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-purple-500/30 rounded-3xl p-6 shadow-xl text-center relative z-10 transition-transform group-hover:scale-105">
              <MousePointer2 className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-1 text-lg">Frontend Interface</h3>
              <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">React · Vite · FSD</p>
            </div>
            {/* Arrow to API */}
            <div className="flex flex-col items-center py-4">
               <div className="w-px h-10 bg-purple-500/30"></div>
               <ArrowDown className="w-4 h-4 text-purple-500 -mt-1" />
               <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mt-2">HTTP / GraphQL Requests</span>
            </div>
          </div>

          {/* Layer 2: API & Redis (THE CORE) */}
          <div className="w-full flex justify-center gap-8 relative">
            {/* Nest.js API */}
            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-blue-500/40 rounded-3xl p-6 shadow-2xl text-center relative z-10 hover:border-blue-400/50 transition-all">
              <Server className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-1 text-lg">Nest.js API</h3>
              <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">Backend Logic</p>
            </div>

            {/* Redis - NOW PROMINENT */}
            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-red-500/40 rounded-3xl p-6 shadow-2xl text-center relative z-10 hover:border-red-400/50 transition-all">
              <Activity className="w-10 h-10 text-red-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-1 text-lg">Redis Service</h3>
              <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">Cache · BullMQ Jobs</p>
              
              {/* Connection to API */}
              <div className="absolute left-[-20px] top-1/2 -translate-x-full -translate-y-1/2 flex items-center gap-2">
                 <div className="w-8 h-px bg-red-500/30 border-t border-dashed border-red-500/50"></div>
                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              </div>
            </div>
          </div>

          {/* Arrow to DB */}
          <div className="flex flex-col items-center">
             <div className="w-px h-10 bg-blue-500/30"></div>
             <ArrowDown className="w-4 h-4 text-blue-500 -mt-1" />
             <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-2">SQL Queries</span>
          </div>

          {/* Layer 3: Storage & Indexer */}
          <div className="w-full flex justify-center gap-8 relative">
            {/* PostgreSQL */}
            <div className="w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-amber-500/40 rounded-3xl p-6 shadow-2xl text-center relative z-10">
              <Database className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-1 text-lg">PostgreSQL</h3>
              <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">Primary Data Store</p>
            </div>

            {/* Go Indexer - CONNECTED TO DB */}
            <div className="w-64 bg-linear-to-b from-blue-600/20 to-blue-900/20 border border-blue-500/40 rounded-3xl p-6 shadow-2xl text-center relative z-10">
              <Code2 className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-1 text-lg">Go Indexer</h3>
              <p className="text-xs text-blue-300 uppercase font-mono tracking-widest">Event Observer</p>
              
              {/* Connection to DB */}
              <div className="absolute left-[-20px] top-1/2 -translate-x-full -translate-y-1/2 flex items-center gap-2">
                 <ArrowLeft className="w-3 h-3 text-amber-500/50" />
                 <div className="w-8 h-px bg-amber-500/30 border-t border-dashed border-amber-500/50"></div>
              </div>
            </div>
          </div>

          {/* Arrow to Blockchain */}
          <div className="flex flex-col items-center">
             <div className="w-px h-10 bg-pink-500/30"></div>
             <ArrowUp className="w-4 h-4 text-pink-500 -mb-1 rotate-180" />
             <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest mt-4">Real-time Log Subscriptions</span>
          </div>

          {/* Layer 4: Blockchain */}
          <div className="w-full bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="flex flex-col items-center relative z-20">
              <Box className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Sepolia Ethereum Network</h3>
              <p className="text-sm text-gray-500 font-mono italic max-w-md mx-auto">
                Decentralized State · Uniswap V2 Factory · Router · Liquidity Pools
              </p>
            </div>
            
            {/* Global Flow Lines Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 left-1/4 w-px h-full bg-pink-500 border-l border-dashed"></div>
               <div className="absolute top-0 right-1/4 w-px h-full bg-blue-500 border-l border-dashed"></div>
            </div>
          </div>

        </div>
      </div>

      </div>

      {/* Detailed Technical Breakdown */}
      <div className="space-y-16 mt-24">
        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-purple-500/50 to-transparent rounded-full"></div>
          <h2 className="text-3xl font-bold text-white mb-8 px-2">1. Lifecycle of a Trade Data Request</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[#131A2A]/40 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-3">Phase A: Event Emission</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The process starts when a user calls <code>swap()</code> on an <strong>Apex Pair</strong> contract. The EVM executes the constant product formula and emits a <code>Swap</code> event containing the sender, amounts in/out, and the recipient.
                </p>
              </div>
              <div className="bg-[#131A2A]/40 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-3">Phase B: Indexing & Enrichment</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The <strong>Go Indexer</strong> picks up the event via its WebSocket subscription. It immediately fetches the <code>tokenPrice</code> by querying other pools (e.g., ETH/USDT) to assign a USD value to the swap. This processed record is then pushed to <strong>PostgreSQL</strong>.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-[#131A2A]/40 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-3">Phase C: Query & Cache Layer</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When a user views the pool page, the <strong>Frontend</strong> requests OHLC (candlestick) data. The <strong>Nest.js API</strong> first checks <strong>Redis Cache</strong> using a unique key (e.g., <code>bars_USDT_USDC_1h</code>). On a hit, response time is <strong>&lt;5ms</strong>. On a miss, it aggregates 3600+ seconds of swaps from SQL, caches the result, and returns it.
                </p>
              </div>
              <div className="bg-[#131A2A]/40 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] mb-3">Phase D: Visual Rendering</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The JSON payload is parsed by the client-side <strong>Datafeed</strong> and rendered into interactive charts using <strong>Lightweight Charts</strong> or <strong>Recharts</strong>, providing the trader with instant market insight.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-10 bg-linear-to-br from-red-500/5 to-transparent border border-red-500/10 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-8">
            <Activity className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">The Redis Performance Engine</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 text-sm leading-relaxed text-gray-400">
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-tighter">Strategic Caching</h3>
              <p className="mb-4">
                To prevent database exhaustion during peak trading, we use a <strong>Write-Around</strong> caching strategy. Heavy analytical queries (TVL, APR, Volume) are computed once every 60 seconds by a background worker and stored in Redis.
              </p>
              <div className="p-4 bg-black/20 rounded-xl font-mono text-[11px] border border-white/5">
                <span className="text-blue-400">GET</span> pool_stats_all <br/>
                <span className="text-gray-500"># Returns pre-aggregated JSON from Redis</span>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-tighter">Reliable Background Jobs</h3>
              <p className="mb-4">
                Using <strong>BullMQ</strong>, we ensure that critical tasks—like re-indexing a missed block or triggering a price alert—are never lost. Redis acts as the message broker, tracking every job's status and handling automatic retries.
              </p>
              <div className="flex gap-3">
                 <div className="px-3 py-1 bg-red-500/10 rounded-md border border-red-500/20 text-[10px] font-bold text-red-400">WAITING</div>
                 <div className="px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20 text-[10px] font-bold text-blue-400">ACTIVE</div>
                 <div className="px-3 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20 text-[10px] font-bold text-emerald-400">COMPLETED</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7"/>
      <path d="M19 12H5"/>
    </svg>
  )
}
