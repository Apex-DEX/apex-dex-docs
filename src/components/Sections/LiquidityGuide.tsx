import { Droplet, Plus, Layers, Coins, TrendingUp, AlertCircle } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

export function LiquidityGuide() {
  const steps = [
    {
      title: 'Pick a pair and target ratio',
      desc: 'Liquidity follows the pool’s instantaneous price. The router quotes the second leg from on-chain reserves so deposits stay in sync with the constant product invariant.',
      icon: Coins,
      box: 'bg-blue-500/10 border-blue-500/25',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Approve and deposit',
      desc: 'Each ERC20 requires allowance to the router. After transfers succeed, the router calls mint on the pair, crediting LP tokens proportional to liquidity added versus existing reserves.',
      icon: Plus,
      box: 'bg-emerald-500/10 border-emerald-500/25',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Hold LP tokens',
      desc: 'LP positions are fungible ERC20 shares. They entitle holders to a fraction of the 0.3% swap fees that accrue to reserves until liquidity is removed.',
      icon: Layers,
      box: 'bg-purple-500/10 border-purple-500/25',
      iconColor: 'text-purple-400',
    },
  ]

  return (
    <div className="pb-20 text-gray-400 text-sm leading-relaxed space-y-12">
      <SectionHeader
        title="Liquidity guide"
        description="How add/remove liquidity interacts with the router, LP token accounting, fee accrual, and impermanent loss risk on V2-style pools."
        badge="Liquidity"
      />

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex gap-6 p-6 md:p-8 rounded-2xl border border-white/10 bg-[#131A2A] hover:border-white/20 transition-colors"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${step.box}`}
            >
              <step.icon className={`w-7 h-7 ${step.iconColor}`} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1">
                Phase {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <TrendingUp className="w-6 h-6 text-emerald-400 mb-3" />
          <h4 className="text-lg font-bold text-white mb-2">Fees</h4>
          <p>
            Trading fees remain inside the pool as reserve growth. Removing liquidity converts your LP share—including accumulated
            fees—back into the underlying token amounts at the then-current price.
          </p>
        </div>
        <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
          <AlertCircle className="w-6 h-6 text-red-400 mb-3" />
          <h4 className="text-lg font-bold text-white mb-2">Impermanent loss</h4>
          <p>
            If relative token prices diverge from your entry point, mark-to-market value of the position can underperform a simple
            hold strategy. IL is path dependent and shrinks if prices return to the original ratio.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#131A2A] p-8">
        <div className="flex items-center gap-3 mb-4">
          <Droplet className="w-7 h-7 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Removing liquidity</h3>
        </div>
        <p className="mb-4 max-w-3xl">
          Approvals target the LP token. The router burns LP, invokes pair burn, and transfers both underlying assets to your wallet
          subject to minimum amount guards identical in spirit to swap slippage checks.
        </p>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-xs font-mono text-purple-200 overflow-x-auto">
          removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline)
        </pre>
      </div>
    </div>
  )
}
