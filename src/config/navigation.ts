export interface NavItem {
  id: string
  label: string
  category: string
}

/** Single source of truth for docs navigation (English UI). */
export const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Ecosystem overview', category: 'Introduction' },
  { id: 'quick-start', label: 'Quick start', category: 'Introduction' },
  { id: 'user-guide', label: 'Using the DEX', category: 'Introduction' },
  { id: 'architecture', label: 'System architecture', category: 'Platform' },
  { id: 'flows', label: 'End-to-end flows', category: 'Platform' },
  { id: 'contracts', label: 'Smart contracts', category: 'Platform' },
  { id: 'indexer', label: 'Go indexer', category: 'Platform' },
  { id: 'backend', label: 'Backend API (NestJS)', category: 'Platform' },
  { id: 'frontend', label: 'Frontend (FSD)', category: 'Platform' },
  { id: 'swap-guide', label: 'Swap guide', category: 'Guides' },
  { id: 'liquidity-guide', label: 'Liquidity guide', category: 'Guides' },
]

export const SECTION_PAGE_TITLES: Record<string, string> = {
  overview: 'Overview',
  'quick-start': 'Quick start',
  'user-guide': 'Using the DEX',
  architecture: 'Architecture',
  flows: 'Flows',
  contracts: 'Smart contracts',
  indexer: 'Indexer',
  backend: 'Backend',
  frontend: 'Frontend',
  'swap-guide': 'Swap',
  'liquidity-guide': 'Liquidity',
}
