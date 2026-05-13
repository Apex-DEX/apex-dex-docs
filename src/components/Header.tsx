import { Menu } from 'lucide-react'
import { APP_URL, LOGO_URL } from '../config/constants'

type Props = {
  onOpenMobileNav?: () => void
}

export function Header({ onOpenMobileNav }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 border-b border-white/10 bg-[#0d111c]/90 backdrop-blur-xl z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {onOpenMobileNav && (
            <button
              type="button"
              onClick={onOpenMobileNav}
              className="lg:hidden p-2 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white"
              aria-label="Open navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <div className="w-10 h-10 overflow-hidden rounded-lg shrink-0">
            <img src={LOGO_URL} alt="Apex" className="w-full h-full object-contain" />
          </div>
          <span className="font-black text-xl sm:text-2xl tracking-tighter text-white truncate">
            APEX <span className="text-purple-400">DOCS</span>
          </span>
        </div>
        <a
          href={APP_URL}
          className="shrink-0 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-xl transition-all text-sm font-semibold border border-white/10 text-white"
        >
          Launch app
        </a>
      </div>
    </header>
  )
}
