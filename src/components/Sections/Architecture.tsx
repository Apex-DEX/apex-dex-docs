import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'

const ecosystem = `flowchart TB
  subgraph users["Users"]
    U[Trader or LP]
  end
  subgraph client["Client app"]
    UI[React Vite FSD Wagmi]
  end
  subgraph chain["Sepolia"]
    RPC[JSON-RPC and WebSocket]
    SC[ApexFactory ApexPair ApexRouter]
  end
  subgraph data["Indexing and API"]
    IDX[Go indexer]
    API[NestJS API]
    PG[PostgreSQL]
    RD[Redis]
  end
  U --> UI
  UI -->|signed txs| SC
  UI -->|REST| API
  SC --> RPC
  IDX -->|fetch blocks| RPC
  IDX -->|raw blocks logs| PG
  IDX -->|checkpoint| PG
  API --> PG
  API --> RD`

const components = `flowchart LR
  subgraph onchain["Onchain"]
    F[ApexFactory]
    P[ApexPair pools]
    R[ApexRouter]
  end
  subgraph offchain["Offchain"]
    CO[Coordinator]
    CH[block channel]
    W[Worker pool]
    BR[BlockRepository]
    CP[CheckpointRepository]
  end
  F --> P
  R --> P
  CO --> CH
  CH --> W
  W --> BR
  W --> CP`

export function Architecture() {
  return (
    <article className="pb-20 space-y-14 text-gray-400 text-sm leading-relaxed">
      <SectionHeader
        title="System architecture"
        description="Apex DEX is a modular stack: Uniswap V2–style contracts on Sepolia, a Go service that ingests chain data into PostgreSQL, a NestJS API for analytics and UI queries, and a React (FSD) frontend. This page maps responsibilities and data paths—without mixing in features that belong to other layers."
        badge="Platform"
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Ecosystem map</h2>
        <p>
          The UI talks to the chain for anything that changes state (swap, add/remove liquidity) and to the HTTP API for lists,
          history, TVL, prices, and pool metadata derived from indexed events. The Go indexer does not serve public HTTP in the
          reference architecture—it writes canonical raw chain rows that the API and workers can consume.
        </p>
        <MermaidDiagram chart={ecosystem} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Trust and process boundaries</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-gray-200">Authoritative execution</strong> happens only inside EVM contracts. Prices implied by
            reserves are final on-chain; off-chain figures are best-effort projections from indexed state.
          </li>
          <li>
            <strong className="text-gray-200">Indexer</strong> is an append-oriented pipeline: blocks, transactions, and logs are
            stored idempotently so replays and catch-up do not duplicate rows.
          </li>
          <li>
            <strong className="text-gray-200">API layer</strong> aggregates for UX (pairs, tokens, 24h volume, APR, TVL). Those
            metrics should be documented per endpoint in Swagger; they depend on schema and jobs maintained in the backend repo.
          </li>
          <li>
            <strong className="text-gray-200">Redis</strong> is used for caching and (where configured) job queues such as BullMQ,
            reducing load on PostgreSQL for hot read paths.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Contract surface vs. off-chain services</h2>
        <p>
          <strong className="text-gray-200">ApexFactory</strong> creates pair contracts deterministically (CREATE2).{' '}
          <strong className="text-gray-200">ApexPair</strong> holds reserves, mints LP ERC20, executes swaps under the constant
          product invariant with a 0.3% fee. <strong className="text-gray-200">ApexRouter</strong> is the user-facing router for
          multi-hop swaps and liquidity math helpers. <strong className="text-gray-200">ApexLibrary</strong> (periphery) exposes pure
          math used off-chain and by the router for quotes.
        </p>
        <MermaidDiagram chart={components} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Shared PostgreSQL schema</h2>
        <p>
          TypeORM migrations in the NestJS backend own the relational schema. The Go indexer persists into the same database:
          tables such as <code className="text-purple-300">raw_blocks</code>, <code className="text-purple-300">raw_transactions</code>
          , and <code className="text-purple-300">raw_logs</code> (names per backend migrations) plus the{' '}
          <code className="text-purple-300">indexer_state</code> checkpoint row. Keeping migrations in one service avoids schema drift.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">5. Where to read next</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-gray-200">End-to-end flows</strong> — sequence-style diagrams for swap, liquidity, reads, and
            ingestion.
          </li>
          <li>
            <strong className="text-gray-200">Go indexer</strong> — coordinator, worker pool, RPC failover, checkpoints.
          </li>
          <li>
            <strong className="text-gray-200">Backend API</strong> — REST map and aggregation responsibilities.
          </li>
          <li>
            <strong className="text-gray-200">Frontend (FSD)</strong> — how pages compose entities, features, and widgets.
          </li>
        </ul>
      </section>
    </article>
  )
}
