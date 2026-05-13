import { Terminal, Github, Code2, Play, CheckCircle2, Copy } from 'lucide-react'

export function QuickStart() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const steps = [
    {
      title: 'Clone the Ecosystem',
      desc: 'Apex is a modular DEX consisting of four primary repositories. Clone them into a single workspace.',
      command: 'git clone https://github.com/Apex-DEX/apex-dex-interface.git\ngit clone https://github.com/Apex-DEX/apex-dex-backend.git\ngit clone https://github.com/Apex-DEX/apex-dex-indexer.git\ngit clone https://github.com/Apex-DEX/apex-dex-contracts.git',
    },
    {
      title: 'Setup Infrastructure',
      desc: 'Ensure you have PostgreSQL and Redis running locally. Create a database named apex-dex-db-dev.',
      command: '# Start Postgres and Redis via Docker\ndocker run --name apex-db -e POSTGRES_PASSWORD=yourpass -p 5432:5432 -d postgres\ndocker run --name apex-redis -p 6379:6379 -d redis',
    },
    {
      title: 'Environment Configuration',
      desc: 'Copy the .env.example files in each repository to .env and fill in your Sepolia RPC URL and private keys.',
      command: 'cp .env.example .env',
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
        Quick Start Guide
      </h1>
      <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl">
        Get the entire Apex DEX ecosystem running on your local machine in minutes.
      </p>

      {/* Installation Steps */}
      <div className="space-y-12 mb-20">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.desc}</p>
            <div className="bg-[#0d111c] border border-white/5 rounded-2xl p-6 relative group">
              <pre className="text-xs font-mono text-blue-300 overflow-x-auto">
                {step.command}
              </pre>
              <button 
                onClick={() => copyToClipboard(step.command)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
              >
                <Copy className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Matrix */}
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <Terminal className="w-6 h-6 text-emerald-400" /> Running the Services
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-purple-400" />
            </div>
            <h4 className="font-bold text-white">Frontend (Interface)</h4>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-gray-500">React app built with Vite and Tailwind.</p>
            <div className="bg-[#0d111c] p-3 rounded-xl font-mono text-[10px] text-gray-400">
              yarn install && yarn dev
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            <h4 className="font-bold text-white">Backend (Nest.js)</h4>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-gray-500">Node.js API for historical data and charts.</p>
            <div className="bg-[#0d111c] p-3 rounded-xl font-mono text-[10px] text-gray-400">
              npm install && npm run dev
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <h4 className="font-bold text-white">Go Indexer</h4>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-gray-500">Blockchain event listener and processor.</p>
            <div className="bg-[#0d111c] p-3 rounded-xl font-mono text-[10px] text-gray-400">
              go run main.go
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#131A2A] border border-white/5 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-pink-400" />
            </div>
            <h4 className="font-bold text-white">Contracts (Foundry)</h4>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-gray-500">Smart contract development and scripts.</p>
            <div className="bg-[#0d111c] p-3 rounded-xl font-mono text-[10px] text-gray-400">
              forge build && forge test
            </div>
          </div>
        </div>
      </div>

      {/* Completion */}
      <div className="p-8 bg-linear-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 rounded-3xl flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Ecosystem Live!</h3>
          <p className="text-sm text-emerald-100/60 leading-relaxed">
            Once all services are running, your local frontend will start receiving real-time data indexed by your local Go service.
          </p>
        </div>
      </div>
    </div>
  )
}

function Server({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  )
}
