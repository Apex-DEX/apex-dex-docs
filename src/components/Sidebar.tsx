import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SidebarProps {
  section: string;
  setSection: (id: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  category: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', category: 'Introduction' },
  { id: 'user-guide', label: 'How to Trade', category: 'Introduction' },
  { id: 'quick-start', label: 'Quick Start', category: 'Introduction' },
  { id: 'architecture', label: 'System Architecture', category: 'Core Architecture' },
  { id: 'contracts', label: 'Smart Contracts', category: 'Core Architecture' },
  { id: 'indexer', label: 'Backend Indexer', category: 'Core Architecture' },
  { id: 'swap-guide', label: 'How to Swap', category: 'Guides' },
  { id: 'liquidity-guide', label: 'Provide Liquidity', category: 'Guides' },
];

export function Sidebar({ section, setSection }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = NAV_ITEMS.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [...new Set(filteredItems.map(item => item.category))];

  const navItemClass = (id: string) => 
    `block px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all ${
      section === id 
        ? 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/5' 
        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
    }`;

  return (
    <aside className="hidden lg:flex flex-col w-[280px] border-r border-white/10 shrink-0 h-[calc(100vh-80px)] sticky top-[80px] overflow-y-auto custom-scrollbar pb-10">
      <div className="p-4">
        {/* Search Input */}
        <div className="relative mb-8">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${searchQuery ? 'text-purple-400' : 'text-gray-500'}`} />
          <input 
            type="text" 
            placeholder="Search docs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#131A2A] border border-white/5 rounded-xl py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600 text-white shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/5 rounded-md transition-all"
            >
              <X className="w-3 h-3 text-gray-500 hover:text-white" />
            </button>
          )}
        </div>

        <nav className="space-y-8">
          {categories.length > 0 ? (
            categories.map(category => (
              <div key={category} className="animate-in fade-in slide-in-from-left-2 duration-300">
                <h3 className="text-xs font-bold text-gray-500 mb-3 px-3 uppercase tracking-wider opacity-60">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {filteredItems
                    .filter(item => item.category === category)
                    .map(item => (
                      <li key={item.id}>
                        <button 
                          onClick={() => setSection(item.id)} 
                          className={`${navItemClass(item.id)} w-full text-left`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          ) : (
            <div className="text-center py-10 px-4">
              <p className="text-xs text-gray-600 italic">No results found for "{searchQuery}"</p>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
}
