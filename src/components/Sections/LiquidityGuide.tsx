import { Droplet, Plus, Layers, Coins, TrendingUp, AlertCircle} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function LiquidityGuide() {
  const steps = [
    {
      title: "Choose a Pair",
      desc: "Select two tokens to provide liquidity for (e.g., ETH/USDT). Ensure you have an equal value of both assets based on the current market price.",
      icon: Coins,
      color: "blue"
    },
    {
      title: "Add Reserves",
      desc: "Input the amount for one token; the Router will automatically calculate the required amount for the second token to maintain the current ratio.",
      icon: Plus,
      color: "emerald"
    },
    {
      title: "Receive LP Tokens",
      desc: "After confirming the transaction, you will receive 'Apex-LP' tokens. These represent your proportional ownership of the pool's total liquidity.",
      icon: Layers,
      color: "purple"
    }
  ];

  return (
    <div className="pb-20">
      <SectionHeader 
        title="Provide Liquidity"
        description="Become a liquidity provider on the Apex DEX. Earn fees from every trade while helping the protocol maintain deep and stable markets."
        badge="Provider Guide"
      />

      <div className="space-y-8 mb-20">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-8 p-8 bg-[#131A2A] border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all group">
            <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
              <step.icon className={`w-8 h-8 text-${step.color}-400`} />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Phase 0{idx + 1}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h4 className="text-xl font-bold text-white">Earning Fees</h4>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Liquidity providers earn a 0.3% fee on every trade proportional to their share of the pool. These fees are automatically added to the pool reserves and can be collected upon withdrawal.
          </p>
        </div>

        <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <h4 className="text-xl font-bold text-white">Impermanent Loss</h4>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Providing liquidity carries risk. If the relative price of the two tokens changes significantly compared to when you deposited, you may experience 'impermanent loss'.
          </p>
        </div>
      </div>

      <div className="mt-20 p-10 bg-linear-to-br from-purple-500/10 to-transparent border border-white/5 rounded-[3rem]">
        <div className="flex items-center gap-4 mb-8">
          <Droplet className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Withdrawing Liquidity</h3>
        </div>
        <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
          You can remove your liquidity at any time. Removing liquidity burns your LP tokens and returns the underlying assets to your wallet, along with any accumulated fees.
        </p>
        <div className="bg-black/20 p-6 rounded-2xl border border-white/5 font-mono text-xs text-purple-300">
          router.removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline)
        </div>
      </div>
    </div>
  );
}
