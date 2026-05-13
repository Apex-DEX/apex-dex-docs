import { Droplet, Wallet, ExternalLink, ArrowRight, Zap } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

export function UserGuide() {
  const steps = [
    {
      title: 'Connect a wallet',
      description:
        'Use the connect control in the interface header. MetaMask, Coinbase Wallet, and WalletConnect are typical options. Switch the network to Sepolia so contract addresses and balances resolve correctly.',
      icon: Wallet,
      box: 'bg-blue-500/10 border-blue-500/25',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Fund the wallet',
      description:
        'Acquire Sepolia ETH from a public faucet, then mint or transfer test ERC20 assets listed in the Smart contracts page. Approvals and swaps spend gas in test ETH.',
      icon: Droplet,
      box: 'bg-purple-500/10 border-purple-500/25',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Trade or provide liquidity',
      description:
        'Swap uses the router path engine (direct pool or multi-hop through WETH/stable pools). Pools and analytics screens read aggregated data from the NestJS API while execution stays on-chain.',
      icon: Zap,
      box: 'bg-amber-500/10 border-amber-500/25',
      iconColor: 'text-amber-400',
    },
  ]

  return (
    <div className="pb-20 text-gray-400 text-sm leading-relaxed space-y-12">
      <SectionHeader
        title="Using the DEX"
        description="Operator-focused tour of the interface: wallet connectivity, test assets, and how read-only screens differ from signed transactions."
        badge="Product"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="p-6 rounded-2xl border border-white/10 bg-[#131A2A] hover:border-white/20 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${step.box}`}>
              <step.icon className={`w-6 h-6 ${step.iconColor}`} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-linear-to-r from-blue-500/10 to-purple-500/10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Need Sepolia ETH?</h3>
          <p className="text-gray-500 text-sm max-w-xl">
            Faucets change frequently; use your RPC provider dashboard or a reputable community faucet and verify the chain id is{' '}
            <code className="text-purple-300">11155111</code> before sending transactions.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.alchemy.com/faucets/ethereum-sepolia"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl border border-white/15 text-sm font-semibold text-white hover:bg-white/5 inline-flex items-center gap-2"
          >
            Alchemy <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.infura.io/faucet/sepolia"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white inline-flex items-center gap-2"
          >
            Infura <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
