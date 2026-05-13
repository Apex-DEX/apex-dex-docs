import { Globe, Server, ArrowDown, ArrowRight, Droplet, Database, Repeat, Waves, Zap, Code2, ExternalLink, Box, Activity, Layers, ArrowUp } from 'lucide-react'

export function Architecture() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Protocol Architecture</h1>
      <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-3xl">
        A precise technical map of the Apex DEX ecosystem. This diagram illustrates the bidirectional flow of data and the critical connections between decentralized execution and centralized analytics.
      </p>

      {/* High-Fidelity Architecture Map */}
      <div className="bg-[#0d111c] border border-white/5 rounded-[2.5rem] p-8 lg:p-16 mb-20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none"></div>
        
        <div className="relative flex flex-col gap-24 items-center max-w-5xl mx-auto">
          
          {/* Top Layer: Frontend & API */}
          <div className="flex justify-between w-full max-w-4xl gap-20">
            {/* Frontend */}
            <div className="w-56 flex flex-col items-center">
              <div className="w-full bg-[#1B2236] border border-purple-500/30 rounded-2xl p-6 shadow-xl text-center relative z-20">
                <Globe className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-white text-sm mb-1">Frontend</h3>
                <p className="text-[10px] text-gray-500 font-mono">React Client</p>
              </div>
            </div>

            {/* Backend API */}
            <div className="w-56 flex flex-col items-center relative">
              <div className="w-full bg-[#1B2236] border border-blue-500/30 rounded-2xl p-6 shadow-xl text-center relative z-20">
                <Server className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-white text-sm mb-1">Nest.js API</h3>
                <p className="text-[10px] text-gray-500 font-mono">Backend Core</p>
              </div>

              {/* API -> Redis Connection */}
              <div className="absolute top-1/2 left-[100%] ml-4 -translate-y-1/2 flex items-center gap-2 group">
                <div className="w-12 h-px bg-blue-500/30 border-t border-dashed border-blue-500/50"></div>
                <div className="w-40 bg-[#1B2236]/50 border border-red-500/20 rounded-xl p-3 flex items-center gap-3">
                   <Activity className="w-4 h-4 text-red-400" />
                   <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Redis (Cache/Jobs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connection: Frontend -> API */}
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 flex items-center gap-2 px-8 py-1 bg-[#0d111c] border border-white/5 rounded-full z-10">
            <div className="w-32 h-px bg-white/10 relative">
               <ArrowRight className="w-3 h-3 text-blue-400 absolute right-0 -top-[5.5px]" />
            </div>
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap px-4">Fetch Data</span>
          </div>

          {/* Middle Layer: Database & Indexer */}
          <div className="flex justify-between w-full max-w-4xl gap-20">
            {/* Go Indexer */}
            <div className="w-56 flex flex-col items-center relative">
              <div className="w-full bg-linear-to-b from-blue-600/20 to-blue-900/20 border border-blue-500/40 rounded-2xl p-6 shadow-2xl text-center relative z-20">
                <Code2 className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-white text-sm mb-1">Go Indexer</h3>
                <p className="text-[10px] text-blue-300 font-mono">Observer</p>
              </div>
              
              {/* Indexer -> Postgres Connector */}
              <div className="absolute top-1/2 left-[100%] ml-4 -translate-y-1/2 flex items-center gap-2">
                <div className="w-12 h-px bg-amber-500/30 border-t border-dashed border-amber-500/50"></div>
                <span className="text-[8px] font-bold text-amber-500 uppercase tracking-tighter px-2">Write Logs</span>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="w-56 flex flex-col items-center">
              <div className="w-full bg-[#1B2236] border border-amber-500/30 rounded-2xl p-6 shadow-xl text-center relative z-20">
                <Database className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                <h3 className="font-bold text-white text-sm mb-1">PostgreSQL</h3>
                <p className="text-[10px] text-gray-500 font-mono">Storage</p>
              </div>
            </div>
          </div>

          {/* Connection: API <-> Postgres */}
          <div className="absolute top-[200px] right-[100px] flex flex-col items-center gap-2 opacity-50">
             <div className="h-20 w-px bg-amber-500/30 border-l border-dashed border-amber-500/50"></div>
             <ArrowDown className="w-3 h-3 text-amber-500 -mt-2" />
             <span className="text-[8px] font-bold text-gray-500 uppercase rotate-90 mt-4">Query</span>
          </div>

          {/* Bottom Layer: Blockchain */}
          <div className="w-full max-w-4xl bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-10 relative overflow-hidden text-center">
            <div className="flex flex-col items-center gap-4 relative z-20">
              <Box className="w-12 h-12 text-pink-400" />
              <h3 className="text-xl font-bold text-white">Sepolia Ethereum Network</h3>
              <div className="flex gap-4">
                 <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-mono text-gray-400 uppercase">AMM Protocol (Factory & Router)</span>
              </div>
            </div>

            {/* Flow: Blockchain -> Indexer */}
            <div className="absolute left-[13%] top-[-80px] flex flex-col items-center gap-2 group">
               <div className="h-20 w-px bg-pink-500/30 border-l border-dashed border-pink-500/50 animate-pulse"></div>
               <ArrowUp className="w-3 h-3 text-pink-400 -mt-2" />
               <span className="text-[9px] font-bold text-pink-400 uppercase tracking-widest mt-2">Event Stream</span>
            </div>

            {/* Flow: Frontend -> Blockchain */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[200px] flex flex-col items-center group opacity-20">
               <div className="h-[400px] w-px bg-purple-500/30 border-l border-dashed border-purple-500/50"></div>
               <ArrowDown className="w-3 h-3 text-purple-400 -mt-2" />
               <span className="text-[9px] font-bold text-purple-400 uppercase rotate-90 mt-12 whitespace-nowrap">Transaction Submission</span>
            </div>
          </div>

        </div>
      </div>

      {/* Logic Breakdown */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="p-8 bg-[#131A2A] border border-white/5 rounded-3xl">
           <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" /> Client Data Flow
           </h4>
           <p className="text-sm text-gray-400 leading-relaxed">
              Users interact with the <strong>Frontend</strong>, which fetches processed analytics (charts, TVL) from the <strong>API</strong>. Real-time balance checks and trade executions happen directly between the user's wallet and the <strong>Blockchain</strong>.
           </p>
        </div>
        <div className="p-8 bg-[#131A2A] border border-white/5 rounded-3xl">
           <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" /> Indexing Engine
           </h4>
           <p className="text-sm text-gray-400 leading-relaxed">
              The <strong>Go Indexer</strong> subscribes to blockchain events (Swaps, Mints). It decodes these logs and persists the data to <strong>PostgreSQL</strong>, making it queryable for the API.
           </p>
        </div>
        <div className="p-8 bg-[#131A2A] border border-white/5 rounded-3xl">
           <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-red-400" /> Performance Layer
           </h4>
           <p className="text-sm text-gray-400 leading-relaxed">
              <strong>Redis</strong> reduces database load by caching frequently accessed resources and manages background workers for reliability through distributed task queues.
           </p>
        </div>
      </div>
    </div>
  )
}
