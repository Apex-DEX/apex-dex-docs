import { LayoutGrid } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { MermaidDiagram } from '../ui/MermaidDiagram'
import { APEX_CONFIG } from '../../config'

const fsdLayers = `flowchart TB
  subgraph app["app"]
    A1[Providers routes styles]
  end
  subgraph pages["pages"]
    P1[SwapPage PoolsPage etc]
  end
  subgraph widgets["widgets"]
    W1[swap-widget liquidity-widget header]
  end
  subgraph features["features"]
    F1[swap liquidity flows]
  end
  subgraph entities["entities"]
    E1[token pool models and UI]
  end
  subgraph shared["shared"]
    S1[ui kit api client web3 utils]
  end
  app --> pages
  pages --> widgets
  widgets --> features
  features --> entities
  entities --> shared`

export function FrontendDocs() {
  return (
    <article className="pb-20 space-y-12 text-gray-400 text-sm leading-relaxed">
      <SectionHeader
        title="Frontend (Feature-Sliced Design)"
        description="The trading interface is a React + Vite SPA organized with Feature-Sliced Design: strict top-down imports, isolated Web3 logic, and reusable UI primitives. Wallet connectivity uses RainbowKit/Wagmi; reads combine REST calls to the Nest API with direct RPC calls for live reserves and gas estimation."
        badge="Client"
        icon={LayoutGrid}
        githubUrl={APEX_CONFIG.links.github.frontend}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Layering rules</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-gray-200">app</strong> wires global providers (query client, wagmi config, theme).
          </li>
          <li>
            <strong className="text-gray-200">pages</strong> compose widgets per route; they stay thin.
          </li>
          <li>
            <strong className="text-gray-200">widgets</strong> orchestrate user-visible panels (swap card, pool tables).
          </li>
          <li>
            <strong className="text-gray-200">features</strong> encapsulate user actions (submit swap, approve spender).
          </li>
          <li>
            <strong className="text-gray-200">entities</strong> hold domain models, hooks, and entity-specific UI (token row).
          </li>
          <li>
            <strong className="text-gray-200">shared</strong> contains design-system primitives, HTTP utilities, and ABI helpers.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Dependency diagram</h2>
        <MermaidDiagram chart={fsdLayers} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Runtime interactions</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong className="text-gray-200">Wallet session</strong> — Wagmi manages chain id, accounts, and contract writes. The UI
            must stay on Sepolia for the deployed Apex contracts.
          </li>
          <li>
            <strong className="text-gray-200">Quotes & validation</strong> — features call router/pair views via public RPC; errors
            surface in the widget state machine (loading → ready → submit).
          </li>
          <li>
            <strong className="text-gray-200">Analytics</strong> — pools/tokens/history pages call the NestJS base URL configured at
            build time; failures degrade gracefully with retry messaging.
          </li>
        </ol>
      </section>

      <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 space-y-2">
        <h3 className="text-lg font-semibold text-violet-200">Product note</h3>
        <p>
          The public roadmap tracks UX gaps (for example stabilizing the swap flow and improving fee previews). When documentation
          diverges from production behaviour, treat the GitHub issues and roadmap as the source of truth for release status.
        </p>
      </section>
    </article>
  )
}
