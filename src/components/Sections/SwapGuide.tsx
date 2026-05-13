import { Repeat, ShieldCheck, Zap, AlertTriangle, Info } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

export function SwapGuide() {
  const steps = [
    {
      title: 'Select tokens and direction',
      desc: 'Pick the sell token and buy token. If no direct pool exists, the router constructs a multi-hop path (commonly through WETH or a stable anchor). Unknown tokens can be added by contract address after you verify the bytecode.',
      icon: Repeat,
      box: 'bg-blue-500/10 border-blue-500/25',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Tune slippage and deadline',
      desc: 'Slippage caps the minimum output you are willing to accept versus the simulated quote. Deadlines invalidate stale signatures if mempool delay spikes.',
      icon: ShieldCheck,
      box: 'bg-purple-500/10 border-purple-500/25',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Review, sign, broadcast',
      desc: 'The UI surfaces price impact, network fee estimates, and allowance status. After you approve spenders when required, submit the swap transaction and track confirmation in your wallet and block explorer.',
      icon: Zap,
      box: 'bg-amber-500/10 border-amber-500/25',
      iconColor: 'text-amber-400',
    },
  ]

  return (
    <div className="pb-20 text-gray-400 text-sm leading-relaxed space-y-12">
      <SectionHeader
        title="Swap guide"
        description="Detailed breakdown of the swap UX: routing, risk controls, and the boundary between simulation (RPC eth_call) and execution (signed transaction)."
        badge="Trading"
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
                Step {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-blue-400" />
            <h4 className="text-lg font-bold text-white">Price impact</h4>
          </div>
          <p>
            Large trades relative to pool depth move the spot price along the x*y=k curve. The interface warns when impact crosses
            configured thresholds so users can split trades or pick deeper pools.
          </p>
        </div>
        <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h4 className="text-lg font-bold text-white">Allowances and reverts</h4>
          </div>
          <p>
            Swaps revert if allowance is too low, slippage is violated, deadlines expire, or the pool runs out of the requested output
            leg. Read the revert data in the explorer to distinguish user configuration issues from pool liquidity issues.
          </p>
        </div>
      </div>
    </div>
  )
}
