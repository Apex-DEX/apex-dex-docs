import { Globe, Server, ArrowDown, ArrowRight, Droplet, Database, Repeat, Waves, Zap, Code2, ExternalLink, Box, Activity, Layers } from 'lucide-react'

export function Architecture() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Full System Architecture</h1>
      <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-3xl">
        Apex DEX is a multi-layered ecosystem designed for extreme performance and data consistency. We utilize a hybrid model where trade execution is fully decentralized, while data indexing and analytics are handled by high-speed specialized services.
      </p>

      {/* Main Architecture Diagram */}
      <div className="bg-[#131A2A] border border-white/10 rounded-[1.5rem] p-6 lg:p-10 mb-20 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
        
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-12 text-center opacity-50">Protocol Infrastructure Map</h3>
        
        <div className="flex flex-col gap-12 relative scale-[0.9] lg:scale-100 origin-top">
          
          {/* Top Layer: Clients & Cache */}
          <div className="flex flex-wrap justify-center items-start gap-8">
            <div className="w-52 flex flex-col items-center">
              <div className="w-full bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-purple-500/30 rounded-2xl p-5 shadow-xl text-center relative z-10">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-1">Frontend Interface</h3>
                <p className="text-[9px] text-gray-500 uppercase font-mono tracking-tighter">React · Vite · FSD</p>
              </div>
            </div>

            <div className="w-52 flex flex-col items-center">
              <div className="w-full bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-blue-500/30 rounded-2xl p-5 shadow-xl text-center relative z-10">
                <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-1">Nest.js API</h3>
                <p className="text-[9px] text-gray-500 uppercase font-mono tracking-tighter">Node.js Framework</p>
              </div>
            </div>

            <div className="w-52 flex flex-col items-center">
              <div className="w-full bg-[#1B2236]/50 border border-red-500/20 rounded-2xl p-5 shadow-xl text-center relative z-10">
                <Activity className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-1">Redis Cluster</h3>
                <p className="text-[9px] text-gray-500 uppercase font-mono tracking-tighter">Cache · BullMQ</p>
              </div>
            </div>
          </div>

          {/* Middle Layer: Indexer & Storage */}
          <div className="flex flex-wrap justify-center gap-12">
             <div className="w-60 bg-linear-to-b from-blue-600/20 to-blue-900/20 border border-blue-500/40 rounded-2xl p-5 shadow-2xl text-center relative group">
                <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-1">Go Indexer</h3>
                <p className="text-[9px] text-gray-300 uppercase font-mono tracking-widest">High-Speed Observer</p>
             </div>

             <div className="w-52 bg-linear-to-b from-[#1B2236] to-[#131A2A] border border-amber-500/30 rounded-2xl p-5 shadow-xl text-center relative">
                <Database className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-1">PostgreSQL</h3>
                <p className="text-[9px] text-gray-500 uppercase font-mono tracking-tighter">Data Store</p>
             </div>
          </div>

          {/* Bottom Layer: Blockchain */}
          <div className="flex justify-center mt-4">
            <div className="w-full max-w-[600px] bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <Box className="w-8 h-8 text-pink-400" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Sepolia Ethereum</h3>
                    <p className="text-[10px] text-gray-500 font-mono italic">Factory, Router, Pairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Component Details */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="p-8 bg-[#131A2A]/50 border border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                   <Server className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">The Backend API (Nest.js)</h3>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Serving as the central hub, our API manages user sessions, historical data retrieval, and complex analytics. It leverages <strong>Redis</strong> for two critical functions:
             </p>
             <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                   <span><strong>Caching:</strong> Immediate retrieval of common data (Token Lists, Pool Stats).</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                   <span><strong>BullMQ:</strong> Distributed task queue for reliable background processing.</span>
                </div>
             </div>
          </div>

          <div className="p-8 bg-[#131A2A]/50 border border-white/5 rounded-3xl group hover:border-pink-500/30 transition-all">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                   <Box className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Smart Contract Layer</h3>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed">
                Decentralized core consisting of <strong>Uniswap V2</strong> forks. It handles the "Constant Product" formula and asset custody. The <strong>Factory</strong> deploys unique <strong>Pair</strong> contracts, while the <strong>Router</strong> provides an easy-to-use trading interface.
             </p>
          </div>
        </div>

        <div className="p-8 bg-linear-to-b from-blue-600/10 to-transparent border border-blue-500/20 rounded-3xl flex flex-col h-full">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                 <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Go Indexer (Data Pipeline)</h3>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed mb-8">
              A high-concurrency engine that transforms raw blockchain entropy into structured financial data. It uses multiple workers to decode events and calculate USD values in real-time.
           </p>
           
           <div className="mt-auto space-y-4">
              <div className="bg-[#0d111c] border border-white/5 p-4 rounded-2xl">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Throughput</span>
                    <span className="text-[10px] font-mono text-blue-400">High-Speed</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-500 rounded-full animate-pulse"></div>
                 </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                 <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase">Real-time Sync</span>
                 </div>
                 <Layers className="w-4 h-4 text-gray-600" />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
