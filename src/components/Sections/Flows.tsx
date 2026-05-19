import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'

const swapReadWrite = `flowchart TB
  User((User))
  UI[Frontend]
  RPC[Sepolia RPC]
  Router[ApexRouter]
  Pair[ApexPair]
  
  User -- "Enter amount select tokens" --> UI
  UI -- "eth_call quote reserves router" --> RPC
  RPC -- "Expected output price impact" --> UI
  User -- "Confirm swap" --> UI
  UI -- "Wallet signing request" --> User
  User -- "Signed swapExact tx" --> RPC
  RPC -- "Execute swap path" --> Router
  Router -- "swap transfer tokens" --> Pair
  Pair -- "Swap and Sync events" --> RPC`

const addLiquidity = `flowchart TB
  User((User))
  UI[Frontend]
  T[ERC20 tokens]
  Router[ApexRouter]
  Pair[ApexPair]
  
  User -- "Choose pair and amounts" --> UI
  UI -- "Approve token A if needed" --> User
  UI -- "Approve token B if needed" --> User
  User -- "Confirm addLiquidity" --> UI
  UI -- "addLiquidity with deadline" --> Router
  Router -- "transferFrom user to Pair" --> T
  Router -- "mint LP to user" --> Pair`

const readAnalytics = `flowchart TB
  User((User))
  UI[Frontend]
  API[NestJS API]
  PG[(PostgreSQL)]
  RD[(Redis)]
  
  User -- "Open pools tokens chart data" --> UI
  UI -- "GET exchange pairs etc" --> API
  API -- "Optional cache read" --> RD
  API -- "SQL aggregates joins cache miss" --> PG
  PG -- "Rows" --> API
  API -- "Populate cache when used" --> RD
  API -- "JSON payload" --> UI`

const indexerIngest = `flowchart TB
  RPC[Ethereum node]
  CO[Coordinator]
  CH[[blockCh]]
  W[Workers]
  PG[(PostgreSQL)]
  
  RPC -- "newHeads WS or head poll" --> CO
  CO -- "eth_getBlockByNumber" --> RPC
  CO -- "enqueue block number" --> CH
  CH -- "block job" --> W
  W -- "Save block txs logs txn" --> PG
  W -- "Update indexer_state" --> PG`

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
