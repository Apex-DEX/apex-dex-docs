import { APP_URL, LOGO_URL } from '../config/constants'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 border-b border-white/5 bg-[#0d111c]/80 backdrop-blur-xl z-50">
      <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden rounded-lg">
            <img src={LOGO_URL} alt="Apex Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-black text-2xl tracking-tighter flex gap-1.5 items-baseline text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">APEX</span>
            <span className="text-purple-500">DOCS</span>
          </span>
        </div>
        <a 
          href={APP_URL} 
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-sm font-bold border border-white/5 text-white"
        >
          Launch App
        </a>
      </div>
    </header>
  )
}
