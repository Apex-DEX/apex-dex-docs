import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { NAV_ITEMS } from '../config/navigation'

interface SidebarProps {
  section: string
  setSection: (id: string) => void
  mobileOpen: boolean
  onCloseMobile: () => void
}

export function Sidebar({ section, setSection, mobileOpen, onCloseMobile }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = NAV_ITEMS.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categories = [...new Set(filteredItems.map((item) => item.category))]

  const navItemClass = (id: string) =>
    `block w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all ${
      section === id
        ? 'bg-purple-500/20 text-purple-300 shadow-lg shadow-purple-500/10'
        : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
    }`

  const pick = (id: string) => {
    setSection(id)
    onCloseMobile()
  }

  const navBody = (
    <>
      <div className="relative mb-6">
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
            searchQuery ? 'text-purple-400' : 'text-gray-500'
          }`}
        />
        <input
          type="text"
          placeholder="Search docs…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#131A2A] border border-white/10 rounded-xl py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600 text-white"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/5 rounded-md transition-all"
            aria-label="Clear search"
          >
            <X className="w-3 h-3 text-gray-500 hover:text-white" />
          </button>
        )}
      </div>

      <nav className="space-y-8">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category}>
              <h3 className="text-[11px] font-bold text-gray-500 mb-3 px-3 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-1">
                {filteredItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <li key={item.id}>
                      <button type="button" onClick={() => pick(item.id)} className={navItemClass(item.id)}>
                        {item.label}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-xs text-gray-600 py-8 px-2">No results for “{searchQuery}”</p>
        )}
      </nav>
    </>
  )

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-label="Close menu"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
          fixed z-50 top-[80px] left-0 bottom-0 w-[min(100vw,300px)] border-r border-white/10 bg-[#0d111c] overflow-y-auto custom-scrollbar p-4 pb-24
          transition-transform duration-200 ease-out lg:translate-x-0 lg:static lg:z-0 lg:top-auto lg:shrink-0 lg:w-[280px] lg:h-[calc(100vh-80px)] lg:sticky lg:border-r
          ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {navBody}
      </aside>
    </>
  )
}
