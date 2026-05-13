
import { Copy, ExternalLink, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { APEX_CONFIG } from '../../config';

export function Contracts() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getTokenIcon = (symbol: string) => {
    const icons: Record<string, string> = {
      USDT: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      USDC: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
      DAI: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png',
      WBTC: 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png',
      LINK: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
      WETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      UNI: 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
      AAVE: 'https://cryptologos.cc/logos/aave-aave-logo.png',
      MKR: 'https://cryptologos.cc/logos/maker-mkr-logo.png',
      ARB: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
      OP: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png',
      SHIB: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
    };
    return icons[symbol] || '';
  };

  return (
    <div className="pb-20">
      <SectionHeader
        title="Smart contracts"
        description="Apex deploys Uniswap V2–compatible core and periphery contracts on Sepolia: a factory for deterministic pair creation, minimal proxy pairs that hold reserves and mint LP tokens, a user-facing router for swaps and liquidity, and a pure math library shared with off-chain quoters."
        badge="Protocol"
        icon={ShieldCheck}
        githubUrl={APEX_CONFIG.links.github.contracts}
      />

      {/* Core Contracts Section */}
      <div className="space-y-12 mb-20">
        {APEX_CONFIG.contracts.map((contract) => (
          <ContractCard 
            key={contract.address} 
            contract={contract} 
            onCopy={copyToClipboard} 
            explorerUrl={APEX_CONFIG.links.explorer}
          />
        ))}
      </div>

      {/* Uniswap V2 Info Section */}
      <div className="mb-20 p-8 bg-purple-500/5 border border-purple-500/10 rounded-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Uniswap V2 Compatibility</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-400">
          <p>
            Apex Protocol fully implements the <strong>Uniswap V2 Core & Periphery</strong> interfaces. This design choice ensures maximum interoperability with the existing Ethereum DeFi ecosystem.
          </p>
          <p>
            Any tool, SDK, or dashboard that supports Uniswap V2 can interact with Apex contracts out of the box using standard interfaces like <code>IApexFactory</code>.
          </p>
        </div>
      </div>

      {/* Test Tokens Section */}
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <Zap className="w-8 h-8 text-amber-400" /> Test Ecosystem Assets
      </h2>
      <p className="text-gray-400 mb-10 leading-relaxed max-w-3xl">
        Popular test tokens deployed to facilitate liquidity provisioning. Mint them via the USDT Minting Guide on Etherscan.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {APEX_CONFIG.tokens.map(token => (
          <TokenCard 
            key={token.address} 
            token={token} 
            iconUrl={getTokenIcon(token.symbol)}
            onCopy={copyToClipboard}
            explorerUrl={APEX_CONFIG.links.explorer}
          />
        ))}
      </div>

      {/* Detailed Contract Logic */}
      <div className="space-y-16 mt-24">
        <section className="bg-[#131A2A]/20 p-10 rounded-[3rem] border border-white/5">
          <h2 className="text-3xl font-bold text-white mb-10 border-b border-white/5 pb-4">Protocol Deep-Dive</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <LogicBox 
              title="AMM Logic (x * y = k)" 
              color="pink"
              code={`uint amountInWithFee = amountIn * 997;\nuint numerator = amountInWithFee * reserveOut;\nuint denominator = (reserveIn * 1000) + amountInWithFee;\namountOut = numerator / denominator;`}
              desc="Every Apex Pair follows the constant product formula, ensuring supply/price equilibrium."
            />
            <div className="space-y-8">
              <DetailItem title="Deterministic Addressing" desc="Factory uses CREATE2 for pre-calculating Pair addresses off-chain." />
              <DetailItem title="LP Token Mechanism" desc="Mints Apex-LP tokens representing pool share during liquidity addition." />
              <DetailItem title="Oracle Capabilities" desc="Maintains Cumulative Prices for manipulation-resistant TWAP oracles." />
            </div>
          </div>
        </section>

        <section className="bg-[#131A2A]/40 p-10 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-2xl font-bold text-white">ApexLibrary (periphery math)</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            The library exposes <strong className="text-gray-200">pure</strong> helpers—quote amounts for liquidity provisioning,
            compute output amounts with the 0.3% fee baked in, and derive pair addresses without hitting the chain. Frontends and
            integrators should mirror these functions client-side for previews, then rely on the router for authoritative execution.
          </p>
          <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
            <li>
              <code className="text-pink-300">getAmountOut</code> / <code className="text-pink-300">getAmountsOut</code> — propagate
              swaps across multi-hop paths using cached reserve snapshots.
            </li>
            <li>
              <code className="text-pink-300">quote</code> — proportional deposit helper when adding asymmetric notions before the
              router rebalances to the pool ratio.
            </li>
            <li>
              <code className="text-pink-300">pairFor</code> — CREATE2 address derivation for pairs, enabling routing tables without
              extra <code className="text-pink-300">getPair</code> calls.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function ContractCard({ contract, onCopy, explorerUrl }: any) {
  return (
    <div className="bg-[#131A2A] border border-white/5 rounded-3xl overflow-hidden shadow-xl group">
      <div className="p-8 border-b border-white/5 bg-linear-to-r from-[#1B2236] to-transparent flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-5 h-5 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">{contract.name}</h3>
          </div>
          <p className="text-sm font-medium text-purple-400/80 uppercase tracking-widest">{contract.role}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-[#0d111c] px-4 py-2 rounded-xl border border-white/10 group-hover:border-purple-500/20 transition-all">
            <code className="text-xs font-mono text-gray-400">{contract.address}</code>
            <button onClick={() => onCopy(contract.address)} className="p-1.5 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white"><Copy className="w-3.5 h-3.5" /></button>
          </div>
          <a href={`${explorerUrl}/address/${contract.address}`} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-tighter text-center">
            View on Etherscan
          </a>
        </div>
      </div>
      <div className="p-8 grid lg:grid-cols-2 gap-12">
        <p className="text-gray-400 text-sm leading-relaxed">{contract.description}</p>
        <div className="space-y-4">
          {contract.methods.map((m: any) => (
            <div key={m.name}><p className="text-sm font-mono text-pink-400 mb-1">{m.name}</p><p className="text-xs text-gray-500">{m.desc}</p></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TokenCard({ token, iconUrl, onCopy, explorerUrl }: any) {
  return (
    <div className="bg-[#131A2A] border border-white/5 p-4 rounded-2xl hover:border-amber-500/30 transition-all group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white/5 flex items-center justify-center border border-white/10">
            {iconUrl ? <img src={iconUrl} alt={token.symbol} className="w-full h-full object-contain p-1" /> : <span className="text-xs text-white font-bold">{token.symbol[0]}</span>}
          </div>
          <span className="font-bold text-white">{token.symbol}</span>
        </div>
        <a href={`${explorerUrl}/address/${token.address}`} target="_blank" rel="noreferrer" className="p-1.5 opacity-0 group-hover:opacity-100 transition-all text-gray-500 hover:text-white"><ExternalLink className="w-3.5 h-3.5" /></a>
      </div>
      <div className="flex items-center gap-2 bg-[#0d111c] px-3 py-1.5 rounded-xl border border-white/5">
        <code className="text-[10px] font-mono text-gray-500 truncate">{token.address}</code>
        <button onClick={() => onCopy(token.address)} className="text-gray-600 hover:text-white"><Copy className="w-3 h-3" /></button>
      </div>
    </div>
  );
}

function LogicBox({ title, color, code, desc }: any) {
  const colors: any = { pink: "text-pink-400" };
  return (
    <div className="p-8 bg-[#131A2A]/40 border border-white/5 rounded-3xl">
      <h4 className={`${colors[color]} font-bold uppercase tracking-widest text-xs mb-4`}>{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="bg-black/20 p-5 rounded-xl font-mono text-[11px] text-gray-500 border border-white/5 whitespace-pre">
        {code}
      </div>
    </div>
  );
}

function DetailItem({ title, desc }: any) {
  return (
    <div className="space-y-2">
      <h4 className="text-white font-bold text-sm uppercase tracking-tighter">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}
