import { Repeat, ShieldCheck, Zap, AlertTriangle, Info } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function SwapGuide() {
  const steps = [
    {
      title: "Select Your Assets",
      desc: "Choose the tokens you want to trade from the dropdown menus. If you don't see a token, ensure you have its contract address from our 'Smart Contracts' list.",
      icon: Repeat,
      color: "blue"
    },
    {
      title: "Configure Slippage",
      desc: "Set your slippage tolerance (default 0.5%). This protects you from front-running and large price movements during transaction confirmation.",
      icon: ShieldCheck,
      color: "purple"
    },
    {
      title: "Confirm & Sign",
      desc: "The Router will construct the transaction data. Review the final amount, estimated fee, and price impact before signing in your wallet.",
      icon: Zap,
      color: "amber"
    }
  ];

  return (
    <div className="pb-20">
      <SectionHeader 
        title="How to Swap"
        description="A step-by-step guide to executing trades on the Apex DEX. Learn how our Router ensures safe and efficient token exchanges."
        badge="Trading Guide"
      />

      <div className="space-y-8 mb-20">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-8 p-8 bg-[#131A2A] border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all group">
            <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
              <step.icon className={`w-8 h-8 text-${step.color}-400`} />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Step 0{idx + 1}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-6 h-6 text-blue-400" />
            <h4 className="text-xl font-bold text-white">Price Impact</h4>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Trading large amounts relative to the pool size will move the price. Our interface highlights high price impact in red to prevent accidental losses due to low liquidity.
          </p>
        </div>

        <div className="p-8 bg-amber-500/5 border border-amber-500/10 rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h4 className="text-xl font-bold text-white">Network Gas</h4>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Since we operate on the Sepolia Testnet, you'll need test ETH for gas fees. Ensure your wallet has a balance before initiating a swap.
          </p>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
          Pro Tip
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Multi-hop Swaps</h3>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          If there's no direct liquidity between two tokens, our Router automatically finds the most efficient path through intermediate pools (e.g., TOKEN → WETH → USDT).
        </p>
      </div>
    </div>
  );
}
