import { Code2, Zap, Database, Search, Filter, Activity, Terminal } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FlowArrow } from '../ui/FlowArrow';
import { APEX_CONFIG } from '../../config';

export function IndexerDocs() {
  return (
    <div className="pb-20">
      <SectionHeader 
        title="Go Indexer Pipeline"
        description="A precise mapping of how raw blockchain logs are transformed into structured financial analytics."
        badge="Data Pipeline"
        githubUrl={APEX_CONFIG.links.github.indexer}
        icon={Code2}
      />

      {/* Main Pipeline Logic Diagram */}
      <div className="bg-[#0d111c] border border-white/5 rounded-[2.5rem] p-10 lg:p-16 mb-20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        
        <div className="flex flex-col gap-12 relative max-w-4xl mx-auto">
          
          {/* Top Stage: Connection */}
          <div className="flex justify-center">
            <StageCard 
              icon={Terminal} 
              title="Blockchain Connector" 
              subtitle="WSS / JSON-RPC Listener" 
              color="blue"
            />
          </div>

          <FlowArrow direction="down" color="blue" length="10" />

          {/* Middle Stage: Parallel Processing */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 relative">
            <WorkerCard icon={Search} title="Swap Decoder" group="A" />
            <WorkerCard icon={Zap} title="Price Calculation" group="Logic" highlighted />
            <WorkerCard icon={Filter} title="Mint/Burn Parser" group="B" />
            
            {/* Connecting Lines Background */}
            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[500px] h-20 border-x border-t border-dashed border-white/10 -z-10 rounded-t-[40px] opacity-30"></div>
          </div>

          <FlowArrow direction="down" color="amber" length="10" />

          {/* Bottom Stage: Database */}
          <div className="flex justify-center">
            <StageCard 
              icon={Database} 
              title="Persistent Storage" 
              subtitle="PostgreSQL Batch Write" 
              color="amber"
            />
          </div>
        </div>
      </div>

      {/* Deep Technical Deep-Dive */}
      <div className="space-y-16 mt-24">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 text-center">Execution Loop Architecture</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <DetailCard 
              title="Catch-up Sync" 
              color="blue"
              code={`// Sync Logic\nfromBlock := db.GetLast() + 1\ntoBlock := rpc.GetLatest()\nindexer.Backfill(from, to)`}
              description="On startup, the Indexer queries PostgreSQL for the last processed block and fetches all missed events from the RPC node."
            />
            <DetailCard 
              title="Live Subscription" 
              color="emerald"
              description="Once synced, it opens an eth_subscribe channel. Every new block header triggers a worker group to check for Factory/Pair events."
              items={['Zero-latency capture', 'Auto-reconnection']}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 text-center">USD Pricing Discovery</h2>
          <div className="bg-linear-to-r from-blue-900/10 to-transparent p-10 border border-blue-500/10 rounded-[2.5rem]">
            <div className="grid md:grid-cols-3 gap-8">
              <StepItem step="1" title="Anchor Search" desc="Identifies if one of the tokens is a stable anchor (USDT/USDC)." />
              <StepItem step="2" title="Path Tracing" desc="Traces a path through WETH if no direct stable pair exists." />
              <StepItem step="3" title="Validation" desc="Cross-references multiple pools for precision and outlier protection." />
            </div>
          </div>
        </section>

        <section className="pb-12 text-center max-w-3xl mx-auto">
          <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
               <Activity className="w-4 h-4" /> Handling Chain Re-organizations
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Indexer maintains a 20-block deep local cache. Mismatched block hashes trigger an automatic rollback and re-processing to ensure data integrity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function StageCard({ icon: Icon, title, subtitle, color }: any) {
  const colors: any = {
    blue: "border-blue-500/30",
    amber: "border-amber-500/30"
  };
  return (
    <div className={`w-72 p-6 bg-[#131A2A] border ${colors[color]} rounded-2xl text-center relative z-10 shadow-xl`}>
      <Icon className={`w-10 h-10 mx-auto mb-4 text-${color}-400`} />
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-[10px] text-gray-500 uppercase font-mono">{subtitle}</p>
    </div>
  );
}

function WorkerCard({ icon: Icon, title, group, highlighted }: any) {
  return (
    <div className={`w-48 p-5 bg-[#131A2A] border ${highlighted ? 'border-emerald-500/30 shadow-emerald-500/5' : 'border-white/5'} rounded-2xl text-center relative shadow-lg`}>
      <Icon className={`w-8 h-8 ${highlighted ? 'text-emerald-400 animate-pulse' : 'text-gray-400'} mx-auto mb-3`} />
      <h5 className="text-xs font-bold text-white mb-1">{title}</h5>
      <p className="text-[9px] text-gray-500">Group {group}</p>
    </div>
  );
}

function DetailCard({ title, color, code, description, items }: any) {
  const colors: any = {
    blue: "text-blue-400",
    emerald: "text-emerald-400"
  };
  return (
    <div className="p-8 bg-[#131A2A]/40 border border-white/5 rounded-3xl">
      <h4 className={`${colors[color]} font-bold uppercase tracking-widest text-xs mb-4`}>{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      {code && (
        <div className="bg-black/20 p-4 rounded-xl font-mono text-[10px] text-gray-500 border border-white/5 whitespace-pre">
          {code}
        </div>
      )}
      {items && (
        <ul className="space-y-2 text-xs text-gray-500">
          {items.map((it: string) => (
            <li key={it} className="flex items-center gap-2">
              <div className={`w-1 h-1 rounded-full bg-${color}-500`}></div>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StepItem({ step, title, desc }: any) {
  return (
    <div className="space-y-4">
      <div className="text-blue-400 font-bold text-xs uppercase">Step {step}: {title}</div>
      <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
