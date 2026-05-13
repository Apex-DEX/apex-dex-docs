import { Layers, Code2, Zap, ShieldCheck, Cpu, Database } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

interface OverviewProps {
  setSection: (id: string) => void
}

export function Overview({ setSection }: OverviewProps) {
  return (
    <div className="pb-20">
      <SectionHeader 
        title="Apex DEX Documentation"
        description="A high-performance demonstration decentralized exchange architecture. Apex showcases how to build scalable DeFi applications using Uniswap V2, Nest.js, and Go."
        badge="v1.0.0 Alpha"
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <FeatureCard 
          onClick={() => setSection('architecture')}
          icon={Layers}
          title="Full Stack Architecture"
          desc="Explore our vertical flow from Blockchain events to Redis caching and React rendering."
          color="purple"
        />
        <FeatureCard 
          onClick={() => setSection('contracts')}
          icon={Code2}
          title="Smart Contracts"
          desc="Verified Sepolia addresses for the Factory, Router, and our suite of test assets."
          color="pink"
        />
        <FeatureCard 
          onClick={() => setSection('indexer')}
          icon={Database}
          title="Backend Indexer"
          desc="Deep dive into our Go-based event observer and USD price discovery engine."
          color="blue"
        />
        <FeatureCard 
          onClick={() => setSection('quick-start')}
          icon={Zap}
          title="Quick Start"
          desc="Get the entire ecosystem running locally with Docker and Yarn in minutes."
          color="amber"
        />
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">Key Protocol Features</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <FeatureItem 
            icon={ShieldCheck} 
            title="Safe Trading" 
            desc="Built-in slippage protection and transaction deadlines ensure users get the price they expect." 
          />
          <FeatureItem 
            icon={Cpu} 
            title="Standardized API" 
            desc="Full Uniswap V2 compatibility allows any DeFi tool to integrate with Apex out of the box." 
          />
          <FeatureItem 
            icon={Zap} 
            title="Real-time Analytics" 
            desc="High-performance indexing provides instant feedback on volume, TVL, and token price history." 
          />
        </div>
      </section>

      <div className="mt-20 p-10 bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-white/5 rounded-[3rem] text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to start building?</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Apex is open-source and modular. You can fork the individual repositories to build your own custom DEX or indexer pipeline.
        </p>
        <button 
          onClick={() => setSection('quick-start')}
          className="px-8 py-4 bg-white text-[#0d111c] rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-white/5"
        >
          Developer Quick Start
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ onClick, icon: Icon, title, desc, color }: any) {
  const colors: any = {
    purple: "group-hover:border-purple-500/30 group-hover:bg-purple-500/5 icon-purple-400",
    pink: "group-hover:border-pink-500/30 group-hover:bg-pink-500/5 icon-pink-400",
    blue: "group-hover:border-blue-500/30 group-hover:bg-blue-500/5 icon-blue-400",
    amber: "group-hover:border-amber-500/30 group-hover:bg-amber-500/5 icon-amber-400",
  };

  const iconColors: any = {
    purple: "text-purple-400 bg-purple-500/10",
    pink: "text-pink-400 bg-pink-500/10",
    blue: "text-blue-400 bg-blue-500/10",
    amber: "text-amber-400 bg-amber-500/10",
  };

  return (
    <button 
      onClick={onClick}
      className={`text-left bg-[#131A2A] border border-white/5 rounded-[2.5rem] p-8 transition-all group ${colors[color]}`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${iconColors[color]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </button>
  );
}

function FeatureItem({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-6 bg-[#131A2A]/40 border border-white/5 rounded-2xl">
      <Icon className="w-8 h-8 text-blue-400 mb-4" />
      <h4 className="text-white font-bold mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
