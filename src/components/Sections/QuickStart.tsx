import { useState } from 'react';
import { Terminal, Code2, Play, CheckCircle2, Copy, Zap, Activity } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { APEX_CONFIG } from '../../config';

export function QuickStart() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Clone Ecosystem Repositories",
      description: "Clone all four core repositories to your local machine.",
      commands: [
        `git clone ${APEX_CONFIG.links.github.frontend}`,
        `git clone ${APEX_CONFIG.links.github.backend}`,
        `git clone ${APEX_CONFIG.links.github.indexer}`,
        `git clone ${APEX_CONFIG.links.github.contracts}`
      ],
      icon: Code2,
      color: "blue"
    },
    {
      id: 2,
      title: "Infrastructure Setup",
      description: "Spin up the required database and cache services using Docker.",
      commands: [
        "docker-compose up -d postgres redis"
      ],
      icon: Activity,
      color: "pink"
    },
    {
      id: 3,
      title: "Environment Configuration",
      description: "Set up the local environment variables for the backend and indexer.",
      commands: [
        "cp .env.example .env",
        "# Update DB_PASSWORD and REDIS_HOST in .env"
      ],
      icon: Terminal,
      color: "amber"
    },
    {
      id: 4,
      title: "Launch Services",
      description: "Start the backend API and the Go Indexer to begin tracking Sepolia events.",
      commands: [
        "yarn start:dev # in backend",
        "go run main.go # in indexer"
      ],
      icon: Play,
      color: "emerald"
    }
  ];

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(id);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="pb-20">
      <SectionHeader 
        title="Quick Start Guide"
        description="Follow these steps to set up the entire Apex DEX ecosystem on your local machine in less than 10 minutes."
        badge="Developer Guide"
        icon={Zap}
      />

      <div className="space-y-8 max-w-4xl">
        {steps.map((step) => (
          <div key={step.id} className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-blue-500/30 transition-all rounded-full"></div>
            
            <div className="bg-[#131A2A] border border-white/5 rounded-[2rem] p-8 transition-all hover:border-white/10 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500/10 flex items-center justify-center flex-shrink-0 border border-${step.color}-500/20`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-400`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                      <span className="text-sm font-mono text-gray-500">0{step.id}.</span> {step.title}
                    </h3>
                    {copiedStep === step.id && (
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1 animate-in fade-in zoom-in">
                        <CheckCircle2 className="w-3 h-3" /> Copied!
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="relative group/code">
                    <div className="bg-black/40 rounded-2xl p-5 font-mono text-sm text-blue-300 border border-white/5 overflow-x-auto">
                      {step.commands.map((cmd, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-gray-600 select-none">$</span>
                          <span>{cmd}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(step.commands.join('\n'), step.id)}
                      className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 opacity-0 group-hover/code:opacity-100 transition-all text-gray-400 hover:text-white"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Troubleshooting Section */}
      <div className="mt-20 p-10 bg-linear-to-br from-blue-500/5 to-transparent border border-blue-500/10 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <PrereqItem title="Node.js 18+" desc="Required for Backend and Frontend Interface." />
          <PrereqItem title="Go 1.21+" desc="Required for the high-performance Indexer." />
          <PrereqItem title="Docker" desc="Essential for running Postgres and Redis clusters." />
        </div>
      </div>
    </div>
  );
}

function PrereqItem({ title, desc }: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-blue-400" />
        <h4 className="font-bold text-white text-sm">{title}</h4>
      </div>
      <p className="text-gray-500 text-xs leading-relaxed pl-6">{desc}</p>
    </div>
  );
}
