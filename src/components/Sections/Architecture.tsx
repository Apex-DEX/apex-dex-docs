import { Server, Database, Code2, Box, Activity, MousePointer2 } from 'lucide-react';
import { FlowArrow } from '../ui/FlowArrow';
import { SectionHeader } from '../ui/SectionHeader';

export function Architecture() {
  return (
    <div className="pb-20">
      <SectionHeader 
        title="Full Stack Architecture"
        description="A comprehensive map of the Apex DEX infrastructure, showing how data flows from the blockchain to your screen through our high-performance backend layers."
        badge="System Design"
      />

      {/* Vertical Connected Diagram */}
      <div className="bg-[#0d111c] border border-white/5 rounded-[3rem] p-8 lg:p-16 mb-20 shadow-2xl relative">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12 relative">
          
          {/* Layer 1: Frontend */}
          <div className="w-full flex flex-col items-center group">
            <ArchitectureCard 
              icon={MousePointer2} 
              title="Frontend Interface" 
              subtitle="React · Vite · FSD" 
              color="purple" 
            />
            <FlowArrow direction="down" label="HTTP / GraphQL Requests" color="purple" length="10" />
          </div>

          {/* Layer 2: API & Redis */}
          <div className="w-full flex justify-center gap-8 relative">
            <ArchitectureCard 
              icon={Server} 
              title="Nest.js API" 
              subtitle="Backend Logic" 
              color="blue" 
            />
            
            <div className="relative">
              <ArchitectureCard 
                icon={Activity} 
                title="Redis Service" 
                subtitle="Cache · BullMQ Jobs" 
                color="red" 
              />
              {/* Internal connection to API */}
              <div className="absolute left-[-20px] top-1/2 -translate-x-full -translate-y-1/2 flex items-center gap-2">
                 <div className="w-8 h-px bg-red-500/30 border-t border-dashed border-red-500/50"></div>
                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              </div>
            </div>
          </div>

          <FlowArrow direction="down" label="SQL Queries" color="blue" length="10" />

          {/* Layer 3: Storage & Indexer */}
          <div className="w-full flex justify-center gap-8 relative">
            <ArchitectureCard 
              icon={Database} 
              title="PostgreSQL" 
              subtitle="Primary Data Store" 
              color="amber" 
            />

            <div className="relative">
              <ArchitectureCard 
                icon={Code2} 
                title="Go Indexer" 
                subtitle="Event Observer" 
                color="blue" 
                className="bg-linear-to-b from-blue-600/20 to-blue-900/20"
              />
              {/* Connection to DB */}
              <div className="absolute left-[-20px] top-1/2 -translate-x-full -translate-y-1/2 flex items-center gap-2">
                 <div className="w-8 h-px bg-amber-500/30 border-t border-dashed border-amber-500/50"></div>
              </div>
            </div>
          </div>

          <FlowArrow direction="up" label="Real-time Log Subscriptions" color="pink" length="10" className="rotate-180" />

          {/* Layer 4: Blockchain */}
          <div className="w-full bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="flex flex-col items-center relative z-20">
              <Box className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Sepolia Ethereum Network</h3>
              <p className="text-sm text-gray-500 font-mono italic max-w-md mx-auto text-center">
                Decentralized State · Uniswap V2 Factory · Router · Liquidity Pools
              </p>
            </div>
            
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 left-1/4 w-px h-full bg-pink-500 border-l border-dashed"></div>
               <div className="absolute top-0 right-1/4 w-px h-full bg-blue-500 border-l border-dashed"></div>
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
              <FlowStep 
                phase="Phase A: Event Emission" 
                color="purple"
                description="The process starts when a user calls swap() on an Apex Pair contract. The EVM executes the constant product formula and emits a Swap event."
              />
              <FlowStep 
                phase="Phase B: Indexing & Enrichment" 
                color="blue"
                description="The Go Indexer picks up the event via its WebSocket subscription. It immediately fetches the tokenPrice to assign a USD value."
              />
            </div>
            <div className="space-y-8">
              <FlowStep 
                phase="Phase C: Query & Cache Layer" 
                color="amber"
                description="The Frontend requests OHLC data. The API first checks Redis. On a hit, response time is <5ms. On a miss, it aggregates SQL data."
              />
              <FlowStep 
                phase="Phase D: Visual Rendering" 
                color="emerald"
                description="The JSON payload is parsed by the client-side Datafeed and rendered into interactive candlestick charts."
              />
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
                Analytical queries are computed every 60 seconds and stored in Redis to prevent database exhaustion.
              </p>
              <div className="p-4 bg-black/20 rounded-xl font-mono text-[11px] border border-white/5">
                <span className="text-blue-400">GET</span> pool_stats_all
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-tighter">Reliable Background Jobs</h3>
              <p className="mb-4">
                Using BullMQ, we ensure that critical tasks are never lost. Redis acts as the broker for status and retries.
              </p>
              <div className="flex gap-3">
                 {['WAITING', 'ACTIVE', 'COMPLETED'].map(status => (
                   <div key={status} className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] font-bold">
                     {status}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function ArchitectureCard({ icon: Icon, title, subtitle, color, className = "" }: any) {
  const colors: any = {
    purple: "border-purple-500/30 text-purple-400",
    blue: "border-blue-500/40 text-blue-400",
    red: "border-red-500/40 text-red-400",
    amber: "border-amber-500/40 text-amber-400",
  };
  
  return (
    <div className={`w-64 bg-linear-to-b from-[#1B2236] to-[#131A2A] border rounded-3xl p-6 shadow-xl text-center relative z-10 transition-transform hover:scale-105 ${colors[color]} ${className}`}>
      <Icon className="w-10 h-10 mx-auto mb-4" />
      <h3 className="font-bold text-white mb-1 text-lg">{title}</h3>
      <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">{subtitle}</p>
    </div>
  );
}

function FlowStep({ phase, color, description }: any) {
  const colors: any = {
    purple: "text-purple-400",
    blue: "text-blue-400",
    amber: "text-amber-400",
    emerald: "text-emerald-400",
  };
  
  return (
    <div className="bg-[#131A2A]/40 border border-white/5 p-6 rounded-2xl">
      <h4 className={`${colors[color]} font-bold uppercase tracking-widest text-[10px] mb-3`}>{phase}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
