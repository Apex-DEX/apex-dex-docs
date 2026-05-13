import { useState } from 'react'
import { Terminal, Code2, Play, CheckCircle2, Copy, Zap, Activity, Database } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { APEX_CONFIG } from '../../config'

const stepShell: Record<string, { box: string; icon: string }> = {
  blue: { box: 'bg-blue-500/10 border-blue-500/25', icon: 'text-blue-400' },
  pink: { box: 'bg-pink-500/10 border-pink-500/25', icon: 'text-pink-400' },
  amber: { box: 'bg-amber-500/10 border-amber-500/25', icon: 'text-amber-400' },
  emerald: { box: 'bg-emerald-500/10 border-emerald-500/25', icon: 'text-emerald-400' },
  violet: { box: 'bg-violet-500/10 border-violet-500/25', icon: 'text-violet-400' },
}

export function QuickStart() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      title: 'Clone the repositories',
      description: 'Workspaces stay independent so contracts, indexer, API, and UI can version separately.',
      commands: [
        `git clone ${APEX_CONFIG.links.github.contracts}`,
        `git clone ${APEX_CONFIG.links.github.backend}`,
        `git clone ${APEX_CONFIG.links.github.indexer}`,
        `git clone ${APEX_CONFIG.links.github.frontend}`,
      ],
      icon: Code2,
      color: 'blue' as const,
    },
    {
      id: 2,
      title: 'Start PostgreSQL and Redis',
      description: 'Use your compose file or managed services; both the API and indexer expect reachable hosts.',
      commands: ['docker compose up -d postgres redis', '# or: docker-compose up -d postgres redis'],
      icon: Activity,
      color: 'pink' as const,
    },
    {
      id: 3,
      title: 'Configure environment files',
      description: 'Copy backend and indexer examples, then align DB name, credentials, Redis URL, and RPC endpoints.',
      commands: [
        'cd apex-dex-backend && cp .env.example .env',
        'cd apex-dex-indexer && cp .env.example .env  # if provided',
        'cp config/config.example.yml config/config.local.yml   # indexer',
      ],
      icon: Terminal,
      color: 'amber' as const,
    },
    {
      id: 4,
      title: 'Run database migrations (backend)',
      description: 'Migrations create raw ingestion tables and indexer_state consumed by the Go service.',
      commands: [
        'cd apex-dex-backend',
        'yarn migration:run',
        '# when schema changes:',
        '# yarn migration:generate src/modules/database/migrations/<Name>',
      ],
      icon: Database,
      color: 'violet' as const,
    },
    {
      id: 5,
      title: 'Launch indexer and API',
      description: 'Start the indexer first if you need historical backfill before hitting API endpoints.',
      commands: [
        'cd apex-dex-indexer && make run   # or: go run ./cmd/indexer',
        'cd apex-dex-backend && yarn start:dev',
      ],
      icon: Play,
      color: 'emerald' as const,
    },
    {
      id: 6,
      title: 'Launch the frontend',
      description: 'Point Vite env vars at your local API and Sepolia RPC; connect a funded test wallet.',
      commands: ['cd apex-dex-interface && cp .env.example .env', 'yarn install && yarn dev'],
      icon: Zap,
      color: 'blue' as const,
    },
  ]

  const copyToClipboard = (text: string, id: number) => {
    void navigator.clipboard.writeText(text)
    setCopiedStep(id)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  return (
    <div className="pb-20">
      <SectionHeader
        title="Quick start"
        description="Minimal path to a working developer stack: infrastructure, migrations, long-running services, and the UI. Adjust commands to match each repository’s README if scripts differ between releases."
        badge="Developers"
        icon={Zap}
      />

      <div className="space-y-8 max-w-4xl">
        {steps.map((step) => {
          const shell = stepShell[step.color]
          return (
            <div key={step.id} className="relative group">
              <div className="absolute -left-3 top-0 bottom-0 w-1 rounded-full bg-white/5 group-hover:bg-purple-500/40 transition-colors" />
              <div className="bg-[#131A2A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${shell.box}`}
                  >
                    <step.icon className={`w-7 h-7 ${shell.icon}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        <span className="text-gray-500 font-mono text-sm mr-2">0{step.id}.</span>
                        {step.title}
                      </h3>
                      {copiedStep === step.id && (
                        <span className="text-[10px] font-bold text-emerald-400 uppercase flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3 h-3" /> Copied
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-5">{step.description}</p>
                    <div className="relative group/code">
                      <pre className="bg-black/50 rounded-xl p-4 font-mono text-xs md:text-sm text-blue-200 border border-white/10 overflow-x-auto whitespace-pre-wrap">
                        {step.commands.join('\n')}
                      </pre>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(step.commands.join('\n'), step.id)}
                        className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white opacity-0 group-hover/code:opacity-100 transition-opacity"
                        aria-label="Copy commands"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-blue-500/5">
        <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
        <ul className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
          <li>
            <strong className="text-gray-200 block mb-1">Node.js 18+</strong>
            Backend and frontend toolchains.
          </li>
          <li>
            <strong className="text-gray-200 block mb-1">Go 1.21+</strong>
            Indexer service and tooling (Makefile targets).
          </li>
          <li>
            <strong className="text-gray-200 block mb-1">Docker (optional)</strong>
            Local Postgres/Redis without host installs.
          </li>
        </ul>
      </div>
    </div>
  )
}
