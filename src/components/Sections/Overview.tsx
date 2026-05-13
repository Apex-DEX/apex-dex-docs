import { BookOpen, Code2, Database, ExternalLink, LayoutGrid, Server, Zap } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'
import { APEX_CONFIG } from '../../config'

const highLevel = `flowchart LR
  U[Users]
  FE[React FSD UI]
  API[NestJS API]
  IDX[Go indexer]
  DB[Postgres]
  RD[Redis]
  CH[Sepolia contracts]
  U --> FE
  FE -->|REST| API
  FE -->|wallet txs| CH
  API --> DB
  API --> RD
  IDX --> DB
  IDX --> CH`

interface OverviewProps {
  setSection: (id: string) => void
}

const repos = [
  {
    title: 'Smart contracts',
    desc: 'Solidity AMM (Uniswap V2 compatible), Foundry toolchain.',
    href: APEX_CONFIG.links.github.contracts,
    icon: Code2,
    section: 'contracts' as const,
  },
  {
    title: 'Go indexer',
    desc: 'Block/log ingestion, checkpoints, RPC failover.',
    href: APEX_CONFIG.links.github.indexer,
    icon: Database,
    section: 'indexer' as const,
  },
  {
    title: 'Backend API',
    desc: 'NestJS + TypeORM + Redis/BullMQ integrations.',
    href: APEX_CONFIG.links.github.backend,
    icon: Server,
    section: 'backend' as const,
  },
  {
    title: 'Frontend interface',
    desc: 'React + Vite + Wagmi/RainbowKit, FSD structure.',
    href: APEX_CONFIG.links.github.frontend,
    icon: LayoutGrid,
    section: 'frontend' as const,
  },
]

export function Overview({ setSection }: OverviewProps) {
  return (
    <article className="pb-20 space-y-16 text-gray-400 text-sm leading-relaxed">
      <SectionHeader
        title="Apex DEX documentation"
        description="Apex is a modular Sepolia testnet DEX: V2-style contracts for swaps and liquidity, a Go indexer that mirrors chain state into PostgreSQL, a NestJS API that powers analytics endpoints, and a Feature-Sliced React client. This site explains how the pieces fit together and which repository owns each concern."
        badge="Ecosystem"
        icon={BookOpen}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">End-to-end picture</h2>
        <p>
          Anything that mutates reserves is an on-chain transaction signed in the user wallet. Anything that lists pools, renders
          historical swaps, or surfaces TVL/volume/APR flows through the API backed by indexed rows (and optional Redis caches).
        </p>
        <MermaidDiagram chart={highLevel} />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Repositories</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {repos.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-[#131A2A] p-5 flex flex-col gap-3 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-300">
                  <r.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{r.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{r.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> GitHub
                </a>
                <button
                  type="button"
                  onClick={() => setSection(r.section)}
                  className="text-xs font-semibold text-gray-400 hover:text-white underline-offset-2 hover:underline"
                >
                  Open docs section
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Sepolia deployment (reference)</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10 text-xs md:text-sm">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-gray-200">
              <tr>
                <th className="p-3">Contract</th>
                <th className="p-3">Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-3 text-white font-medium">ApexFactory</td>
                <td className="p-3 font-mono text-purple-200 break-all">
                  <a
                    className="hover:underline"
                    href={`${APEX_CONFIG.links.explorer}/address/${APEX_CONFIG.contracts[0].address}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {APEX_CONFIG.contracts[0].address}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">ApexRouter</td>
                <td className="p-3 font-mono text-purple-200 break-all">
                  <a
                    className="hover:underline"
                    href={`${APEX_CONFIG.links.explorer}/address/${APEX_CONFIG.contracts[1].address}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {APEX_CONFIG.contracts[1].address}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setSection('architecture')}
          className="text-left rounded-2xl border border-white/10 bg-linear-to-br from-purple-500/10 to-transparent p-6 hover:border-purple-500/30 transition-colors"
        >
          <Zap className="w-8 h-8 text-purple-300 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Architecture deep dive</h3>
          <p className="text-xs text-gray-500">Layered map, trust boundaries, shared schema.</p>
        </button>
        <button
          type="button"
          onClick={() => setSection('flows')}
          className="text-left rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/10 to-transparent p-6 hover:border-blue-500/30 transition-colors"
        >
          <BookOpen className="w-8 h-8 text-blue-300 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Sequence flows</h3>
          <p className="text-xs text-gray-500">Swaps, liquidity, reads, ingestion.</p>
        </button>
      </section>
    </article>
  )
}
