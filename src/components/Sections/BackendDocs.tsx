import { Server } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'
import { APEX_CONFIG } from '../../config'

const apiModules = `flowchart LR
  subgraph nest["NestJS API"]
    EX[Exchange module]
    DB[TypeORM entities]
    SW[Swagger]
    RD[Redis cache]
    BM[BullMQ workers]
  end
  subgraph store["PostgreSQL"]
    RAW[Raw ingest tables]
    APP[App domain tables]
  end
  EX --> DB
  DB --> RAW
  DB --> APP
  EX --> RD
  BM --> RD
  BM --> APP`

export function BackendDocs() {
  return (
    <article className="pb-20 space-y-12 text-gray-400 text-sm leading-relaxed">
      <SectionHeader
        title="Backend API (NestJS)"
        description="The NestJS service is the public HTTP surface for the React client. It owns TypeORM migrations (including raw indexer tables), exposes Swagger, and computes DeFi analytics such as TVL, 24h volume, and APR from indexed swap activity."
        badge="Service"
        icon={Server}
        githubUrl={APEX_CONFIG.links.github.backend}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Responsibilities</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Normalize indexed logs into exchange entities (pairs, tokens, trades).</li>
          <li>Expose versioned REST endpoints consumed by the interface.</li>
          <li>Run migrations so the Go indexer and API agree on table shapes.</li>
          <li>
            Optionally cache expensive aggregations in Redis and offload recurring work to BullMQ workers (exact wiring lives in the
            backend repo).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Documented REST endpoints</h2>
        <p>These routes are part of the shipped MVP surface (see project roadmap):</p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-white/5 text-gray-200">
              <tr>
                <th className="p-3 font-semibold">Method</th>
                <th className="p-3 font-semibold">Path</th>
                <th className="p-3 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-3 font-mono text-emerald-400">GET</td>
                <td className="p-3 font-mono text-purple-200">/exchange/pairs</td>
                <td className="p-3">List tradable pairs with headline stats.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-emerald-400">GET</td>
                <td className="p-3 font-mono text-purple-200">/exchange/history/:address</td>
                <td className="p-3">Historical swaps / activity for a pool address.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-emerald-400">GET</td>
                <td className="p-3 font-mono text-purple-200">/exchange/tokens</td>
                <td className="p-3">Token directory for analytics views.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-emerald-400">GET</td>
                <td className="p-3 font-mono text-purple-200">/exchange/price/:address</td>
                <td className="p-3">Latest reference price for a token contract.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Open <code className="text-purple-300">/api</code> (or the documented Swagger URL in your deployment) for live schemas—the
          handlers live in the backend repository.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Module view</h2>
        <MermaidDiagram chart={apiModules} />
      </section>

      <section className="space-y-4 rounded-2xl border border-white/10 bg-[#131A2A] p-6">
        <h3 className="text-lg font-semibold text-white">Redis & TLS reminders</h3>
        <p>
          Hosted Redis often exposes <code className="text-purple-300">rediss://</code> externally (TLS required) and{' '}
          <code className="text-purple-300">redis://</code> on private networks. Configure the Nest client to enable TLS only when
          the URL scheme demands it; mismatched TLS flags produce timeouts that look like network outages.
        </p>
      </section>
    </article>
  )
}
