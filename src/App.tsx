import { BrowserRouter as Router, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Overview } from './components/Sections/Overview'
import { Architecture } from './components/Sections/Architecture'
import { Flows } from './components/Sections/Flows'
import { Contracts } from './components/Sections/Contracts'
import { ComingSoon } from './components/Sections/ComingSoon'
import { UserGuide } from './components/Sections/UserGuide'
import { IndexerDocs } from './components/Sections/IndexerDocs'
import { BackendDocs } from './components/Sections/BackendDocs'
import { FrontendDocs } from './components/Sections/FrontendDocs'
import { QuickStart } from './components/Sections/QuickStart'
import { SwapGuide } from './components/Sections/SwapGuide'
import { LiquidityGuide } from './components/Sections/LiquidityGuide'
import { SECTION_PAGE_TITLES } from './config/navigation'

function DocsLayout() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileNav, setMobileNav] = useState(false)
  const section = searchParams.get('section') || 'overview'

  useEffect(() => {
    const pageTitle = SECTION_PAGE_TITLES[section] || 'Documentation'
    document.title = `${pageTitle} | Apex DEX Docs`
  }, [section])

  const setSection = (id: string) => {
    setSearchParams({ section: id })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderSection = () => {
    switch (section) {
      case 'overview':
        return <Overview setSection={setSection} />
      case 'user-guide':
        return <UserGuide />
      case 'architecture':
        return <Architecture />
      case 'flows':
        return <Flows />
      case 'indexer':
        return <IndexerDocs />
      case 'backend':
        return <BackendDocs />
      case 'frontend':
        return <FrontendDocs />
      case 'quick-start':
        return <QuickStart />
      case 'contracts':
        return <Contracts />
      case 'swap-guide':
        return <SwapGuide />
      case 'liquidity-guide':
        return <LiquidityGuide />
      default:
        return <ComingSoon setSection={setSection} />
    }
  }

  return (
    <div className="min-h-screen bg-[#0d111c]">
      <Header onOpenMobileNav={() => setMobileNav(true)} />
      <div className="flex pt-[80px] min-h-[calc(100vh-80px)] max-w-[1600px] mx-auto relative">
        <Sidebar
          section={section}
          setSection={setSection}
          mobileOpen={mobileNav}
          onCloseMobile={() => setMobileNav(false)}
        />

        <main className="flex-1 w-full min-w-0 pb-24 relative overflow-x-hidden">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute top-[-15%] right-[-8%] w-[640px] h-[640px] bg-violet-900/12 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:px-10 lg:py-14 min-w-0">{renderSection()}</div>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <DocsLayout />
    </Router>
  )
}
