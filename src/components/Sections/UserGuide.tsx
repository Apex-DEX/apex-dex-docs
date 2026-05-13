
import { Droplet, Wallet, ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function UserGuide() {
  const steps = [
    {
      title: "Connect Wallet",
      description: "Use the Connect button in the top right. We support MetaMask, Coinbase Wallet, and WalletConnect on the Sepolia Testnet.",
      icon: Wallet,
      color: "blue"
    },
    {
      title: "Get Test Tokens",
      description: "If you need USDT or ETH, visit our faucet links or mint tokens directly through the contract interfaces provided in the 'Contracts' section.",
      icon: Droplet,
      color: "purple"
    },
    {
      title: "Start Trading",
      description: "Select your token pair and enter the amount. Our Router will calculate the best path and price impact before you confirm the swap.",
      icon: Zap,
      color: "amber"
    }
  ];

  return (
    <div className="pb-20">
      <SectionHeader 
        title="User Guide"
        description="Learn how to interact with the Apex DEX, manage your liquidity, and execute swaps on the Sepolia Testnet."
        badge="How to use"
      />

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {steps.map((step, index) => (
          <div key={index} className="p-8 bg-[#131A2A] border border-white/5 rounded-[2.5rem] relative group hover:border-white/10 transition-all">
            <div className={`w-12 h-12 rounded-2xl bg-${step.color}-500/10 flex items-center justify-center mb-6 border border-${step.color}-500/20 group-hover:scale-110 transition-transform`}>
              <step.icon className={`w-6 h-6 text-${step.color}-400`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* External Links */}
      <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-white/5 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Need Sepolia ETH?</h3>
          <p className="text-gray-400 text-sm">Visit the official Alchemy or Infura faucets to get started.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://sepoliafaucet.com/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-sm font-bold text-white flex items-center gap-2 transition-all">
            Alchemy Faucet <ExternalLink className="w-4 h-4" />
          </a>
          <a href="https://www.infura.io/faucet/sepolia" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
            Infura Faucet <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
