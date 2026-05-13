import { Code2, Zap, Database, Search, ArrowRight, Share2, Cpu } from 'lucide-react'

export function IndexerDocs() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Go Indexer
        </h1>
        <a 
          href="https://github.com/Apex-DEX/apex-dex-indexer" 
          target="_blank" 
          rel="noreferrer"
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-bold text-gray-300 hover:text-white flex items-center gap-2"
        >
          <Code2 className="w-4 h-4" /> Source Code
        </a>
      </div>
      
      <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl">
        The Apex Indexer is a high-performance backend service written in <strong>Go</strong>. It acts as the bridge between the Ethereum blockchain and our analytics database.
      </p>

      {/* Why Go? */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl">
          <Cpu className="w-8 h-8 text-blue-400 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Concurrency Model</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Utilizing Go's <strong>Goroutines</strong>, the indexer can process thousands of block logs simultaneously across multiple threads, ensuring minimal latency between on-chain events and UI updates.
          </p>
        </div>
        <div className="p-8 bg-linear-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl">
          <Zap className="w-8 h-8 text-emerald-400 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Direct EVM Access</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The service connects directly to Sepolia nodes via JSON-RPC, decoding raw hex data into meaningful metrics like Price, TVL, and APR.
          </p>
        </div>
      </div>

      {/* Flow Diagram */}
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <Share2 className="w-6 h-6 text-purple-400" /> Indexing Workflow
      </h2>
      
      <div className="bg-[#131A2A] border border-white/5 rounded-3xl p-10 mb-16 shadow-2xl overflow-x-auto">
        <div className="min-w-[600px] flex items-center justify-between gap-4">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="font-bold text-white text-sm mb-1">Listener</p>
            <p className="text-[10px] text-gray-500 text-center">Watching Logs</p>
          </div>

          <ArrowRight className="w-5 h-5 text-gray-700" />

          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/30 shadow-lg shadow-blue-500/10">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
            <p className="font-bold text-white text-sm mb-1">Decoder</p>
            <p className="text-[10px] text-gray-500 text-center">ABI Processing</p>
          </div>

          <ArrowRight className="w-5 h-5 text-gray-700" />

          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/30 shadow-lg shadow-amber-500/10">
              <Database className="w-8 h-8 text-amber-400" />
            </div>
            <p className="font-bold text-white text-sm mb-1">Storage</p>
            <p className="text-[10px] text-gray-500 text-center">PostgreSQL</p>
          </div>

          <ArrowRight className="w-5 h-5 text-gray-700" />

          {/* Step 4 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/30">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <p className="font-bold text-white text-sm mb-1">API Serve</p>
            <p className="text-[10px] text-gray-500 text-center">UI Ready</p>
          </div>
        </div>
      </div>

      {/* Core Components */}
      <div className="space-y-6">
        <div className="p-6 bg-[#131A2A]/50 border border-white/5 rounded-2xl">
          <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">1. Event Coordination</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            The indexer uses a coordinator pattern to ensure that block processing is sequential and no logs are missed during node downtime.
          </p>
        </div>
        <div className="p-6 bg-[#131A2A]/50 border border-white/5 rounded-2xl">
          <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">2. Pricing Engine</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Calculates real-time token prices in USD by cross-referencing liquidity pool reserves with stablecoin pairs (USDT/USDC).
          </p>
        </div>
      </div>
    </div>
  )
}
