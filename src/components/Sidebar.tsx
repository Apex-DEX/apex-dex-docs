import { Search } from 'lucide-react'

interface SidebarProps {
  section: string
  setSection: (id: string) => void
}

export function Sidebar({ section, setSection }: SidebarProps) {
  const navItemClass = (id: string) => 
    `block px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
      section === id ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
    }`;

  return (
    <aside className="hidden lg:flex flex-col w-[280px] border-r border-white/10 shrink-0 h-[calc(100vh-80px)] sticky top-[80px] overflow-y-auto custom-scrollbar pb-10">
      <div className="p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search docs..." 
            className="w-full bg-[#131A2A] border border-white/5 rounded-xl py-2 pl-10 pr-10 text-sm focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-600 text-white"
          />
        </div>

        <nav className="space-y-8">
          <div>
            <h3 className="text-xs font-bold text-gray-500 mb-3 px-3 uppercase tracking-wider">Introduction</h3>
            <ul className="space-y-1">
              <li><button onClick={() => setSection('overview')} className={navItemClass('overview') + " w-full text-left"}>Overview</button></li>
              <li><button onClick={() => setSection('user-guide')} className={navItemClass('user-guide') + " w-full text-left"}>How to Trade</button></li>
              <li><button onClick={() => setSection('quick-start')} className={navItemClass('quick-start') + " w-full text-left"}>Quick Start</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-500 mb-3 px-3 uppercase tracking-wider">Core Architecture</h3>
            <ul className="space-y-1">
              <li><button onClick={() => setSection('architecture')} className={navItemClass('architecture') + " w-full text-left"}>System Architecture</button></li>
              <li><button onClick={() => setSection('contracts')} className={navItemClass('contracts') + " w-full text-left"}>Smart Contracts</button></li>
              <li><button onClick={() => setSection('indexer')} className={navItemClass('indexer') + " w-full text-left"}>Backend Indexer</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-500 mb-3 px-3 uppercase tracking-wider">Guides</h3>
            <ul className="space-y-1">
              <li><button onClick={() => setSection('swap-guide')} className={navItemClass('swap-guide') + " w-full text-left"}>How to Swap</button></li>
              <li><button onClick={() => setSection('liquidity-guide')} className={navItemClass('liquidity-guide') + " w-full text-left"}>Provide Liquidity</button></li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}
