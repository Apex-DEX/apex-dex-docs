import { BrowserRouter as Router, useSearchParams } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Overview } from './components/Sections/Overview'
import { Architecture } from './components/Sections/Architecture'
import { Contracts } from './components/Sections/Contracts'
import { ComingSoon } from './components/Sections/ComingSoon'
import { UserGuide } from './components/Sections/UserGuide'
import { IndexerDocs } from './components/Sections/IndexerDocs'
import { QuickStart } from './components/Sections/QuickStart'
import { SwapGuide } from './components/Sections/SwapGuide'
import { LiquidityGuide } from './components/Sections/LiquidityGuide'

function DocsContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get('section') || 'overview';

  const setSection = (id: string) => {
    setSearchParams({ section: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderSection = () => {
    switch (section) {
      case 'overview':
        return <Overview setSection={setSection} />;
      case 'user-guide':
        return <UserGuide />;
      case 'architecture':
        return <Architecture />;
      case 'indexer':
        return <IndexerDocs />;
      case 'quick-start':
        return <QuickStart />;
      case 'contracts':
        return <Contracts />;
      case 'swap-guide':
        return <SwapGuide />;
      case 'liquidity-guide':
        return <LiquidityGuide />;
      default:
        return <ComingSoon setSection={setSection} />;
    }
  }

  return (
    <div className="flex pt-[80px] min-h-[calc(100vh-80px)] max-w-[1600px] mx-auto">
      <Sidebar section={section} setSection={setSection} />

      <main className="flex-1 w-full min-w-0 pb-20 relative overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          {renderSection()}
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d111c]">
        <Header />
        <DocsContent />
      </div>
    </Router>
  )
}
