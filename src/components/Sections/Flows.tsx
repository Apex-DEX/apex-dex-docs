import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'

const swapReadWrite = `sequenceDiagram
  participant User
  participant UI as Frontend
  participant RPC as Sepolia RPC
  participant Router as ApexRouter
  participant Pair as ApexPair
  User->>UI: Enter amount select tokens
  UI->>RPC: eth_call quote reserves router
  RPC-->>UI: Expected output price impact
  User->>UI: Confirm swap
  UI->>User: Wallet signing request
  User->>RPC: Signed swapExact tx
  RPC->>Router: Execute swap path
  Router->>Pair: swap transfer tokens
  Pair-->>RPC: Swap and Sync events`

const addLiquidity = `sequenceDiagram
  participant User
  participant UI as Frontend
  participant T as ERC20 tokens
  participant Router as ApexRouter
  participant Pair as ApexPair
  User->>UI: Choose pair and amounts
  UI->>User: Approve token A if needed
  UI->>User: Approve token B if needed
  User->>UI: Confirm addLiquidity
  UI->>Router: addLiquidity with deadline and mins
  Router->>T: transferFrom user to Pair
  Router->>Pair: mint LP to user`

const readAnalytics = `sequenceDiagram
  participant User
  participant UI as Frontend
  participant API as NestJS API
  participant PG as PostgreSQL
  participant RD as Redis
  User->>UI: Open pools tokens chart data
  UI->>API: GET exchange pairs etc
  API->>RD: Optional cache read
  alt cache miss
    API->>PG: SQL aggregates joins
    PG-->>API: Rows
    API->>RD: Populate cache when used
  end
  API-->>UI: JSON payload`

const indexerIngest = `sequenceDiagram
  participant RPC as Ethereum node
  participant CO as Coordinator
  participant CH as blockCh
  participant W as Workers
  participant PG as PostgreSQL
  loop Live and catch-up
    RPC-->>CO: newHeads WS or head poll
    CO->>RPC: eth_getBlockByNumber
    CO->>CH: enqueue block number
  end
  CH-->>W: block job
  W->>PG: Save block txs logs txn
  W->>PG: Update indexer_state`

export function Flows() {
  return (
    <article className="pb-20 space-y-16 text-gray-400 text-sm leading-relaxed">
      <SectionHeader
        title="End-to-end flows"
        description="Concrete message and data flows across the wallet UI, RPC, contracts, API, cache, database, and the Go indexer. Use these diagrams when onboarding engineers or tracing bugs across layers."
        badge="Reference"
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Swap: quote → sign → mine</h2>
        <p>
          Quotes typically read pair <code className="text-purple-300">getReserves</code> or router view functions via{' '}
          <code className="text-purple-300">eth_call</code>. Execution is always a user-signed transaction hitting the router, which
          pulls tokens and invokes <code className="text-purple-300">swap</code> on each hop pair.
        </p>
        <MermaidDiagram chart={swapReadWrite} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Add liquidity: approvals → router → mint</h2>
        <p>
          The router ensures the correct ratio against current reserves, transfers assets from the user into the pair, and calls{' '}
          <code className="text-purple-300">mint</code> so the user receives LP ERC20 representing their share of the pool.
        </p>
        <MermaidDiagram chart={addLiquidity} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Read-only analytics path</h2>
        <p>
          Screens such as pool lists, token tables, TVL, 24h volume, and transaction history call the NestJS REST surface. The API
          reads PostgreSQL (and optionally Redis) but never signs chain transactions on behalf of users.
        </p>
        <MermaidDiagram chart={readAnalytics} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Indexer ingestion pipeline</h2>
        <p>
          The coordinator merges WebSocket <code className="text-purple-300">newHeads</code> notifications with a polling loop so gaps
          are backfilled. Workers consume a buffered channel, persist full blocks in one database transaction, then advance the
          checkpoint stored in <code className="text-purple-300">indexer_state</code>.
        </p>
        <MermaidDiagram chart={indexerIngest} />
      </section>

      <section className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <h3 className="text-lg font-semibold text-amber-200">Operational notes</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Remove liquidity mirrors add: approve LP → router burns LP → pair releases underlying tokens.</li>
          <li>
            Pair creation flow: anyone can call <code className="text-purple-300">createPair</code> on the factory; the UI may
            filter to curated lists while the indexer ingests all deployed pairs that appear in logs.
          </li>
          <li>Reorgs: domain entities include parent-hash checks; repositories support deleting blocks above a height when rolling back.</li>
        </ul>
      </section>
    </article>
  )
}
