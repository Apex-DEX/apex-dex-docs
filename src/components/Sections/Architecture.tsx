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

      {/* Component Breakdown Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-[#131A2A] border border-white/5 rounded-3xl relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Activity className="w-20 h-20 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
             <Activity className="w-5 h-5 text-red-400" /> Redis Cluster
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            The backbone of our performance layer. It manages two separate databases:
          </p>
          <ul className="space-y-4 text-xs">
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center font-bold text-red-400">1</span>
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-tighter">Cache DB</p>
                <p className="text-gray-500 italic">Stores frequently accessed chart data and token lists to bypass expensive SQL queries.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center font-bold text-red-400">2</span>
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-tighter">BullMQ DB</p>
                <p className="text-gray-500 italic">Manages background job queues for transaction verification and data syncing.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-[#131A2A] border border-white/5 rounded-3xl relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Code2 className="w-20 h-20 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
             <Code2 className="w-5 h-5 text-blue-400" /> Go Indexer Service
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            A standalone high-performance service dedicated to blockchain observation:
          </p>
          <ul className="space-y-4 text-xs">
             <li className="flex gap-4">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center font-bold text-blue-400">1</span>
                <div>
                   <p className="text-white font-bold mb-1 uppercase tracking-tighter">Real-time Capture</p>
                   <p className="text-gray-500 italic">Subscribes to contract events via WebSocket to capture trades instantly.</p>
                </div>
             </li>
             <li className="flex gap-4">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center font-bold text-blue-400">2</span>
                <div>
                   <p className="text-white font-bold mb-1 uppercase tracking-tighter">Batch Persistence</p>
                   <p className="text-gray-500 italic">Optimized SQL driver for fast persistence of thousands of events per second.</p>
                </div>
             </li>
          </ul>
        </div>
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
