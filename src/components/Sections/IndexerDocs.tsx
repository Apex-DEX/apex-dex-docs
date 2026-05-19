import { Code2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'
import { APEX_CONFIG } from '../../config'

const pipeline = `flowchart TB
  subgraph inputs["Inputs"]
    WS[WebSocket newHeads]
    POL[HTTP polling loop]
  end
  subgraph coord["Coordinator"]
    CO[Merge heads and gap fill]
    FB[Fetch block with backoff]
  end
  subgraph buf["Backpressure"]
    CH[blockCh buffered channel]
  end
  subgraph pool["Worker pool"]
    WK[N parallel workers]
  end
  subgraph persist["Persistence"]
    PG[PostgreSQL]
    ST[indexer_state checkpoint]
  end
  WS --> CO
  POL --> CO
  CO --> FB
  FB --> CH
  CH --> WK
  WK --> PG
  WK --> ST`

const layers = `flowchart TB
  subgraph domain["Domain layer"]
    D[Entities and port interfaces]
  end
  subgraph application["Application layer"]
    A[Coordinator and workers]
  end
  subgraph infra["Infrastructure"]
    I[RPC client pgx redis]
  end
  A --> D
  I --> D`

export function IndexerDocs() {
  return (
    <article className="pb-20 space-y-14 text-gray-400 text-sm leading-relaxed">
      <SectionHeader
        title="Go indexer"
        description="The standalone indexer service (Go, Clean Architecture) streams Sepolia blocks into PostgreSQL: full block payloads with transactions and logs, written idempotently so WebSocket delivery, polling catch-up, and restarts never duplicate rows. It advances a shared checkpoint table that originated from the NestJS stack."
        badge="Ingestion"
        icon={Code2}
        githubUrl={APEX_CONFIG.links.github.indexer}
      />



      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Runtime pipeline</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong className="text-gray-200">Boot</strong> — read <code className="text-purple-300">indexer_state</code>; if empty,
            start from the current chain head; otherwise continue from <code className="text-purple-300">lastScannedBlock + 1</code>.
          </li>
          <li>
            <strong className="text-gray-200">Dual drivers</strong> — WebSocket <code className="text-purple-300">newHeads</code> for
            low-latency notifications plus an HTTP loop (default ~3s) that compares the latest head with the checkpoint to close
            gaps after downtime.
          </li>
          <li>
            <strong className="text-gray-200">Fetch</strong> — each target height is retrieved through the chain adapter with retry
            (for example 1s → 2s → 4s backoff) and multi-RPC failover.
          </li>
          <li>
            <strong className="text-gray-200">Publish</strong> — block numbers enter a buffered channel (default capacity 100) so
            producers block instead of spawning unbounded goroutines when workers fall behind.
          </li>
          <li>
            <strong className="text-gray-200">Persist</strong> — each worker opens a SQL transaction, inserts the block, batch-inserts
            transactions and logs with <code className="text-purple-300">ON CONFLICT DO NOTHING</code>, commits, then upserts the
            checkpoint row.
          </li>
        </ol>
        <MermaidDiagram chart={pipeline} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Clean architecture layers</h2>
        <p>
          Domain types are free of vendor imports: reserves and hashes use <code className="text-purple-300">*big.Int</code>, and
          repositories declare behaviour without referencing pgx. Application services orchestrate goroutines; infrastructure packages
          contain the concrete Ethereum and PostgreSQL clients.
        </p>
        <MermaidDiagram chart={layers} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">RPC resilience</h2>
        <p>
          Configuration accepts an ordered list of RPC URLs (HTTP or WebSocket). Dial attempts time out per node; subsequent reads
          iterate until one node answers, giving automatic failover when a provider degrades.
        </p>
      </section>



      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Redis</h2>
        <p>
          A Redis client is initialised for future phases (for example caching decoded events or publishing metrics). Hot paths in the
          ingestion MVP focus on PostgreSQL durability.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-white/10 bg-[#131A2A] p-6">
        <h3 className="text-lg font-semibold text-white">Failure handling</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>RPC errors bubble through backoff; sustained outages stall the channel until nodes recover.</li>
          <li>
            Worker persistence errors are logged; the polling loop revisits the same heights, relying on idempotent inserts to converge.
          </li>
          <li>
            Reorgs are modelled in domain entities (<code className="text-purple-300">IsReorg</code>) with repository helpers to delete
            blocks above a rolled-back height—wire-up depth depends on the release branch.
          </li>
        </ul>
      </section>
    </article>
  )
}
